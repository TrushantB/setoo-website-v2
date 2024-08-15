import React from "react";
import SEO from "../common/seo";
import Wrapper from "../layout/wrapper";
import Devops from "@/components/devops";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Setoo - AI Web studio"} />
      <Devops />
    </Wrapper>
  );
};

export default index;
