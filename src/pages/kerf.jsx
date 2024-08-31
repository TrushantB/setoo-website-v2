import React from "react";
import Kerf from "../components/kerf";
import Wrapper from "../layout/wrapper";

const index = () => {
    const seo = {
        metaTitle: "KERF | Setoo Work",
        metaImage: "/assets/img/setoo-og.png",
        metaDescription: "Learn how we built a solution for kerf manufacture company for online presence and ecommerce store.",
        metaSocial: [
            {
                socialNetwork: "Twitter",
                title: "KERF | Setoo Work",
                description: "Learn how we built a solution for kerf manufacture company for online presence and ecommerce store.",
                image: {
                    url: "/assets/img/setoo-og.png",
                    alt: 'KERF Case Study'
                },
                card: "summary_large_image",
                url: "https://www.setoo.co/kerf"
            },
            {
                socialNetwork: "Facebook",
                title: "KERF | Setoo Work",
                description: "Learn how we built a solution for kerf manufacture company for online presence and ecommerce store.",
                image: {
                    url: "/assets/img/setoo-og.png",
                    alt: 'KERF Case Study'
                },
                url: "https://www.setoo.co/kerf"
            }
        ],
        canonicalURL: "https://www.setoo.co/kerf",
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
            <Kerf />
        </Wrapper>
    );
};

export default index;