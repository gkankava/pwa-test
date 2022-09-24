import React from "react";
import { palette } from "ui";

function Message({ item, user }) {
  const { message, author } = item;

  return (
    <div
      className="message-item"
      style={{
        backgroundColor: author.id === user.id ? palette.blue : "#F5F5F6",
        borderBottomLeftRadius: author.id === user.id ? "10px" : 0,
        borderBottomRightRadius: author.id === user.id ? 0 : "10px",
        marginLeft: author.id === user.id ? "auto" : 0,
        marginRight: author.id === user.id ? 0 : "auto",
      }}
    >
      <p
        style={{
          color: author.id === user.id ? "#F5F5F6" : "black",
        }}
      >
        {message}
      </p>
    </div>
  );
}

export default Message;
