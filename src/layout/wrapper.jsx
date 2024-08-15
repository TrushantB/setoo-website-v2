import React, { useEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
// middleware
gsap.registerPlugin(ScrollTrigger);
// internal
import ScrollToTop from "@/hooks/scroll-to-top";
import { animationCreate } from "../../utils/utils";
import SEO from "@/common/seo";


const Wrapper = ({ children, seo = {} }) => {
  useEffect(() => {
    // animation
    setTimeout(() => {
      animationCreate();
    }, 100);
  }, []);

  return (
    <>
      <SEO seo={seo} />
      {children}
      <ScrollToTop />
    </>
  );
};

export default Wrapper;
