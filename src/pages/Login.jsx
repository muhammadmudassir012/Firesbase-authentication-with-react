import React from 'react'
import SignUpPage from '../components/SignUpPage'
import LoginPage from '../components/LoginPage'
import {signInWithEmailAndPassword, auth, onAuthStateChanged} from '../config/FirebaseConfig'
import { useNavigate } from 'react-router-dom'

function Login() {

  const navigate = useNavigate()

  function LoginFunction(data){
    console.log(data);
    signInWithEmailAndPassword(auth, data.email, data.password)
    .then((userCredential) => {
    const user = userCredential.user;
    console.log(user);
    navigate('/profile')
  })
    .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
  });
  
  }

  return (
    <>
    <div>
      
        <div>
           <h1>Login Page</h1>

           <LoginPage LoginFunction={LoginFunction}  />
        </div>

        

    </div>
    </>
  )
}

export default Login
