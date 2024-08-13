import React from "react";
import SEO from "../common/seo";
import Wrapper from "../layout/wrapper";
import RemoteSourcing from "@/components/remote-sourcing/index";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Setoo - AI Web studio"} />
      <RemoteSourcing />
    </Wrapper>
  );
};

export default index;
