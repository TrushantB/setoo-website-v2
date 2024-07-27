import BreadcrumbSeven from "@/common/breadcrumbs/breadcrumb-7";
import FooterFive from "@/layout/footers/footer-5";
import Header from "@/layout/headers/header";
import React from "react";
import CtaArea from "../contact/cta-area";
import Portfolio from "./portfolio";

const Work = () => {
  return (
    <>
      <Header />
      <main>
        <BreadcrumbSeven />
        <Portfolio />
        <CtaArea />
      </main>
      <FooterFive style_contact={true}  style_team={true} />
    </>
  );
};

export default Work;
