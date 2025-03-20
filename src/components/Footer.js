import "./FooterStyles.css";
import React from "react";
import { FaFacebook, FaHome, FaMailBulk, FaPhone, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3>S2 Bygg AB</h3> 
          <div className="contact-item">
            <FaHome size={20} />
            <a href="https://www.google.com/maps/place/Backluravägen+15B,+149+43+Nynäshamn/" target="_blank" rel="noopener noreferrer">
              BACKLURAVÄGEN 15 B<br />149 43 Nynäshamn
            </a>
          </div>
        </div>
        <div className="footer-column">
          <h3>Kontakta oss</h3>
          <div className="contact-item"><FaPhone size={20} /><a href="tel:+46700039072">+46 70 003 9072</a></div>
          <div className="contact-item"><FaMailBulk size={20} /><a href="mailto:s2byggab@outlook.com">s2byggab@outlook.com</a></div>
          <div className="org-number"><span>Org.nr: 559431-9013</span></div>
        </div>
        <div className="footer-column">
          <h3>Följ oss på sociala medier</h3> 
          <div className="social">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" title="S2 Bygg AB på Facebook"><FaFacebook size={24} /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" title="S2 Bygg AB på Instagram"><FaInstagram size={24} /></a>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; {currentYear} S2 Bygg AB. Alla rättigheter förbehållna.</p>
      </div>
    </div>
  );
};

export default Footer;
