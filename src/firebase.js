// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"

// Import database that firestore provides. 
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBi95YmGLkqc7pAsJbBx1BoZ84D3ODDjn8",
  authDomain: "svelte-crud-7c48c.firebaseapp.com",
  projectId: "svelte-crud-7c48c",
  storageBucket: "svelte-crud-7c48c.appspot.com",
  messagingSenderId: "1074452968274",
  appId: "1:1074452968274:web:dcdd6e93e42988e90c408b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//We need to export the database(firestore) functionality
export const db = getFirestore();
