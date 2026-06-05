import './App.css';
import Sigin from "./pages/Sigin";
import Login from "./pages/Login";
import { Routes , Route } from 'react-router-dom';

function App() {
  
  return (
    <div className="App">
      

      <Routes>
        <Route path="/Sigin" element={<Sigin/>}/>
        <Route path="/Login" element={<Login/>}/>  
        
      </Routes>
    </div>
  );
}

export default App;
