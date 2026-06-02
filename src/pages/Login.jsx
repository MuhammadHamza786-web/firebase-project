import React from 'react'
import { Link } from 'react-router'

const login = () => {
  return (
    <div className='login'>

    <div>login page</div>
    
        <Link to={"/"}>Home</Link> 
         <br />
        <Link to={"/Contact"}>Contact</Link>
        <br/>
        <Link to={"/About"}>About </Link>
         <br />
        <Link to={"/Sigin"}>Sigin</Link>
    </div>
  )
}

export default login