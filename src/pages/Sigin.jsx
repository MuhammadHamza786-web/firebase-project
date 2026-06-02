import React from 'react'
import { Link } from 'react-router'

const sigin = () => {
  return (
    <div className='sigin'>

    <div>sigin page</div>
    
        <Link to={"/"}>Go TO Home Page</Link> 
         <br />
        <Link to={"/Contact"}>Go To Contact Page</Link>
        <br/>
        <Link to={"/About"}>Go To About Page</Link>
         <br />
        <Link to={"/Login"}>Go To Login Page</Link>
    </div>
  )
}

export default sigin