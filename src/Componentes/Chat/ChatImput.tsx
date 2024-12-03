import React, { useState } from "react";
import { sendMessage } from "../../APIS/firebaseAPI";

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
        setMessage(""); // Limpa o campo de entrada após o envio
      } catch (error) {
        console.error("Erro ao enviar a mensagem:", error);
      }
    };

}