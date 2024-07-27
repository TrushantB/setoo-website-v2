import BreadcrumbEight from "@/common/breadcrumbs/breadcrumb-8";
import FooterFour from "@/layout/footers/footer-4";
import Header from "@/layout/headers/header";
import React from "react";
import WorkArea from "../homes/home/work-area";
import WorkDetailsArea from "./work-details-area";
import ThumbArea from "./thumb-area";

const ProjectDetails = () => {
  return (
    <>
      <Header />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <BreadcrumbEight />
            <ThumbArea />
            <WorkDetailsArea />
            <WorkArea />
          </main>
          <FooterFour />
        </div>
      </div>
    </>
  );
};

export default ProjectDetails;
