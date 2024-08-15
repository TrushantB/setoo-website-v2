import ContextProvider from "@/context/ContextProvider";
import FooterThree from "@/layout/footers/footer-3";
import Header from "@/layout/headers/header";
import React from "react";
import TestimonialArea from "../home-3/testimonial-area";
import BlogArea from "./blog-area";
import CardArea from "../../../common/card-area";
import CounterArea from "./counter-area";
import HeroArea from "./hero-area";
import IntegrationArea from "./integration-area";
import RatedArea from "./rated-area";
import SalesArea from "../../../common/sales-area";
import ServiceArea from "./service-area";
import AnimateMouse from "./AnimateMouse";

const HomeThree = () => {
  return (
    <ContextProvider>
      <AnimateMouse />
      <Header />
      <HeroArea />
      <CounterArea />
      <ServiceArea />
      <RatedArea />
      <CardArea />
      <SalesArea />
      <TestimonialArea />
      <IntegrationArea />
      <BlogArea />
      <FooterThree />
    </ContextProvider>
  );
};

export default HomeThree;
