import Header from "@/layout/headers/header";
import FooterFour from "@/layout/footers/footer-4";
import React from "react"; 
import HeroArea from "./hero-area";
import Brand from "./brand";
import TechStack from "./techstack";
import CaseStudies from "./case-studies";
import BlogArea from "./blog-area";
import FaqArea from "./faq-area";
import JourneyArea from "./journey-area";
import ProductService from "./service-area";
import BenefitArea from "./benefit-area";
import CtaArea from "./cta-area";

const ProductDevelopment = () => {
  return (
    <>
      <Header />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <HeroArea />
            <Brand />
            <BenefitArea />
            <ProductService />
            <TechStack />
            <CaseStudies />
            <JourneyArea />
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

export default ProductDevelopment;
