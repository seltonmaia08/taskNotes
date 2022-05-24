import { getFirestore } from 'firebase/firestore'
import { initializeApp } from "firebase/app";

// config firebase
const firebaseConfig = {
    apiKey: "AIzaSyDXDngh5xXc0teXMLRScIJy4h4mA6R6kmI",
    authDomain: "task-notes-9a4fa.firebaseapp.com",
    projectId: "task-notes-9a4fa",
    storageBucket: "task-notes-9a4fa.appspot.com",
    messagingSenderId: "606259380114",
    appId: "1:606259380114:web:f5e85e46c073da9af38b4b",
    measurementId: "G-DL9EJB66HC"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const database = getFirestore(app)
  export default database