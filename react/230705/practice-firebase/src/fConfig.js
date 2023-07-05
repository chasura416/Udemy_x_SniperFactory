import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

const FIREBASE_API_KEY = process.env.REACT_APP_FIREBASE_API_KEY;

const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: "practice-project-5f967.firebaseapp.com",
  projectId: "practice-project-5f967",
  storageBucket: "practice-project-5f967.appspot.com",
  messagingSenderId: "473579289999",
  appId: "1:473579289999:web:5037e5c9815c68bd9edffa",
  // measurementId: "G-SK53LRMYRJ"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged };
export default auth;