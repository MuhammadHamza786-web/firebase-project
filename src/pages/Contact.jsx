import React from 'react'
import { Link } from 'react-router'


const Contact = () => {
  return (
    <div className='contact'>

    <div>Contact Page</div>
        <Link to={"/"}>Go TO Home Page</Link> 
         <br />
        <Link to={"/About"}>Go To About Page</Link>
        <br/>
        <Link to={"/Sigin"}>Go To Sigin Page</Link>
         <br />
        <Link to={"/Login"}>Go To Login Page</Link>
    
    </div>
  )
}

export default Contact