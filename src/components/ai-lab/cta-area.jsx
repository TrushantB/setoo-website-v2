import Link from 'next/link';
import React from 'react';

const cta_content ={ 
     bg_img: "/assets/img/cta/cta-bg.jpg",
     title: "Meet Setoo's AI Experts",
     description: <>Get ready to transform your business with AI</>,
     btn_text: "Connect with Expert",
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
                              <h3 className="tp-section-title text-white">{title}</h3>
                              <p>{description}</p>
                                 <Link className="tp-btn-inner white-bg text-black" href="/contact">{btn_text}</Link>
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