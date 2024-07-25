import FooterFive from "@/layout/footers/footer-5";
import Header from "@/layout/headers/header";
import React from "react"; 
import HeroArea from "./hero-area";
import ServiceArea from "./service-area";
import WebStudioServices from "./web-studio-services";
import CaseStudies from "./case-studies";

const WebStudio = () => {
  return (
    <>
      <Header />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <HeroArea />
            <ServiceArea />
            <WebStudioServices />
            <CaseStudies/>
          </main>
          <FooterFive style_contact={true} style_team={true} />
        </div>
      </div>
    </>
  );
};

export default WebStudio;
