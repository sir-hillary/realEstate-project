import React from 'react'
import { useState } from 'react'

const Login = ({ onLogin }) => {

    const [credentials, setCredentials] = useState({
        username: "",
        password: "",
    });

    const handleChange = (e)=>{
        setCredentials({...credentials, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e)=>{
        e.preventDefault();

        if(
            credentials.username === "admin" &&
            credentials.password === "admin123"
        ){
            onLogin();
        }else{
            alert("Invalid credentials. Try again!")
        }
    }
  return (
    <div className='flex justify-center items-center h-screen bg-gray-100'>
        <form
        onSubmit={handleSubmit}
        className='bg-white p-8 shadow-lg rounded-lg w-full max-w-sm'
        >
            <h2 className='text-2xl font-bold mb-4 text-center'>Admin Login</h2>

            <input
             type="text"
             name='username'
             placeholder='username'
             value={credentials.username}
             onChange={handleChange}
             className='w-full border px-4 py-2 mb-4 rounded'
             />
             <input 
             type="password" 
             name='password'
             placeholder='password'
             value={credentials.password}
             onChange={handleChange}
             className='w-full border px-4 py-2 mb-4 rounded'
             />

             <button
             type='submit'
            className='w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700'
             >
                Login
             </button>
        </form>
      
    </div>
  )
}

export default Login
