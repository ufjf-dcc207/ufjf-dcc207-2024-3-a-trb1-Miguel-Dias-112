import { collection, addDoc, getDocs, query, orderBy, onSnapshot, serverTimestamp } from "firebase/firestore";
import db from "../Utils/firebaseAPI"; 

export const sendMessage = async (user, message) => {
  try {
    await addDoc(collection(db, "chat"), {
      user: user,
      message: message,
      timestamp: serverTimestamp(),
    });
    console.log("Mensagem enviada com sucesso!");
  } catch (error) {
    console.error("Erro ao enviar mensagem:", error);
  }
};

