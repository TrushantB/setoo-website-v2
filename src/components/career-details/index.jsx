import BreadcrumbTwo from "@/common/breadcrumbs/breadcrumb-2";
import FooterFour from "@/layout/footers/footer-4";
import Header from "@/layout/headers/header";
import React from "react";
import JobArea from "../about/job-area";
import CtaArea from "../contact/cta-area";
import CareerDetailsArea from "./career-details-area";

const CareerDetails = () => {
  return (
    <>
      <Header />
      <main>
      <BreadcrumbTwo title={"Careers Details"} innertitle={" Careers page"} career_details={true} />
      <CareerDetailsArea />
      <JobArea style_carrer={true}/>
      <CtaArea />
      </main>
      <FooterFour />
    </>
  );
};

export default CareerDetails;
