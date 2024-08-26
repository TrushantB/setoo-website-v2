import Brwoser from '@/common/brwoser';
import { CopyRight } from '@/common/social-links';
import EmailIcon from '@/svg/email';
import EmailTwo from '@/svg/email-2';
import PhoneTwo from '@/svg/phone-2';
import RightArrow from '@/svg/right-arrow';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Slider from 'react-slick';

import footer_logo from "../../../public/assets/img/logo/logo-white.svg";

const footer_content = {
    bg_img: "/assets/img/footer/overly.png",
    title: <>Resources Available for<br /> <span>Remote Work</span></>,
    btn_text: "Schedule a Consultation",
    phone: "+806(000)8899",
    email: "hello@setoo.co",
    description: <>Build a modern and creative website with crealand</>,
}
const { bg_img, title, btn_text } = footer_content


// footer slider data 
const footer_slider_data = [
    "AI Consultant",
    "AI Engineers",
    "Full Stack Developers",
    "Frontend Developers",
    "Backend Developers",
    "Mobile Developers",
    "UX Designer",
    "Visual Designer",
    "QA Engineers",
    "DevOps Engineers",
]
// slider setting
const setting = {
    speed: 7000,
    autoplay: true,
    autoplaySpeed: 0,
    centerMode: true,
    cssEase: 'linear',
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    infinite: true,
    initialSlide: 1,
    arrows: false,
    buttons: false,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
            }
        },
        {
            breakpoint: 992,
            settings: {
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
}


const ResourceArea = () => {
    return (
        <>
            <div className="footer-bottom-content tp-browser-bg-shape"
            //</>style={{backgroundImage: `url(${bg_img})`}}
            >
                <div className="tp-browser-details-area pt-30 pb-30 p-relative">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xl-9 col-lg-9">
                                <div className="tp-browser-section-box d-flex justify-content-between align-items-center mb-30">
                                    <h3 className="tp-section-title-3">{title}</h3>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3">
                                <div className="tp-browser-btn text-lg-end text-start mb-40">
                                    <Link className="tp-btn-blue-lg tp-btn-hover" href="/contact">
                                        <span>{btn_text}</span>
                                        <b></b>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        {/* <div className="row">
                            <div className="col-12">
                                <span className='small mb-2 d-inline-block text-secondary'>expertise in:</span>
                                <div className="tp-hero-browser-wrapper footer-browser-item d-flex align-items-center">
                                    <Brwoser />
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>

                <section>
                    <div className="tp-footer-slide pb-80">
                        <div className="container-fluid g-0">
                            <div className="row g-0 justify-content-center">
                                <Slider {...setting} className="footer-slide-active">
                                    {footer_slider_data.map((item, i) =>
                                        <div key={i} className="footer-slide-wrapper">
                                            <div className="footer-slide-item">
                                                <i className="fal fa-check"></i>
                                                <span>{item}</span>
                                            </div>
                                        </div>
                                    )}
                                </Slider>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default ResourceArea;