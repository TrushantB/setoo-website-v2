import BreadcrumbTwo from "@/common/breadcrumbs/breadcrumb-2";
import FooterFive from "@/layout/footers/footer-5";
import Header from "@/layout/headers/header";
import React from "react";
import Portfolio from "../blog-details/portfolio";
import PostboxArea from "../blog-details/postbox-area";

const BlogDetailsTwo = () => {
  return (
    <>
      <Header />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main> 
            <BreadcrumbTwo title={"Read our blogs"} innertitle={"Blog"} />
            <PostboxArea style_details_2={true} />
            <Portfolio />
          </main>
          <FooterFive style_contact={true} style_team={true} bg_style={false} />
        </div>
      </div>
    </>
  );
};

export default BlogDetailsTwo;
