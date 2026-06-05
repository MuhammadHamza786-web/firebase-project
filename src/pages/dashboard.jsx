import React from 'react'
import { Link } from 'react-router'

const Dashboard = () => {
  return (
    <div>Dashboard

     <Link to="/Sigin">Go To Signin</Link>
      <br />
      <Link to="/Signup">Go To Signup</Link>
    
     </div>
  )
}

export default Dashboard