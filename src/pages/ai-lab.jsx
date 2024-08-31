import React from "react";
import AiLab from "../components/ai-lab";
import Wrapper from "../layout/wrapper";

const index = () => {
  const seo = {
    metaTitle: "AI Lab | Setoo",
    metaImage: "/assets/img/setoo-og.png",
    metaDescription: "Setoo's AI Lab caters to AI services that can transform your business operations with the integration of AI.",
    metaSocial: [
      {
        socialNetwork: "Twitter",
        title: "AI Lab | Setoo",
        description: "Setoo's AI Lab caters to AI services that can transform your business operations with the integration of AI.",
        image: {
          url: "/assets/img/setoo-og.png",
          alt: Setoo Opengraph'
        },
        card: "summary_large_image",
        url: "https://www.setoo.co/work"
      },
      {
        socialNetwork: "Facebook",
        title: "AI Lab | Setoo",
        description: "Setoo's AI Lab caters to AI services that can transform your business operations with the integration of AI.",
        image: {
          url: "/assets/img/setoo-og.png",
          alt: Setoo Opengraph'
        },
        url: "https://www.setoo.co/work"
      }
    ],
    canonicalURL: "https://www.setoo.co/ai-lab",
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
      <AiLab />
    </Wrapper>
  );
};

export default index;
