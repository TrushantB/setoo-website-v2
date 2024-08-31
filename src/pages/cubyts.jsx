import React from "react";
import Cubyts from "../components/cubyts";
import Wrapper from "../layout/wrapper";

const index = () => {
    const seo = {
        metaTitle: "Cubyts | Setoo Work",
        metaImage: "/assets/img/setoo-og.png",
        metaDescription: "Check out How Setoo provided the modern technical solution to Cubyts for fulfill the requirements and overcome the pain points",
        metaSocial: [
            {
                socialNetwork: "Twitter",
                title: "Cubyts | Setoo Work",
                description: "Check out How Setoo provided the modern technical solution to Cubyts for fulfill the requirements and overcome the pain points",
                image: {
                    url: "/assets/img/setoo-og.png",
                    alt: 'Cubyts Case Study'
                },
                card: "summary_large_image",
                url: "https://www.setoo.co/cubyts"
            },
            {
                socialNetwork: "Facebook",
                title: "Cubyts | Setoo Work",
                description: "Check out How Setoo provided the modern technical solution to Cubyts for fulfill the requirements and overcome the pain points",
                image: {
                    url: "/assets/img/setoo-og.png",
                    alt: 'Cubyts Case Study'
                },
                url: "https://www.setoo.co/cubyts"
            }
        ],
        canonicalURL: "https://www.setoo.co/cubyts",
        structuredData: {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Setoo",
            "url": "https://www.setoo.co",
            "logo": "/assets/img/setoo-og.png",
            "sameAs": [
                "https://www.facebook.com/setoo/",
                "https://www.linkedin.com/company/setoos/"
            ],
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "Swar Vishwa, Ekdant Dutta Mandir Rd, Wireless Colony, Next to Siddhart Residency, Aundh Pune 411007",
                "addressRegion": "MH",
                "postalCode": "411007",
                "addressCountry": "IN"
            }
        }

    }
    return (
        <Wrapper seo={seo}>
            <Cubyts />
        </Wrapper>
    );
};

export default index;