import { Avatar, IconButton } from "@material-ui/core";
import SearchOutlined from "@material-ui/icons/SearchOutlined";
import AttachFile from "@material-ui/icons/AttachFile";
import MoreVert from "@material-ui/icons/MoreVert";
import React, { useState, useEffect } from "react";
import "./Chat.css";
import { InsertEmoticon, Mic } from "@material-ui/icons";
import { useParams } from 'react-router-dom';
import db from "../firebase";

function Chat() {
  const [seed, setSeed] = useState("");
  const [input, setInput] = useState('');
  const { roomId } = useParams();
  const [roomName, setRoomName] = useState('');

  useEffect(() => {
      if (roomId) {
        db.collection('rooms').doc(roomId).onSnapshot((snapshot) => {
            setRoomName(snapshot.data().name);
        })
      }
  }, [roomId]);

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  const sendMessage = (e) => {
      e.preventDefault();
      console.log("You typed >>>", input);
      setInput('');
  };


  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className="chat__headerInfo">
          <h3>Room name</h3>
          <p>Last seen at...</p>
        </div>
        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="chat__body">
        <div className={`chat__message ${true && "chat__receiver"}`}>
          <span className="chat__name">Tomisin Lalude</span>
          Hey guys
          <span className="chat__timestamp">3:45pm</span>
        </div>
      </div>
      <div className="chat__footer">
        <InsertEmoticon />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Type a message"
          />
          <button onClick={sendMessage} type="submit">
            Send a message
          </button>
        </form>
        <Mic />
      </div>
    </div>
  );
}

export default Chat;
