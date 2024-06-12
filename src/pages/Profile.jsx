import React, { useEffect } from "react";
import { useState } from "react";
import {
  doc,
  onSnapshot,
  db,
  onAuthStateChanged,
  auth,
  getDocs,
  collection,
  signOut,
} from "../config/FirebaseConfig";
import { useNavigate } from "react-router-dom";

function Profile() {
  // useEffect(()=>{
  //   dataRead()
  // },[])

  const navigate = useNavigate();
  const [inputText, setInputText] = useState("");
  useEffect(() => {
    async function fetchData() {
      const querySnapshot = await getDocs(collection(db, "users"));
      const dataArray = querySnapshot.forEach((doc) => {
        const data = doc.data();
        // console.log(data);
        console.log(data.Email);
        setInputText(data.Email);
      });
    }
    fetchData();
  }, []);

  const Log = () => {
    signOut(auth)
      .then(() => {
        console.log("User Log out");
        setInputText('')
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
        console.log("User Not Log out");
      });
  };

  function dataRead() {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        console.log(uid);
        console.log("User Login");
        {
          console.log(inputText);
        }
      } else {
        // User is signed out
        console.log("User Not Login");
      }
    });
    const unsub = onSnapshot(doc(db, "users"), (doc) => {
      console.log("Current data: ", doc.data());
    });
  }

  return (
    <div>
      <h1>Profile Page</h1>
      <input disabled value={inputText} type="text" />
      <br />
      <button onClick={Log}>LogOut</button>
    </div>
  );
}

export default Profile;
