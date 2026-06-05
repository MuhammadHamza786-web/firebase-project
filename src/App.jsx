import './App.css';
import Sigin from "./pages/Sigin";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import {Navigate , Routes , Route } from 'react-router-dom';
import {  useState } from 'react';
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";

function App() {
  const firebaseConfig = {
  apiKey: "AIzaSyDnMnkoIi1UHXq5YiWqApN3MrPfbMbiuFU",
  authDomain: "first-project-aa20b.firebaseapp.com",
  projectId: "first-project-aa20b",
  storageBucket: "first-project-aa20b.firebasestorage.app",
  messagingSenderId: "988183070309",
  appId: "1:988183070309:web:87dcab69295ddc043ae88c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
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
