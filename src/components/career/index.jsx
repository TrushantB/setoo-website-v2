import BreadcrumbThree from "@/common/breadcrumbs/breadcrumb-3";
import FooterFour from "@/layout/footers/footer-4";
import Header from "@/layout/headers/header";
import React from "react";
import JobArea from "./job-area";
import CtaArea from "./cta-area";
import CareerBanner from "./career-banner";

const Career = () => {
  return (
    <>
      <Header />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main> 
            <BreadcrumbThree />
            <CareerBanner />
              <JobArea style_carrer={true} />
            <CtaArea />
          </main>
          <FooterFour />
        </div>
      </div>
    </>
  );
};

export default Career;
