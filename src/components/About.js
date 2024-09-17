import React from 'react'
import './RovelinStudio.css'


function About() {
  return (
    <div>
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
    </div>
  )
}

export default About