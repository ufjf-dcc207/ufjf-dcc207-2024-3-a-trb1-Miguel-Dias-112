import React, { useEffect, useState } from "react";
import { getMessagesRealTime } from "../../APIS/firebaseAPI"; 
import './chatLi.css';

interface Message {
  id: string;
  message: string;
}

const ChatList: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {

    const unsubscribe = getMessagesRealTime((newMessages) => {
      const formattedMessages = newMessages.map((msg: any) => ({
        id: msg.id, 
        message: msg.message, 
      }));

      setMessages(formattedMessages);
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="chatLi">
      {messages.map((msg) => (
        <div key={msg.id} className="message">
          {msg.message}
        </div>
      ))}
    </div>
  );
};

export default ChatList;