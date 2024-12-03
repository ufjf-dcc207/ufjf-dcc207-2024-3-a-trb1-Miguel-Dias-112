import { collection, addDoc, query, orderBy, onSnapshot, serverTimestamp } from "firebase/firestore";
import db from "../Utils/firebaseAPI"; 

interface Message {
  id?: string; 
  user: string;
  message: string;
  timestamp: any; 
}

export const sendMessage = async (user: string, message: string): Promise<void> => {
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

export const getMessagesRealTime = (callback: (messages: Message[]) => void) => {
  const q = query(collection(db, "chat"), orderBy("timestamp", "asc"));
  return onSnapshot(q, (querySnapshot) => {
    const messages: Message[] = []; 
    querySnapshot.forEach((doc) => {
      messages.push({ id: doc.id, ...doc.data() } as Message);
    });
    callback(messages);
  });
};