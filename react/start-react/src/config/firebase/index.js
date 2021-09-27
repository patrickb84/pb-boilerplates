// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
import { getFirestore } from "firebase/firestore";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdXWv2DloksBvZwyYjbfPYxRolmYNeQn0",
  authDomain: "project64-fd157.firebaseapp.com",
  projectId: "project64-fd157",
  storageBucket: "project64-fd157.appspot.com",
  messagingSenderId: "647174310904",
  appId: "1:647174310904:web:f987d9ee752dc310e2240d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firestore = getFirestore();

export { firestore };
