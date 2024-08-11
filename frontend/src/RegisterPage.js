import React from 'react'
import { Link } from 'react-router-dom' 
import { useState } from 'react'
import axios from 'axios'

const RegisterPage = () => {
    const [registerData,setregisterData] = useState({
        username:'',
        password:''
      })
    
    const handleRegisterChange = (e) => {
        const {name,value} = e.target;
        setregisterData((prevData) => ({
            ...prevData, // previous data means state before updation. this ensures that prev values remain and only specific field that is changed is updated
            [name]:value
        }))
    }

    const handleRegisterSubmit = async (e) => {
        e.preventDefault();

        try{
            const response = await axios.post('http://localhost:8000/register',registerData);
            console.log(response.data)
        }
        catch(error){
            console.log(error)
        }
        setregisterData({
            username:'',
            password:''
        })
    }
  return (
    <div>
        <h1>Registration Page</h1>
        <form onSubmit={handleRegisterSubmit}>
            <input type="text" name='username' placeholder='username' value={registerData.username} onChange={handleRegisterChange} required />
            <input type="password" name='password' placeholder='password' value={registerData.password} onChange={handleRegisterChange} required />
            <button>Register</button>
            <p>Already registered? <Link to='/login'>Login here</Link></p>
        </form>
    </div>
  )
}

export default RegisterPage