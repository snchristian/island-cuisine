import {React, useState,useEffect} from 'react';
import { useNavigate} from 'react-router-dom'
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

  const naviagte = useNavigate()

 function loginUser (user){
  setCurrentUser(user);
  setloggedIn(true)
  console.log(user)
 }

 console.log(currentUser)
 


 useEffect(() =>{
  fetch('/recipes')
  .then(res =>res.json())
  .then(data => (setRecipes((data))))

 },[])

 useEffect(() => {
  fetch("/me", {
  })
    .then(res => {
      if (res.ok) {
        res.json().then((user) => {
          setCurrentUser(user)
          setloggedIn(true)
        })
      }
    })
}, [])

  function logoutUser(){
    fetch(`/logout`, {
      method: 'DELETE',
    })
      .then(res => {
        if (res.ok) {
          setCurrentUser(null)
          setloggedIn(false)
          naviagte('/')
        }
      })

    

  }
  
  return (
    <div className="App">

      <Navbar loggedIn={loggedIn} logoutUser={logoutUser} />
      {/* { loggedIn ?   <h1>Welcome {currentUser.username}</h1> :null } */}
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/signup" element={<Signup loginUser={loginUser} />}/>
        <Route path="/login" element={<Login  loginUser={loginUser} />}/>
        <Route exact path="/recipes" element={<RecipeList recipes={recipes}/>}/>
        <Route path="/recipes/:id" element={<Recipe recipes={recipes} currentUser={currentUser}/>}/>
      </Routes>   
    </div>
  );
}

export default App;
