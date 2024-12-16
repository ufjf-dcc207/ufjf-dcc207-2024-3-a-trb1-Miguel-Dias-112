import React, { useEffect } from "react";
import { deleteAllMessages } from "../../Functions/FirebaseF";


const DeletarMSG: React.FC = () => {
  useEffect(() => {
    const intervalId = setInterval(async () => {
      try {
        await deleteAllMessages();
        console.log("Mensagens apagadas automaticamente.");
      } catch (error) {
        console.error("Erro ao apagar mensagens automaticamente:", error);
      }
    }, 60000); 

    return () => clearInterval(intervalId); 
  }, []);

  return null; 
};

export default DeletarMSG;