import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const LoginPage = () => {

  const [loginData,setloginData] = useState({
    username:'',
    password:''
  })

  const handleLoginChange = (e) => {
    const {name,value} = e.target;
    setloginData((prevData) => ({
        ...prevData, // previous data means state before updation. this ensures that prev values remain and only specific field that is changed is updated
        [name]:value
    }))
  }

  const handleLoginSubmit = async(e) => {
    e.preventDefault();

    try{
        const response = await axios.post('http://localhost:8000/login',loginData);
        const {success,message} = response.data
        if(success){
            console.log('Login successful')
        }
        else{
            console.log(message)
        }
    }
    catch(error){
        console.log('Login error')
    }
    setloginData({
        username:'',
        password:''
    })
  }
  return (
    <div>
        <h1>Login Page</h1>
        <form onSubmit={handleLoginSubmit}>
            <input type="text" name='username' placeholder='username' value={loginData.username} onChange={handleLoginChange} required />
            <input type="password" name='password' placeholder='password' value={loginData.password} onChange={handleLoginChange} required />
            <button>Login</button>
            <p>Not registered? <Link to='/register'>Register here</Link></p>
        </form>
    </div>
  )
}

export default LoginPage