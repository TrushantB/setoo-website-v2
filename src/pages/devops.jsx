import React from "react";
import Wrapper from "../layout/wrapper";
import Devops from "@/components/devops";

const index = () => {
  const seo = {
    metaTitle: "DevOps | Setoo",
    metaImage: "/assets/images/setoo-og.png",
    metaDescription: "DevOps acts as a roadmap to streamline software development, integration, and deployment for optimized efficiency.",
    metaSocial: [
      {
        socialNetwork: "Twitter",
        title: "DevOps | Setoo",
        description: "DevOps acts as a roadmap to streamline software development, integration, and deployment for optimized efficiency.",
        image: {
          url: "/assets/images/setoo-og.png",
          alt: 'setoo-website'
        },
        card: "summary_large_image",
        url: "https://www.setoo.co/work"
      },
      {
        socialNetwork: "Facebook",
        title: "DevOps | Setoo",
        description: "DevOps acts as a roadmap to streamline software development, integration, and deployment for optimized efficiency.",
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
      <Devops />
    </Wrapper>
  );
};

export default index;
