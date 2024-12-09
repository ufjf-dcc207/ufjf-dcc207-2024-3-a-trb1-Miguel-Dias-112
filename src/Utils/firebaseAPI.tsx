import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB5D6Kp_hPV4IgM-ZpNn3geWYrP5P5BQn4",
  authDomain: "cadeocircular.firebaseapp.com",
  projectId: "cadeocircular",
  storageBucket: "cadeocircular.appspot.com",
  messagingSenderId: "510663335803",
  appId: "1:510663335803:web:09808c0ca4dae41f5be7de",
  measurementId: "G-RT1B1VZQPM"
};


const app = initializeApp(firebaseConfig);

// Chamando o analytics se formos usar o da Google no mapa
//const analytics = getAnalytics(app);

const db = getFirestore(app);

export default db; 