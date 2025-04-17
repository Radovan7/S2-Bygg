import "./NavbarStyles.css";
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";
import Logo from './Logo'; 

const Navbar = () => {
    const [click, setClick] = useState(false);
    const [color, setColor] = useState(false);
    const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');
    
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    
    const changeColor = () => {
        setColor(window.scrollY >= 100);
    };

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    };
    
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        document.body.setAttribute('data-theme', theme);
    }, [theme]);

    useEffect(() => {
        window.addEventListener('scroll', changeColor);
        return () => window.removeEventListener('scroll', changeColor);
    }, []);

    return (
        <div className={color ? "header header-bg" : "header"}>
            <Link to="/" className="logo-container">
                <Logo color="white" className="logo" />
                <h1>S2 Bygg AB</h1> 
            </Link>
            <div className="nav-right">
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li><Link to="/" onClick={closeMobileMenu}>Hem</Link></li>
                    <li><Link to="/project" onClick={closeMobileMenu}>Tjänster</Link></li>
                    <li><Link to="/about" onClick={closeMobileMenu}>Om oss</Link></li>
                    <li><Link to="/contact" onClick={closeMobileMenu}>Kontakta oss</Link></li>
                </ul>
                <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
                    {theme === 'light' ? <FaMoon /> : <FaSun />}
                </button>
                <div className="hamburger" onClick={handleClick}>
                    {click ? <FaTimes size={20} /> : <FaBars size={20} />}
                </div>
            </div>
        </div>
    );
};

export default Navbar;