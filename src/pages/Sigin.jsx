import React from 'react'
import { Link } from 'react-router-dom'

const sigin = () => {
  return (
    <div className='sigin'>

    <div>sigin page</div>
    <form action="">

    <input type="text" placeholder='Enter your Email' />
    <br />
    <input type="password" placeholder='Enter your password'/>
    <br />
    <button>Sign In</button>
    </form>
    </div>
  )
}

export default sigin