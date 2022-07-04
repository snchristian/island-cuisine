import {React,useState} from "react"

function Signup({loginUser}) {
    const [newUserData,setNewUserData] = useState({
        username:"",
        email:"",
        password:"",
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
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='username'>Username:</label>
                <input type={"text"} name="username" id='username' value={newUserData.username} onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor='email'>Email:</label>
                <input type={"text"} name="email" id='email' value={newUserData.email} onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor='password'>Password:</label>
                <input type={"password"} name="password" id='password' value={newUserData.password} onChange={handleChange}/>
            </div>
            <div>
                <input type={"submit"} value="Create Account"/>
            </div>
            
        </form>
    </div>
  )
}

export default Signup