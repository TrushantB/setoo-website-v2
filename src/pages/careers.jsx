import React from "react";
import Career from "../components/career";
import Wrapper from "../layout/wrapper";

const index = () => {
  const seo = {
    metaTitle: "Careers at Setoo",
    metaImage: "/assets/images/setoo-og.png",
    metaDescription: "Be a part of co-founder menatlity team at Setoo",
    metaSocial: [
      {
        socialNetwork: "Twitter",
        title: "Careers at Setoo",
        description: "Be a part of co-founder menatlity team at Setoo",
        image: {
          url: "/assets/images/setoo-og.png",
          alt: 'setoo-website'
        },
        card: "summary_large_image",
        url: "https://www.setoo.co/work"
      },
      {
        socialNetwork: "Facebook",
        title: "Careers at Setoo",
        description: "Be a part of co-founder menatlity team at Setoo",
        image: {
          url: "/assets/images/setoo-og.png",
          alt: 'setoo-website'
        },
        url: "https://www.setoo.co/work"
      }
    ],
    canonicalURL: "https://www.setoo.co/work",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "SETOO",
      "url": "https://www.setoo.co",
      "logo": "/assets/images/setoo-og.png",
      "sameAs": [
        "https://www.facebook.com/setoo/",
        "https://www.linkedin.com/company/setoos/"
      ]
    }
  }
  return (
    <Wrapper seo={seo}>
      <Career />
    </Wrapper>
  );
};

export default index;
