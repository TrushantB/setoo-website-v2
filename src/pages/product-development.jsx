import React from "react";
import SEO from "../common/seo";
import Wrapper from "../layout/wrapper";
import ProductDevelopment from "@/components/product-development";

const index = () => {
  const seo = {
    metaTitle: "Product Development Studio | Setoo",
    metaImage: "/assets/img/setoo-og.png",
    metaDescription: "Team provides you with a website, mobile app, and software solutions that have been finely processed using agile methodology, and time-tested appropriate architecture.",
    metaSocial: [
      {
        socialNetwork: "Twitter",
        title: "Product Development Studio | Setoo",
        description: "Team provides you with a website, mobile app, and software solutions that have been finely processed using agile methodology, and time-tested appropriate architecture.",
        image: {
          url: "/assets/img/setoo-og.png",
          alt: 'Setoo Opengraph'
        },
        card: "summary_large_image",
        url: "https://www.setoo.co/product-development"
      },
      {
        socialNetwork: "Facebook",
        title: "Product Development Studio | Setoo",
        description: "Team provides you with a website, mobile app, and software solutions that have been finely processed using agile methodology, and time-tested appropriate architecture.",
        image: {
          url: "/assets/img/setoo-og.png",
          alt: 'Setoo Opengraph'
        },
        url: "https://www.setoo.co/product-development"
      }
    ],
    canonicalURL: "https://www.setoo.co/product-development",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Setoo",
      "url": "https://www.setoo.co",
      "logo": "/assets/img/setoo-og.png",
      "sameAs": [
        "https://www.facebook.com/setoo/",
        "https://www.linkedin.com/company/setoos/",
        "https://www.instagram.com/setooists/"
      ]
    }

  }
  return (
    <Wrapper seo={seo}>
      <ProductDevelopment />
    </Wrapper>
  );
};

export default index;
