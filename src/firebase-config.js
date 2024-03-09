import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBTCWy_rZUzg-ifQkJnduLO_reChH88o7M",
  authDomain: "react-crud-64170.firebaseapp.com",
  projectId: "react-crud-64170",
  storageBucket: "react-crud-64170.appspot.com",
  messagingSenderId: "884220625327",
  appId: "1:884220625327:web:09f8be66c0813396d8af5a",
  measurementId: "G-P4P669VB7L"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);