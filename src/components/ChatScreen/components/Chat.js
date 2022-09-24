import React, { useEffect, useRef, useState } from "react";

import iconAttachment from "assets/icons/chat/iconAttachment.png";
import iconSend from "assets/icons/chat/iconSend.png";
import { Touchable } from "ui/components";
import Message from "./Message";

function Chat({
  user,
  messages,
  onSendPress,
  onAttachmentPress,
  onEndReached,
}) {
  const messageListRef = useRef(null);
  const scrollToBottom = () => {
    if (messageListRef?.current) {
      messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
    }
  };

  const handleScroll = (e) => {
    if (window.scrollY < 60) {
      onEndReached();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(scrollToBottom, [messages]);

  const [message, setMessage] = useState("");
  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const onSendMessage = () => {
    const obj = {
      text: message,
    };
    onSendPress(obj);
    setMessage("");
  };

  return (
    <div className="chat">
      <div ref={messageListRef} className="messages-list">
        {messages?.map((i, k) => (
          <Message key={k} item={i} user={user} />
        ))}
      </div>
      <div className="input-container" onScroll={handleScroll}>
        <img src={iconAttachment} alt="attachment-media" />
        <input
          type="text"
          name="message"
          id="message"
          placeholder="message"
          value={message}
          onChange={handleChange}
          multiple
        />
        <Touchable className="send-btn" action={onSendMessage}>
          <img src={iconSend} alt="send" />
        </Touchable>
      </div>
    </div>
  );
}

export default Chat;
