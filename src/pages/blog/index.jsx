import React from 'react';
import SEO from '../../common/seo';
import Blog from '../../components/blog';
import Wrapper from '../../layout/wrapper';

const index = () => {
    const seo = {
        metaTitle:
            "Setoo Blog - Get latest blog insights on AI driven software solutions",
        metaImage: "https://www.setoo.co/assets/img/setoo-og.png",
        metaDescription:
            "Get latest blog insights on AI driven software solutions",
        metaSocial: [
            {
                socialNetwork: "Twitter",
                title:
                    "Setoo Blog - Get latest blog insights on AI driven software solutions",
                description:
                    "Get latest blog insights on AI driven software solutions",
                image: {
                    url: "https://www.setoo.co/assets/img/setoo-og.png",
                    alt: "Setoo",
                },
                card: "summary_large_image",
                url: "https://www.setoo.co/blog",
            },
            {
                socialNetwork: "Facebook",
                title:
                    "Setoo Blog - Get latest blog insights on AI driven software solutions",
                description:
                    "Get latest blog insights on AI driven software solutions",
                image: {
                    url: "https://www.setoo.co/assets/img/setoo-og.png",
                    alt: "Setoo",
                },
                url: "https://www.setoo.co/blog",
            },
        ],
        canonicalURL: "https://www.setoo.co/blog",
        structuredData: {
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Setoo - AI Driven software solutions company",
            url: "https://www.setoo.co",
            logo: "https://www.setoo.co/assets/img/setoo-og.png",
            sameAs: [
                "https://www.facebook.com/setoo/",
                "https://www.linkedin.com/company/setoos/",
                "https://www.instagram.com/setooists/"
            ],
        },
    };
    return (
        <Wrapper seo={seo}>
            <Blog />           
        </Wrapper>
    );
};

export default index;