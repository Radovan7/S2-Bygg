import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import PricingCard from "../components/PricingCard";
import Work from "../components/Work";

const Project = () => {
  return <div>
    <Navbar />
    <HeroImg2 heading="VÅRA PROJEKT." 
    text={
      <>
        Här kan du titta på några av våra arbeten, såväl som pågående projekt.
        <br />
        Vi samarbetar med företag som IN3prenör och samtidigt med privatkunder.
      </>
    }
    />
    <Work />
    {/* <PricingCard /> */}
    <Footer />
  </div>;
};

export default Project;