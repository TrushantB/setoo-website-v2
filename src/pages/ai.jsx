import React from "react";
import Ai from "../components/ai";
import Wrapper from "../layout/wrapper";

const index = () => {
  const seo = {
    metaTitle: "AI Lab | Setoo",
    metaImage: "/assets/images/setoo-og.png",
    metaDescription: "Setoo's AI Lab caters to AI services that can transform your business operations with the integration of AI.",
    metaSocial: [
      {
        socialNetwork: "Twitter",
        title: "AI Lab | Setoo",
        description: "Setoo's AI Lab caters to AI services that can transform your business operations with the integration of AI.",
        image: {
          url: "/assets/images/setoo-og.png",
          alt: 'setoo-website'
        },
        card: "summary_large_image",
        url: "https://www.setoo.co/work"
      },
      {
        socialNetwork: "Facebook",
        title: "AI Lab | Setoo",
        description: "Setoo's AI Lab caters to AI services that can transform your business operations with the integration of AI.",
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
      <Ai />
    </Wrapper>
  );
};

export default index;
