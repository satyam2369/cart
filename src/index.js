import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import * as firebase from 'firebase';
// import 'firebase/firestore'
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyCNuL3SOJlnIWctLPk3CgV8h0r09tWkrnI",
  authDomain: "cart-3ceea.firebaseapp.com",
  projectId: "cart-3ceea",
  storageBucket: "cart-3ceea.appspot.com",
  messagingSenderId: "456529362794",
  appId: "1:456529362794:web:5104ab5fc0f56ae3672f13"
};

// Initialize Fireba
firebase.initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



