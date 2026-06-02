import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navbar">

      <div className="logo-space">
        {/* Yahan baad mein logo laga dena */}
      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Contact">Contact</Link>
      </div>

      <div className="auth-buttons">
        <Link to="/Login" className="btn-login">Login</Link>
        <Link to="/Sigin" className="btn-signup">Sign Up</Link>
      </div>

    </nav>
  );
};

export default Header;