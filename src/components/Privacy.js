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
      `},

  {id: 'ImageXtract', name: 'ImageXtract', policy:`
    
Privacy Policy for ImageXtract

Last updated: 30-09-2024

Thank you for using ImageXtract. This privacy policy explains how we collect, use, and protect your information when you use our Chrome extension that allows you to extract text from images on the web and uploaded images. Your privacy is important to us, and we are committed to ensuring that your personal information is secure.

1. Information We Collect
Our extension does not collect any personal information. Specifically, the extension operates entirely within your browser and does not transmit or store any data to our servers. However, to ensure transparency, here’s a breakdown of the different types of data involved:

Text Extraction from Webpage Areas: When you select an area on a webpage to extract text, this action is performed locally in your browser. The selected image or text is never sent to our servers or any third-party service.

Uploaded Images: If you upload an image from your device to extract text, the image and the extracted text remain local to your browser. No uploaded image or text is stored, shared, or sent outside your local environment.

Cropped Images: When you crop an uploaded image for partial text extraction, the cropped area and resulting text are handled entirely within your browser and are not transmitted elsewhere.

2. Data Usage
Since the extension operates fully within your browser and does not send data to any external servers, we do not collect or process any user data. All the operations related to text extraction from images happen locally on your device.

3. Third-Party Services
ImageXtract does not use any third-party analytics, data collection, or tracking services. The extension is designed to prioritize user privacy by ensuring all actions remain confined to your browser.

4. Data Security
While we do not store or transmit any user data, we prioritize maintaining a secure and privacy-conscious extension. Your image selections, uploads, and text extractions are never exposed to external networks or servers, ensuring that sensitive or private data from images remains secure on your device.

5. User Control
As a user of ImageXtract, you maintain full control over the actions taken with the extension:

Select and Crop Images: You can select areas on webpages or upload images and crop them to focus on specific areas for text extraction. No part of this process is visible to or shared with any third party.

Clear Data: Since all data remains local to your browser, once you close or refresh the page, the images and extracted text are discarded and are no longer accessible.

6. Permissions
The extension requires the following permissions to function:

Access to Webpage Content: This permission is necessary to allow you to select areas on a webpage for text extraction. The extension only accesses the webpage content you manually select and does not monitor or access other parts of your browsing activity.

Upload Local Images: The upload feature allows you to choose images from your device for text extraction. The extension does not access any files without your explicit action to upload an image.

7. Changes to This Privacy Policy
We may update this privacy policy from time to time. Any changes will be reflected on this page with an updated revision date at the top. We encourage you to review this privacy policy periodically to stay informed about how we are protecting your privacy.

8. Contact Us
If you have any questions or concerns regarding this privacy policy or how your information is handled, please feel free to contact us at Hritikchoudharykota@gmail.com

This privacy policy emphasizes the fact that your extension does not collect or share any user data, highlighting the privacy-conscious nature of the tool. Feel free to adjust specific details like the extension's name or contact information.

    ` }
  ,{
   id: 'Maintab', name: 'MainTab', policy:`Privacy Policy for MainTab Extension

At MainTab, your privacy is of utmost importance to us. This Privacy Policy outlines how we handle your data when you use our Chrome extension to manage and organize your tabs. By using MainTab, you agree to the collection and use of information as described in this policy.

1. Information We Collect
MainTab is designed to help you manage and group your tabs efficiently. In doing so, we may collect minimal data related to the functionality of the extension:

Tabs Information: We collect information about your open tabs solely for the purpose of helping you manage them within groups. This information includes the URLs, tab titles, and their group assignments.

Extension Usage Data: We collect anonymous usage data (e.g., how often you use MainTab features, performance statistics) to help us improve the extension.

2. How We Use Your Information
Tab Management: The information collected about your tabs is used to allow you to group, organize, and manage your open tabs more effectively.

Improvement of Services: Usage data is analyzed to enhance the functionality and user experience of MainTab. This data is not linked to any personally identifiable information and is used purely for development purposes.

