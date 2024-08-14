import React from "react";
import SEO from "../common/seo";
import Wrapper from "../layout/wrapper";
import WhatIsMvpApp from "@/components/what-is-mvp-app";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Setoo - Data analytics"} />
      <WhatIsMvpApp />
    </Wrapper>
  );
};

export default index;
