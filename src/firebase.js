// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"

// Import database that firestore provides. 
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
//Insert your credentials here
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//We need to export the database(firestore) functionality
export const db = getFirestore();
