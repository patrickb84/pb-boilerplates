import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  getRedirectResult,
  onAuthStateChanged,
} from "firebase/auth";

export const firebaseConfig = {
  apiKey: "AIzaSyCdXWv2DloksBvZwyYjbfPYxRolmYNeQn0",
  authDomain: "project64-fd157.firebaseapp.com",
  projectId: "project64-fd157",
  storageBucket: "project64-fd157.appspot.com",
  messagingSenderId: "647174310904",
  appId: "1:647174310904:web:f987d9ee752dc310e2240d",
};

initializeApp(firebaseConfig);

const firebaseAuth = {
  auth: getAuth(),
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  getRedirectResult,
  getAuth,
  onAuthStateChanged,
};

const firestore = getFirestore();

export { firebaseAuth, firestore };
