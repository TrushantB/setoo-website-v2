import React from "react";
import Wrapper from "../layout/wrapper";
import WebStudio from "@/components/web-studio";

const index = () => {
  const seo = {
    metaTitle: "Web Studio | Setoo",
    metaImage: "/assets/images/setoo-og.png",
    metaDescription: "Get your website up and ready quickly with Setoo's Web Studio",
    metaSocial: [
      {
        socialNetwork: "Twitter",
        title: "Web Studio | Setoo",
        description: "Get your website up and ready quickly with Setoo's Web Studio",
        image: {
          url: "/assets/images/setoo-og.png",
          alt: 'setoo-website'
        },
        card: "summary_large_image",
        url: "https://www.setoo.co/work"
      },
      {
        socialNetwork: "Facebook",
        title: "Web Studio | Setoo",
        description: "Get your website up and ready quickly with Setoo's Web Studio",
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
      <WebStudio />
    </Wrapper>
  );
};

export default index;
