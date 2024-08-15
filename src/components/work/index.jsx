import BreadcrumbSeven from "@/common/breadcrumbs/breadcrumb-7";
import Header from "@/layout/headers/header";
import FooterFour from "@/layout/footers/footer-4";
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
      <FooterFour />
    </>
  );
};

export default Work;
