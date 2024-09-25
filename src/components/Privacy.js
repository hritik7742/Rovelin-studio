import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './RovelinStudio.css'

const products = [
  { id: 'leadspry', name: 'Leadspry', policy: `
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
     {id: 'WA-Group-Finder', name: 'WA Group Finder', policy: `
Last Updated: 25/09/2024

# 1. Introduction

Welcome to the WhatsApp Group Finder ("the Extension", "we," "our," or "us"). We are committed to protecting your privacy and ensuring you have a positive experience when using our browser extension. This policy outlines our practices concerning the collection, use, and disclosure of your information.

The WhatsApp Group Finder is a browser extension designed to help users discover WhatsApp groups based on their interests and preferences. We understand the importance of your privacy and have designed our extension with data minimization and user control in mind.

# 2. Information We Collect

Our extension operates on a principle of minimal data collection. We do not collect, store, or transmit any personal information to our servers. All operations occur locally within your browser. However, it's important to understand what information is used during the extension's operation:

a) User Inputs:
   - Website selection (including custom website input)
   - Keywords for group search
   - Desired number of groups to find

b) Search Results:
   - Group names
   - WhatsApp group invite links

These inputs and results are processed and displayed locally in your browser and are not stored persistently by our extension.

# 3. How We Use Information

The information you provide is used solely for the purpose of enhancing your experience with the WhatsApp Group Finder extension. Specifically:

a) Search Query Generation: Your selected website (or "All websites" option) and keywords are used to construct search queries. These queries are sent to Google's search engine to find relevant WhatsApp groups.

b) Results Processing: The extension processes the search results to extract WhatsApp group information, including group names and invite links.

c) Display of Results: The processed information is displayed within the extension's user interface for your convenience.

d) Join and Copy Functionality: The extension provides buttons to directly join groups or copy invite links, utilizing the information from the search results.

We do not use your information for any other purposes, such as profiling, advertising, or analytics.

# 4. Data Sharing and Disclosure

We are committed to maintaining your privacy and do not engage in selling, renting, or trading any information. The extension's operations are confined to your local browser environment, with the following exceptions:

a) Search Queries: When you initiate a search, a query is sent to Google's search engine. This query includes your selected website (if applicable) and keywords. Please note that this interaction is subject to Google's privacy policy.

b) WhatsApp Interactions: When you choose to join a group, you will be redirected to WhatsApp's website or app. Any subsequent interactions, including joining the group, are governed by WhatsApp's privacy policy and terms of service.

We do not have access to or control over these third-party interactions.

# 5. Data Security

As we do not collect or store personal data on our servers, the risk of a data breach on our end is minimized. However, we have implemented the following measures to ensure the security of your interaction with our extension:

a) Local Processing: All data processing occurs locally in your browser, reducing the risk of unauthorized access.

b) Minimal Data Usage: We only use the information necessary for the extension's core functionality.

c) No Persistent Storage: The extension does not maintain any persistent storage of your searches or results.

While we take these precautions, please be aware that no method of internet transmission or electronic storage is 100% secure. We encourage users to be cautious when joining WhatsApp groups, as these are operated by third parties and may have their own privacy practices.

# 6. Your Choices and Rights

We believe in providing you with control over your data and interaction with our extension:

a) Input Control: You have full control over the information you input into the extension, including which websites to search and what keywords to use.

b) Result Interaction: You can choose which groups to join or which links to copy, if any.

c) Browser Controls: You can use your browser's built-in controls to clear local storage and cookies, which will remove any temporary data stored by the extension.

d) Extension Removal: You can choose to disable or remove the extension at any time through your browser's extension management interface.

# 7. Children's Privacy

Our extension is not intended for use by children under the age of 13. We do not knowingly collect or solicit personal information from children under 13. If you are under 13, please do not use the Extension or provide any information to us. If we learn we have collected or received personal information from a child under 13 without verification of parental consent, we will delete that information. If you believe we might have any information from or about a child under 13, please contact us at the email address provided in the Contact Us section.

# 8. International Data Transfers

The WhatsApp Group Finder extension is designed to work globally. By using our extension, you acknowledge that the searches you perform and the results you receive may cross international borders, even though we do not collect or store this information. The privacy laws in your country may differ from those in the countries where the search results originate.

# 9. Changes to This Privacy Policy

We may update this privacy policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the new privacy policy on this page and updating the "Last Updated" date at the top of this privacy policy. You are advised to review this privacy policy periodically for any changes.

# 10. Contact Us

If you have any questions about this privacy policy, our data practices, or your interactions with the extension, please contact us at:

hritikkumarkota@gmail.com

We will respond to your inquiries as soon as possible.

# 11. Legal Compliance and Data Protection Rights

Depending on your jurisdiction, you may have certain data protection rights. While we do not collect personal data, we respect and aim to honor these rights where applicable:

- The right to access
- The right to rectification
- The right to erasure
- The right to restrict processing
- The right to object to processing
- The right to data portability

If you wish to exercise any of these rights, please contact us using the information provided in the Contact Us section.

# 12. Use of Google Services

Our extension utilizes Google's search engine to find WhatsApp groups. This interaction is subject to Google's terms of service and privacy policy. We encourage you to review Google's privacy practices to understand how they handle search queries and results.

# 13. WhatsApp Interaction Disclaimer

While our extension helps you discover WhatsApp groups, we are not affiliated with, endorsed by, or in any way officially connected with WhatsApp or any of its subsidiaries or affiliates. The official WhatsApp website can be found at https://www.whatsapp.com.

When you join a WhatsApp group through our extension:

a) You are leaving our extension's environment and entering WhatsApp's platform.
b) You become subject to WhatsApp's terms of service and privacy policy.
c) You may be exposing your WhatsApp profile information to the group's members.
d) You are responsible for your interactions within these groups.

We strongly encourage you to review the privacy settings in your WhatsApp account and be cautious about sharing personal information in groups.

# 14. Security Practices

While we don't store your data, we've implemented security best practices in our extension's code:

a) Regular code audits to identify and fix potential vulnerabilities.
b) Use of HTTPS for any external communications (e.g., Google searches).
c) Minimization of third-party dependencies to reduce potential security risks.

However, please note that no system is entirely secure. If you discover any security vulnerabilities, please report them to us immediately using the contact information provided.

# 15. Cookies and Local Storage

Our extension does not use cookies. It may use your browser's local storage temporarily to improve performance during a search session, but this data is not persisted after you close the extension popup.

# 16. Do Not Track Signals

Some browsers have incorporated "Do Not Track" (DNT) features that can send a signal to the websites you visit indicating you do not wish to be tracked. Because our extension doesn't track users across websites, we do not currently respond to DNT signals. However, you can usually choose to turn off online behavioral advertising yourself by visiting preferences-mgr.truste.com, www.aboutads.info/choices, or youronlinechoices.eu.

# 17. California Privacy Rights

If you are a California resident, you have the right to request information regarding the disclosure of your personal information to third parties for their direct marketing purposes. However, as we do not collect or share personal information, this right does not apply to our extension.

# 18. Conclusion

Your privacy is important to us. We've designed the WhatsApp Group Finder extension to be a useful tool while respecting your privacy and data protection rights. By using our extension, you agree to the practices described in this privacy policy. If you do not agree with this policy, please discontinue use of the extension immediately.

Remember, you are responsible for any information you choose to share when joining or participating in WhatsApp groups. Always exercise caution and good judgment when interacting with unknown parties online.

Thank you for trusting us with your group discovery needs. If you have any questions or concerns, please don't hesitate to contact us.
      `}
  
 
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