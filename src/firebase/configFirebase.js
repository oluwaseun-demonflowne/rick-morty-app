import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { GoogleAuthProvider } from "firebase/auth";

export const firebaseConfig = {
  apiKey: "AIzaSyD3-KNaDWfEx-t5gfp4tJCrALGq31Ly87k",
  authDomain: "rick-and-morty-836c1.firebaseapp.com",
  projectId: "rick-and-morty-836c1",
  storageBucket: "rick-and-morty-836c1.appspot.com",
  messagingSenderId: "882969532348",
  appId: "1:882969532348:web:0509d6bed7828e0f3cbdb9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider(app)
export default app