import {React, useState,useEffect} from 'react';
import './App.css';
import Navbar from './components/Navigation/Navbar';
import Home from './components/Static/Home';
import Signup from './components/Authentication/Signup';
import Login from './components/Authentication/Login';
import { Route, Routes } from "react-router-dom";

function App() {
  const [currentUser, setCurrentUser] = useState({})
  const [loggedIn,setloggedIn] = useState(false)

 function loginUser (user){
  setCurrentUser(user);
  setloggedIn(true)
 }

 useEffect(() => {
  const token = localStorage.getItem('jwt')
  if(token && !loggedIn) {
    // fetch to rails backend
    fetch('/get-current-user',{
      method:"GET",
      headers:{
        "Accept": "application/json",
        "Content-Type": "application/json",
        'Authorization': `bearer ${ localStorage.getItem('jwt') }`
    },
    })
    .then(res => res.json())
    .then(user => loginUser(user))
  }
  },[loggedIn])
  
  return (
    <div className="App">

      <Navbar/>
      { loggedIn ? <h1>Welcome`${currentUser.username}`</h1> : null }
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signup" element={<Signup loginUser={loginUser}/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>

      
    </div>
  );
}

export default App;
