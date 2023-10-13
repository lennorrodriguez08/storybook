// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCV2kb_pAgHBdSKwswB3VfUobDmjfrf2sk",
  authDomain: "storybook-1c33c.firebaseapp.com",
  projectId: "storybook-1c33c",
  storageBucket: "storybook-1c33c.appspot.com",
  messagingSenderId: "216810998147",
  appId: "1:216810998147:web:30071c12b18cc2929e8eb6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);