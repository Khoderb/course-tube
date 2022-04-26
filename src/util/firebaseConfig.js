// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";




const firebaseConfig = {
  apiKey: "AIzaSyABOtbCf2qVo_Qib9U8jyscG69w0FBvUes",
  authDomain: "course-tube-react.firebaseapp.com",
  projectId: "course-tube-react",
  storageBucket: "course-tube-react.appspot.com",
  messagingSenderId: "763862018438",
  appId: "1:763862018438:web:fc8473e2599d03f2afe407",
  measurementId: "G-RRN4Q9QCHB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;