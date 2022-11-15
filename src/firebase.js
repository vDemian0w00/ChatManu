// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZ6ln-QgR11_h9R-N9stXHq40ujQydeqc",
  authDomain: "chatweb-1dfb7.firebaseapp.com",
  projectId: "chatweb-1dfb7",
  storageBucket: "chatweb-1dfb7.appspot.com",
  messagingSenderId: "488536562867",
  appId: "1:488536562867:web:ce973525c3285c5bbde4c6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)