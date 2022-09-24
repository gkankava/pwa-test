import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useStore } from "store";

import Layout from "./components/Layout";
import Header from "./components/Header";
import MessageList from "./components/MessageList";
import ListItem from "./components/ListItem";
import { IOTrigger } from "ui/components";

function Chats() {
  const navigate = useNavigate();

  const fetchConversations = useStore((state) => state.fetchConversations);
  const fetchConversationsNext = useStore(
    (state) => state.fetchConversationsNext
  );
  const { body, loading, error, canFetchNext, fetchingNext } = useStore(
    (state) => state.conversations
  );

  useEffect(() => {
    fetchConversations();
  }, []);

  const handleNavigation = (id, cId) => {
    navigate(`/chats/${id}/${cId}`);
  };

  return (
    <Layout>
      <Header />
      <MessageList>
        {body?.data?.map((i) => (
          <ListItem
            key={i.id.toString()}
            item={i}
            handlePress={() => {
              handleNavigation(i.id, i.company_id);
            }}
          />
        ))}
        <IOTrigger
          canFetchNext={canFetchNext}
          fetchingNext={fetchingNext}
          fetchNext={fetchConversationsNext}
        />
      </MessageList>
    </Layout>
  );
}

export default Chats;
