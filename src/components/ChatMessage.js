import React from "react";

import "./ChatMessage.css";

const ChatMessage = ({ message, messageType }) => {
  if (messageType === "sent") {
    return (
      <div className="chat-message-sent">
        <span>{message.body}</span>
      </div>
    );
  } else {
    return (
      <div className="chat-message">
        <h4>{message.user.username}</h4>
        <img src={message.user.avatar} alt={message.user.username} />
        <span>{message.body}</span>
      </div>
    );
  }
};

export default ChatMessage;
