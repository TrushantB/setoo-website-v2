import Breadcrumb from "../../components/associate-hr/breadcrumb";
import FooterFour from "@/layout/footers/footer-4";
import Header from "@/layout/headers/header";
import React from "react";
import JobArea from "../../components/associate-hr/job-area";
import CtaArea from "../../components/associate-hr/cta-area";
import CareerDetailsArea from "../../components/associate-hr/career-details-area";

const CareerDetails = () => {
  return (
    <>
      <Header />
      <main>
      <Breadcrumb title={"Careers at Setoo"} innertitle={" Careers"} career_details={"Associate HR"} />
      <CareerDetailsArea />
      <JobArea style_carrer={true}/>
      <CtaArea />
      </main>
      <FooterFour />
    </>
  );
};

export default CareerDetails;
