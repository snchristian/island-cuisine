import {React,useState} from "react"
import { Button, Containter, Form, Input, Title, Wrapper } from "./SignUpStyled";

function Signup({loginUser}) {
    const [newUserData,setNewUserData] = useState({
        username:"",
        email:"",
        password:"",
        firstname:"",
    })

    function handleChange(event){
        setNewUserData({
            ...newUserData,
            [event.target.name]:event.target.value
        })
    }

    function handleSubmit(event){
        event.preventDefault();

        const newUser = {
            user:{
                username:newUserData.username,
                email: newUserData.email,
                password: newUserData.password

            }
        }

        fetch("/users",{
            method:"POST",
            headers:{
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            body:JSON.stringify(newUser),
        })
        .then((r)=>r.json())
        .then((data)=>{loginUser(data.user); localStorage.setItem('jwt',data.token)} )

    }
    
    
  return (
    <Containter>
        <Wrapper>
            <Title>CREATE AN ACCOUNT</Title>
            <Form onSubmit={handleSubmit}>
                <Input placeholder = 'User Name' type={"text"} name="username" id='username' value={newUserData.username} onChange={handleChange}/>
                <Input placeholder = 'Email' type={"text"} name="email" id='email' value={newUserData.email} onChange={handleChange}/>
                <Input placeholder = 'Password 'type={"password"} name="password" id='password' value={newUserData.password} onChange={handleChange}/>
                {/* <Input placeholder = 'First Name 'type={"text"} name="first name" id='firstname' value={newUserData.firstname} onChange={handleChange}/> */}
                <Button onClick={handleSubmit}>Create Account</Button>
            </Form>      
        </Wrapper>
    </Containter>
        
    
  )
}

export default Signup