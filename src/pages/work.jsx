import React from "react";
import SEO from "../common/seo";
import Work from "../components/work";
import Wrapper from "../layout/wrapper";

const indx = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Setoo - Data analytics"} />
      <Work />
    </Wrapper>
  );
};

export default indx;
