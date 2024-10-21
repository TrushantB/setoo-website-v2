import Link from 'next/link';
import React from 'react';
import PopupButton from '@/common/calendly-popup';

const cta_content = {
    bg_img: "/assets/img/cta/cta-bg.jpg",
    title: "",
    info: <>Eyerything you need to accept cord payments and grow your business <br />
    anywhere on the planet.</>,
    btn_text: "Schedule a Meeting",
}
const {bg_img, title, info, btn_text}  = cta_content


const CtaArea = () => {
    return (
        <>
             <div className="tp-cta-area p-relative">
               <div className="tp-cta-grey-bg dark-mid-bg"></div>
               <div className="container">
                  <div className="row">
                     <div className="col-12">
                        <div className="tp-cta-bg" style={{backgroundImage: `url(${bg_img})`}}>
                           <div className="tp-cta-content text-center">
                              <h3 className="tp-section-title-lg text-white" name="testimonials-title">{title}</h3>
                              <p>{info}</p>
                              {/* <Link className="tp-btn-green" href="/contact">{btn_text}</Link> */}
                              <PopupButton
                                 buttonTitle="Schedule a Meeting"
                                 className="tp-btn-inner white-bg text-black"
                                 showIcon={false}
                              />
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
        </>
    );
};

export default CtaArea;