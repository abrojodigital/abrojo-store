import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyAFJSgbepMdJxE45x-Q6dFvtZkTwRSoa6A",
  authDomain: "abrojo-store.firebaseapp.com",
  projectId: "abrojo-store",
  storageBucket: "abrojo-store.appspot.com",
  messagingSenderId: "539467183131",
  appId: "1:539467183131:web:84ab2619fcc89bbd53b4be"
};

// Initialize Firebase and Firestore
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const auth = getAuth(app)
export { db, auth }