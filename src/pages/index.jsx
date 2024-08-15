
'use client';

import React from "react";
import SEO from "../common/seo";
import Wrapper from "../layout/wrapper";
import HomeFour from "@/components/homes/home-4";

const Home = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Setoo - AI-Driven Software Solutions"} />
      <HomeFour />
    </Wrapper>
  );
};

export default Home;
