import React from 'react';
import { Link } from 'react-router-dom';
import './RovelinStudio.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-main">
          <div className="footer-brand">
            <h2>ROVELIN</h2>
            <p className="tagline">Empowering the Future, One Solution at a Time.</p>
            <p className="contact-bio">
              At Rovelin Studio, our mission is to develop innovative software, apps, and extensions 
              that solve global challenges and create meaningful impact.
            </p>
          </div>
          
          <div className="footer-links">
            <div className="footer-section">
              <h3>Quick Links</h3>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/About">About</Link></li>
                <li><Link to="/Our-products">Products</Link></li>
                <li><Link to="/Pricing">Pricing</Link></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h3>Legal</h3>
              <ul>
                <li><Link to="/Privacy-policy">Privacy Policy</Link></li>
                <li><Link to="/Terms">Terms of Service</Link></li>
                <li><Link to="/Contact">Contact Us</Link></li>
              </ul>
            </div>

            <div className="footer-section">
              <h3>Contact</h3>
              <ul>
                <li>Email: contact@rovelinstudio.com</li>
                <li>Location: India</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="copyright">© 2024 Rovelin Studio. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 