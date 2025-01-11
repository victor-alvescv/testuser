// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth
import { createUserWithEmailAndPassword } from './firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWijPfL6G3s5G42BbgaFDMdKDJzxy3a_0",
  authDomain: "react-movie-app-5a316.firebaseapp.com",
  projectId: "react-movie-app-5a316",
  storageBucket: "react-movie-app-5a316.firebasestorage.app",
  messagingSenderId: "68478672707",
  appId: "1:68478672707:web:d576c468083669cf93d9f6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();