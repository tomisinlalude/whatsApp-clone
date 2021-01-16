import { Avatar } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import "./Chat.css";

function Chat() {
  const [seed, setSeed] = useState("");

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);
  
  return (
    <div className="chat">
      <div class="chat__header">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
      </div>
      <div class="chat__body"></div>
      <div class="chat__footer"></div>
    </div>
  );
}

export default Chat;
