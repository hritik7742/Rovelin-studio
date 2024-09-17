// import React from 'react'
// import './RovelinStudio.css'
// import LeadSpry from '../images/Leadspry.png'

// function Ourproducts() {
//   return (
//     <div>
//          <section className="our-products">
//           <h2 style={{textAlign:"center"}}>Our Products</h2>
//           <div className="product">
//             <div className="content">
//               <h3>Leadspry</h3>
//               <p>
//                 LeadSpry is a Chrome extension designed to help businesses and freelancers efficiently find leads across any niche. It allows you to collect valuable contact information such as emails, phone numbers, and locations, helping you generate high-quality leads quickly and efficiently.
//               </p>
//               <div className="buttons">
//                 <button className="secondary">install</button>
//                 <button className="secondary">check pricing</button>
//               </div>
//             </div>
//             <div className="logo">
//               <img src={LeadSpry} alt="Leadspry Logo" />
//             </div>
//           </div>
//         </section>
//     </div>
//   )
// }

// export default Ourproducts


import React from 'react';
import { useNavigate } from 'react-router-dom';
import './RovelinStudio.css';
import LeadSpry from '../images/Leadspry.png';
// Import other product images as needed

const products = [
  {
    name: 'Leadspry',
    description: 'LeadSpry is a Chrome extension designed to help businesses and freelancers efficiently find leads across any niche. It allows you to collect valuable contact information such as emails, phone numbers, and locations, helping you generate high-quality leads quickly and efficiently.',
    image: LeadSpry
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
                <button className="secondary">Install</button>
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