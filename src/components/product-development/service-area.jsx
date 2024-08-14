import service_data from '@/data/product-dev-services';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


const service_content = {
    bg_img: "/assets/img/service/service-5-1-bg.png",
    sub_title: "What we Offer",
    title: <>Product Development Services</>,
    description: <>Understanding business requirements with an expert team of designers, developers, testers, and analysts to provide continuous support at rapid speed.</>,
    btn_text: "View Details",
}
const { bg_img, sub_title, title, description, btn_text } = service_content


const ProductService = () => {
    return (
        <>
            <div className="tp-service-area tp-services-five-item-bg-color p-relative fix">
                <div className="container-fluid p-0">
                    <div className="tp-service-five-bg"
                        style={{ backgroundImage: `url(${bg_img})` }}
                    ></div>
                    <div className="row g-0 align-items-center">
                        <div className="col-lg-4">
                            <div className="tp-service-five-section-box">
                                <span className="tp-section-subtitle-5">{sub_title}</span>
                                <h3 className="tp-section-title-5 pb-15">
                                    {title}
                                </h3>
                                <p className="pb-20">
                                    {description}
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="row g-0">
                                {service_data.slice(0, 9).map((item, i) =>
                                    <div key={i} className="col-md-4">
                                        <div className="tp-service-five-item z-index">
                                            <div className="tp-services-five-item-bg">
                                                <div className="inner"></div>
                                            </div>
                                            <div className="tp-service-five-wrapper">
                                                <div className="tp-service-five-icon">
                                                    {/* <Image src={item.img} alt="theme-pure" /> */}
                                                    {item.icon}
                                                </div>
                                                <div className="tp-service-five-content">
                                                    <h3 className="tp-service-five-title-sm">
                                                        <Link href="/service-details"> {item.title}</Link>
                                                    </h3>
                                                    <p>{item.description} </p>
                                                </div>
                                            </div>
                                            {/* <div className="tp-service-five-btn text-end">
                                       <Link href="/service-details"><i className="far fa-arrow-right"></i></Link>
                                    </div> */}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductService;