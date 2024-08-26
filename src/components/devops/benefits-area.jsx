import useTitleAnimation from '@/hooks/useTitleAnimation';
import service_data from '@/data/devops-benefits';
import RightArrow from '@/svg/right-arrow';
import Image from 'next/image';
import Link from 'next/link';
import React, { useRef } from 'react';
import PopupButton from '@/common/calendly-popup';

import img from "../../../public/assets/img/service/sv-dashbord.png" 

const benefit_content = {
    title: "Benefits of DevOps",
    sub_title: <>DevOps brings transformative benefits to organizations by bridging the gap between development and operations teams.</>,

    bg_img: "/assets/img/service/sv-bg.jpg",
    title_2: <>Looking for devOps Services?</>,
    des: <></>,
    btn_text: "Connect with our expert",

    

}
const {title, sub_title,bg_img, title_2, des, btn_text}  = benefit_content

const BenefitsArea = () => {
    let titleRef = useRef(null)

   useTitleAnimation(titleRef)
    return (
        <>
            <div className="tp-service__area p-relative fix pb-60">
               <div className="tp-service__grey-shape"></div>
               <div className="container">
                  <div className="row justify-content-center">
                     <div className="col-lg-8">
                        <div ref={titleRef} className="tp-service__section-box tp__title_anime mb-50 text-center tp-title-anim">
                           <h2 className="tp-section-title">{title}</h2>
                           <p>{sub_title}</p>
                        </div>
                     </div>
                  </div>
                  <div className="row">

                    {service_data.slice(0,5).map((item, i)  => 
                        <div key={i} className="col-xl-4 col-lg-4 col-md-6 wow tpfadeUp mb-30" data-wow-duration=".9s" data-wow-delay={item.delay}>
                            <div className="tp-service__item h-100">
                                <div className="tp-service__icon">
                                    <Image src={item.img} alt="theme-pure" />
                                </div>
                                <div className="tp-service__content">
                                    <h3 className="tp-service__title-sm tp-yellow-color">
                                        {/* <Link href="/service-details"> */}
                                            {item.title}
                                        {/* </Link> */}
                                        </h3>
                                    <p>{item.description}</p>
                                </div>
                                {/* <div className="tp-service__link">
                                    <Link href="/contact">
                                        <RightArrow /> 
                                    </Link>
                                </div> */}
                            </div>
                        </div>
                    )}

                     <div className="col-xl-4 col-lg-4 col-md-6 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay="1s">
                        <div className="tp-service__dashboard" 
                        style={{backgroundImage: `url(${bg_img})`}} >
                           <div className="tp-service__top-content">
                              <h3 className="tp-service__title-white">{title_2}</h3>
                              <p>{des}</p>
                              {/* <Link className="tp-btn-orange tp-btn-hover alt-color-white" href="/contact">
                                 <span>{btn_text}</span>
                                 <b></b>
                              </Link> */}
                                <PopupButton
                                    buttonTitle="Schedule a Meeting"
                                    className="tp-btn-orange tp-btn-hover alt-color-white"
                                    showIcon={false}
                                />
                           </div>
                           <div className="tp-service__dashdboard-sm-img">
                              <Image className="wow tpfadeRight" data-wow-duration=".9s" data-wow-delay=".7s" 
                              src={img} alt="theme-pure" />
                           </div>
                        </div>
                     </div>

                  </div>
               </div>
            </div>
        </>
    );
};

export default BenefitsArea;