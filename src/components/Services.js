import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './RovelinStudio.css';

const Services = () => {
  const services = [
    {
      title: "Website Development",
      description: "Custom-built, responsive websites tailored to your business needs. From simple landing pages to complex e-commerce solutions.",
      features: ["Custom Design", "Responsive Layout", "SEO Optimization", "Performance Focused"],
      icon: "🌐"
    },
    {
      title: "Chrome Extensions",
      description: "Professional Chrome extension development to enhance browser functionality and improve user productivity.",
      features: ["Custom Development", "Store Publication", "Regular Updates", "Technical Support"],
      icon: "🧩"
    },
    {
      title: "Application Development",
      description: "Full-stack application development services for web and mobile platforms, built with modern technologies.",
      features: ["Web Applications", "Mobile Apps", "Cross-platform Solutions", "Scalable Architecture"],
      icon: "📱"
    },
    {
      title: "Custom Software Solutions",
      description: "Tailored software solutions to address your specific business challenges and requirements.",
      features: ["Requirements Analysis", "Custom Development", "Integration Services", "Ongoing Support"],
      icon: "💻"
    }
  ];

  useEffect(() => {
    document.title = "Our Services | Rovelin Studio";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Explore our comprehensive software development services including Chrome extensions, web applications, and custom software solutions tailored for your business needs.');
    }
  }, []);

  return (
    <div className="services-container">
      <div className="services-hero">
        <h1>Our Services</h1>
        <p>Professional Development Solutions for Your Business</p>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
            <ul className="service-features">
              {service.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
            <Link to="/Contact" className="service-cta">Get Started</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services; 