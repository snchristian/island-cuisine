import {React,useState} from "react"

function Login({loginUser}) {
  
  const [UserData,setUserData] = useState({
    username:"",
    password:"",
  })

  function handleChange(event){
    setUserData({
        ...UserData,
        [event.target.name]:event.target.value
    })
  }

  function handleSubmit(event){
    event.preventDefault();

    const newUser = {
            username:UserData.username,
            password: UserData.password  
    }

    fetch("/login",{
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
                <input type={"text"} name="username" id='username' value={UserData.username} onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor='password'>Password:</label>
                <input type={"password"} name="password" id='password' value={UserData.password} onChange={handleChange}/>
            </div>
            <div>
                <input type={"submit"} value="Login"/>
            </div>  
        </form>
    </div>
  )
}

export default Login