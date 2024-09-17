// File: src/components/RovelinStudio.js
import React from 'react';
import './RovelinStudio.css'
import LeadSpry from '../images/Leadspry.png'
import web from '../images/web.jpg'
import { useState } from 'react';
import Pricing from './Pricing';
import Ourproducts from './Ourproducts';

const RovelinStudio = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="mainbox">
     

     <header>
        <div className="header-container">
          <div className="logo">ROVELIN STUDIO</div>
          <div className="menu-icon" onClick={toggleMenu}>☰</div>
          <nav className={isMenuOpen ? 'active' : ''}>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#products">Our products</a>
            <a href="#contact">Contact</a>
            <a href="#signup">Sign Up</a>
          </nav>
        </div>
      </header>


      <main>
        <section className="leadspry-hero">
          <div className="content">
            <h1>Leadspry</h1>
            <p>
              LeadSpry is a Chrome extension designed to help businesses and freelancers efficiently find leads across any niche. It allows you to collect valuable contact information such as emails, phone numbers, and locations, helping you generate high-quality leads quickly and efficiently.
            </p>
            <button className="cta">DOWNLOAD EXTENSION</button>
          </div>
          <div className="logo">
            <img src={LeadSpry} alt="Leadspry Logo" />
          </div>
        </section>

        <div className="who_we_are">
        <h1>who are we ?</h1>
        <div className="image-container">
            <img src={web} alt="Rovelin Studio Illustration"/>
        </div>
        <p>
            We are Rovelin Studio, a agency driven by the mission to solve global problems through innovative solutions. We specialize in
            developing apps, extensions, and software that make a meaningful impact worldwide. Our goal is to create value and positively
            influence people's lives through our work.
        </p>
        <a href="#" className="btn">READ MORE</a>
    </div>

<Ourproducts/>

        <section className="why-choose-us">
          <h2>Why you should choose us</h2>
          <p>
            You should choose Rovelin Studio because we are committed to delivering innovative, high-quality solutions that address real-world challenges. Our passion is building impactful apps, extensions, and software that meet your needs but also bring value to your business and everyday life.
          </p>
          <div className="features">
            <div className="feature">
              <div className="icon">⚡</div>
              <h3>Innovative Thinking</h3>
              <p>Your focus on innovation ensures that you stay ahead of industry trends, driving unique solutions for evolving market needs.</p>
              <button className="secondary">Read More</button>
            </div>
            <div className="feature">
              <div className="icon">🔍</div>
              <h3>Problem-Solving Focus</h3>
              <p>Your approach is centered around understanding and addressing real-world challenges.</p>
              <button className="secondary">Read More</button>
            </div>
            <div className="feature">
              <div className="icon">🌐</div>
              <h3>Customer-Centric</h3>
              <p>You place the client at the core of your process, delivering solutions tailored to their specific needs.</p>
              <button className="secondary">Read More</button>
            </div>
          </div>
        </section>


      <Pricing/>
       
        <section className="contact">
          <form>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Subject" />
            <textarea placeholder="Message"></textarea>
            <button type="submit" className="cta">Send</button>
          </form>
        </section>
      </main>

      <footer>
        <h2>Contact now</h2>
        <p className="tagline">Empowering the Future, One Solution at a Time.</p>
        <p className="contact-bio">
          At Rovelin Studio, our mission is to develop innovative software, apps, and extensions that solve global challenges and create meaningful impact. We are committed to delivering cutting-edge solutions that empower businesses and enhance lives worldwide.
        </p>
        <p className="copyright">© 2023 All Rights Reserved. Rovelin Studio</p>
      </footer>
    </div>
  );
};

export default RovelinStudio;
