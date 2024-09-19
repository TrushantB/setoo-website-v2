import Breadcrumb from "../../components/ml-developer/breadcrumb";
import FooterFour from "@/layout/footers/footer-4";
import Header from "@/layout/headers/header";
import React from "react";
import JobArea from "../../components/ml-developer/job-area";
import CtaArea from "../../components/ml-developer/cta-area";
import CareerDetailsArea from "../../components/ml-developer/career-details-area";

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
