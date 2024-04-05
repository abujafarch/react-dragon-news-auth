// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQdHTo-QGkGfmIV9ojc2ZX5b9-u_sdwYQ",
  authDomain: "react-dragon-news-auth-fd16f.firebaseapp.com",
  projectId: "react-dragon-news-auth-fd16f",
  storageBucket: "react-dragon-news-auth-fd16f.appspot.com",
  messagingSenderId: "295564064642",
  appId: "1:295564064642:web:3150b657af756ea753819b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app