import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "../Firebase.jsx";

const auth = getAuth(app);

const Signup = () => {
const auth = getAuth();

const [email , setEmail]=useState("");
const [password , setPassword]=useState("");

const SignupUser=(e)=>{
e.preventDefault()
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
   console.log("userCredential" ,userCredential)
  })
  .catch((error) => {
console.log("error" , error)
  });
}

  return (
    <div className='signup'>

    <form onSubmit={SignupUser}>
     <label>
      Email:
      <input type="email" placeholder='Enter Your Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
     </label>
     <br />
     <label htmlFor="">

     Password:
     <input type="text" placeholder='Enter Your Password' value={password} onChange={(e)=>setPassword(e.target.value)} />
     </label>
     <br />
     <button>Sign Up</button>
    </form>
    </div>


  )
}

export default Signup