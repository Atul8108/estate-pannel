// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2GGe-6pvQ2726r4SH4aXyj2Hk53aVVNQ",
  authDomain: "estate-admin-pannel.firebaseapp.com",
  projectId: "estate-admin-pannel",
  storageBucket: "estate-admin-pannel.appspot.com",
  messagingSenderId: "321677472169",
  appId: "1:321677472169:web:09e7297547014c95ff54b8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);