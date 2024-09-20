import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './RovelinStudio.css'

const products = [
  { id: 'Leadspry', name: 'Leadspry', policy: `
Effective Date: 20-09-2024
Leadspry  is committed to protecting your privacy. This privacy policy explains how our Chrome extension operates and what information we do or do not collect.

1. Information We Collect
Leadspry does not collect, store, or share any personal data or user information. The extension is designed to facilitate searches for publicly available leads and contact information on various platforms. All search inputs and results are processed locally within your browser and are not transmitted to any external servers.

2. Use of Permissions
Leadspry requests certain browser permissions, including:
* activeTab: This permission allows the extension to access the current active webpage, enabling users to initiate searches and scrape publicly available contact details.
* tabs: This permission is used to manage browser tabs during the lead generation process.
* scripting: This permission allows the extension to extract data from the web pages being searched.
These permissions are necessary for the functionality of Leadspry and do not involve data collection or storage.

3. Third-Party Websites
Leadspry allows users to extract publicly available data from websites and social media platforms. We encourage users to respect the privacy policies and terms of service of the websites they visit. Leadspry is designed to help you discover publicly available information and does not retain any collected information.

4. Cookies
Leadspry does not use cookies to track users or collect information.

5. Changes to This Privacy Policy
We may update this privacy policy from time to time. If there are significant changes, we will notify users by updating the effective date at the top of this page. Users are encouraged to review this policy periodically for any updates.

6. Contact Us
If you have any questions or concerns about our privacy practices, please contact us at hritikchoudharykota@gmail.com. ADD THIS , THIS IS OUR EXTENSION PRODUCT PRIVACY PAGE`
    
     },
     {id: 'Second product', name: 'email writer', policy: `launching soon...`}
  
 
];

const PrivacyPolicy = () => {
  const navigate = useNavigate();
  const { productId } = useParams();
  const [selectedProduct, setSelectedProduct] = useState(productId || 'product1');

  useEffect(() => {
    if (productId && products.some(p => p.id === productId)) {
      setSelectedProduct(productId);
    }
  }, [productId]);

  const handleProductChange = (event) => {
    const value = event.target.value;
    setSelectedProduct(value);
    navigate(`/Privacy-policy/${value}`);
  };

  const currentPolicy = products.find(p => p.id === selectedProduct)?.policy || '';

  return (
    <div className="privacy-policy-container">
      <h1 className="privacy-policy-title">Privacy Policy</h1>
      <div className="select-container">
        <select 
          value={selectedProduct} 
          onChange={handleProductChange}
          className="product-select"
        >
          {products.map((product) => (
            <option key={product.id} value={product.id}>
              {product.name}
            </option>
          ))}
        </select>
      </div>
      <div className="policy-content">
        <h2 className="policy-product-title">
          {products.find(p => p.id === selectedProduct)?.name} Privacy Policy
        </h2>
        <p className="policy-text">{currentPolicy}</p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;