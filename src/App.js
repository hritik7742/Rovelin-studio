import React from 'react';
<<<<<<< HEAD
=======
import logo from './logo.svg';
>>>>>>> 478ee55812f3f63c96be07cdc3220bc85489043f
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
<<<<<<< HEAD
import BlogList from './components/Blog/BlogList';
import BlogPost from './components/Blog/BlogPost';
=======
>>>>>>> 478ee55812f3f63c96be07cdc3220bc85489043f

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
<<<<<<< HEAD
            <Route path="/blog" element={<BlogList />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
=======
>>>>>>> 478ee55812f3f63c96be07cdc3220bc85489043f
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
