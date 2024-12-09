import React, { useState } from "react";
import { sendMessage } from "../../APIS/firebaseAPI";
import './chatImp.css'

interface ChatInputProps {
  user: string;
}

const ChatInput: React.FC<ChatInputProps> = ({ user }) => {
  const [message, setMessage] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    try {
      await sendMessage(user, message);
      setMessage(""); 
    } catch (error) {
      console.error("Erro ao enviar a mensagem:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}
    className="ChatIpt">
      <input 
        
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Digite sua mensagem..."
      />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default ChatInput;
