import React from "react";
import SEO from "../common/seo";
import WorkDetails from "../components/work-details";
import Wrapper from "../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Setoo - Data analytics"} />
      <WorkDetails />
    </Wrapper>
  );
};

export default index;
