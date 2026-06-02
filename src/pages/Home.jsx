import React from 'react'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <div className='home'>
     
    <div>Home Page</div>
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

export default Home