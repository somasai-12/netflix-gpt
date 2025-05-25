import React, { useState } from 'react'
import Header from "./Header"

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  return (
    <div>
      <Header />
      <div className='absolute'>
          <img src='https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg' alt='background image' />
      </div>
      <form className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
        <h1 className='font-bold text-3xl py-4 '>{isSignUp?"Sign Up":"Sign In"}</h1>
        {isSignUp&&<input className='p-4 my-3 w-full bg-gray-700' type='text' placeholder='User Name' />}        
        <input className='p-4 my-3 w-full bg-gray-700' type='text' placeholder='Email Address' />        
        <input className='p-4 my-3 w-full bg-gray-700' type="password" placeholder='Enter Password' /> 
        {isSignUp&&<input className='p-4 my-3 w-full bg-gray-700' type="password" placeholder='Confirm Password' />} 
        <button className='p-4 my-6 bg-red-500 w-full rounded-lg'>{isSignUp?"Sign Up":"Sign In"}</button>       
        <p className="text-center cursor-pointer hover:underline" onClick={()=>{
          {isSignUp?setIsSignUp(false):setIsSignUp(true)};
        }}>{isSignUp ? "Already have an account? Log in" : "New to Netflix? Sign up"}</p>
      </form>    
    </div>
  )
}

export default Login