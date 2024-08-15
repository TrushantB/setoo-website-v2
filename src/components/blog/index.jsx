import BreadcrumbTwo from "@/common/breadcrumbs/breadcrumb-2";
import FooterFive from "@/layout/footers/footer-5";
import Header from "@/layout/headers/header";
import React from "react";
import CtaArea from "../contact/cta-area";
import BlogGrid from "./blog-grid";
import Portfolio from "./portfolio";

const Blog = () => {
  return (
    <>
      <Header />
      <main>
        <BreadcrumbTwo title={"Read our blogs"} innertitle={"Blog"} />
        <BlogGrid />
        <Portfolio />
        <CtaArea />
      </main>
      <FooterFive style_contact={true} style_team={true} />
    </>
  );
};

export default Blog;
