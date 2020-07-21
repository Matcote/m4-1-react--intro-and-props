import React from "react";

import Header from "./Header";
import ChatStream from "./ChatStream";
import Footer from "./Footer";
import ConversationStream from "./ConversationStream";

import "./App.css";

const App = (props) => {
  return (
    <div className="wrapper">
      <Header
        participants={props.conversation.participants}
        currentUser={props.currentUser}
      />
      <ConversationStream conversation={props.conversation} />
      <ChatStream
        messages={props.conversation.messages}
        currentUser={props.currentUser}
      />
      <Footer />
    </div>
  );
};

export default App;