3. No Personal Data Collection
MainTab does not collect, store, or share any personally identifiable information (PII). We do not track, store, or have access to any sensitive data such as usernames, passwords, or browsing history beyond the open tabs you choose to manage within the extension.

4. Data Sharing
We do not sell, trade, or otherwise transfer any of your information to outside parties. All tab management operations occur locally on your device. We do not transmit or store any tab data on external servers.

5. Third-Party Services
MainTab does not use any third-party analytics, advertising, or tracking services. The extension operates entirely on your local machine, ensuring your tab information remains private and secure.

6. Your Consent
By using the MainTab Chrome extension, you consent to this privacy policy.

7. Changes to This Privacy Policy
We reserve the right to update or modify this privacy policy at any time. Any changes will be reflected on this page, and your continued use of the extension after such changes constitutes your acceptance of the new terms.

8. Contact Us
If you have any questions or concerns about this Privacy Policy or how your information is handled, please contact us at hritikkumarkota@gmail.com`
  },
  {id: 'filteredyoutube', name: 'FilteredYoutube', policy: `Filtered YouTube Privacy Policy

Last Updated: 10-10-2024

Filtered YouTube (the "Extension") is committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and safeguard your information when using our Chrome extension.

1. Information We Collect
Filtered YouTube does not collect, store, or share any personal data. The extension operates entirely on your device and only interacts with the YouTube website to hide or display specific elements based on your settings. No browsing data, personal information, or YouTube activities are transmitted to our servers or third-party services.

2. Permissions
The Extension requires access to specific permissions in your browser, such as:

Read and change your data on youtube.com: This permission allows the extension to modify the YouTube interface to hide shorts, comments, recommendations, and other elements according to your preferences.
We do not use these permissions to track, monitor, or collect any data about your YouTube activity.

3. Third-Party Services
Filtered YouTube does not use any third-party services or trackers. The Extension operates locally on your device, ensuring that your data remains private and secure.

4. Data Security
Since Filtered YouTube does not collect any personal data, there is no risk of data breaches or unauthorized sharing of your information. All modifications made by the Extension are strictly limited to the visual elements of YouTube and are confined to your browsing experience.

5. User Control
You have full control over how Filtered YouTube interacts with your YouTube browsing. You can enable or disable any features within the Extension's settings at any time. If you wish to stop using the Extension, you can easily uninstall it from your browser without leaving any residual data.

6. Changes to This Policy
We may update this Privacy Policy from time to time. Any changes will be reflected in the "Last Updated" date at the top of this page. Continued use of the Extension after any changes indicates your acknowledgment and acceptance of the updated policy.

7. Contact Us
If you have any questions or concerns about this Privacy Policy or the Extension, feel free to contact us at hritikchoudharykota@gmail.com.
`}
,{id:'cssscanly', name:'CSS Scanly policy' , policy:`
  
Privacy Policy for CSS Scanly

Effective Date: 15-10-2024

At CSS Scanly, your privacy is important to us. This Privacy Policy outlines the types of information we collect, how we use it, and the measures we take to ensure your data is protected while using our Chrome extension. By using CSS Scanly, you agree to the collection and use of information in accordance with this policy.

1. Information We Collect
CSS Scanly does not collect or store any personal information. The extension is designed to provide users with the ability to view and edit CSS properties on webpages they visit. We do not collect:

Personal data (such as name, email address, or phone number)
Browsing history or activities
Sensitive information
2. How CSS Scanly Works
CSS Scanly operates locally within your browser. It interacts with the content of the webpage you are viewing to display the CSS properties of specific HTML tags when you hover over them with your mouse. The extension does not transmit any data to external servers or third parties.

3. Permissions
In order to function correctly, CSS Scanly requires permission to access the webpages you visit. This access is used solely to allow the extension to read and display the CSS of the elements on the page. We do not track or store any information about your browsing activity.

4. Third-Party Services
CSS Scanly does not use or integrate with any third-party analytics, tracking tools, or services that could collect your data. The extension is fully self-contained and runs within your browser environment.

5. Data Security
Since CSS Scanly does not collect or transmit any personal data, there are no additional security risks associated with the use of this extension. However, we recommend always using security best practices when browsing the internet.

