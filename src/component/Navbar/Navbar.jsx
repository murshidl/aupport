import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="navbar">
      <div className="navbar-logo">
        <h1>AnupRaikar.</h1>
      </div>

      {/* Hamburger Icon */}
      <div className="menu-icon" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      {/* Dropdown Menu */}
      {menuOpen && (
        <div className="dropdown-menu">
          <Link to="/" className="navbar-link">Home</Link>
          <Link to="/about" className="navbar-link">About</Link>
          <Link to="/project" className="navbar-link">Projects</Link>
          
          <Link to="/contact" className="navbar-link">Contact</Link>
        </div>
      )}

      {/* Desktop Links */}
      <div className="navbar-links">
        <Link to="/" className="navbar-link">Home</Link>
        <Link to="/about" className="navbar-link">About</Link>
        <Link to="/project" className="navbar-link">Projects</Link> {/* Replaced Services */}
        <Link to="/contact" className="navbar-link">Contact</Link>
      </div>
    </div>
  );
};

export default Navbar;
