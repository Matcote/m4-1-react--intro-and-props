import React from "react";

import "./ConversationStream.css";

const ConversationStream = ({ conversation }) => {
  console.log(conversation);
  return (
    <section className="conversation-stream">
      <div class="conversation">
        <img
          src={conversation.participants[1].avatar}
          alt={conversation.participants[1].username}
        />
        <div>
          <p>
            {conversation.participants[0].username},{" "}
            {conversation.participants[2].username}
          </p>
          <p>
            {conversation.messages[13].user.username}:{" "}
            {conversation.messages[13].body}
          </p>
        </div>
        <p class="timestamp">{conversation.messages[13].timestamp}</p>
      </div>
    </section>
  );
};

export default ConversationStream;
