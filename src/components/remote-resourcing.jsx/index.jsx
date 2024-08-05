import Header from "@/layout/headers/header";
import FooterFour from "@/layout/footers/footer-4";
import React from "react"; 
import FaqArea from "./faq-area";
import HeroArea from "./hero-area";
import TechStack from "./techstack";
import BlogArea from "./blog-area";
import ContactFormArea from "./contact-form-area";

const RemoteResourcing = () => {
  return (
    <>
      <Header />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <HeroArea />
            <ContactFormArea />
            <TechStack />
            <BlogArea />
            <FaqArea style_service={true} />
          </main>
          <FooterFour />
        </div>
      </div>
    </>
  );
};

export default RemoteResourcing;
