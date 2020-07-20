import React from "react";

import "./ChatMessage.css";

const ChatMessage = ({ message, messageType }) => {
  if (messageType === "sent") {
    return (
      <div className="chat-message-sent">
        <span>{message.body}</span>
        <img src="/assets/tip-sent.svg" alt="tip" className="tip-sent" />
      </div>
    );
  } else {
    return (
      <div className="chat-message">
        <h4>{message.user.username}</h4>
        <img
          src={message.user.avatar}
          alt={message.user.username}
          className="chat-message-image"
        />
        <img
          src="/assets/tip-received.svg"
          alt="tip"
          className="tip-received"
        />
        <span>{message.body}</span>
      </div>
    );
  }
};

export default ChatMessage;
