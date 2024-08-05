import BreadcrumbTwo from "@/common/breadcrumbs/breadcrumb-2";
import FooterFour from "@/layout/footers/footer-4";
import Header from "@/layout/headers/header";
import React from "react";
import BlogGrid from "../blog/blog-grid";
import CtaArea from "../contact/cta-area";
import Portfolio from "./portfolio";
import PostboxArea from "./postbox-area";

const BlogList = () => {
  return (
    <>
      <Header />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <BreadcrumbTwo title={"Read our blogs"} innertitle={"Blog Grid Classic"} />
            <BlogGrid />
            <Portfolio />
            <PostboxArea />
            <CtaArea />
          </main>
          <FooterFour />
        </div>
      </div>
    </>
  );
};

export default BlogList;
