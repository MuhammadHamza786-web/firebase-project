import './App.css';
import Sigin from "./pages/Sigin";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import {Navigate , Routes , Route } from 'react-router-dom';
import {  useState } from 'react';
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";

function App() {
  
  return (
    <div className="App">
      
      <Routes>
        <Route path="/Sigin" element={<Sigin/>}/>
        <Route path="/Signup" element={<Signup/>}/>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="*" element={<Navigate to={"/"}/>}/>
      </Routes>
    </div>
  );
}

export default App;
