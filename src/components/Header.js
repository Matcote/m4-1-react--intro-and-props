import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { IoIosMenu } from "react-icons/io";

import "./Header.css";

const Header = ({ participants, currentUser }) => {
  return (
    <header>
      <IoIosMenu size="3em" color="white" />
      <span>{currentUser.username}</span>
      {participants
        .filter((element) => element !== currentUser)
        .map((element) => {
          return (
            <div className="chatAvatar">
              <img src={element.avatar} alt={element.username} />
              <span>{element.username}</span>
            </div>
          );
        })}
      <BsFillCameraVideoFill size="2em" color="white" id="video" />
      <BsThreeDotsVertical size="2em" color="white" id="options" />
    </header>
  );
};

export default Header;
