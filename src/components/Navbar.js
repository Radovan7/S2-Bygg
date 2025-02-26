import "./NavbarStyles.css";

import React, {useState} from 'react'
import { Link } from 'react-router-dom';

import { FaBars, FaTimes } from "react-icons/fa";


const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const [color, setColor] = useState(false);
    const changeColor = () => {
        if(window.scrollY >= 100) {
            setColor(true);
        } else {
            setColor(false);
        }
    }

    window.addEventListener('scroll', changeColor);


  return (
    <div className={color ? "header header-bg" :
     "header"}>
        <Link to="/">
            <h1>S2 Bygg AB</h1>
        </Link>
        <ul className={click ? "nav-menu active" :
        "nav-menu"}>
            <li className="list">
                <Link to="/">Hem</Link>
            </li>
            <li>
                <Link to="/project">Projekt</Link>
            </li>
            <li>
                <Link to="/about">Om oss</Link>
            </li>
            
            <li>
                <Link to="/contact">Kontakta Oss</Link>
            </li>
        </ul>
        <div className="hamburger" onClick=
        {handleClick}>
            {click ? (
                <FaTimes size={20} style={{ color: "#fff" }} />
            ) : (
                <FaBars size={20} style={{ color: "#fff" }} />
            )}
        </div>
    </div>
  );
};

export default Navbar;