import React from 'react'
import { Link } from 'react-router'

const About = () => {
  return (
    <div className='about'>

    <div>About Page</div>

        <Link to={"/"}>Home</Link> 
         <br />
        <Link to={"/Contact"}>Contact</Link>
        <br/>
        <Link to={"/Sigin"}>Sigin</Link>
         <br />
        <Link to={"/Login"}>Login</Link>
    </div>
  )
}

export default About