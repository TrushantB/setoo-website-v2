import React from "react";
import SEO from "../common/seo";
import Ai from "../components/ai";
import Wrapper from "../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Setoo - AI Web studio"} />
      <Ai />
    </Wrapper>
  );
};

export default index;
