import React from "react";
import SEO from "../common/seo";
import Wrapper from "../layout/wrapper";
import WebStudio from "@/components/web-studio";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Setoo - Web studio"} />
      <WebStudio />
    </Wrapper>
  );
};

export default index;
