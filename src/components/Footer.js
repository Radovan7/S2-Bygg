import "./FooterStyles.css";

import React from "react";

import {
  FaFacebook,
  FaHome,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
            <a 
                href="https://www.google.com/maps/place/Backlurav%C3%A4gen+15B,+149+43+Nyn%C3%A4shamn/@58.9137267,17.9358904,17z/data=!3m1!4b1!4m6!3m5!1s0x465f5c2d9842af77:0x82c942f3e86be371!8m2!3d58.9137267!4d17.9384707!16s%2Fg%2F11c5f7jjm5?entry=ttu&g_ep=EgoyMDI0MTAwOC4wIKXMDSoASAFQAw%3D%3Dhttps://www.google.com/maps/search/?api=1&query=1234+Street+Name,+Sweden"
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ color: "#fff" }}
              >
                BACKLURAVÄGEN 15 B
                149 43 Nynäshamn
              </a>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              <a href="tel:+46700039072" style={{ color: "#fff" }}>+46 70 003 9072</a>
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              <a href="mailto:radosce0@gmail.com" style={{ color: "#fff" }}>radosce0@gmail.com</a>
            </h4>
          </div>
        </div>

        <div className="right">
          <h4>Org.nr.</h4>
          <p>
            559431-9013
          </p>
          <div className="social">
            <FaFacebook
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
            <FaTwitter
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
            <FaLinkedin
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
