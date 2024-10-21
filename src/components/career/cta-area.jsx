import Link from 'next/link';
import React from 'react';

const cta_content ={ 
   bg_img: "/assets/img/cta/cta-bg.jpg",
   title: "Elevate Your Career with Us",
   description: <>Ready to make your mark? <br /> Explore our open positions and start your journey with Setoo today!</>,
   btn_text: "Why become Setooist?",
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
                                 <Link className="tp-btn-inner white-bg text-black" href="/about">{btn_text}</Link>
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