import Link from 'next/link';
import React from 'react';

const cta_content ={ 
     bg_img: "/assets/img/cta/cta-bg.jpg",
     title: "Ready to Take the Next Step?",
     description: <>Your goals are our mission. <br /> Whether it's a simple query or a complex project, 
      we're here to provide the solutions you need. <br /> Let's collaborate and create something 
   extraordinary.</>,
     btn_text: "Let's Get Started",
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