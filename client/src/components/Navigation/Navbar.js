import React from 'react'
import {Link } from 'react-router-dom'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';





function Navbar({loggedIn,logoutUser}) {
  
  
  function loggedOutLinks (){
    return (
      <div>
        <Button color="inherit"  to ="/recipes" component={ Link }>Recipes</Button>
        <Button color="inherit"  to ="/Signup" component={ Link }>Signup</Button>
        <Button color="inherit"  to ="/login" component={ Link }>Login</Button>
      </div>
       
        
    )
  }

  function loggedInLinks (){
    return (
    <div>
      <Button color="inherit"  to ="/recipes" component={ Link }>Recipes</Button>
      <Button color="inherit" to="/favorites" component={ Link }>Favorites</Button>
      <Button color="inherit" onClick={handleLogOutUser}>Logout</Button>
    </div>
     
      )
  }

  function handleLogOutUser (event){
    event.preventDefault();
    logoutUser()
  }


  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static" color="inherit">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              flexGrow:1
            }}>
          Island Cusine
        </Typography>
        {loggedIn ? loggedInLinks() : loggedOutLinks()}
      </Toolbar>
    </AppBar>
  </Box>
  );
}
  


export default Navbar