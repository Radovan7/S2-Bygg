import "./HeroImgStyles.css"

import React from 'react'

import IntroImg from "../assets/IMG_0940.jpg"

import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
  <div className="hero">
    <div className="mask">
      <img className="into-img"
      src={IntroImg} alt="IntroImg" />
    </div>
    <div className="content">
      <h1>Plats för nya möjligheter</h1>
      <p>Vi är det breda expertföretaget inom ...</p>
    </div>
 </div>
  );
};

export default HeroImg;