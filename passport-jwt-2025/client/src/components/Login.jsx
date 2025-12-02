import React, { useState, useEffect } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const  navigate = useNavigate()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

     useEffect(()=>{
            const token = localStorage.getItem("token");

            // যদি token না থাকে → stay on login
            if (!token) return;

            axios.get("http://localhost:5000/profile", {
                headers: {
                    Authorization: token
                }
            })
            .then(() => navigate("/profile"))
            .catch(() => {
                localStorage.removeItem("token");
            });
        },[navigate])


     const handleLogin = ()=>{
        axios.post("http://localhost:5000/login", {username, password})
        .then((user)=>{
            localStorage.setItem("token", user.data.token);
            console.log("user is Successfully login")
            navigate("/profile")
        })
        .catch((error)=>{
            console.log(error)
            navigate("/login")
        })
     }


  return (
    <div>
        <h2>Login Page</h2>
        <input type="text" placeholder='username' value={username} 
        onChange={(e)=>{setUsername(e.target.value)}}
        required
        />

         <input type="password" placeholder='password' value={password} 
        onChange={(e)=>{setPassword(e.target.value)}}
        required
        />
        <button type='submit' onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login
