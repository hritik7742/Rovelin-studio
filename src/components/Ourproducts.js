import React from 'react'
import './RovelinStudio.css'
import LeadSpry from '../images/Leadspry.png'

function Ourproducts() {
  return (
    <div>
         <section className="our-products">
          <h2 style={{textAlign:"center"}}>Our Products</h2>
          <div className="product">
            <div className="content">
              <h3>Leadspry</h3>
              <p>
                LeadSpry is a Chrome extension designed to help businesses and freelancers efficiently find leads across any niche. It allows you to collect valuable contact information such as emails, phone numbers, and locations, helping you generate high-quality leads quickly and efficiently.
              </p>
              <div className="buttons">
                <button className="secondary">install</button>
                <button className="secondary">use here</button>
              </div>
            </div>
            <div className="logo">
              <img src={LeadSpry} alt="Leadspry Logo" />
            </div>
          </div>
        </section>
    </div>
  )
}

export default Ourproducts