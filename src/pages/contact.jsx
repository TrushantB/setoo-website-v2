import React from "react";
import Contact from "../components/contact";
import Wrapper from "../layout/wrapper";

const index = () => {
  const seo = {
    metaTitle: "Contact | Setoo",
    metaImage: "/assets/img/setoo-og.png",
    metaDescription: "Reach out to the team to collaborate, share the vision, and build your ideas",
    metaSocial: [
      {
        socialNetwork: "Twitter",
        title: "Contact | Setoo",
        description: "Reach out to the team to collaborate, share the vision, and build your ideas",
        image: {
          url: "/assets/img/setoo-og.png",
          alt: 'Connect with Setoo'
        },
        card: "summary_large_image",
        url: "https://www.setoo.co/contact"
      },
      {
        socialNetwork: "Facebook",
        title: "Contact | Setoo",
        description: "Reach out to the team to collaborate, share the vision, and build your ideas",
        image: {
          url: "/assets/img/setoo-og.png",
          alt: 'Connect with Setoo'
        },
        url: "https://www.setoo.co/contact"
      }
    ],
    canonicalURL: "https://www.setoo.co/contact",
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
      <Contact />
    </Wrapper>
  );
};

export default index;
