import { React, useState } from "react"
import { useNavigate } from 'react-router-dom'
import { Containter, Form, FormContainer, Wrapper } from "./LoginStyle"

function Login({ loginUser, errors, setErrors }) {

  const naviagte = useNavigate()

  const [UserData, setUserData] = useState({
    username: "",
    password: "",
  })

  function handleChange(event) {
    setUserData({
      ...UserData,
      [event.target.name]: event.target.value
    })
  }

  function handleSubmit(event) {
    event.preventDefault();

    const newUser = {
      username: UserData.username,
      password: UserData.password
    }

    fetch("/login", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then(res => {
        if (res.ok) {
          res.json().then(data => {
            loginUser(data); naviagte('/recipes')
          })
        } else {
          res.json().then(errors => {
            setErrors(errors.error)
          })
        }
      })

  }

  function renderErrors() {

    if(errors.length > 0){
      return <p>{errors}</p>
    }

  }

  return (
    <Containter>
      <Wrapper>
        <FormContainer>
          <Form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <div>
              <input placeholder='Username' type={"text"} name="username" id='username' value={UserData.username} onChange={handleChange} />
            </div>
            <div>
              <input placeholder='Password' type={"password"} name="password" id='password' value={UserData.password} onChange={handleChange} />
            </div>
            <div>
              <input className="submit" type={"submit"} value="Login" />
            </div>
            {renderErrors()}
          </Form>
        </FormContainer>
      </Wrapper>
    </Containter>

  )
}

export default Login