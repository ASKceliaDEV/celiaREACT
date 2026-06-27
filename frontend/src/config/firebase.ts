import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD6hATQ9rP6jGam0itiK_lf4e3uMQf4tKg",
  authDomain: "coders-moneys.firebaseapp.com",
  projectId: "coders-moneys",
  storageBucket: "coders-moneys.firebasestorage.app",
  messagingSenderId: "616784200790",
  appId: "1:616784200790:web:82026581d19e3f06dbe7f7",
};

const app = initializeApp(firebaseConfig);

export default app;