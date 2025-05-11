import React from 'react';
import { Link } from 'react-router-dom';
import React1 from "../assets/IMG_2574.jpg";
import React2 from "../assets/IMG_5058.JPG";
import './AboutContentStyles.css'; 

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Om oss</h1>
        <p>
          Med många års erfarenhet i branschen erbjuder vi helhetslösningar för både små och stora projekt. 
          Oavsett om du behöver hjälp med en komplett köksrenovering eller mindre snickeriarbeten, kan du lita på att vi levererar kvalitet från start till mål.
        </p>
        <Link to="/contact">
          <button className="btn">Kontakt</button>
        </Link>
      </div>

      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={React1} className="img" alt="Köksrenovering" loading="lazy" />
          </div>
          <div className="img-stack bottom">
            <img src={React2} className="img" alt="Snickeriarbeten" loading="lazy" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;