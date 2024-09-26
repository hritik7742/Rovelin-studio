

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './RovelinStudio.css';
import LeadSpry from '../images/Leadspry.png';
import Whatsapplogo from '../images/whatsapplogo.png'
// Import other product images as needed

const products = [
  {
    name: 'Leadspry',
    description: 'LeadSpry is a Chrome extension designed to help businesses and freelancers efficiently find leads across any niche. It allows you to collect valuable contact information such as emails, phone numbers, and locations, helping you generate high-quality leads quickly and efficiently.',
    image: LeadSpry,
    src:'https://chromewebstore.google.com/detail/leadspry-%E2%80%93-find-quality-l/blegkbedbdcoocieacjmpchfmcmdhfce'

  },
  {
    name: 'WA Group Finder',
    description: 'Discover WhatsApp groups across any niche with ease! Our extension helps you quickly find and join WhatsApp communities that match your interests, from hobbies and professional networks to local groups and global conversations. Whether you’re looking to connect, learn, or share, our tool is designed to help you find the perfect group, saving you time and effort. Explore endless opportunities for networking and engagement with just a few clicks',
    image: Whatsapplogo,
  },
 
];

function Ourproducts() {
  const navigate = useNavigate();

  const handleCheckPricing = (productName) => {
    const formattedProductName = productName.toLowerCase().replace(/\s+/g, '-');
    navigate(`/Our-products/${formattedProductName}/pricing`);
  };

  return (
    <div>
      <section className="our-products">
        <h2 style={{textAlign:"center"}}>Our Products</h2>
        {products.map((product, index) => (
          <div key={index} className="product">
            <div className="content">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <div className="buttons">
                <button className="secondary" onClick={()=>window.location.href=product.src}>Install</button>
                <button 
                  className="secondary" 
                  onClick={() => handleCheckPricing(product.name)}
                >
                  Check Pricing
                </button>
              </div>
            </div>
            <div className="logo">
              <img src={product.image} alt={`${product.name} Logo`} />
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Ourproducts;