import logo from './logo.svg';
import './App.css';
import RovelinStudio from './components/RovelinStudio';
import Ourproducts from './components/Ourproducts';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import About from './components/About';
import Pricing from './components/Pricing';

function App() {
  return (
    <div className="App">
    
      <Router>
      <Navbar/>
          <Routes>
            <Route path="/" element={<RovelinStudio />} />
            <Route path="/Our-products" element={<Ourproducts/>} />
            <Route path="/Contact" element={<Contact/>} />
            <Route path="/About" element={<About/>} />
            <Route path="/Pricing" element={<Pricing/>} />
            <Route path="/Our-products/:productName/pricing" element={<Pricing />} />
            
            
          </Routes>
    </Router>
    </div>
  );
}

export default App;
