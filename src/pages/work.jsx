import React from "react";
import Work from "../components/work";
import Wrapper from "../layout/wrapper";

const indx = () => {
  const seo = {
    metaTitle: "Our Success Stories | Setoo",
    metaImage: "/assets/images/setoo-og.png",
    metaDescription: "Here is our featured work that we are pleased to share. Check out the project case studies in more detail.",
    metaSocial: [
      {
        socialNetwork: "Twitter",
        title: "Our Success Stories | Setoo",
        description: "Here is our featured work that we are pleased to share. Check out the project case studies in more detail.",
        image: {
          url: "/assets/images/setoo-og.png",
          alt: 'setoo-website'
        },
        card: "summary_large_image",
        url: "https://www.setoo.co/work"
      },
      {
        socialNetwork: "Facebook",
        title: "Our Success Stories | Setoo",
        description: "Here is our featured work that we are pleased to share. Check out the project case studies in more detail.",
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
      <Work />
    </Wrapper>
  );
};

export default indx;
