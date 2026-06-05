import './App.css';
import Sigin from "./pages/Sigin";
import Login from "./pages/Login";
import dashboard from "./pages/dashboard";
import {Navigate , Routes , Route } from 'react-router-dom';
import { useEffect , useState } from 'react';
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";

function App() {
  
  return (
    <div className="App">
      

      <Routes>
        <Route path="/" element={<dashboard/>}/>
        <Route path="/Sigin" element={<Sigin/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="*" element={<Navigate to={"/"}/>}/>

        
      </Routes>
    </div>
  );
}

export default App;
