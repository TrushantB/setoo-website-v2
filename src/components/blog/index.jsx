import BreadcrumbTwo from "@/common/breadcrumbs/breadcrumb-2";
import FooterFour from "@/layout/footers/footer-4";
import Header from "@/layout/headers/header";
import React from "react";
import CtaArea from "../contact/cta-area";
import Portfolio from "./portfolio";
import PostboxArea from "./postbox-area";

const Blog = () => {
  return (
    <>
      <Header />
      <main>
        <BreadcrumbTwo title={"Read our blogs"} innertitle={"Blog"} />
        <PostboxArea />
        {/* <Portfolio /> */}
        <CtaArea />
      </main>
      <FooterFour />
    </>
  );
};

export default Blog;
