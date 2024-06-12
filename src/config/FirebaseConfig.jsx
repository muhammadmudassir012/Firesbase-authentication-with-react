import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { getFirestore, collection, addDoc, doc, onSnapshot, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyABg8CBc9hZzBMUZY6VfVr2sNKCKfeGrzk",
  authDomain: "smit-react-practice.firebaseapp.com",
  projectId: "smit-react-practice",
  storageBucket: "smit-react-practice.appspot.com",
  messagingSenderId: "405134665304",
  appId: "1:405134665304:web:6410e35a9a1a8e37098c2d",
  measurementId: "G-VBW728S32J"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {
    auth,
    db,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    collection, 
    addDoc,
    doc,
    onSnapshot,
    getDocs,
    signOut
}

