import React from "react";
import Gurumantra from "../components/gurumantra";
import Wrapper from "../layout/wrapper";

const index = () => {
    const seo = {
        metaTitle: "Gurumantra | Setoo Work",
        metaImage: "/assets/images/setoo-og.png",
        metaDescription: "Gurumantra is a MVP app that provides the interactive way to test and enhance aspirants knowledge",
        metaSocial: [
            {
                socialNetwork: "Twitter",
                title: "Gurumantra | Setoo Work",
                description: "Gurumantra is a MVP app that provides the interactive way to test and enhance aspirants knowledge",
                image: {
                    url: "/assets/images/setoo-og.png",
                    alt: 'Gurumantra Case Study'
                },
                card: "summary_large_image",
                url: "https://www.setoo.co/gurumantra"
            },
            {
                socialNetwork: "Facebook",
                title: "Gurumantra | Setoo Work",
                description: "Gurumantra is a MVP app that provides the interactive way to test and enhance aspirants knowledge",
                image: {
                    url: "/assets/images/setoo-og.png",
                    alt: 'Gurumantra Case Study'
                },
                url: "https://www.setoo.co/gurumantra"
            }
        ],
        canonicalURL: "https://www.setoo.co/gurumantra",
        structuredData: {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "SETOO",
            "url": "https://www.setoo.co",
            "logo": "/assets/images/setoo-og.png",
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
            <Gurumantra />
        </Wrapper>
    );
};

export default index;