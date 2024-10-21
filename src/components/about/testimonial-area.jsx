import StartIcon from '@/svg/start-icon';
import React, {useRef} from 'react';
import Image from 'next/image';
import Slider from 'react-slick'; 


// slider img import 
import slider_img_1 from "./../../../public/assets/img/clients/cubyts-logo.webp";
import slider_img_2 from "./../../../public/assets/img/clients/shoptimize-logo.webp";
import slider_img_3 from "./../../../public/assets/img/clients/hp-logo.webp";
import slider_img_4 from "./../../../public/assets/img/clients/vedaearth-logo.webp";
import shadow_img from "./../../../public/assets/img/testimonial/BODY.png";


const slider_data  = [
    {
        id: 1,
        img: slider_img_1,
        name: "Cubyts",
        job: "Director of Marketing",
        info: <>They are fast, responsive, grounded, and spend some time understanding
            the requirements and scope.</>,

    },
    {
        id: 2,
        img: slider_img_2,
        name: "Graas",
        job: "Senior Project Manager",
        info: <>All the deliveries are on time with minimum fallouts.</>,

    },
    {
        id: 3,
        img: slider_img_3,
        name: "Hindustan Pencils Pvt Ltd",
        job: "E-Commerce Manager",
        info: <>The team is highly approachable.</>,

    },
    {
        id: 4,
        img: slider_img_4,
        name: "Vedaearth",
        job: "Business Head",
        info: <>We were impressed with their timely updates and understanding of the
            given tasks.</>,

    }, 
]

// slider setting 
const setting = {	
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
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
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
            }
        },
        {
            breakpoint: 576,
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


const testimonial_content = {
    bg_img: "/assets/img/testimonial/testi-bg-2-1.png",
    title: <>What people <br /> are saying about us</>
}
const {bg_img, title}  = testimonial_content
const TestimonialArea = () => {
    const sliderRef = useRef()
    return (
        <>
            <div className="tp-testimonial-2-area pt-110 pb-120" 
            style={{backgroundImage: `url(${bg_img})`}}
            >
               <div className="container">
                  <div className="row justify-content-center">
                     <div className="col-xl-8">
                        <div className="tp-testimonial-2-section-box mb-15 text-center">
                           <h3 className="tp-section-title-lg text-white" name="testimonials-title">{title}</h3>
                        </div>
                     </div>
                  </div>
                  <div className="row">

                     <div className="col-12">
                        <div className="tp-testimonial-2-section">

                           <Slider
                           {...setting} 
                           ref={sliderRef} 
                            className="tp-testimonial-2-slider-active">
                            {slider_data.map((item, i)  => 
                                 <div key={i} className="tp-testimonial-2-item p-relative wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".3s">
                                    {/* <div className="tp-testimonial-2-border-shape">
                                    <Image src={shadow_img} alt="theme-pure" />
                                    </div> */}
                                    <div className="d-flex flex-column h-100">
                                        {/* <div className="tp-testimonial-2-star">
                                        <span>
                                            <StartIcon />
                                            <StartIcon />
                                            <StartIcon />
                                            <StartIcon />
                                            <StartIcon /> 
                                        </span> 
                                        </div> */}
                                        <div className="tp-testimonial-2-content">
                                        <p name="testimonial-content">{item.info}</p>
                                        </div>
                                        <div className="tp-testimonial-2-author d-flex align-items-center mt-auto">
                                        {/* <div className="tp-testimonial-2-img">
                                            <Image src={item.img} alt="theme-pure" />
                                        </div> */}
                                        <div className="tp-testimonial-2-author-info">
                                            <h5 name="testimonial-author-name">{item.name}</h5>
                                            <span name="testimonial-author-job-position">{item.job}</span>
                                        </div>
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
        </>
    );
};

export default TestimonialArea;