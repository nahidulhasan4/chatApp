// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_7C44VetGXPDj6dcf7eYRDhjZLyvUWJ8",
  authDomain: "chat-1269a.firebaseapp.com",
  projectId: "chat-1269a",
  storageBucket: "chat-1269a.appspot.com",
  messagingSenderId: "714448665846",
  appId: "1:714448665846:web:8b549c146fa78f0cf400d7"
};

 //Initialize Firebase
const app = initializeApp(firebaseConfig);

export default firebaseConfig;