import React from 'react'

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroImg2 from '../components/HeroImg2';
import AboutContent from '../components/AboutContent';


const About = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="OM OSS" 
      text={
        <>
           Firma S2 Bygg AB ligger i Nynäshamn och sysslar med byggnation. <br />
           Vårt motto är att alltid möta våra uppskattade kunder och ge dem det de vill ha, och lite mer. 
        </>
      } />
      <AboutContent />
      <Footer />
    </div>
  )
}

export default About;