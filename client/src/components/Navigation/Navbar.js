import React from 'react'
import {Link } from 'react-router-dom'

function Navbar({loggedIn,logoutUser}) {
  
  
  function loggedOutLinks (){
    return (
      <ul>
        <li><Link to="/">Homepage</Link></li>
        <li><Link to="/Login">Login</Link></li>
        <li><Link to="/Signup">Signup</Link></li>
        </ul>
    )
  }

  function loggedInLinks (){
    return (<ul>
      <li><Link to="/">Homepage</Link></li>
      <li><Link to="/favorites">Favorites</Link></li>
      <li><button onClick={handleLogOutUser}>LogOut</button></li>
      </ul>)
  }

  function handleLogOutUser (event){
    event.preventDefault();
    logoutUser()
  }


  return (
    <div>
      {loggedIn ? loggedInLinks() : loggedOutLinks()}
    </div>
  )
}

export default Navbar