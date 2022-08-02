import {React, useState,useEffect} from 'react';
import './App.css';
import Navbar from './components/Navigation/Navbar';
import Home from './components/Static/Home';
import Signup from './components/Authentication/Signup';
import Login from './components/Authentication/Login';
import { Route, Routes } from "react-router-dom";
import RecipeList from './components/content/RecipeList';
import Recipe from './components/content/Recipe';

function App() {
  const [currentUser, setCurrentUser] = useState({})
  const [loggedIn,setloggedIn] = useState(false)
  const [recipes,setRecipes]= useState([])

 function loginUser (user){
  setCurrentUser(user);
  setloggedIn(true)
 }


 useEffect(() =>{
  fetch('/recipes')
  .then(res =>res.json())
  .then(data => (setRecipes((data))))

 },[])

 useEffect(() => {
  const token = localStorage.getItem('jwt')
  if(token && !loggedIn) {
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

  function logoutUser(){
    setCurrentUser({});
    setloggedIn(false);
    localStorage.removeItem('jwt')

  }
  
  return (
    <div className="App">

      <Navbar loggedIn={loggedIn} logoutUser={logoutUser} />
      { loggedIn ? <h1>Welcome {currentUser.username}</h1> : null }
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signup" element={<Signup loginUser={loginUser} />}/>
        <Route path="/login" element={<Login  loginUser={loginUser} />}/>
        <Route path="/recipes" element={<RecipeList recipes={recipes}/>}/>
        <Route path="/recipes/:id" element={<Recipe recipes={recipes}/>}/>
      </Routes>

      
    </div>
  );
}

export default App;
