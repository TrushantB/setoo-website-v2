import AboutArea from "@/common/about-area";
import FooterFive from "@/layout/footers/footer-5";
import Header from "@/layout/headers/header";
import React from "react";
import Breadcrumb from "../../common/breadcrumbs/breadcrumb";
import HeroBanner from "../../common/hero-banner";
import CtaArea from "../contact/cta-area";
import TeamArea from "../homes/home-4/team-area";
import Brand from "./brand";
import CompanyArea from "./company-area";
import JobArea from "./job-area";
import JourneyArea from "./journey-area";
 
const About = () => {
  return (
    <>
      <Header />
      <Breadcrumb title_top="About"  title_bottom="Setoo" />
      <HeroBanner title="About" subtitle="Setoo" bg_img="/assets/img/setoo-team-discussion.webp" />
      <Brand />
      <CompanyArea />
      <AboutArea />
      {/* <TeamArea bg_style={true} /> */}
      <JourneyArea />
      <JobArea />
      <CtaArea />
      <FooterFive style_contact={true} style_team={true} />
    </>
  );
};

export default About;
