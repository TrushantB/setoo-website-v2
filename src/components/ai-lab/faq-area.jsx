import AnswerQuestion from './answer-question';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import PopupButton from '@/common/calendly-popup';

import img from "../../../public/assets/img/faq/faq-1.png" 

const faq_content = {
    sub_title: "Support",
    title: <>Frequently <br /> Asked Questions</>,
    description: <>Get the Answers You Need - Explore Our AI Service FAQ for Expert Insights and Quick Solutions!</>,
    btn_text: "Schedule a Meeting",
}
const pageSettings = {
   backgroundColor: '#292a2c',
   hideEventTypeDetails: false,
   hideLandingPageDetails: false,
   primaryColor: '#ff5733',
   textColor: '#ffffff',
   hideGdprBanner: true
}
const {sub_title, title, description, btn_text }  = faq_content

const FaqArea = ({style_service}) => {
    return (
        <>
            <div className="tp-faq-area pt-140 pb-120 fix">
               <div className="container">
                  <div className="row"> 
                     <div className={`col-xl-6 col-lg-6 ${style_service && "wow tpfadeLeft"}`} 
                        data-wow-duration={style_service && ".9s"} 
                        data-wow-delay={style_service && ".4s"}>
                        <div className="tp-faq-left-wrapper p-relative">
                           <div className={`tp-faq-section-box ${style_service && "tp-inner-font tp-inner-faq-box"} pb-20`}>
                              <h4 name="faq-subtitle" className={`${style_service ? "inner-section-subtitle" : "tp-section-subtitle-2"}`}>{sub_title}</h4>
                              <h3 name="faq-title" className={`${style_service ? "tp-section-title" : "tp-section-title-lg"}`}>{title}</h3>
                              <p name="faq-description">{description}</p>
                           </div>
                           <div className="tp-faq-btn">
                              {/* <Link className={`${style_service ? "tp-btn-inner tp-btn-hover alt-color-black" : "tp-btn-green"} `} 
                                  href="/contact">
                                    {btn_text}
                              </Link> */}
                              <PopupButton
                                 pageSettings={pageSettings}
                                 buttonTitle="Schedule a Meeting"
                                 className={`${style_service ? "tp-btn-inner tp-btn-hover alt-color-black" : "tp-btn"} `}
                                 showIcon={false}
                              />
                           </div>
                           {/* <div className="tp-faq-img" data-parallax='{"x": -50, "smoothness": 30}'>
                              <Image src={img} alt="" />
                           </div> */}
                        </div>
                     </div>

                     <div className="col-xl-6 col-lg-6">
                        <AnswerQuestion /> 
                     </div>
                  </div>
               </div>
            </div>
        </>
    );
};

export default FaqArea;