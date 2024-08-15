import React, {useRef} from 'react';
import Slider from 'react-slick';

import testimonial_img_1 from "./../../../../public/assets/img/clients/cubyts-logo.webp"
import testimonial_img_2 from "./../../../../public/assets/img/clients/shoptimize-logo.webp"
import testimonial_img_3 from "./../../../../public/assets/img/clients/hp-logo.webp"
import testimonial_img_4 from "./../../../../public/assets/img/clients/vedaearth-logo.webp"
import Image from 'next/image';


const testimonial_content  = {
    bg_img: "/assets/img/testimonial/testi-bg-3-1.png",
    title: <><span>Your Success,</span><br />Our Stories</>
}
const {bg_img , title}  = testimonial_content


// slider setting
const settings = {	
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: false, 
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
            }
        }
        
    ]
}


// testimonial data
const testimonial_data = [
    {
        id: 1, 
        img: testimonial_img_1, 
        name: "Cubyts",
        job_title: "Director of Marketing",
        description: <>They are fast, responsive, grounded, and spend some time understanding 
        the requirements and scope.</>,

    },
    {
        id: 2, 
        img: testimonial_img_2, 
        name: "Graas",
        job_title: "Senior Project Manager",
        description: <>All the deliveries are on time with minimum fallouts.</>,

    },
    {
        id: 3, 
        img: testimonial_img_3, 
        name: "Hindustan Pencils Pvt Ltd",
        job_title: "E-Commerce Manager",
        description: <>The team is highly approachable.</>,

    },
    {
        id: 4, 
        img: testimonial_img_4, 
        name: "Vedaearth",
        job_title: "Business Head",
        description: <>We were impressed with their timely updates and understanding of the
        given tasks.</>,

    },
]


const TestimonialArea = () => {
    const sliderRef = useRef(null);
    return (
        <>
            <div className="tp-testimonial-area-1 tp-testimonial-3-mlr pb-110">
               <div className="tp-testimonial-3-bg pt-110 fix" 
               style={{backgroundImage: `url(${bg_img})`}}
               >
                  <div className="container">
                     <div className="row">
                        <div className="col-12">
                           <div className="tp-testimonial-3-section-box d-flex justify-content-between align-items-end mb-60">
                              <h3 className="tp-section-title-3 text-white">{title}</h3>
                              <div className="tp-test-arrow d-flex pb-10">
                                <button
                                  onClick={() => sliderRef.current?.slickPrev()}
                                  type="button" className="slick-prev"><i className="fal fa-angle-left"></i></button>
                                <button
                                  onClick={() => sliderRef.current?.slickNext()}
                                  type="button" className="slick-next"><i className="fal fa-angle-right"></i></button>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="tp-testimonial-3-slider-wrapper">
                     <div className="container-fluid g-0">
                        <div className="row g-0">
                           <div className="col-12"> 
                                <Slider 
                                ref={sliderRef} {...settings}
                                className="tp-testimonial-3-slider-active"
                                >                                
                                {testimonial_data.map((item, i)  => 
                                    <div key={i} className="tp-testimonial-wrapper h-100">
                                    <div className="tp-testimonial-3-item d-flex justify-content-between align-items-end">
                                       <div className="tp-testimonial-3-content-box h-100 d-flex flex-column">
                                          <div className="tp-testimonial-3-review">
                                             <span><i className="fas fa-star"></i></span>
                                             <span><i className="fas fa-star"></i></span>
                                             <span><i className="fas fa-star"></i></span>
                                             <span><i className="fas fa-star"></i></span>
                                             <span><i className="fas fa-star"></i></span>
                                          </div>
                                          <p>{item.description}</p>
                                          <div className="tp-testimonial-3-author-info d-flex align-items-center mt-auto">
                                             <div className="tp-testimonial-3-sm-thumb d-md-none">
                                                <Image src={item.img} alt={item.name} />
                                             </div>
                                             <div>
                                                <h5>{item.name}</h5>
                                                <span>{item.job_title}</span>
                                             </div>
                                          </div>
                                       </div>
                                       <div className="tp-testimonial-3-thumb d-none d-md-block">
                                          <Image src={item.img} alt="theme-pure" />
                                       </div>
                                    </div>
                                 </div>
                                    )
                                }
                                </Slider> 
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
        </>
    );
};

export default TestimonialArea;