import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Slider from 'react-slick';

// slider Icons import here
import FigmaIcon from '@/svg/tech-stack/figma-icon';
import NextJsIcon from '@/svg/tech-stack/nextjs-icon';
import FlutterIcon from '@/svg/tech-stack/flutter-icon';
import PostmanIcon from '@/svg/tech-stack/postman-icon';
import KotlinIcon from '@/svg/tech-stack/kotlin-icon';
import AndroidStudioIcon from '@/svg/tech-stack/android-studio';

const integration_content ={
    sub_title: "Technologies",
    title: <>Tech stack used <span></span></>,
    int_title: <>Integrated with Your Favourite Apps</>,
    btn_text: "See all Integrations",
    bg_img: "/assets/img/integration/integration-bg.jpg"
}
const {sub_title, title, int_title, btn_text, bg_img}  = integration_content


const slider_one_data = [
    <FigmaIcon />,
    <NextJsIcon />,
    <FlutterIcon />,
    <PostmanIcon />,
    <KotlinIcon />,
    <AndroidStudioIcon />
]
const slider_two_data = [
    
]


// slider one setting 
const setting_one = {
    speed: 12000,
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

// slider two setting 
const setting_two = {
    speed: 12000,
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
    rtl: true,
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
 
const TechStack = ({style_integraton}) => {
    return (
        <>
            <div className="tp-integration-area pt-110 pb-110 tp-integration-mlr">
               <div className="container">
                  <div className="row align-items-end tp-integration-section-space">
                     <div className="col-xl-6 col-lg-8 wow tpfadeLeft" data-wow-duration=".9s" data-wow-delay=".5s">
                        <div className="tp-integration-section-box">
                            {style_integraton ? 
                                <>
                                    <h5 className="tp-integration-subtitle" name="techstack-subtitle">{sub_title}</h5>
                                    <h3 className="tp-section-title-3">{int_title}</h3>                                
                                </> 
                                : 
                                <>
                                    <h5 className="tp-integration-subtitle" name="techstack-subtitle">{sub_title}</h5>
                                    <h3 className="tp-section-title-3" name="techstack-title">{title}</h3>                                
                                </>
                            }
                        </div>
                     </div>
                     {/* <div className="col-xl-6 col-lg-4 wow tpfadeRight" data-wow-duration=".9s" data-wow-delay=".7s">
                        <div className="tp-integration-btn text-lg-end text-start">
                           <Link className="tp-btn-blue-lg tp-btn-hover alt-color-black" href="/integrations">
                              <span>{btn_text}</span>
                              <b></b>
                           </Link>
                        </div>
                     </div> */}
                  </div>
               </div>
               <div className="tp-integration-slider-wrapper pt-50 pb-50 dark-mid-bg" 
                    //style={{backgroundImage: `url(${bg_img})`}}
                    >
                  <Slider {...setting_one} className="tp-integration-slider-active">
                    {slider_one_data.map((item, i)  => 
                        <div key={i} className="tp-integration-slider-main slick-slide">
                        <div className="tp-integration-slider-item">
                           {/* <Image src={item} alt="theme-pure" /> */}
                           {item}
                        </div>
                     </div>
                    )}                     
                  </Slider>
                  <Slider {...setting_two} className="tp-integration-slider-active-2 carousel-rtl" dir="rtl">
                    {slider_two_data.map((item, i)  => 
                        <div key={i} className="tp-integration-slider-main slick-slide">
                        <div className="tp-integration-slider-item">
                           {/* <Image src={item} alt="theme-pure" /> */}
                            {item}
                        </div>
                     </div>
                        
                    )} 
                  </Slider>
               </div>
            </div>
        </>
    );
};

export default TechStack;