6. Changes to This Privacy Policy
We may update our Privacy Policy from time to time to reflect any changes in the extension's functionality or legal requirements. Any changes will be posted on this page with the updated effective date. We encourage you to review this page periodically for any updates.

7. Contact Us
If you have any questions or concerns about this Privacy Policy or the use of CSS Scanly, please contact us at hritikkumarkota@gmail.com
`}
,{
  id: 'seocheckup', name: 'SEO Checkup', policy: `

Here's a privacy policy for your SEO CheckUp extension:

Privacy Policy for SEO CheckUp Chrome Extension

Effective Date:18-10-2024

Introduction

Welcome to SEO CheckUp. We are committed to protecting your privacy and providing transparency about how we handle your data. This Privacy Policy explains our practices regarding the collection, use, and disclosure of information through our Chrome extension.

Information We Collect

2.1 Website Data: When you use SEO CheckUp to analyze a webpage, we collect and process information from that page, including but not limited to:

URL

Page content

HTML structure

Meta tags

Image data

Link information

2.2 Usage Data: We collect anonymous usage statistics to improve our service, including:

Features used

Frequency of use

Error reports

2.3 User Settings: We store your extension preferences locally on your device.

How We Use Your Information

We use the collected information to:

Provide SEO analysis and recommendations

Improve and optimize our extension

Troubleshoot and fix issues

Data Storage and Security

4.1 Local Storage: User preferences and temporary analysis data are stored locally on your device using Chrome's storage API.

4.2 Server-side Processing: Some advanced features may require server-side processing. In such cases, data is transmitted securely and is not stored permanently on our servers.

4.3 Security Measures: We implement appropriate technical and organizational measures to protect your data against unauthorized access or disclosure.

Data Sharing and Disclosure

We do not sell, rent, or share your personal information with third parties. We may share anonymous, aggregated data for analytical purposes.

Your Rights and Choices

You can:

Disable or uninstall the extension at any time

Clear locally stored data through Chrome's settings

Changes to This Policy

We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Effective Date" at the top.

Contact Us

If you have any questions about this Privacy Policy, please contact us at . hritikchoudharykota@gmail.com

Consent

By using SEO CheckUp, you consent to our Privacy Policy and agree to its terms.
  

  `
}
,
{
   id: 'youtube-stats-viewer', name: 'YouTube Stats Viewer', policy: `
   
   # Privacy Policy for YouTube Stats Viewer

Last Updated: November 13, 2024

## Introduction

Welcome to the Privacy Policy for YouTube Stats Viewer ("we," "our," or "the extension"). This Privacy Policy is designed to help you understand how our browser extension collects, uses, and safeguards information when you use our service.

## Information Collection and Use

### What Information We Collect

Our extension collects only the following limited information:
1. YouTube Video IDs: When you visit YouTube videos or Shorts
2. Public Video Statistics: Including likes, dislikes, views, and engagement metrics from the Return YouTube Dislike API

### What Information We DO NOT Collect

We want to be clear that we DO NOT collect:
- Personal identification information
- Names or email addresses
- Login credentials
- Payment information
- Browsing history outside of YouTube
- IP addresses or location data
- Any user-generated content
- Cookies or tracking data

## How We Use Information

The collected information is used solely for:
1. Displaying video statistics within the YouTube interface
2. Showing dislike counts on videos and Shorts
3. Calculating engagement metrics for the current video

All data processing occurs locally in your browser. No information is stored on external servers.

## Data Sharing and Disclosure

We do not:
- Sell any user data
- Share information with third parties
- Transfer data for advertising purposes
- Use data for any purpose beyond the extension's core functionality

The only external communication our extension makes is to the Return YouTube Dislike API to fetch public video statistics.

## Data Security

We implement appropriate technical measures to protect against unauthorized access, alteration, disclosure, or destruction of information. All data processing occurs locally within your browser environment.

## Third-Party Services

Our extension uses the Return YouTube Dislike API (returnyoutubedislikeapi.com) to fetch video statistics. Please refer to their privacy policy for information about how they handle data.

