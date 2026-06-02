import React from 'react'
import { Link } from 'react-router'


const Contact = () => {
  return (
    <div className='contact'>

    <div>Contact Page</div>
        <Link to={"/"}>Home</Link> 
         <br />
        <Link to={"/About"}>About</Link>
        <br/>
        <Link to={"/Sigin"}>Sigin</Link>
         <br />
        <Link to={"/Login"}>Login</Link>
    
    </div>
  )
}

export default Contact