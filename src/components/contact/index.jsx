import FooterFour from "@/layout/footers/footer-4";
import Header from "@/layout/headers/header";
import React, { useEffect } from "react";
import Breadcrumb from "../../common/breadcrumbs/breadcrumb";
import ContactFormArea from "./contact-form-area";
import ContactInner from "./contact-inner";
import CtaArea from "./cta-area";
import HeroBanner from "../../common/hero-banner";
import OfficeLocation from "./office-location";
import { useRouter } from "next/navigation";

const Contact = () => {
  const router = useRouter();

  useEffect(() => {
    const handleScrollToSection = () => {
      const section = document.getElementById('scheduleMeeting');
      if (section && window.location.hash === '#scheduleMeeting') {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    };

    // Run on initial load
    handleScrollToSection();

    // Check when the component mounts
    handleScrollToSection();
  }, [router]);
  
  return (
    <>
      <Header />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <Breadcrumb title_top="Get In" title_bottom="Get In" />
            <HeroBanner bg_img="/assets/img/contact/contact-banner.webp" />
            <OfficeLocation />
            <ContactFormArea />
            <ContactInner />
            <CtaArea />
          </main>
          <FooterFour />
        </div>
      </div>
    </>
  );
};

export default Contact;
