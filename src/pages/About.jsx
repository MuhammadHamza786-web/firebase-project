import React from 'react'
import { Link } from 'react-router'

const About = () => {
  return (
    <div className='about'>

    <div>About Page</div>

        <Link to={"/"}>Go TO Home Page</Link> 
         <br />
        <Link to={"/Contact"}>Go To Contact Page</Link>
        <br/>
        <Link to={"/Sigin"}>Go To Sigin Page</Link>
         <br />
        <Link to={"/Login"}>Go To Login Page</Link>
    </div>
  )
}

export default About