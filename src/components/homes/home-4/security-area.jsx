import RightArrowTwo from '@/svg/right-arrow-2';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import Slider from 'react-slick';

import security_img_1 from "../../../../public/assets/img/security/security-1.png";
import security_img_2 from "../../../../public/assets/img/security/security-2.png";
import security_img_3 from "../../../../public/assets/img/security/security-3.png";
import security_img_4 from "../../../../public/assets/img/security/security-4.png";
// import security_img_5 from "../../../../public/assets/img/security/security-5.png";
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
        img: security_img_1,
        title: <>Healthcare </>,        
    },
    {
        id: 2,
        img: security_img_2,
        title: <>Cyber <br /> Security</>,        
    },
    {
        id: 3,
        img: security_img_3,
        title: <>Fashion & <br /> Apparel</>,        
    },
    {
        id: 4,
        img: security_img_4,
        title: <>e-commerce</>,        
    },
    {
        id: 5,
        img: security_img_1,
        title: <>Real Estate</>,        
    },
    {
        id: 6,
        img: security_img_6,
        title: <> Legal Services</>,
    },
    {
        id: 7,
        img: security_img_6,
        title: <> NGO </>,
    },
    {
        id: 8,
        img: security_img_6,
        title: <> Art & Design </>,
    },
    {
        id: 9,
        img: security_img_6,
        title: <> Education </>,
    },
    {
        id: 10,
        img: security_img_6,
        title: <> Personal <br /> Branding</>,
    },
    {
        id: 11,
        img: security_img_6,
        title: <> Telecomm </>,
    },
    {
        id: 12,
        img: security_img_6,
        title: <> Industry 4.0 </>,
    },
    {
        id: 13,
        img: security_img_6,
        title: <> Consultancy </>,
    },
    {
        id: 14,
        img: security_img_6,
        title: <> Marketing </>,
    },
    {
        id: 15,
        img: security_img_6,
        title: <> Information <br /> Technology </>,
    }
]

const SecurityArea = () => {
    return (
        <>
            <div className="tp-security-area blue-bg pt-60 pb-120 fix z-index">
               <div className="container-fluid g-0">
                  <div className="row justify-content-center">
                     <div className="col-xl-8">
                        <div className="tp-security-section-box text-center pb-100">
                           <h5 className="tp-section-subtitle-4 both pb-10 wow tpfadeUp" data-wow-duration=".9s"
                              data-wow-delay=".3s">Industries Expertise</h5>
                            <h3 className="tp-section-title-4">Our Expertise Spans Across Industries</h3>
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
                                            <Image src={item.img} alt="theme-pure" />
                                        </div>
                                        <div className="tp-security-content">
                                            <h4 className="tp-security-title-sm">{item.title}</h4>
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