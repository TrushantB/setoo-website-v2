import Image from 'next/image';
import React from 'react';


// brand img import here 
import brand_img_1 from "../../../../public/assets/img/recognition/iso-logo.png";
import brand_img_2 from "../../../../public/assets/img/recognition/startup-india.webp";
import brand_img_3 from "../../../../public/assets/img/recognition/msme-india.webp";
import brand_img_4 from "../../../../public/assets/img/recognition/design-rush.webp";
import brand_img_5 from "../../../../public/assets/img/recognition/duns-logo.png";
import Link from 'next/link';

const recognition_content = {
    title: "We are proudly recognised by",
    
    recognition_img: [
        {img: brand_img_1, delay: ".2s", href: ""},
        {img: brand_img_2, delay: ".4s", href: ""},
        {img: brand_img_3, delay: ".6s", href: ""},
        {img: brand_img_4, delay: ".8s", href: "https://www.designrush.com/agency/profile/setoo"},
        { img: brand_img_5, delay: ".10s", href: "" }

    ]
}
const {title, recognition_img}  = recognition_content 


const Recognition = () => {
    return (
      <>
        <div className="ab-brand-area">
          <div className="container">
            <div className="ab-brand-border-bottom pb-90">
              <div className="row">
                <div className="col-12">
                  <div className="ab-brand-section-box text-center mb-50">
                    <h3 className="ab-brand-title">{title}</h3>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-xl-10">
                  <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 justify-content-center row-gap-3">
                    {recognition_img.map((item, i) => (
                      <div
                        key={i}
                        className="col wow tpfadeUp"
                        data-wow-duration=".9s"
                        data-wow-delay={item.delay}
                      >
                        <div className="ab-brand-item recognition-img-wrapper">
                        {item.href ? (
                          <Link href={item.href} target="_blank">
                              <Image src={item.img} alt="theme-pure" />
                          </Link>
                        ) : (
                          <Image src={item.img} alt="theme-pure" />
                        )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
};

export default Recognition;