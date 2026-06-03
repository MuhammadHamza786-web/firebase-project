import React from 'react'
import { Link } from 'react-router-dom'

const login = () => {
  return (
    <div className='login'>
     <form action="">

    <div>login page</div>
    <input type="text" placeholder='Enter your Email' />
    <br />
    <input type="password" placeholder='Enter your password'/>
    <br />
    <button>Sign In</button>

     </form>
    
    </div>
  )
}

export default login