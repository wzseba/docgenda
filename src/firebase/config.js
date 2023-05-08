// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAE8IFxYOuZoMwr927XyL2c1WfL8bbXxfI",
  authDomain: "docgenda-7113e.firebaseapp.com",
  projectId: "docgenda-7113e",
  storageBucket: "docgenda-7113e.appspot.com",
  messagingSenderId: "193765174346",
  appId: "1:193765174346:web:6cb1a464523f6681978ab3"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);