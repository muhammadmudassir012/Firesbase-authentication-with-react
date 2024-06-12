import React from "react";
import SignUpPage from "../components/SignUpPage";
import {
  auth,
  createUserWithEmailAndPassword,
  db,
  collection,
  addDoc,
  onAuthStateChanged,
} from "../config/FirebaseConfig";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();

  async function SignupFunction(data) {
    console.log(data);
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user.uid);
        navigate("/login");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
    try {
      const docRef = await addDoc(collection(db, "users"), {
        Email: data.email,
        Password: data.password,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }
  return (
    <div>
      <h1>Sign Up Page</h1>
      <SignUpPage SignupFunction={SignupFunction} />
    </div>
  );
}

export default SignUp;
