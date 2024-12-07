// File: src/components/RovelinStudio.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LeadSpry from '../images/Leadspry.png';
import Whatsapplogo from '../images/whatsapplogo.png';
import web from '../images/web.jpg';
import Contact from './Contact';
import About from './About';
import './RovelinStudio.css';


const RovelinStudio = () => {
  const heroProducts = [
    {
      name: 'Leadspry',
      description: 'LeadSpry is a Chrome extension designed to help businesses and freelancers efficiently find leads across any niche. It allows you to collect valuable contact information such as emails, phone numbers, and locations, helping you generate high-quality leads quickly and efficiently.',
      image: LeadSpry,
      src: 'https://chromewebstore.google.com/detail/leadspry-%E2%80%93-find-quality-l/blegkbedbdcoocieacjmpchfmcmdhfce'
    },
    {
      name: 'WA Group Finder',
      description: 'WA Group Finder is an innovative Chrome extension that helps users discover WhatsApp groups tailored to their interests. Find and join relevant groups effortlessly, connecting with like-minded individuals across various communities and professional networks.',
      image: Whatsapplogo,
      src: 'https://chromewebstore.google.com/detail/wa-group-finder-find-what/dnhlhdlclknabfhnchaldipcidafnodj?authuser=0&hl=en'
    },
    {
      name: 'ImageXtract',
      description: 'ImageXtract is a versatile Chrome extension that enables users to extract text from images on the web and uploaded images. Operating entirely within your browser, it ensures privacy while providing a seamless experience for converting image-based text.',
      image: web, // Replace with actual image path
      src: 'https://chromewebstore.google.com/detail/imagextract-copy-text-fro/enafhefnjpdnhbmccghnphjjlflohpkg?authuser=0&hl=en'
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    document.title = "Rovelin Studio | Innovative Software & Chrome Extension Development";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Rovelin Studio specializes in creating powerful Chrome extensions, web applications, and custom software solutions that drive business growth and innovation.');
    }
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => 
        prevSlide === heroProducts.length - 1 ? 0 : prevSlide + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [heroProducts.length]);

  return (
    <div className="mainbox">
      <main>
        <section className="hero-slider">
          {heroProducts.map((product, index) => (
            <div key={index} className={`slide ${currentSlide === index ? 'active' : ''}`}>
              <div className="content">
                <h1>{product.name}</h1>
                <p>{product.description}</p>
                <button 
                  className="cta"
                  onClick={() => window.location.href = product.src}
                >
                  DOWNLOAD EXTENSION
                </button>
              </div>
              <div className="logo">
                <img 
                  src={product.image} 
                  alt={`${product.name} Logo`} 
                />
              </div>
            </div>
          ))}
          <div className="slider-dots">
            {heroProducts.map((_, index) => (
              <button
                key={index}
                className={`dot ${currentSlide === index ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </section>

        <section className="services-preview">
          <h2>Our Services</h2>
          <p>Professional Development Solutions for Your Business Needs</p>
          <div className="services-preview-grid">
            <div className="service-preview-card">
              <div className="service-icon">🌐</div>
              <h3>Website Development</h3>
              <p>Custom-built, responsive websites tailored to your business needs.</p>
              <Link to="/Services" className="learn-more">Learn More →</Link>
            </div>
            <div className="service-preview-card">
              <div className="service-icon">🧩</div>
              <h3>Chrome Extensions</h3>
              <p>Professional Chrome extension development to enhance browser functionality.</p>
              <Link to="/Services" className="learn-more">Learn More →</Link>
            </div>
            <div className="service-preview-card">
              <div className="service-icon">📱</div>
              <h3>Application Development</h3>
              <p>Full-stack application development services for web and mobile platforms.</p>
              <Link to="/Services" className="learn-more">Learn More →</Link>
            </div>
          </div>
          <div className="services-cta">
            <Link to="/Services" className="cta">View All Services</Link>
          </div>
        </section>

        <div className="who_we_are">
          <h1>Who are we?</h1>
          <div className="image-container">
            <img src={web} alt="Rovelin Studio Illustration"/>
          </div>
          <p>
            We are Rovelin Studio, an agency driven by the mission to solve global problems through innovative solutions. We specialize in developing apps, extensions, and software that make a meaningful impact worldwide. Our goal is to create value and positively influence people's lives through our work.
          </p>
          <Link to="/About" className="btn">READ MORE</Link>
        </div>

        <About />
        <Contact />
      </main>

      
    </div>
  );
};

export default RovelinStudio;
