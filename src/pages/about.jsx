import React from "react";
import About from "../components/about";
import Wrapper from "../layout/wrapper";

const index = () => {
  const seo = {
    metaTitle: "About us | Setoo",
    metaImage: "/assets/images/setoo-og.png",
    metaDescription: "At Setoo, We are a team of professionals who use cutting-edge technology, insightful designs, strategies, and web problem solutions to bring ideas to life.",
    metaSocial: [
      {
        socialNetwork: "Twitter",
        title: "About us | Setoo",
        description: "At Setoo, We are a team of professionals who use cutting-edge technology, insightful designs, strategies, and web problem solutions to bring ideas to life.",
        image: {
          url: "/assets/images/setoo-og.png",
          alt: 'About Setoo'
        },
        card: "summary_large_image",
        url: "https://www.setoo.co/about"
      },
      {
        socialNetwork: "Facebook",
        title: "About us | Setoo",
        description: "At Setoo, We are a team of professionals who use cutting-edge technology, insightful designs, strategies, and web problem solutions to bring ideas to life.",
        image: {
          url: "/assets/images/setoo-og.png",
          alt: 'About Setoo'
        },
        url: "https://www.setoo.co/about"
      }
    ],
    canonicalURL: "https://www.setoo.co/about",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "SETOO",
      "url": "https://www.setoo.co",
      "logo": "/assets/images/setoo-og.png",
      "sameAs": [
        "https://www.facebook.com/setoo/",
        "https://www.linkedin.com/company/setoos/",
        "https://www.instagram.com/setooists/"
      ]
    }

  }
  return (
    <Wrapper seo={seo}>
      <About />
    </Wrapper>
  );
};

export default index;
