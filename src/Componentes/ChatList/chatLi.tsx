import React, { useEffect, useState } from "react";
import { getMessagesRealTime } from "../../APIS/firebaseAPI";
import './chatLi.css'

interface Message {
  id: string; 
  user: string;
  message: string;
  timestamp: any; 
}

const ChatList: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    const unsubscribe = getMessagesRealTime((newMessages) => {

      const updatedMessages = newMessages.map((msg: any) => ({
        ...msg,
        id: msg.id || "",
      }));

      setMessages(updatedMessages);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="chatLi">
      {messages.map((msg) => (
        <div key={msg.id}>
          <strong>{msg.user}:</strong> {msg.message}
        </div>
      ))}
    </div>
  );
};

export default ChatList;