// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtdKU4hGL1RZLmihndwK9llA_7l0XYBwg",
  authDomain: "swiggy-3e413.firebaseapp.com",
  projectId: "swiggy-3e413",
  storageBucket: "swiggy-3e413.firebasestorage.app",
  messagingSenderId: "970359480422",
  appId: "1:970359480422:web:dd4c36e66b4a269898cda7",
  measurementId: "G-DGHW38JNL1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);