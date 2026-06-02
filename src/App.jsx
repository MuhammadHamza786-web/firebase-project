import './App.css';
import Sigin from "./pages/Sigin";
import Login from "./pages/Login";
import Home from  "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { Routes , Route } from 'react-router-dom';

function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>  
        <Route path="/Contact" element={<Contact/>}/>  
        <Route path="/Sigin" element={<Sigin/>}/>
        <Route path="/Login" element={<Login/>}/>  
        
      </Routes>
    </div>
  );
}

export default App;
