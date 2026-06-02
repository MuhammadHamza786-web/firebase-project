import React from 'react'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <div className='home'>
     
    <div>Home Page</div>
    <Link to={"/About"}>Go To About Page</Link>
    <br/>
    <Link to={"/Contact"}>Go To Contact Page</Link>
    <br />
    <Link to={"/Sigin"}>Go To Sigin Page</Link>
     <br />
    <Link to={"/Login"}>Go To Login Page</Link>

  </div>
  )
}

export default Home