import React from "react";
import SEO from "../common/seo";
import Wrapper from "../layout/wrapper";
import ProductDevelopment from "@/components/product-development";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Setoo - Web studio"} />
      <ProductDevelopment />
    </Wrapper>
  );
};

export default index;
