// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blog-f3db6.firebaseapp.com",
  projectId: "blog-f3db6",
  storageBucket: "blog-f3db6.appspot.com",
  messagingSenderId: "829318281188",
  appId: "1:829318281188:web:aa2636b1410dc3ef8479f1",
  measurementId: "G-MHWDE6T39Z",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
