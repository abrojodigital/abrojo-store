import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAFJSgbepMdJxE45x-Q6dFvtZkTwRSoa6A",
  authDomain: "abrojo-store.firebaseapp.com",
  projectId: "abrojo-store",
  storageBucket: "abrojo-store.appspot.com",
  messagingSenderId: "539467183131",
  appId: "1:539467183131:web:84ab2619fcc89bbd53b4be"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
