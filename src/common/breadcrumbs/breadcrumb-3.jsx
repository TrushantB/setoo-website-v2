import React from 'react';

import shape_1 from "../../../public/assets/img/breadcrumb/breadcrumb-shape-1.png";
import shape_2 from "../../../public/assets/img/breadcrumb/breadcrumb-shape-2.png";
import Image from 'next/image';

const BreadcrumbThree = () => {
    return (
        <>
            <div className="breadcrumb__area breadcrumb-height-3 p-relative dark-mid-bg fix">
               <div className="breadcrumb__shape-1">
                  <Image src={shape_1} alt="theme-pure" />
               </div>
               <div className="breadcrumb__shape-2">
                  <Image src={shape_2} alt="theme-pure" />
               </div>
               <div className="container">
                  <div className="breadcrumb__content-wrap">
                     <div className="row justify-content-center">
                        <div className="col-xl-12">
                           <div className="breadcrumb__content text-center z-index-3 mb-60">
                            <h3 className="breadcrumb__title">Build Your Career With <br /> <span className='text-primary'>Setooists</span> </h3>
                              <div className="breadcrumb__text">
                               <p>Shape your career with us! <br /> Join a dynamic team driving impactful projects and
                                 providing growth opportunities</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
        </>
    );
};

export default BreadcrumbThree;