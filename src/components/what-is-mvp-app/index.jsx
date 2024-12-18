import BreadcrumbSix from "@/common/breadcrumbs/breadcrumb-6";
import FooterFive from "@/layout/footers/footer-5";
import Header from "@/layout/headers/header";
import React from "react";
import Banner from "./banner";
import Portfolio from "./portfolio";
import PostboxArea from "./postbox-area";

const WhatIsMvpApp = () => {
  return (
    <>
      <Header />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <BreadcrumbSix />
            <Banner />
            <PostboxArea />
            <Portfolio />
          </main>
          <FooterFive style_contact={true} style_team={true} bg_style={false} />
        </div>
      </div>
    </>
  );
};

export default WhatIsMvpApp;
