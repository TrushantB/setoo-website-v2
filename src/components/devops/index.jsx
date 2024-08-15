import Header from "@/layout/headers/header";
import FooterFour from "@/layout/footers/footer-4";
import React from "react"; 
import CtaArea from "./cta-area";
import FaqArea from "./faq-area";
import HeroArea from "./hero-area";
import BenefitsArea from "./benefits-area";
import ServiceArea from "./service-area";
import CaseStudies from "./case-studies";
import TechStack from "./techstack";
import BlogArea from "./blog-area";

const Devops = () => {
  return (
    <>
      <Header />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <HeroArea />
            <BenefitsArea />
            <ServiceArea style_service={true} />
            <TechStack />
            {/* <CaseStudies /> */}
            {/* <BlogArea /> */}
            <FaqArea style_service={true} />
            <CtaArea />
          </main>
          <FooterFour />
        </div>
      </div>
    </>
  );
};

export default Devops;
