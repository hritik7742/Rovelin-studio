import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './RovelinStudio.css';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
            <div className="header-container">
                <Link to="/" className="logo">
                    ROVELIN STUDIO
                </Link>
                <div className="menu-icon" onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <nav className={isMenuOpen ? 'active' : ''}>
                    <ul>
                        <li>
                            <Link 
                                to="/" 
                                className={location.pathname === '/' ? 'active' : ''}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to="/About" 
                                className={location.pathname === '/About' ? 'active' : ''}
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to="/Our-products" 
                                className={location.pathname === '/Our-products' ? 'active' : ''}
                            >
                                Products
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to="/Pricing" 
                                className={location.pathname === '/Pricing' ? 'active' : ''}
                            >
                                Pricing
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to="/Contact" 
                                className={location.pathname === '/Contact' ? 'active' : ''}
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Navbar;