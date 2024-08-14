import FooterFour from "@/layout/footers/footer-4";
import Header from "@/layout/headers/header";
import React from "react";
import BlogArea from "./blog-area";
import BrandArea from "./brand-area";
import ContactArea from "./contact-area";
import FunFactArea from "./fun-fact-area";
import HeroArea from "./hero-area";
import PlatformArea from "../../../common/platform-area";
import SecurityArea from "./security-area";
import ServiceArea from "./service-area";
import TestimonialArea from "../home-3/testimonial-area";
import Recognition from "./recognition";
import WorkArea from "./work-area";
import FaqArea from "./faq-area";

const HomeFour = () => {
  return (
    <> 
      <Header />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main className="fix">
            <HeroArea />
            <BrandArea />
            <ServiceArea />
            <FunFactArea />
            <WorkArea />
            <PlatformArea />
            <TestimonialArea />
            <SecurityArea />
            <BlogArea />
            <FaqArea />
            <Recognition />
            <ContactArea />
          </main>
          <FooterFour />
        </div>
      </div>
    </>
  );
};

export default HomeFour;
