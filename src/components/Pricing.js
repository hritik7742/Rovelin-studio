import React from 'react'
import './RovelinStudio.css'


function Pricing() {
  return (
    <div>
     <section className="pricing">
          <h2 style={{textAlign:"center"}}>Pricing Plan</h2>
          <div className="plans">
            <div className="plan light">
              <h3>LIGHT</h3>
              <p>Suitable for Simple, Strategic Projects</p>
              <h4>$450</h4>
              <button className="secondary">Take Now</button>
              <ul>
                <li>✓ Light, clean and simple</li>
                <li>✓ One page layout</li>
                <li>✓ User & mobile friendly</li>
              </ul>
            </div>
            <div className="plan pro">
              <h3>PRO</h3>
              <p>Suitable for growing businesses</p>
              <h4>$850</h4>
              <button className="cta">Take Now</button>
              <ul>
                <li>✓ Power up your business - multiple site templates</li>
                <li>✓ Up to 5 pages</li>
                <li>✓ User & mobile friendly</li>
              </ul>
            </div>
            <div className="plan ultra">
              <h3>ULTRA</h3>
              <p>Suitable for people who just want the best</p>
              <h4>$1750+</h4>
              <button className="secondary">Show custom price</button>
              <ul>
                <li>✓ For large scale projects</li>
                <li>✓ Unlimited pages</li>
                <li>✓ Advanced integrations</li>
              </ul>
            </div>
          </div>
        </section>

    </div>
  )
}

export default Pricing