import React, { useState } from "react";
import { sendMessage } from "./firebaseUtils"; 

const ChatInput = () => {
  const [user, setUser] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user && message) {
      sendMessage(user, message);
      setMessage("");
    } else {
      alert("Por favor, preencha todos os campos.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Seu nome"
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />
      <textarea
        placeholder="Digite sua mensagem"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default ChatInput;