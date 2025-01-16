import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { initGA, logPageView } from './utils/analytics';
import logo from './logo.svg';
import './App.css';
import RovelinStudio from './components/RovelinStudio';
import Ourproducts from './components/Ourproducts';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import About from './components/About';
import Pricing from './components/Pricing';
import PrivacyPolicy from './components/Privacy';
import SocialBanner from './components/SocialBanner';
import Footer from './components/Footer';
import Services from './components/Services';
import BlogList from './components/Blog/BlogList';
import BlogPost from './components/Blog/BlogPost';

// Create a separate component for analytics tracking
const AnalyticsWrapper = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    // Track page views when route changes
    logPageView();
  }, [location]);

  return children;
};

function App() {
  useEffect(() => {
    // Initialize GA
    initGA();
  }, []);

  return (
    <Router>
      <AnalyticsWrapper>
        <div className="app">
          <SocialBanner />
          <Navbar />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<RovelinStudio />} />
              <Route path="/Our-products" element={<Ourproducts/>} />
              <Route path="/Contact" element={<Contact/>} />
              <Route path="/About" element={<About/>} />
              <Route path="/Pricing" element={<Pricing/>} />
              <Route path="/Privacy-policy" element={<PrivacyPolicy/>} />
              <Route path="/Privacy-policy/:productId?" element={<PrivacyPolicy />} />
              <Route path="/Our-products/:productName/pricing" element={<Pricing />} />
              <Route path="/Services" element={<Services />} />
              <Route path="/blog" element={<BlogList />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </AnalyticsWrapper>
    </Router>
  );
}

export default App;
