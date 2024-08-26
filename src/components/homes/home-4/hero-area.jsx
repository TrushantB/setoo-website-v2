import React,{useEffect} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import useCharAnimation from '@/hooks/useCharAnimation';
import CalendlyPopupModal from '@/common/calendly-popup';


import hero_shape from "../../../../public/assets/img/hero/hero-shape-4-1.png";
import hero_img  from "../../../../public/assets/img/hero/hero-4-3.png";
//import hero_4_img_1  from "../../../../public/assets/img/hero/hero-4-1.png";
import hero_4_img_1 from "../../../../public/assets/img/hero/hologram-avatar.png";
import hero_4_img_2  from "../../../../public/assets/img/hero/hero-4-2.png";

const hero_content = {
    sub_title: "Based in Pune. Operate worldwide.",
    title: <>
    <span><span className='child'>AI-Driven</span></span>{" "}
    <span><span className='child'>Software</span></span>{" "}
    <span><span className='child'>Solutions</span></span>
    </>,
   description: <>Revolutionize your business with AI-driven software solutions that 
   enhance efficiency, automate processes, and deliver result-driven insights effortlessly.</>,
}
const { sub_title, title, description}  = hero_content


const HeroArea = () => {
   useCharAnimation('.tp-hero-title-4 span.child');

    return (
        <>
            <div className="tp-hero-area tp-hero-overlay blue-bg pt-200 pb-115 p-relative">
               <div className="tp-hero-4-shape-img  wow tpfadeLeft" data-wow-duration=".9s" data-wow-delay=".5s">
                  <Image src={hero_shape} alt="theme-pure" />
               </div>
               <div className="tp-hero-glob-img">
                  <Image src={hero_img} alt="theme-pure" />
               </div>
               <div className="container">
                  <div className="row">
                     <div className="col-xl-7 col-lg-7">
                        <div className="tp-hero-4-section-box pt-10 z-index-3">
                           <span className="tp-section-subtitle-4 d-inline-block tp-char-animation wow tpfadeRight" data-wow-duration="1s" data-wow-delay=".6s">{sub_title}</span>
                           <h1 className="tp-hero-title-5 fw-bolder pb-10 tp-char-animation">{title}</h1>
                           <p className='pb-35 tp-fun-fact-title fw-normal'>{description}</p>
                           <Link className="tp-btn-yellow-border wow tpfadeRight" 
                                 data-wow-duration=".9s" 
                                 data-wow-delay=".7s" href="/contact">
                                 <span>Talk to Expert<i className="far fa-angle-right"></i></span>
                            </Link>
                        </div>
                     </div>
                     <div className="col-xl-5 col-lg-5">
                        <div className="tp-hero-4-img-wrapper p-relative">
                           <div className='custom-pill'>
                              <span className='pill-text'>Setoo AI will be Live Soon ✨</span>
                              <svg className='down-arrow-indicator' id="ArrowDown" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
                                 <path d="m9.571 17.398c.356-.649.746-1.279 1.17-1.888-2.408-3.68-4.706-8.014-6.831-12.911-.107-.246-.303-.436-.552-.532-.245-.096-.514-.09-.757.019-.514.224-.738.803-.516 1.318 2.352 5.415 4.867 10.11 7.486 13.994z" />
                                 <path d="m45.447 40.015 1.804 6.718c.084.301.022.625-.166.874-.189.249-.484.396-.797.396h-8.29c-11.238 0-16.199-2.658-19.57-5.259-4.585-3.541-7.466-9.229-7.519-14.843-.011-1.734.246-3.47.764-5.161.44-1.501 1.093-2.95 1.937-4.297 1.283-2.069 2.975-3.838 4.895-5.115 4.932-3.275 11.431-3.638 16.173-.903 4.208 2.431 4.971 6.559 4.346 9.354-.708 3.168-2.457 5.325-5.196 6.412-3.766 1.513-9.225.686-13.274-2.018-2.016-1.345-4.011-3.171-5.943-5.44-.337.665-.609 1.357-.844 2.061 1.836 2.048 3.741 3.75 5.673 5.034 2.954 1.979 6.651 3.113 10.146 3.113 1.842 0 3.52-.299 4.987-.888 3.342-1.342 5.554-4.05 6.398-7.83.84-3.736-.472-8.748-5.294-11.526-5.391-3.114-12.735-2.729-18.278.957-1.81 1.202-3.372 2.704-4.643 4.463-.003.004-.008.005-.011.009l.004.003c-.842 1.126-1.558 2.347-2.127 3.628-1.14 2.549-1.732 5.369-1.713 8.157.057 6.312 3.157 12.445 8.291 16.405 3.649 2.81 8.975 5.683 20.798 5.683h8.29c.312 0 .607.146.797.396.188.249.25.573.166.874l-1.87 6.68 12.596-8.913-12.529-9.023z" />
                              </svg>
                           </div>
                           
                           <div className="tp-hero-4-main-img text-center z-index-3">
                              <Image src={hero_4_img_1} alt="theme-pure" />
                           </div>
                           <div className="tp-hero-4-sub-img z-index-3">
                              <Image src={hero_4_img_2} alt="theme-pure" />
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
        </>
    );
};

export default HeroArea;