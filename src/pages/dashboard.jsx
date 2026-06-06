import React from 'react'
import { Link } from 'react-router-dom'

const dashboard = () => {
  return (

    <div>dashboard
<br />
    <Link to={"/Sigin"}>Go to Sigin page</Link>
    <br />
    <Link to={"/Signup"}>Go to Signup page</Link>

    </div>
  )
}

export default dashboard
