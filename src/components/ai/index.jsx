import Header from "@/layout/headers/header";
import FooterFour from "@/layout/footers/footer-4";
import React from "react"; 
import CtaArea from "../contact/cta-area";
import FaqArea from "./faq-area";
import HeroArea from "./hero-area";
import ServiceArea from "./service-area";
import Aiservice from "./ai-services";
import Capabilities from "./capabilities";
import CaseStudies from "./case-studies";
import TechStack from "./techstack";
import BlogArea from "./blog-area";

const Ai = () => {
  return (
    <>
      <Header />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <HeroArea />
            <ServiceArea style_service={true} />
            <Aiservice/>
            <Capabilities/>
            <TechStack />
            <CaseStudies />
            <BlogArea />
            <FaqArea style_service={true} />
            <CtaArea />
          </main>
          <FooterFour />
        </div>
      </div>
    </>
  );
};

export default Ai;
