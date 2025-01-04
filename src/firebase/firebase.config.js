// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLUdmKv_pcu5rPXjcLnWVOxc38i4cVqMg",
  authDomain: "blood-doner-e8ef9.firebaseapp.com",
  projectId: "blood-doner-e8ef9",
  storageBucket: "blood-doner-e8ef9.firebasestorage.app",
  messagingSenderId: "340463163013",
  appId: "1:340463163013:web:8a82417508d8f45aa4fbec",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
