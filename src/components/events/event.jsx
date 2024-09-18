import VideoPopup from "@/modals/video-popup";
import SearchIcon from "@/svg/search-icon";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
// import Categories from './categories';
// import RecentPost from './recent-post';
// import Search from './search';
// import Tags from './tags';

import img_1 from "../../../public/assets/img/events/banner-image.png";

// blog page data
const blog_page_data = [
  {
    id: 1,
    img: img_1,
    cls: "format-image",
    slider_img: false,
    category: "Design",
    date: "Sep 19, 2024",

    title: "Boost your Business Credibility with the Power of AI",
    link: "/events/boost-business-credibility-with-ai",
    des: (
      <>
        We are excited to invite you to an exclusive event on Boosting your
        Business Credibility with AI for SMEs, designed to help you explore the
        innovative ways artificial intelligence can transform your business.
        This event will provide valuable insights into how AI can enhance your
        business reputation, streamline operations, and improve customer trust.
      </>
    ),
  },
];

const EventLising = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <div className="postbox__area pt-90 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-xxl-9 col-xl-9 col-lg-9">
              <div id="blog" className="postbox__wrapper pr-20">
                {blog_page_data.map((item, i) => (
                  <article
                    key={i}
                    className={`postbox__item ${item.cls} mb-70 transition-3`}
                  >
                    {item.img && (
                      <div className="postbox__thumb w-img">
                        <Link href={item.link}>
                          <Image src={item.img} alt={item.title} />
                        </Link>
                      </div>
                    )}
                  

                    <div className="postbox__content">
                      <div className="postbox__meta">
                       
                        <span>
                          <Link href="#">{item.date}</Link>
                        </span>
                      </div>
                      <h3 className="postbox__title">
                        <Link href={item.link}>{item.title}</Link>
                      </h3>
                      <div className="postbox__text">
                        <p>{item.des}</p>
                      </div>
                      <div className="postbox__btn mt-35">
                        <Link
                          className="tp-btn-inner tp-btn-hover alt-color-black"
                          href={item.link}
                        >
                          <span>View Event</span>
                          <b></b>
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}

              
              </div>
            </div>

            <div className="col-xxl-4 col-xl-4 col-lg-4">
           
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventLising;
