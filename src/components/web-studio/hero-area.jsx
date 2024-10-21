import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicEffect';
import useTitleAnimation from '@/hooks/useTitleAnimation';
import BounceLine from '@/svg/bounce-line';
import gsap from 'gsap';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import PopupButton from '@/common/calendly-popup';

import left_shape from "../../../public/assets/img/hero/hero-left-shape-3-1.png" ;
import gradient_bg from "../../../public/assets/img/hero/hero-gradient-3.jpg" ;
import img_1 from "../../../public/assets/img/hero/hero-img-3-1.png";
import img_2 from "../../../public/assets/img/hero/hero-img-3-1-3.png" ;
import Link from 'next/link';

const hero_content = { 
   title_1: <>Web Studio</>,
   title_2: "",
   info: <>Weaving faster websites, mobile applications, and e-commerce stores <br /> for a better customer experience.</>,
   btn_1: "Schedule a Meeting",
   btn_2: "",
}

const { title_1, title_2, info, btn_1, btn_2 } = hero_content

const HeroArea = () => {

   let info_anim = useRef(null)

   useIsomorphicLayoutEffect(() => {
      let tl = gsap.timeline({ default: { ease: "SlowMo.easeOut" } });
      tl.to(".hero-text-anim i.child-1", { y: "0px", duration: 1, opacity: 1, stagger: 0.3, delay: .5 });
   }, [])

   return (
      <>
         <div className="tp-hero-area tp-hero-pt pt-170 pb-70 p-relative">
            <div className="tp-hero-left-shape">
               <Image src={left_shape} alt="them-pure" />
            </div>
            <div className="tp-hero-gradient-bg d-none">
               <Image src={gradient_bg} alt="them-pure" />
            </div>
            <div className="container">
               <div className="row justify-content-center z-index-3">
                  <div className="col-xl-11">
                     <div className="tp-hero-title-box text-center">
                        <h2 className="tp-hero-title-3 hero-text-anim pb-5">
                           <i><i className="child-1" name="hero-title">{title_1}</i></i>
                           <i><i className="child-1" name="hero-title-2">{title_2}</i></i>
                        </h2>
                        <p className="tp-char-animation-2 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".7s" name="lead-content">{info}</p>
                     </div>
                     <div className="tp-hero-btn-3 text-center wow tpfadeUp" data-wow-duration="1s" data-wow-delay=".9s">
                        {/* <Link className="tp-btn-blue-lg tp-btn-hover alt-color-black" href="#">
                           <span>{btn_1}</span>
                           <b></b>
                        </Link> */}
                        <PopupButton
                           buttonTitle="Schedule a Meeting"
                           className="tp-btn-blue-lg tp-btn-hover alt-color-black mb-10"
                           showIcon={false}
                        />
                        {/* <Link className="tp-btn-border tp-btn-hover alt-color-black" href="#">
                           <span>{btn_2}</span>
                           <b></b>
                        </Link> */}
                     </div>
                     <div className="tp-hero-browser-wrapper d-flex align-items-center justify-content-center flex-wrap wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".9s">
                        <div className="tp-hero-browser-item">
                           <div className='bg-white'>
                              <svg viewBox="0 0 128 128">
                                 <path fillRule="evenodd" clipRule="evenodd" fill="#494949" d="M64.094 126.224c34.275-.052 62.021-27.933 62.021-62.325 0-33.833-27.618-61.697-60.613-62.286C30.85.995 1.894 29.113 1.885 63.21c-.01 35.079 27.612 63.064 62.209 63.014zM63.993 4.63c32.907-.011 59.126 26.725 59.116 60.28-.011 31.679-26.925 58.18-59.092 58.187-32.771.007-59.125-26.563-59.124-59.608.002-32.193 26.766-58.848 59.1-58.859zM39.157 35.896c.538 1.793-.968 2.417-2.569 2.542-1.685.13-3.369.257-5.325.406 6.456 19.234 12.815 38.183 19.325 57.573.464-.759.655-.973.739-1.223 3.574-10.682 7.168-21.357 10.651-32.069.318-.977.16-2.271-.188-3.275-1.843-5.32-4.051-10.524-5.667-15.908-1.105-3.686-2.571-6.071-6.928-5.644-.742.073-1.648-1.524-2.479-2.349 1.005-.6 2.003-1.704 3.017-1.719a849.593 849.593 0 0126.618.008c1.018.017 2.016 1.15 3.021 1.765-.88.804-1.639 2.01-2.668 2.321-1.651.498-3.482.404-5.458.58l19.349 57.56c2.931-9.736 5.658-18.676 8.31-27.639 2.366-8.001.956-15.473-3.322-22.52-1.286-2.119-2.866-4.175-3.595-6.486-.828-2.629-1.516-5.622-1.077-8.259.745-4.469 4.174-6.688 8.814-7.113C74.333.881 34.431 9.317 19.728 34.922c5.66-.261 11.064-.604 16.472-.678 1.022-.013 2.717.851 2.957 1.652zm10.117 77.971c-.118.345-.125.729-.218 1.302 10.943 3.034 21.675 2.815 32.659-.886l-16.78-45.96c-5.37 15.611-10.52 30.575-15.661 45.544zm-8.456-2.078l-25.281-69.35c-11.405 22.278-2.729 56.268 25.281 69.35zm76.428-44.562c.802-10.534-2.832-25.119-5.97-27.125-.35 3.875-.106 8.186-1.218 12.114-2.617 9.255-5.817 18.349-8.899 27.468-3.35 9.912-6.832 19.779-10.257 29.666 16.092-9.539 24.935-23.618 26.344-42.123z"></path>
                              </svg>
                           </div>
                           <p className="d-none d-sm-block">WordPress</p>
                        </div>
                        <div className='tp-hero-browser-item'>
                           <div className='bg-white'>
                              <svg width="2192" height="2500" viewBox="0 0 256 292" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M223.774 57.34c-.201-1.46-1.48-2.268-2.537-2.357-1.055-.088-23.383-1.743-23.383-1.743s-15.507-15.395-17.209-17.099c-1.703-1.703-5.029-1.185-6.32-.805-.19.056-3.388 1.043-8.678 2.68-5.18-14.906-14.322-28.604-30.405-28.604-.444 0-.901.018-1.358.044C129.31 3.407 123.644.779 118.75.779c-37.465 0-55.364 46.835-60.976 70.635-14.558 4.511-24.9 7.718-26.221 8.133-8.126 2.549-8.383 2.805-9.45 10.462C21.3 95.806.038 260.235.038 260.235l165.678 31.042 89.77-19.42S223.973 58.8 223.775 57.34zM156.49 40.848l-14.019 4.339c.005-.988.01-1.96.01-3.023 0-9.264-1.286-16.723-3.349-22.636 8.287 1.04 13.806 10.469 17.358 21.32zm-27.638-19.483c2.304 5.773 3.802 14.058 3.802 25.238 0 .572-.005 1.095-.01 1.624-9.117 2.824-19.024 5.89-28.953 8.966 5.575-21.516 16.025-31.908 25.161-35.828zm-11.131-10.537c1.617 0 3.246.549 4.805 1.622-12.007 5.65-24.877 19.88-30.312 48.297l-22.886 7.088C75.694 46.16 90.81 10.828 117.72 10.828z" fill="#95BF46" /><path d="M221.237 54.983c-1.055-.088-23.383-1.743-23.383-1.743s-15.507-15.395-17.209-17.099c-.637-.634-1.496-.959-2.394-1.099l-12.527 256.233 89.762-19.418S223.972 58.8 223.774 57.34c-.201-1.46-1.48-2.268-2.537-2.357" fill="#5E8E3E" /><path d="M135.242 104.585l-11.069 32.926s-9.698-5.176-21.586-5.176c-17.428 0-18.305 10.937-18.305 13.693 0 15.038 39.2 20.8 39.2 56.024 0 27.713-17.577 45.558-41.277 45.558-28.44 0-42.984-17.7-42.984-17.7l7.615-25.16s14.95 12.835 27.565 12.835c8.243 0 11.596-6.49 11.596-11.232 0-19.616-32.16-20.491-32.16-52.724 0-27.129 19.472-53.382 58.778-53.382 15.145 0 22.627 4.338 22.627 4.338" fill="#FFF" /></svg>
                           </div>
                           <p className="d-none d-sm-block">Shopify</p>
                        </div>
                        <div className='tp-hero-browser-item'>
                           <div className='bg-white'>
                              <svg width="132" height="147" viewBox="0 0 132 147" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <rect width="132" height="147" fill="white" />
                                 <path d="M63.7 25.23C36.8981 25.23 15.2299 46.8982 15.2299 73.7001C15.2299 100.502 36.8981 122.17 63.7 122.17C90.5019 122.17 112.17 100.502 112.17 73.7001V25.23H63.7Z" fill="#F0047F" />
                                 <path d="M62.1333 75.2002V109.185C43.7394 108.407 28.9269 93.5941 28.1487 75.2002H62.1333Z" fill="white" stroke="#F0047F" />
                                 <path d="M65.2001 75.2666H99.1847C98.4064 93.6605 83.5939 108.473 65.2001 109.251V75.2666Z" fill="white" stroke="#F0047F" />
                                 <path d="M65.2001 72.1333V38.1309H99.2025V72.1333H65.2001Z" fill="white" stroke="#F0047F" />
                              </svg>
                           </div>
                           <p className="d-none d-sm-block">Jamstack</p>
                        </div>
                        
                     </div>
                     {/* <div className="tp-hero-3-wrapper p-relative">
                        <div className="tp-hero-3-border-wrap d-none d-md-block">
                           <span className="redius-shape-1"></span>
                           <span className="redius-shape-2"></span>
                           <span className="redius-shape-3"></span>
                        </div>
                        <div className="tp-hero-3-main-thumb z-index-5">
                           <Image src={img_1} alt="them-pure" />
                        </div>
                        <div className="tp-hero-3-shape-5 d-none d-lg-block wow frist-img animated">
                           <Image src={img_2} alt="them-pure" />
                        </div>
                        <div className="tp-hero-3-shape-6 d-none d-lg-block">
                           <span> <BounceLine /> </span>
                        </div>
                     </div> */}
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default HeroArea;