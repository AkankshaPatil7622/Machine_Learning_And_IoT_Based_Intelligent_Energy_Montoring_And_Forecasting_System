// import firebase from "firebase/compat/app";
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDX9vQWP64tKuVCRRoHao_9ANTNBSiZVF0",
  authDomain: "project2-c4f52.firebaseapp.com",
  databaseURL: "https://project2-c4f52-default-rtdb.firebaseio.com",
  projectId: "project2-c4f52",
  storageBucket: "project2-c4f52.firebasestorage.app",
  messagingSenderId: "584395695360",
  appId: "1:584395695360:web:837d16edcc9f0aac9dbfe5",
  measurementId: "G-DNGL1KEG8B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get a reference to the database
const db = getDatabase(app);

export {db}
