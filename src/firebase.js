import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAPKl_pWsqcmP0BfUXWrJSioZNaWKIW6XU",
  authDomain: "todo-657a6.firebaseapp.com",
  projectId: "todo-657a6",
  storageBucket: "todo-657a6.appspot.com",
  messagingSenderId: "264003386751",
  appId: "1:264003386751:web:fbcc53f2caaa326880ee4a",
  measurementId: "G-8T6FYQEVGR"
};

const app = initializeApp(firebaseConfig);
const db= getFirestore(app);
export {db};