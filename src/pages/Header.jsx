import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>

    
    <Link to={"/"}>Home</Link>
    <br />
    <Link to={"/About"}>About</Link>
    <br/>
    <Link to={"/Contact"}>Contact</Link>
    <br />
    <Link to={"/Sigin"}>Sigin</Link>
     <br />
    <Link to={"/Login"}>Login</Link>

    </div>
  )
}

export default Header