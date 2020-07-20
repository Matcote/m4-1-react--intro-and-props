import React from "react";

import "./Header.css";

const Header = ({ participants, currentUser }) => {
  console.log(participants);
  console.log(currentUser);
  return (
    <header>
      {participants
        .filter((element) => element !== currentUser)
        .map((element) => {
          return (
            <div class="chatAvatar">
              <img src={element.avatar} alt={element.username} />
              <span>{element.username}</span>
            </div>
          );
        })}
    </header>
  );
};

export default Header;
