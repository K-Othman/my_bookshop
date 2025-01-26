// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_APIKEY,
  authDomain: "k-bookshop-48f6d.firebaseapp.com",
  projectId: "k-bookshop-48f6d",
  storageBucket: "k-bookshop-48f6d.firebasestorage.app",
  messagingSenderId: "492043796496",
  appId: "1:492043796496:web:cccaf66c6673987c834a95",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
