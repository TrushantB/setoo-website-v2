import FooterFive from "@/layout/footers/footer-5";
import Header from "@/layout/headers/header";
import React from "react"; 
import HeroArea from "./hero-area";
import AboutPd from "./about-pd";
import ServiceArea from "./service-area";
import TechStack from "./techstack";
import CaseStudies from "./case-studies";

const ProductDevelopment = () => {
  return (
    <>
      <Header />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <HeroArea />
            <AboutPd />
            <ServiceArea />
            <TechStack />
            <CaseStudies />
          </main>
          <FooterFive style_contact={true} style_team={true} />
        </div>
      </div>
    </>
  );
};

export default ProductDevelopment;
