import React from 'react'
import { Link } from 'react-router'

const login = () => {
  return (
    <div className='login'>

    <div>login page</div>
    
        <Link to={"/"}>Go TO Home Page</Link> 
         <br />
        <Link to={"/Contact"}>Go To Contact Page</Link>
        <br/>
        <Link to={"/About"}>Go To About Page</Link>
         <br />
        <Link to={"/Sigin"}>Go To Sigin Page</Link>
    </div>
  )
}

export default login