import Breadcrumb from "./breadcrumb";
import FooterFour from "@/layout/footers/footer-4";
import Header from "@/layout/headers/header";
import React from "react";
import JobArea from "./job-area";
import CtaArea from "./cta-area";
import CareerDetailsArea from "./career-details-area";

const CareerDetails = () => {
  return (
    <>
      <Header />
      <main>
      <Breadcrumb title={"Careers at Setoo"} innertitle={" Careers"} career_details={"ML Developer"} />
      <CareerDetailsArea />
      <JobArea style_carrer={true}/>
      <CtaArea />
      </main>
      <FooterFour />
    </>
  );
};

export default CareerDetails;
