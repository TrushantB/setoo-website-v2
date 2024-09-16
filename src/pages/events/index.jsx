import React from "react";



import Events from "@/components/events";
import Wrapper from "@/layout/wrapper";

const index = () => {
  const seo = {
    metaTitle: "Setoo Events - Get latest Events updates",
    metaImage: "https://www.setoo.co/assets/img/setoo-og.png",
    metaDescription: "Get latest Events updates",
    metaSocial: [
      {
        socialNetwork: "Twitter",
        title:
          "Setoo Blog - Get latest blog insights on AI driven software solutions",
        description: "Get latest blog insights on AI driven software solutions",
        image: {
          url: "https://www.setoo.co/assets/img/setoo-og.png",
          alt: "Setoo",
        },
        card: "summary_large_image",
        url: "https://www.setoo.co/blog",
      },
      {
        socialNetwork: "Facebook",
        title:
          "Setoo Blog - Get latest blog insights on AI driven software solutions",
        description: "Get latest blog insights on AI driven software solutions",
        image: {
          url: "https://www.setoo.co/assets/img/setoo-og.png",
          alt: "Setoo",
        },
        url: "https://www.setoo.co/blog",
      },
    ],
    canonicalURL: "https://www.setoo.co/blog",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Setoo - AI Driven software solutions company",
      url: "https://www.setoo.co",
      logo: "https://www.setoo.co/assets/img/setoo-og.png",
      sameAs: [
        "https://www.facebook.com/setoo/",
        "https://www.linkedin.com/company/setoos/",
        "https://www.instagram.com/setooists/",
      ],
    },
  };
  return (
    <Wrapper seo={seo}>
      <Events />
    </Wrapper>
  );
};

export default index;
