import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import { useStore } from "store";
import { sendMessage } from "api/lib/chat";

import Layout from "./components/Layout";
import Header from "./components/Header";
import Chat from "./components/Chat";

function ChatScreen() {
  let { id, companyId } = useParams();
  const getChatInfo = useStore((state) => state.getChatInfo);
  const fetchMessages = useStore((state) => state.fetchMessages);
  const fetchMessagesNext = useStore((state) => state.fetchMessagesNext);
  const addMessage = useStore((state) => state.addMessage);

  useEffect(() => {
    getChatInfo(id, companyId);
    fetchMessages(id, companyId);
  }, []);

  const { messages, info } = useStore((state) => state.chat);
  const canFetchNext = useStore((state) => state.chat.messages.canFetchNext);
  const userID = useStore((state) => state.currentUser.user.id);
  const user = { id: userID };

  const onEndReached = () => {
    setTimeout(() => {
      if (canFetchNext && !messages.loading && !messages.fetchingNext) {
        fetchMessagesNext();
      }
    }, 500);
  };

  const handleSend = async (message) => {
    sendMessage(id, {
      message: message.text,
      company_id: companyId,
    })
      .then((res) => {
        addMessage(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <Layout>
      <Header info={info} />
      <Chat
        messages={messages?.body?.data}
        user={user}
        onSendPress={handleSend}
        onEndReached={onEndReached}
      />
    </Layout>
  );
}

export default ChatScreen;
