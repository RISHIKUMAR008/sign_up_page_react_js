import React, { useState } from 'react'
import './Signup.css'
import user_icon from '../person.png'
import email_icon from '../email.png'
import password_icon from '../password.png'

const Signup = () => {
    const [action,SetAction] = useState("Sign up");
  return (
    <div className='container'>
        <div className='header'>
            <div className='text'>{action}</div>
            <div className='underline'></div>
        </div>
        <div className='inputs'>
            {action==="Login"?<div></div>:<div className='input'>
                <img src={user_icon} alt=''/>
                <input type='text' placeholder='Name'/>
            </div>}
            
            <div className='input'>
                <img src={email_icon}alt=''/>
                <input type='email' placeholder='Email Id'/>
            </div> <div className='input'>
                <img src= {password_icon} alt=''/>
                <input type='password' placeholder='password'/>
            </div>
        </div>
        {action==="Sign up"?<div></div>:<div className='forgot-password'>password Lost <span>Click here?</span></div>}
        <div className='submit-container'>
            <div className={action === "Login"?"submit gray":"submit" } onClick={()=>{SetAction("Sign up")}}>Sign Up</div>
            <div className= {action==="Sign up"?"submit gray":"submit"} onClick={() =>{SetAction("Login")}}>Login </div>

        </div>
      
    </div>
  )
}

export default Signup;
