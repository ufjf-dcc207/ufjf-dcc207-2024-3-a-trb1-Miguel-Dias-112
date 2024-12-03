import React, { useEffect, useState } from "react";
import { getMessagesRealTime } from "../APIS/firebaseAPI";

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
        setMessages(newMessages);
      });
  

      return () => unsubscribe();
    }, []);
  

  };
  
  export default ChatList;