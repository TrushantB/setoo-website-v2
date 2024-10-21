import RightArrowTwo from '@/svg/right-arrow-2';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import Slider from 'react-slick';

import cyber_security_icon from "../../../../public/assets/img/security/cyber-security-icon.svg";
import consultancy_icon from "../../../../public/assets/img/security/consultancy-icon.svg";
import marketing_icon from "../../../../public/assets/img/security/marketing-icon.svg";
import it_icon from "../../../../public/assets/img/security/it-icon.svg";
import legal_services_icon from "../../../../public/assets/img/security/it-icon.svg";
import real_estate_icon from "../../../../public/assets/img/security/real-estate-icon.svg";
import healthcare_icon from "../../../../public/assets/img/security/healthcare-icon.svg";
import education_icon from "../../../../public/assets/img/security/education-icon.svg";
import ecommerce_icon from "../../../../public/assets/img/security/ecommerce-icon.svg";
import fashion_icon from "../../../../public/assets/img/security/fashion-icon.svg";
import art_icon from "../../../../public/assets/img/security/art-icon.svg";
import ngo_icon from "../../../../public/assets/img/security/ngo-icon.svg";
import telecomm_icon from "../../../../public/assets/img/security/telecomm-icon.svg";
import industry_4o_icon from "../../../../public/assets/img/security/industry-40-icon.svg";
import personal_branding_icon from "../../../../public/assets/img/security/personal-branding-icon.svg";




import security_img_6 from "../../../../public/assets/img/security/security-3.png";

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
    focusOnSelect: true,
    pauseOnHover:true,
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
// security data
const security_data = [
    {
        id: 1,
        img: healthcare_icon,
        title: <>Healthcare </>,        
    },
    {
        id: 2,
        img: cyber_security_icon,
        title: <>Cyber <br /> Security</>,        
    },
    {
        id: 3,
        img: fashion_icon,
        title: <>Fashion & <br /> Apparel</>,        
    },
    {
        id: 4,
        img: ecommerce_icon,
        title: <>E-commerce</>,        
    },
    {
        id: 5,
        img: real_estate_icon,
        title: <>Real Estate</>,        
    },
    {
        id: 6,
        img: legal_services_icon,
        title: <> Legal Services</>,
    },
    {
        id: 7,
        img: ngo_icon,
        title: <> NGO </>,
    },
    {
        id: 8,
        img: art_icon,
        title: <> Art & Design </>,
    },
    {
        id: 9,
        img: education_icon,
        title: <> Education </>,
    },
    {
        id: 10,
        img: personal_branding_icon,
        title: <> Personal <br /> Branding</>,
    },
    {
        id: 11,
        img: telecomm_icon,
        title: <> Telecomm </>,
    },
    {
        id: 12,
        img: industry_4o_icon,
        title: <> Industry 4.0 </>,
    },
    {
        id: 13,
        img: consultancy_icon,
        title: <> Consultancy </>,
    },
    {
        id: 14,
        img: marketing_icon,
        title: <> Marketing </>,
    },
    {
        id: 15,
        img: it_icon,
        title: <> Information <br /> Technology </>,
    }
]

const SecurityArea = () => {
    return (
        <>
            <div className="tp-security-area blue-bg pt-60 pb-90 fix z-index">
               <div className="container-fluid g-0">
                  <div className="row justify-content-center">
                     <div className="col-xl-8">
                        <div className="tp-security-section-box text-center pb-100">
                           <span className="tp-section-subtitle-4 both pb-10 wow tpfadeUp" data-wow-duration=".9s"
                              data-wow-delay=".3s" name="industries-section-subtitle">Industries Expertise</span>
                            <h2 className="tp-section-title-4" name="industries-section-title">Our Expertise Spans Across Industries</h2>
                        </div>
                     </div>
                  </div>
                  <div className="tp-security-slider-wrapper wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".7s">
                     <div className="tp-security-slider-active">
                        <Slider {...setting} >    
                        {security_data.map((item, i)  => 
                            <div key={i} className="tp-security-main">
                                <div className="tp-security-wrapper d-flex align-items-center justify-content-between">
                                    <div className="tp-security-item d-flex align-items-center">
                                        <div className="tp-security-img">
                                            <Image src={item.img} alt="theme-pure" name="industry-brand-image" />
                                        </div>
                                        <div className="tp-security-content">
                                            <h4 className="tp-security-title-sm" name="industry-name">{item.title}</h4>
                                        </div>
                                    </div>
                                    {/* <div className="tp-security-link">
                                        <Link href="#">
                                            <RightArrowTwo />
                                        </Link>
                                    </div> */}
                                </div>
                            </div>
                         )} 
                        </Slider>
                     </div>
                  </div>
               </div>
            </div>
        </>
    );
};

export default SecurityArea;