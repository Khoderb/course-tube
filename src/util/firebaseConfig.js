// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";




const firebaseConfig = {
  apiKey: "process.env.API_KEY",
  authDomain: "course-tube-react.firebaseapp.com",
  projectId: "course-tube-react",
  storageBucket: "course-tube-react.appspot.com",
  messagingSenderId: "763862018438",
  appId: "process.env.APP_ID",
  measurementId: "G-RRN4Q9QCHB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;