// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "frappchat.firebaseapp.com",
  projectId: "frappchat",
  storageBucket: "frappchat.firebasestorage.app",
  messagingSenderId: "9088648166",
  appId: "1:9088648166:web:a24fbecfd81255bf2e0c27"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()