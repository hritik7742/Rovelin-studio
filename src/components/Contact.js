import React, { useEffect } from 'react'
import './RovelinStudio.css'

const Contact = () => {
  useEffect(() => {
    document.title = "Contact Us | Rovelin Studio";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Get in touch with Rovelin Studio for custom software development, Chrome extensions, or any questions about our products and services.');
    }
  }, []);

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p className="contact-subtitle">We'd love to hear from you!</p>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="5" required></textarea>
        </div>
        <button type="submit" className="cta">Send Message</button>
      </form>
    </div>
  )
}

export default Contact