// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_yjr_Ssa7FFqfMDyleI3sWBJSAG2MQXM",
  authDomain: "netflixgpt-319.firebaseapp.com",
  projectId: "netflixgpt-319",
  storageBucket: "netflixgpt-319.appspot.com",
  messagingSenderId: "684383547699",
  appId: "1:684383547699:web:a32e00b7d21b8666e4ce46",
  measurementId: "G-YV5PKCH1YG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); // eslint-disable-line no-unused-vars
export const auth = getAuth();
