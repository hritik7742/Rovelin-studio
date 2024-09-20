// File: src/components/RovelinStudio.js
import React from 'react';
import LeadSpry from '../images/Leadspry.png'
import web from '../images/web.jpg'
import Pricing from './Pricing';
import Ourproducts from './Ourproducts';
import Navbar from './Navbar';
import Contact from './Contact';
import About from './About';
import { Link } from 'react-router-dom';
import './RovelinStudio.css'

const RovelinStudio = () => {


  return (
    <div className="mainbox">
     
     {/* <Navbar/> */}
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

  <About/>    


      <Pricing/>
       
       <Contact/>
      </main>

      <footer>
        <h2>ROVELIN</h2>
        <p className="tagline">Empowering the Future, One Solution at a Time.</p>
        <p className="contact-bio">
          At Rovelin Studio, our mission is to develop innovative software, apps, and extensions that solve global challenges and create meaningful impact. We are committed to delivering cutting-edge solutions that empower businesses and enhance lives worldwide.
        </p>
        <div className='bottam-nav'  style={{display:"flex"}} >

        <li><Link to="/">Home</Link></li>
          <li><Link to="/About">About</Link></li>
          <li><Link to="/Pricing">Pricing</Link></li>
          <li><Link to="/Our-products">Our product</Link></li>
          <li><Link to="/Privacy-policy">Privacy Policy</Link></li>
          <li><Link to="/Contact">Contact</Link></li>

        </div>
        <p className="copyright">© 2023 All Rights Reserved. Rovelin Studio</p>
      </footer>
    </div>
  );
};

export default RovelinStudio;