## Children's Privacy

Our extension does not knowingly collect any personal information from children under 13. The extension simply displays public video statistics available through YouTube's platform.

## Changes to This Privacy Policy

We may update our Privacy Policy from time to time. We will notify users of any material changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.

## Your Rights

You have the right to:
- Know what data is being collected
- Access the data being collected
- Remove the extension at any time
- Contact us with questions about data handling

## Browser Permissions

Our extension requires specific permissions to function:
- "activeTab": To access and modify YouTube page content
- "tabs": To detect URL changes between videos
- Access to youtube.com: To display statistics on YouTube pages

These permissions are used solely for the extension's core functionality of displaying video statistics.

## Contact Information

If you have any questions or concerns about this Privacy Policy, please contact us at:
hritikkumarkota@gmail.com

## Compliance

This extension complies with:
- Chrome Web Store Developer Program Policies
- General Data Protection Regulation (GDPR)
- California Consumer Privacy Act (CCPA)

## Consent

By installing and using our extension, you agree to the terms outlined in this Privacy Policy.

## Additional Information

- The extension is open-source, and its code can be reviewed on GitHub
- We maintain transparency about all data handling practices
- Users can uninstall the extension at any time through their browser settings

This Privacy Policy was last updated on November 13, 2024.

   `
}
,
{
  id: 'fullpagescreenshot', name: 'FullPageScreenshot', policy: `
  
Privacy Policy for FullPageScreenshot Extension
Last Updated: 20 nov 2024

Introduction
FullPageScreenshot ("we," "our," or "the extension") is committed to protecting your privacy. This policy explains our data practices and your privacy rights when using our browser extension.

Data Collection
2.1 Screenshot Content

We capture webpage content only when explicitly requested by the user.
Screenshots are processed and stored locally on your device.
No automatic or background capture occurs.
2.2 Local Storage

Recent screenshots are temporarily stored in browser local storage.
User preferences and settings are saved locally.
All stored data remains on your device.
2.3 Non-Collection Statement
We DO NOT collect:

Personal identification information.
Browsing history.
Authentication data.
Financial information.
Communication content.
Location data.
Usage analytics.
Data Usage

3.1 Purpose Limitation
Screenshots are used solely for user-initiated capture and editing.
Local storage is used only for maintaining recent screenshots and preferences.
No data mining or analysis is performed.

3.2 Data Processing
All processing occurs locally on your device.
No cloud processing or external servers are used.
No data is transmitted over the internet.
Data Storage

4.1 Location
All data is stored locally in your browser.
No external or cloud storage is used.
Data persistence is limited to browser local storage.

4.2 Duration
Recent screenshots are stored temporarily.
Users can clear data through browser settings.
Automatic cleanup of old data occurs periodically.
User Rights & Control

5.1 Data Access
All captured screenshots are immediately accessible.
Local storage can be viewed through browser settings.
No hidden or inaccessible data storage.

5.2 Data Deletion
Users can delete screenshots immediately after capture.
Browser local storage can be cleared at any time.
No residual data remains on external servers.
Security

6.1 Data Protection
Local processing ensures data security.
No network transmission of screenshot data.
Standard browser security protects local storage.

6.2 Risk Mitigation
No external data exposure risk.
No cloud storage vulnerabilities.
No network transmission risks.
Third-Party Access
No data sharing with third parties.
No external service integrations.
No analytics or tracking services.

Warning
This extension is not intended for copying or misusing content or data from any website. You are solely responsible for any misuse of this extension, and we strongly warn against using it for unlawful or unauthorized activities. Use this tool only for your personal and professional tasks.

Updates to Privacy Policy

Users will be notified of policy changes.
Updates will be reflected in the Web Store listing.
Version history will be maintained.
Contact Information
[hritikkumarkota@gmail.com](mailto:hritikkumarkota@gmail.com)

Compliance
This extension complies with:

Chrome Web Store Developer Program Policies.
General Data Protection Regulation (GDPR).
California Consumer Privacy Act (CCPA).
  
  `
}


 
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