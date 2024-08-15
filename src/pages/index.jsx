
'use client';
import React from "react";
import Wrapper from "../layout/wrapper";
import HomeFour from "@/components/homes/home-4";

const Home = () => {
  const seo = {
    metaTitle:
      "Setoo - AI-Driven Software Solutions",
    metaImage: "https://www.setoo.co/assets/images/setoo-og.png",
    metaDescription:
      "Setoo is an AI-Driven Software Solutions company with a global focus on offering top-notch strategy, designs, and technology solutions.",
    metaSocial: [
      {
        socialNetwork: "Twitter",
        title:
          "Setoo - AI-Driven Software Solutions",
        description:
          "Setoo is an AI-Driven Software Solutions company with a global focus on offering top-notch strategy, designs, and technology solutions.",
        image: {
          url: "https://www.setoo.co/assets/images/setoo-og.png",
          alt: "Setoo",
        },
        card: "summary_large_image",
        url: "https://www.setoo.co",
      },
      {
        socialNetwork: "Facebook",
        title:
          "Setoo - AI-Driven Software Solutions",
        description:
          "Setoo is an AI-Driven Software Solutions company with a global focus on offering top-notch strategy, designs, and technology solutions.",
        image: {
          url: "https://www.setoo.co/assets/images/setoo-og.png",
          alt: "Setoo",
        },
        url: "https://www.setoo.co",
      },
    ],
    canonicalURL: "https://www.setoo.co",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "SETOO",
      url: "https://www.setoo.co",
      logo: "https://www.setoo.co/assets/images/setoo-og.png",
      sameAs: [
        "https://www.facebook.com/setoo/",
        "https://www.linkedin.com/company/setoos/",
        "https://www.instagram.com/setooists/"
      ],
    },
  };
  return (
    <Wrapper seo={seo}>
      <HomeFour />
    </Wrapper>
  );
};

export default Home;
