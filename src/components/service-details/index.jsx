import BreadcrumbTwo from "@/common/breadcrumbs/breadcrumb-2";
import TestimonialArea from "@/common/testimonial-area";
import FooterFive from "@/layout/footers/footer-5";
import Header from "@/layout/headers/header";
import React from "react";
import ServiceDetailsArea from "./service-details-area";

const ServiceDetails = () => {
  return (
    <>
      <Header />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <BreadcrumbTwo title="Web Design" innertitle="Help Desk Service Details" />
            <ServiceDetailsArea />
            <TestimonialArea />
          </main>
          <FooterFive style_contact={true} style_team={true} bg_style={false} />
        </div>
      </div>
    </>
  );
};

export default ServiceDetails;
