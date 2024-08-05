import React from "react";
import SEO from "../common/seo";
import Wrapper from "../layout/wrapper";
import RemoteResourcing from "@/components/remote-resourcing.jsx";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Setoo - AI Web studio"} />
      <RemoteResourcing />
    </Wrapper>
  );
};

export default index;
