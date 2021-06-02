import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./app";
import { ContextProvider } from "./context/context";
import firebase from "firebase";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyCIMxh-1l2neYfYPaS9PYSs2NKBedwInJE",
  authDomain: "art-academy-265ee.firebaseapp.com",
  projectId: "art-academy-265ee",
  storageBucket: "art-academy-265ee.appspot.com",
  messagingSenderId: "888066305680",
  appId: "1:888066305680:web:22e551bd62a9f116aef215",
  measurementId: "G-169JQQM5FY",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
