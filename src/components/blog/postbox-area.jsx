import VideoPopup from '@/modals/video-popup';
import SearchIcon from '@/svg/search-icon';
import Link from 'next/link';
import React,{useState} from 'react';
import Image from 'next/image';
// import Categories from './categories';
// import RecentPost from './recent-post';
// import Search from './search';
// import Tags from './tags';
 

import img_1 from "../../../public/assets/img/blogs/ui-ux-principles-banner.png";
import img_2 from "../../../public/assets/img/blogs/invest-website-redesign.png";
import img_3 from "../../../public/assets/img/blogs/react-chart-libraries.png";

// blog page data  
const blog_page_data = [
    {
      id: 1,
      img: img_1,
      cls: "format-image",
      slider_img: false,
      category: "Design",
      date: "August 3, 2023",
      video: [],
      title: "6 UI/UX Design Principles: Everyone Should Know",
      link: '/blog/ui-ux-design-principles',
      des: (
        <>
          Design is not an overnight thing. It takes all the raw ingredients to serve the perfect user-experience.
          Whether you build MVP or the final product, you need a processed design for both.
        </>
      ),
    },
    {
      id: 2,
      img: img_2,
      cls: "format-image",
      slider_img: false,
      category: "Design",
      date: "September 5, 2023",
      video: [],
      title: "Why should you invest in website redesign?",
      link: '/blog/why-should-you-invest-in-website-redesign',
      des: (
        <>
          Nowadays every company has a website. People have their own web presence.
          Most of the digital campaigns lead you to the website.
          Gaining more traction and converting potential audiences is the
          ultimate purpose behind all of it.
        </>
      ),
    },
    {
      id: 3,
      img: img_3,
      cls: "format-image fix",
      slider_img: false,
      category: "Development",
      date: "September 26, 2023",
      video: [],
      title: "7 Most effective React libraries for effortless data visualisation.",
      link: '/blog/best-react-chart-libraries',
      des: (
        <>
          Data is everywhere! Nowadays, we rely more on data. We share, collect and analyze the
          data for better digital solutions for business. To visualize and study data, there is
          a variety of data representations and visualization.
        </>
      ),
    },
  ];
   
  
const PostboxArea = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  
    return (
        <>
        <div className="postbox__area pt-90 pb-90">
            <div className="container">
               <div className="row">
                  <div className="col-xxl-9 col-xl-9 col-lg-9">
                     <div id="blog" className="postbox__wrapper pr-20">
                        {blog_page_data.map((item, i)  => 
                            <article key={i} className={`postbox__item ${item.cls} mb-70 transition-3`}>
                                {item.img && 
                                    <div className="postbox__thumb w-img">
                                    <Link href={item.link}>
                                            <Image src={item.img} alt={item.title} />
                                        </Link>
                                    </div>
                                }
                                {item.video  && 
                                item.video.map((item, i) => 
                                    <div key={i} className="postbox__thumb postbox__video w-img  p-relative">
                                        <Link href={item.link}>
                                            <Image src={item.video_tum} alt={item.title} />
                                        </Link>
                                        {/* video modal start */}
                                        <VideoPopup
                                            isVideoOpen={isVideoOpen}
                                            setIsVideoOpen={setIsVideoOpen}
                                            videoId={item.videoId}
                                        />
                                        {/* video modal end */}
                                        <button onClick={() => setIsVideoOpen(true)}
                                        className="play-btn pulse-btn popup-video"
                                        ><i className="fas fa-play"></i></button>
                                    </div>
                                
                                )
                                }

                                <div className="postbox__content">
                                    <div className="postbox__meta">
                                        <span><Link href="#">{item.category}</Link></span>
                                        <span><Link href="#">{item.date}</Link></span>
                                    </div>
                                    <h3 className="postbox__title">
                                        <Link href={item.link}>{item.title}</Link>
                                    </h3>
                                    <div className="postbox__text">
                                        <p>{item.des}</p>
                                    </div>
                                    <div className="postbox__btn mt-35">
                                        <Link className="tp-btn-inner tp-btn-hover alt-color-black" href={item.link}>
                                            <span>Continue reading</span>
                                            <b></b>
                                        </Link>
                                    </div>
                                </div>
                            </article>
                            
                            )
                        } 

                        {/* <div className="basic-pagination">
                           <nav>
                              <ul>
                                 <li>
                                    <Link href="/blog">
                                       <i className="far fa-angle-left"></i>
                                    </Link>
                                 </li>
                                 <li>
                                    <Link className="current" href="/blog">1</Link>
                                 </li>
                                 <li>
                                    <Link href="/blog">2</Link>
                                 </li>
                                 <li>
                                    <span>...</span>
                                 </li>
                                 <li>
                                    <Link href="/blog">3</Link>
                                 </li>
                                 <li>
                                    <Link href="/blog">
                                       <i className="far fa-angle-right"></i>
                                    </Link>
                                 </li>
                              </ul>
                              </nav>
                        </div> */}
                     </div>
                  </div>

                  <div className="col-xxl-4 col-xl-4 col-lg-4">
                     {/* <div className="sidebar__wrapper"> 
                        <Search />
                        <RecentPost />  
                        <Categories /> 
                        <Tags /> 
                     </div> */}
                  </div>
               </div>
            </div>
         </div>            
        </>
    );
};

export default PostboxArea;