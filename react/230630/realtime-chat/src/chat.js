import React, {useState, useEffect} from 'react';
import { io } from 'socket.io-client';

const socket = io("http://localhost:3001");

function Chat() {
  const [username, setUsername] = useState("");
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    socket.on("message", handleMessage);
    return () => {
      socket.off("message", handleMessage);
    };
  }, []);

  const handleMessage = (message) => {
    setMessages((prev)=> [...prev, message]);
  }

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  }

  const handleMessageSend = () => {
    if (inputValue.trim() !== ""){
      const currentTime  = new Date().toLocaleDateString();
      socket.emit("message",  {
        username,
        content: inputValue,
        time: currentTime,
      })
    }
  }
  
  return (
    <div>
      <h1>실시간 채팅</h1>
      <input type="text" value={username} onChange={handleUsernameChange} placeholder='사용자 이름을 입력하세요.' />
      <h1>채팅</h1>
      <div>
        {messages.map((message, index)=> (
          <p key={index}>
            {message.username} : {message.content} - {message.time}
          </p>
        ))}
      </div>
      <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      <button onClick={handleMessageSend}>전송</button>
    </div>
  );
}

export default Chat;