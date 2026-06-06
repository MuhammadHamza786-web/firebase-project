import React from 'react'
import { Link } from 'react-router'

const dashboard = () => {
  return (

    <div>dashboard

    <Link to={<Sigin/>}>Go to Sigin page</Link>
    <Link to={<Signup/>}>Go to Sig page</Link>

    </div>
  )
}

export default dashboard
