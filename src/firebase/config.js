// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApOqJjSbw_ulbNh0y561xyGDR5PsRA2Sc",
  authDomain: "rj-catnip.firebaseapp.com",
  projectId: "rj-catnip",
  storageBucket: "rj-catnip.appspot.com",
  messagingSenderId: "33298432861",
  appId: "1:33298432861:web:d3cb227c9f82cf10049eb4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);  
export const db = getFirestore(app)


