import "./FooterStyles.css";
import React, { useEffect, useState } from "react";
import { FaFacebook, FaHome, FaMailBulk, FaPhone, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      const userAgent = navigator.userAgent || navigator.vendor || window.opera;
      if (/android|iPad|iPhone|iPod/i.test(userAgent)) {
        setIsMobile(true);
      }
    };
    
    checkMobile();
  }, []);
  
  const facebookUrl = isMobile 
    ? "fb://page/579825491880638" 
    : "https://www.facebook.com/S2BYGGAB"; 
  
  const handleFacebookClick = (e) => {
    if (isMobile) {
      window.location.href = "fb://page/579825491880638";
      setTimeout(() => {
        window.location.href = "https://www.facebook.com/S2BYGGAB";
      }, 2000);
      
      e.preventDefault();
    }
  };
  
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
            <a 
              href={facebookUrl} 
              onClick={handleFacebookClick}
              target="_blank" 
              rel="noopener noreferrer" 
              title="S2 Bygg AB på Facebook"
            >
              <FaFacebook size={24} />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" title="S2 Bygg AB på Instagram"><FaInstagram size={24} /></a>
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