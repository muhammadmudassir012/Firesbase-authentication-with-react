import React, { useEffect, useState } from 'react'
import Home from '../pages/Home';
import About from '../pages/About';
import Login from '../pages/Login';
import AppNavbar from '../components/AppNavbar';
import PageNotFound from '../PageNotFound/PageNotFound';
import SignUp from '../pages/SignUp';
import Profile from '../pages/Profile';
import { BrowserRouter,Routes,Route, Navigate } from 'react-router-dom'
import { auth, onAuthStateChanged } from './FirebaseConfig';
import { Spin } from 'antd';

function Config() {
  // const navigate = useNavigate()
  const [user,setUser] = useState(false)
  const [loader,setLoader] = useState(true)
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        console.log(uid);
        console.log('User Login');
        setUser(true)
        setLoader(false)
      } else {
        console.log('User Not Login');
        setUser(false)
        setLoader(false)
      }
    });
  },[])

  return (
    <div>
      {
        loader ?
         <Spin/>
         :
      <BrowserRouter>
        <Routes>
 
          <Route path='/login' element={user ? <Navigate to={'/profile'}/> : <Login/>} />
          <Route path='/signup' element={user ? <Navigate to={'/profile'}/> : <SignUp/>} /> 
          <Route path='/profile' element={user ? <AppNavbar><Profile/></AppNavbar> : <AppNavbar><Profile/></AppNavbar>} />
          <Route path='/' element={user ? <AppNavbar><Profile/></AppNavbar> : <Login/>} />
          <Route path='*' element={<PageNotFound/>} />
          {/* <Route path='/about' element={<AppNavbar><About/></AppNavbar>} /> */}
          {/* <Route path='/home' element={<AppNavbar><Home/></AppNavbar>} /> */}

        </Routes>

      </BrowserRouter>
      }
    </div>
  )
}

export default Config
