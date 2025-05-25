//Note For Firebase deployment use command- firebase deploy



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwmZ-C3yZnV55HTGg0cjg3eAfbdp_idkI",
  authDomain: "netflixgpt-ba62c.firebaseapp.com",
  projectId: "netflixgpt-ba62c",
  storageBucket: "netflixgpt-ba62c.firebasestorage.app",
  messagingSenderId: "574908207491",
  appId: "1:574908207491:web:0bb860b2afb0abff86a6b6",
  measurementId: "G-CEF5X7GSH1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
