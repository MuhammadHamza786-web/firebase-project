import React from 'react'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


const Sigin = () => {
  const auth = getAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const SigninUser = (e)=>{  
  e.preventDefault()
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    console.log("userCredential", userCredential)
  })
  .catch((error) => {
    console.log("eror", error)
  });
  
}
  return (
    <div className='signin'>

      <h1>Sign In</h1>
      <form action="">
        <label htmlFor="">
          Email:{""}
          <input type="email" placeholder='Enter Your Email' value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <label>
          Password:{""}
          <input type="password" placeholder='Enter Your Password'  value={password} onChange={(e)=>setPassword(e.target.value)}/>
        </label>
        <br />
        <button>Sign In</button>
      </form>
    </div>
  )
}

export default Sigin