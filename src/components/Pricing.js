


// import React, { useState } from 'react';
// // import './PricingStyles.css';

// const productData = {
//   'Website Builder': {
//     plans: [
//       {
//         name: 'Starter',
//         price: '$19',
//         period: '/ month',
//         features: [
//           'Basic features',
//           '1 user',
//           '5GB storage',
//           'Email support'
//         ],
//         buttonText: 'Choose Starter'
//       },
//       {
//         name: 'Pro',
//         price: '$49',
//         period: '/ month',
//         features: [
//           'Advanced features',
//           '5 users',
//           '50GB storage',
//           'Priority support'
//         ],
//         buttonText: 'Choose Pro'
//       },
//       {
//         name: 'Ultra',
//         price: '$99',
//         period: '/ month',
//         features: [
//           'All features',
//           'Unlimited users',
//           '500GB storage',
//           '24/7 phone support'
//         ],
//         buttonText: 'Choose Ultra'
//       }
//     ]
//   },
//   'Website manager': {
//     plans: [
//       {
//         name: 'new',
//         price: '$5',
//         period: '/ month',
//         features: [
//           'Basic features',
//           '1 user',
//           '5GB storage',
//           'Email support'
//         ],
//         buttonText: 'Choose Starter'
//       },
//       {
//         name: 'Pro',
//         price: '$49',
//         period: '/ month',
//         features: [
//           'Advanced features',
//           '5 users',
//           '50GB storage',
//           'Priority support'
//         ],
//         buttonText: 'Choose Pro'
//       },
//       {
//         name: 'Ultra',
//         price: '$99',
//         period: '/ month',
//         features: [
//           'All features',
//           'Unlimited users',
//           '500GB storage',
//           '24/7 phone support'
//         ],
//         buttonText: 'Choose Ultra'
//       }
//     ]
//   },
//   // Add more products here if needed
// };

// function Pricing() {
//   const [selectedProduct, setSelectedProduct] = useState('Website Builder');

//   return (
//     <div className="pricing-container">
//       <h1>Pricing Plans for Website Builder</h1>
//       <p className="subtitle">Choose the perfect plan for your needs</p>
      
//       <div className="pricing-grid">
//         <div className="product-selection">
//           <h2>Select Product</h2>
//           <p>Choose the product you want to price</p>
//           <select 
//             value={selectedProduct} 
//             onChange={(e) => setSelectedProduct(e.target.value)}
//           >
//             {Object.keys(productData).map((product) => (
//               <option key={product} value={product}>{product}</option>
//             ))}
//           </select>
//         </div>
        
//         {productData[selectedProduct].plans.map((plan, index) => (
//           <div key={index} className={`plan-card ${plan.name.toLowerCase()}`}>
//             <h2>{plan.name}</h2>
//             <div className="price">
//               <span className="amount">{plan.price}</span>
//               <span className="period">{plan.period}</span>
//             </div>
//             <ul className="features">
//               {plan.features.map((feature, featureIndex) => (
//                 <li key={featureIndex}>
//                   <span className="checkmark">✓</span> {feature}
//                 </li>
//               ))}
//             </ul>
//             <button className="choose-plan">{plan.buttonText}</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Pricing;




import './RovelinStudio.css';
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';


const productData = {
  'leadspry': {
    displayName: 'Leadspry',
    plans: [
      {
        name: 'Starter',
        price: '$19',
        period: '/ month',
        features: [
          'Basic features',
          '1 user',
          '5GB storage',
          'Email support'
        ],
        buttonText: 'Choose Starter'
      },
      {
        name: 'Pro',
        price: '$49',
        period: '/ month',
        features: [
          'Advanced features',
          '5 users',
          '50GB storage',
          'Priority support'
        ],
        buttonText: 'Choose Pro'
      },
      {
        name: 'Ultra',
        price: '$99',
        period: '/ month',
        features: [
          'All features',
          'Unlimited users',
          '500GB storage',
          '24/7 phone support'
        ],
        buttonText: 'Choose Ultra'
      }
    ]
  },
  'WA Group Finder': {
    displayName: 'WA Group Finder',
    plans: [
      {
        name: 'Starter',
        price: '$0',
        period: '/ year',
        features: [
          'Basic features',
          '1 user',
          '5GB storage',
          'Email support'
        ],
        buttonText: 'Choose Starter'
      },
      {
        name: 'Pro',
        price: '$0',
        period: '/ month',
        features: [
          'Advanced features',
          '5 users',
          '50GB storage',
          'Priority support'
        ],
        buttonText: 'Choose Pro'
      },
      {
        name: 'Ultra',
        price: '$0',
        period: '/ month',
        features: [
          'All features',
          'Unlimited users',
          '500GB storage',
          '24/7 phone support'
        ],
        buttonText: 'Choose Ultra'
      }
    ]
  },
  // Add more products here as needed
};

function Pricing() {
  const { productName } = useParams();
  const navigate = useNavigate();
  const [selectedProduct, setSelectedProduct] = useState(productName || 'leadspry');

  useEffect(() => {
    if (productName && productData[productName]) {
      setSelectedProduct(productName);
    } else if (productName && !productData[productName]) {
      // Handle invalid product names
      navigate('/Our-products/leadspry/pricing', { replace: true });
    }
  }, [productName, navigate]);

  const handleProductChange = (e) => {
    const newProduct = e.target.value;
    setSelectedProduct(newProduct);
    navigate(`/Our-products/${newProduct}/pricing`, { replace: true });
  };

  return (
    <div className="pricing-container">
      <h1>Pricing Plans for {productData[selectedProduct].displayName}</h1>
      <p className="subtitle">Choose the perfect plan for your needs</p>
      
      <div className="pricing-grid">
        <div className="product-selection">
          <h2>Select Product</h2>
          <p>Choose the product you want to price</p>
          <select 
            value={selectedProduct} 
            onChange={handleProductChange}
          >
            {Object.entries(productData).map(([key, value]) => (
              <option key={key} value={key}>{value.displayName}</option>
            ))}
          </select>
        </div>
        
        {productData[selectedProduct].plans.map((plan, index) => (
          <div key={index} className={`plan-card ${plan.name.toLowerCase()}`}>
            <h2>{plan.name}</h2>
            <div className="price">
              <span className="amount">{plan.price}</span>
              <span className="period">{plan.period}</span>
            </div>
            <ul className="features">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex}>
                  <span className="checkmark">✓</span> {feature}
                </li>
              ))}
            </ul>
            <button className="choose-plan">{plan.buttonText}</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Pricing;