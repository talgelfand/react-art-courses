import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./app";
import { ContextProvider } from "./context/context";
import firebase from "firebase/app";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyBUHU8gQwo7PuETlvPVq88Fg3T_7KMlgZM",
  authDomain: "art-academy-af7d3.firebaseapp.com",
  projectId: "art-academy-af7d3",
  storageBucket: "art-academy-af7d3.appspot.com",
  messagingSenderId: "592992154767",
  appId: "1:592992154767:web:f571568632b94ca4a82cfa",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const auth = app.auth();

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

export default app;
