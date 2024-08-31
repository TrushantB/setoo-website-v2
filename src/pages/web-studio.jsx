import React from "react";
import Wrapper from "../layout/wrapper";
import WebStudio from "@/components/web-studio";

const index = () => {
  const seo = {
    metaTitle: "Web Studio | Setoo",
    metaImage: "/assets/img/setoo-og.png",
    metaDescription: "Get your website up and ready quickly with Setoo's Web Studio",
    metaSocial: [
      {
        socialNetwork: "Twitter",
        title: "Web Studio | Setoo",
        description: "Get your website up and ready quickly with Setoo's Web Studio",
        image: {
          url: "/assets/img/setoo-og.png",
          alt: 'Setoo Opengraph'
        },
        card: "summary_large_image",
        url: "https://www.setoo.co/web-studio"
      },
      {
        socialNetwork: "Facebook",
        title: "Web Studio | Setoo",
        description: "Get your website up and ready quickly with Setoo's Web Studio",
        image: {
          url: "/assets/img/setoo-og.png",
          alt: 'Setoo Opengraph'
        },
        url: "https://www.setoo.co/web-studio"
      }
    ],
    canonicalURL: "https://www.setoo.co/web-studio",
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
      <WebStudio />
    </Wrapper>
  );
};

export default index;
