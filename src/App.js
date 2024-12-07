import React from 'react';
import './App.css';
import RovelinStudio from './components/RovelinStudio';
import Ourproducts from './components/Ourproducts';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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

function App() {
  return (
    <Router>
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
    </Router>
  );
}

export default App;
