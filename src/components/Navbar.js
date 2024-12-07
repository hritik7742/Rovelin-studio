import React from 'react';
import { Link } from 'react-router-dom';
import './RovelinStudio.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          <h1>ROVELIN</h1>
        </Link>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/About">About</Link>
          <Link to="/Services">Services</Link>
          <Link to="/Our-products">Products</Link>
          <Link to="/Pricing">Pricing</Link>
<<<<<<< HEAD
          <Link to="/blog">Blog</Link>
=======
>>>>>>> 478ee55812f3f63c96be07cdc3220bc85489043f
          <Link to="/Contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;