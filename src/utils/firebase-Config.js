import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAO8AYIrQkKmcUlS-8udhr24C6LocP3K7c",
  authDomain: "netflix-clone-d8921.firebaseapp.com",
  projectId: "netflix-clone-d8921",
  storageBucket: "netflix-clone-d8921.appspot.com",
  messagingSenderId: "1048849879516",
  appId: "1:1048849879516:web:58bbda5bb2911b311cbf19",
  measurementId: "G-M7LV981LYK",
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
