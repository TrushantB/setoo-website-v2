import React from "react";
import Wrapper from "../layout/wrapper";
import RemoteSourcing from "@/components/remote-sourcing/index";

const index = () => {
  const seo = {
    metaTitle: "Remote sourcing | Setoo",
    metaImage: "/assets/img/setoo-og.png",
    metaDescription: "Hire your best-matching professional for your project. We can extend our arms to your ongoing projects or your partner from start to finish.",
    metaSocial: [
      {
        socialNetwork: "Twitter",
        title: "Remote resourcing | Setoo",
        description: "Hire your best-matching professional for your project. We can extend our arms to your ongoing projects or your partner from start to finish.",
        image: {
          url: "/assets/img/setoo-og.png",
          alt: 'Remote sourcing - Setoo'
        },
        card: "summary_large_image",
        url: "https://www.setoo.co/remote-resourcing"
      },
      {
        socialNetwork: "Facebook",
        title: "Remote sourcing | Setoo",
        description: "Hire your best-matching professional for your project. We can extend our arms to your ongoing projects or your partner from start to finish.",
        image: {
          url: "/assets/img/setoo-og.png",
          alt: 'Remote Resourcing - Setoo'
        },
        url: "https://www.setoo.co/remote-resourcing"
      }
    ],
    canonicalURL: "https://www.setoo.co/remote-resourcing",
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
      <RemoteSourcing />
    </Wrapper>
  );
};

export default index;
