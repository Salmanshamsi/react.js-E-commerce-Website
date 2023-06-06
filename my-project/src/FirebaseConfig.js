import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDCdtj9O1wUiRI7JkHJ_YBDpsk60Y6TAI8",
  authDomain: "e-commerce-bf681.firebaseapp.com",
  projectId: "e-commerce-bf681",
  storageBucket: "e-commerce-bf681.appspot.com",
  messagingSenderId: "742603573337",
  appId: "1:742603573337:web:679fc65efd113a381e0948"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export {db ,auth};