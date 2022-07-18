import { initializeApp } from "firebase/app";
import {
  FacebookAuthProvider,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
} from "firebase/auth";

const config = {
  firebaseConfig: {
    apiKey: "AIzaSyDiQ9cWNISpKQS0qxujYNP7M0JH_QuIQLw",
    authDomain: "login-5f9c5.firebaseapp.com",
    projectId: "login-5f9c5",
    storageBucket: "login-5f9c5.appspot.com",
    messagingSenderId: "222425807059",
    appId: "1:222425807059:web:8b11d3a5610f2a2a49bc26",
    measurementId: "G-05R0GVT450",
  },
};

initializeApp(config.firebaseConfig);
export const auth = getAuth();
export const google = new GoogleAuthProvider();
export const facebook = new FacebookAuthProvider();
export const github = new GithubAuthProvider();
