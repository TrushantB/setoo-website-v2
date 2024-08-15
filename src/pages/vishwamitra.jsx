import React from "react";
import SEO from "../common/seo";
import Vishwamitra from "../components/vishwamitra";
import Wrapper from "../layout/wrapper";

const index = () => {
    const seo = {
        metaTitle: "Vishwamitra | Setoo Work",
        metaImage: "/assets/images/setoo-og.png",
        metaDescription: "Viswamitra is user-friendly mobJ app is built on Jamstack+ plaform that allows individuals to explore and engage in various volunteering initiatives effortlessly",
        metaSocial: [
            {
                socialNetwork: "Twitter",
                title: "Vishwamitra | Setoo Work",
                description: "Viswamitra is user-friendly mobJ app is built on Jamstack+ plaform that allows individuals to explore and engage in various volunteering initiatives effortlessly",
                image: {
                    url: "/assets/images/setoo-og.png",
                    alt: 'Vishwamitra Case Study'
                },
                card: "summary_large_image",
                url: "https://www.setoo.co/vishwamitra"
            },
            {
                socialNetwork: "Facebook",
                title: "Vishwamitra | Setoo Work",
                description: "Viswamitra is user-friendly mobJ app is built on Jamstack+ plaform that allows individuals to explore and engage in various volunteering initiatives effortlessly",
                image: {
                    url: "/assets/images/setoo-og.png",
                    alt: 'Vishwamitra Case Study'
                },
                url: "https://www.setoo.co/vishwamitra"
            }
        ],
        canonicalURL: "https://www.setoo.co/vishwamitra",
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
            <Vishwamitra />
        </Wrapper>
    );
};

export default index;