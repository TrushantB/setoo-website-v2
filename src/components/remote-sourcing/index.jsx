import Header from "@/layout/headers/header";
import FooterFour from "@/layout/footers/footer-4";
import React from "react"; 
import BenefitsArea from "./benefits-area";
import FaqArea from "./faq-area";
import HeroArea from "./hero-area";
import TechStack from "./techstack";
import BlogArea from "./blog-area";
import ContactFormArea from "./contact-form-area";
import FunFactArea from "./fun-fact-area";
import ProcessArea from "./process-area";

const RemoteResourcing = () => {
  return (
    <>
      <Header />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <HeroArea />
            <BenefitsArea />
            {/* <BrandArea /> */}
            <FunFactArea />            
            {/* <TechStack /> */}
            <ContactFormArea />
            <ProcessArea />
            {/* <BlogArea /> */}
            <FaqArea style_service={true} />
          </main>
          <FooterFour />
        </div>
      </div>
    </>
  );
};

export default RemoteResourcing;
