import React from 'react'
import { Link } from 'react-router'

const sigin = () => {
  return (
    <div className='sigin'>

    <div>sigin page</div>
    
        <Link to={"/"}>Home</Link> 
         <br />
        <Link to={"/Contact"}>Contact</Link>
        <br/>
        <Link to={"/About"}>About</Link>
         <br />
        <Link to={"/Login"}>Login</Link>
    </div>
  )
}

export default sigin