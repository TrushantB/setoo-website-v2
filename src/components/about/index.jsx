import AboutArea from "@/common/about-area";
import Header from "@/layout/headers/header";
import FooterFour from "@/layout/footers/footer-4";
import React from "react";
import Breadcrumb from "../../common/breadcrumbs/breadcrumb";
import HeroBanner from "../../common/hero-banner";
import CtaArea from "./cta-area";
import Brand from "./brand";
import CompanyArea from "./company-area";
import JobArea from "./job-area";
import JourneyArea from "./journey-area";
import TestimonialArea from "./testimonial-area";
 
const About = () => {
  return (
    <>
      <Header />
      <Breadcrumb title_top="About"  title_bottom="Setoo" />
      <HeroBanner title="About" subtitle="Setoo" bg_img="/assets/img/setoo-team-discussion.webp" />
      <Brand />
      <CompanyArea />
      {/* <AboutArea /> */}
      {/* <JourneyArea /> */}
      <TestimonialArea />
      <JobArea />
      <CtaArea />
      <FooterFour />
    </>
  );
};

export default About;
