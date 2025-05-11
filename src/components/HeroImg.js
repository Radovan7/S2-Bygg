import "./HeroImgStyles.css";
import React from 'react';

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <div className="into-img"></div> 
      </div>
      <div className="content">
        <h2>Plats för nya möjligheter</h2>
        <p>
          Vi är ett brett expertföretag inom bygg med spetskompetens inom snickeri.
        </p>
        <p>
          Vi erbjuder även tjänster inom plattsättning och köksrenovering.
        </p>
      </div>
    </div>
  );
};

export default HeroImg;
