import Link from 'next/link';
import React from 'react';
import PopupButton from '@/common/calendly-popup';

const cta_content ={ 
     bg_img: "/assets/img/cta/cta-bg.jpg",
     title: "Transform your Vision into Reality",
     description: <>Don't let your idea remain just a concept. Collaborate with us to <br /> create something extraordinary.</>,
     btn_text: "Schedule a Meeting",
}
const {bg_img, title, description, btn_text}  = cta_content

const CtaArea = () => {
    return (
        <>
            <div className="tp-cta-area p-relative">
             <div className="tp-cta-grey-bg dark-mid-bg"></div>
               <div className="container">
                  <div className="row">
                     <div className="col-12">
                        <div className="tp-cta-bg" 
                        // style={{backgroundImage: `url(${bg_img})`}}
                        >
                           <div className="tp-cta-content tp-inner-font text-center">
                              <h3 className="tp-section-title text-white" name="cta-title">{title}</h3>
                              <p name="cta-description">{description}</p>
                              {/* <Link className="tp-btn-inner white-bg text-black" href="/contact">{btn_text}</Link> */}
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