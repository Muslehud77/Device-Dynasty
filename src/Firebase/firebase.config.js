// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABVYrcu3W_18rjtLiWgLHh7I6q_2uJbKM",
  authDomain: "device-dynasty.firebaseapp.com",
  projectId: "device-dynasty",
  storageBucket: "device-dynasty.appspot.com",
  messagingSenderId: "664359352069",
  appId: "1:664359352069:web:d8ef6e45039d9d3c36696c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;