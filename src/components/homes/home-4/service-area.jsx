import studios_data from '@/data/ai-studios-data';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

import img from "../../../../public/assets/img/service/service-shape-right.png";


const service_content = {
    sub_title: "WHAT WE DO",
    title: "Our Studios",
    description: <>Setoo's Studio provides strategic solutions <br /> for solid problems</>,
}
const {sub_title, title, description}  = service_content


const ServiceArea = () => {
    return (
        <>
           <div className="tp-service-area blue-bg p-relative pt-115 pb-105">
               <div className="tp-service-shape-right z-index">
                  <Image src={img} alt="theme-pure" />
               </div>
               <div className="container">
                  <div className="row align-items-end mb-60">
                     <div className="col-xl-6 col-lg-6">
                        <div className="tp-service-section-four">
                           <span className="tp-section-subtitle-4 d-inline-block pb-10">{sub_title}</span>
                           <h2 className="tp-section-title-4">{title}</h2>
                        </div>
                     </div>
                     <div className="col-xl-6 col-lg-6  wow tpfadeRight" data-wow-duration=".9s" data-wow-delay=".5s">
                        <div className="tp-service-sction-content pb-15 d-flex justify-content-md-start justify-content-end">
                           <p>{description}</p>
                        </div>
                     </div>
                  </div>
                  <div className="tp-service-4-border-top  wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".7s">
                     <div className="row">
                        {studios_data.slice(0, 3).map((item , i) => 
                            <div key={i} className={`col-lg-4 col-md-6 mb-50 tp-service-4-border-right service-border-trang-${item.cls}`}>
                                <div className="tp-service-4-item z-index">
                                    <div className="tp-service-4-icon">
                                        <Image src={item.img} alt="theme-pure" />
                                    </div>
                                    <div className="tp-service-4-content">
                                        <span>{item.sub_title}</span>
                                        <h4 className="tp-service-4-title"><Link href={item.link}>{item.title}</Link></h4>
                                        <p>{item.description}</p>
                                       <Link className="tp-btn-service" href={item.link}>Explore {item.title}</Link>
                                    </div>
                                </div>
                            </div>
                        )}          
                     </div>
                  </div>
               </div>
            </div> 
        </>
    );
};

export default ServiceArea;