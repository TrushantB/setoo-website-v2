import FooterFive from "@/layout/footers/footer-5";
import Header from "@/layout/headers/header";
import React from "react"; 
import CtaArea from "../contact/cta-area";
import FaqArea from "../homes/home-2/faq-area";
import HeroArea from "./hero-area";
import ServiceArea from "./service-area";
import Aiservice from "./ai-services";
import Capabilities from "./capabilities";
import CaseStudies from "./case-studies";
import TechStack from "./techstack";

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
            <FaqArea style_service={true} />
            <CtaArea />
          </main>
          <FooterFive style_contact={true} style_team={true} />
        </div>
      </div>
    </>
  );
};

export default Ai;
