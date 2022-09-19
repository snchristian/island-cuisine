import {React, useState,useEffect} from 'react';
import { useNavigate} from 'react-router-dom'
import Navbar from './components/Navigation/Navbar';
import Home from './components/Static/Home';
import Signup from './components/Authentication/Signup';
import Login from './components/Authentication/Login';
import { Route, Routes } from "react-router-dom";
import RecipeList from './components/content/RecipeList';
import Recipe from './components/content/Recipe';
import Favorites from './components/content/Favorites';


function App() {
  const [currentUser, setCurrentUser] = useState({})
  const [loggedIn,setloggedIn] = useState(false)
  const [recipes,setRecipes]= useState([])
  const [errors, setErrors] = useState([])

  const naviagte = useNavigate()
  
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

      <Navbar loggedIn={loggedIn} logoutUser={logoutUser} currentUser={currentUser} />
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/signup" element={<Signup loginUser={loginUser} errors={errors} setErrors={setErrors}/>}/>
        <Route path="/login" element={<Login  loginUser={loginUser}errors={errors} setErrors={setErrors}/>}/>
        <Route exact path="/recipes" element={<RecipeList recipes={recipes} setRecipes={setRecipes} errors={errors} setErrors={setErrors}/>}/>
        <Route path="/recipes/:id" element={<Recipe recipes={recipes} errors={errors} setErrors={setErrors} />} />
        <Route path="/favorites" element={<Favorites setRecipes={setRecipes} recipes={recipes}/>}/>
      </Routes>   
    </div>
  );
}

export default App;
