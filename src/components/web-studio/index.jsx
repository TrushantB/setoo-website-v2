import Header from "@/layout/headers/header";
import FooterFour from "@/layout/footers/footer-4";
import React from "react"; 
import HeroArea from "./hero-area";
import ServiceArea from "./service-area";
import WebStudioServices from "./web-studio-services";
import CaseStudies from "./case-studies";
import BlogArea from "./blog-area";
import FaqArea from "./faq-area";
import BrandArea from "./brand-area";
import CtaArea from "./cta-area";
import TechStack from "./techstack";

const WebStudio = () => {
  return (
    <>
      <Header />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <HeroArea />
            <BrandArea />
            {/* <ServiceArea /> */}
            <WebStudioServices />
            <CaseStudies/>
            <TechStack />
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

export default WebStudio;
