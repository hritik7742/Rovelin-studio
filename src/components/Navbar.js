import React from 'react'
import './RovelinStudio.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };

  return (
    <div>
     <header>
        <div className="header-container">
          <div className="logo">ROVELIN STUDIO</div>
          <div className="menu-icon" onClick={toggleMenu}>☰</div>
          <nav className={isMenuOpen ? 'active' : ''}>

          <li><Link to="/">Home</Link></li>
          <li><Link to="/About">About</Link></li>
          <li><Link to="/Pricing">Pricing</Link></li>
          <li><Link to="/Our-products">Our product</Link></li>
          <li><Link to="/Contact">Contact</Link></li>
          
       
          </nav>
        </div>
      </header>
    </div>
  )
}

export default Navbar