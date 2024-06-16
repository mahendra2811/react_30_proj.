import React, { useState } from 'react'

export default function Thirteen() {

    const[email , setEmail] = useState('');
    const[password , setPassword] = useState('');
    const [isRegistered , setIsRegistered] = useState(false);
    const[isLoggedin , setIsLoggedin] = useState(false );

  return (
    <div>
        <form >
                <input type='email' placeholder='Email'  onChange={(e)=>{
                    setEmail(e.target.value)
                }}/> 
            <br />
                <input type='password' placeholder='Password'  onChange={(e)=>{
                    setPassword(e.target.value)
                }}/>
            <br />
                <button>  </button>
            
        </form>
    </div>
  )
}
