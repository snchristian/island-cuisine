import { React, useState } from "react"
import { useNavigate } from 'react-router-dom'
import { Containter, Form, FormContainer, Wrapper } from "./Login_Signin_Style"
function Signup({ loginUser }) {

  const naviagte = useNavigate()


  const [newUserData, setNewUserData] = useState({
    username: "",
    email: "",
    password: "",
    firstname: "",
  })

  function handleChange(event) {
    setNewUserData({  
      ...newUserData,
      [event.target.name]: event.target.value
    })
  }

  function handleSubmit(event) {
    event.preventDefault();

    const newUser = {
      user: {
        username: newUserData.username,
        email: newUserData.email,
        password: newUserData.password

      }
    }

    fetch("/signup", {

      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((r) => r.json())
      .then((data) => { loginUser(data); naviagte('/recipes') })

  }


  return (
    <Containter>
      <Wrapper style={{
        backgroundImage: `url(https://media.istockphoto.com/photos/elegant-tapas-by-the-sea-in-the-sunset-picture-id995428636?b=1&k=20&m=995428636&s=170667a&w=0&h=AHpsrMb57wfKHeIfkMQ9nu4yzRWdYWsqUEcf0v3AjP8=)`
        ,
      }}>
        <FormContainer>
          <Form onSubmit={handleSubmit}>
            <h2>Signup</h2>
            <input placeholder='User Name' type={"text"} name="username" id='username' value={newUserData.username} onChange={handleChange} />
            <input placeholder='Email' type={"text"} name="email" id='email' value={newUserData.email} onChange={handleChange} />
            <input placeholder='Password ' type={"password"} name="password" id='password' value={newUserData.password} onChange={handleChange} />
            <input className="submit" type={"submit"} value="Create An Account" />
          </Form>
        </FormContainer>
      </Wrapper>
    </Containter>


  )
}

export default Signup