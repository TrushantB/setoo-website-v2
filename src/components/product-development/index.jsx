import Header from "@/layout/headers/header";
import FooterFour from "@/layout/footers/footer-4";
import React from "react"; 
import HeroArea from "./hero-area";
import AboutPd from "./about-pd";
import DevOpsService from "./service-area";
import TechStack from "./techstack";
import CaseStudies from "./case-studies";
import BlogArea from "./blog-area";
import FaqArea from "./faq-area";
import JourneyArea from "./journey-area";

const ProductDevelopment = () => {
  return (
    <>
      <Header />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <HeroArea />
            <AboutPd />
            <DevOpsService />
            <TechStack />
            <CaseStudies />
            <JourneyArea />
            <BlogArea />
            <FaqArea  style_service={true} />
          </main>
          <FooterFour />
        </div>
      </div>
    </>
  );
};

export default ProductDevelopment;
