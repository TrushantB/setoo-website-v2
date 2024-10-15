
'use client';
import React from "react";
import Wrapper from "../layout/wrapper";
import { RegisterLink, LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import ExperienceArea from "@/components/experience/experience-area";
import HeaderFour from "@/layout/headers/header";
import ScrollToTop from "../../hooks/scroll-to-top";
import FooterFour from "@/layout/footers/footer-4";

const Experience = () => {
    const seo = {
        metaTitle:
            "Setoo - AI-Driven Software Solutions",
        metaImage: "https://www.setoo.co/assets/img/setoo-og.png",
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
                    url: "https://www.setoo.co/assets/img/setoo-og.png",
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
                    url: "https://www.setoo.co/assets/img/setoo-og.png",
                    alt: "Setoo",
                },
                url: "https://www.setoo.co",
            },
        ],
        canonicalURL: "https://www.setoo.co",
        structuredData: {
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Setoo Solutions Pvt Ltd.",
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
            <HeaderFour />
            <div className="container pt-160 pb-60">
                <h2>Welcome to <strong className="text-primary">Setoo Experience</strong></h2>
                <LoginLink>Sign in</LoginLink> &nbsp;
                <RegisterLink>Sign up</RegisterLink>
                <ExperienceArea />
            </div>
            <FooterFour />
            <ScrollToTop />
        </Wrapper>
    );
};

export default Experience;
