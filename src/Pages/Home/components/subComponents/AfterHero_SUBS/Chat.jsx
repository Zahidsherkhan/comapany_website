import React from "react";
import styling from "./subComponentsStyling/Chat.module.css";
import profilePic from "./chatPerson.jpg";
const Chat = () => {
  return (
    <div className={styling.ChatParent}>
      <div className={styling.picAndName}>
        <img src={profilePic} alt="" className={styling.profilePic}/>
        <p className={profilePic.name}>Touseef From Naxon Solution</p>
      </div>
      <p className={styling.question}>Cheers! Thank You for Choosing Our Services. How can we help you?</p>
      <input className={styling.input} type="text" placeholder="Write Your Message" />
    </div>
  );
};

export default Chat;
