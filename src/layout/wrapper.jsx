import React, { useEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
// middleware
gsap.registerPlugin(ScrollTrigger);
// internal
import ScrollToTop from "@/hooks/scroll-to-top";
import { animationCreate } from "../../utils/utils";
import SEO from "@/common/seo";
import Head from "next/head";


const Wrapper = ({ children, seo = {} }) => {
  useEffect(() => {
    // animation
    setTimeout(() => {
      animationCreate();
    }, 100);
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
      </Head>
      <SEO seo={seo} />
      {children}
      <ScrollToTop />
    </>
  );
};

export default Wrapper;
