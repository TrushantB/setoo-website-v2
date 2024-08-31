import React from "react";
import Career from "../components/career";
import Wrapper from "../layout/wrapper";

const index = () => {
  const seo = {
    metaTitle: "Careers at Setoo",
    metaImage: "/assets/img/setoo-og.png",
    metaDescription: "Be a part of co-founder menatlity team at Setoo",
    metaSocial: [
      {
        socialNetwork: "Twitter",
        title: "Careers at Setoo",
        description: "Be a part of co-founder menatlity team at Setoo",
        image: {
          url: "/assets/img/setoo-og.png",
          alt: 'Setoo Opengraph'
        },
        card: "summary_large_image",
        url: "https://www.setoo.co/careers"
      },
      {
        socialNetwork: "Facebook",
        title: "Careers at Setoo",
        description: "Be a part of co-founder menatlity team at Setoo",
        image: {
          url: "/assets/img/setoo-og.png",
          alt: 'Setoo Opengraph'
        },
        url: "https://www.setoo.co/careers"
      }
    ],
    canonicalURL: "https://www.setoo.co/careers",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Setoo",
      "url": "https://www.setoo.co",
      "logo": "/assets/img/setoo-og.png",
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
