// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCaepg00GCGm21rY1eQ7M_-pxYeEPj2Qh0",
  authDomain: "reactjsproyectofinal.firebaseapp.com",
  projectId: "reactjsproyectofinal",
  storageBucket: "reactjsproyectofinal.appspot.com",
  messagingSenderId: "861040289763",
  appId: "1:861040289763:web:18da2d452b7101e340a2d6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);