import { 
  collection, 
  addDoc, 
  query, 
  orderBy, 
  onSnapshot, 
  serverTimestamp, 
  getDocs, 
  deleteDoc, 
  doc 
} from "firebase/firestore";
import db from "../Utils/firebaseAPI"; 

interface Message {
  id?: string; 
  user: string;
  message: string;
  timestamp: any; 
}

//função que envia a mensagem escrita
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

//função que busca todas as mensagens
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

//função que deleta as mensagens
export const deleteAllMessages = async (): Promise<void> => {
  try {
    const chatCollection = collection(db, "chat");
    const snapshot = await getDocs(chatCollection);
    const deletePromises = snapshot.docs.map((docItem) =>
      deleteDoc(doc(db, "chat", docItem.id))
    );
    await Promise.all(deletePromises);
    console.log("Todas as mensagens foram apagadas com sucesso!");
  } catch (error) {
    console.error("Erro ao apagar mensagens:", error);
  }
};