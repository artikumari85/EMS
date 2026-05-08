import React, { useState } from 'react'

const Login = ({handleLogin}) => {
    const[email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    const submitHandler=(e)=>{
    e.preventDefault()
    handleLogin(email,password)

    setEmail("")
    setPassword("")
  }

  return (
    <div className='flex items-center justify-center h-screen w-screen'>
        <div className='border-2 border-emerald-600 p-20 rounded-xl '>
            <form onSubmit={(e)=>{
              submitHandler(e);

            }}
            className='flex flex-col items-center justify-center'>
                <input value={email}
                onChange={(e)=>{
                  setEmail(e.target.value)
                  
                }}
                className='border-2 border-emerald-600 rounded-full py-3 px-5 text-xl outline-none bg-transparent placeholder:text-gray-400' type="email" placeholder='Enter Your Email' 
                />

                <input 
                value={password}
                onChange={(e)=>{
                  setPassword(e.target.value)
                }} 
                className='border-2 border-emerald-600 rounded-full py-3 px-5 text-xl outline-none bg-transparent mt-3 placeholder:text-gray-400' type='password' placeholder='Enter Your Password' 
                />
                <button className='text-white border-none bg-emerald-600 rounded-full py-2 px-8 text-lg outline-none mt-7 hover:bg-emerald-600 w-full'>Login in</button>
            </form>

        </div>
      
    </div>
  )
}

export default Login;
