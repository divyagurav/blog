// src/firebase.js
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDgZAHnar9nc9YU12zxjKw8mOMWUVnrWDI",
  authDomain: "your-auth-domain",
  projectId: "project-management-8727b",
  storageBucket: "your-storage-bucket",
  messagingSenderId: "your-messaging-sender-id",
  appId: "your-app-id",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const firestore = firebase.firestore();

export default { auth, firestore };
