import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicEffect';
import useTitleAnimation from '@/hooks/useTitleAnimation';
import Brwoser from '@/common/brwoser';
import BounceLine from '@/svg/bounce-line';
import gsap from 'gsap';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';

import left_shape from "../../../public/assets/img/hero/hero-left-shape-3-1.png" ;
import gradient_bg from "../../../public/assets/img/hero/hero-gradient-3.jpg" ;
import img_1 from "../../../public/assets/img/hero/hero-img-3-1.png";
import img_2 from "../../../public/assets/img/hero/hero-img-3-1-3.png" ;
import Link from 'next/link';

const hero_content = { 
   title_1: <>AI <span>Lab</span></>,
   title_2: "",
   info: <>Setoo's AI Lab caters to AI services that can transform <br /> your business operations with the integration of AI.</>,
   btn_1: "Experience AI Excellence",
   btn_2: "Contact Us Today",
   
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
                        {/* <Link className="tp-btn-blue-lg tp-btn-hover alt-color-black" href="/experience">
                           <span>{btn_1}</span>
                           <b></b>
                        </Link> */}
                        <Link className="tp-btn-border tp-btn-hover alt-color-black" href="/contact">
                           <span>{btn_2}</span>
                           <b></b>
                        </Link>
                     </div>
                     <div className="tp-hero-browser-wrapper d-flex align-items-center justify-content-center flex-wrap wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".9s">
                        <div className="tp-hero-browser-item">
                           <div className='bg-white'>
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path fill="#EE4C2C" d="M100.1 38.3l-9.2 9.2c15.1 15.1 15.1 39.4 0 54.3-15.1 15.1-39.4 15.1-54.3 0-15.1-15.1-15.1-39.4 0-54.3l24-24 3.4-3.4V2L27.8 38.2C7.7 58.3 7.7 90.8 27.8 111s52.6 20.1 72.4 0c20.1-20.2 20.1-52.5-.1-72.7z" /><circle fill="#EE4C2C" transform="rotate(-88.939 82.069 29.398) scale(.99997)" cx="82.1" cy="29.4" r="6.7" /></svg>
                           </div>
                           <p className="d-none d-sm-block">PyTorch</p>
                        </div>
                        <div className="tp-hero-browser-item">
                           <div className='bg-white'>
                              <svg fill="#333" viewBox="0 0 29 32" xmlns="http://www.w3.org/2000/svg"><path d="m14.548 0-13.856 7.999v16.002l13.856 7.999 13.857-7.999v-16.002zm-10.66 22.396v-2.133h12.792v-3.197h-12.791v-7.461h12.79v-3.198h-7.021l4.89-2.712 10.66 5.913v2.133h-12.791v3.197h12.792v7.462h-12.793v3.197h7.023l-4.89 2.712z" /></svg>
                           </div>
                           <p className="d-none d-sm-block">Meta Human</p>
                        </div>
                        <div className="tp-hero-browser-item">
                           <div className='bg-white'>
                              <svg viewBox="56.329999999999984 457.15000000000003 2387.3400000000006 1585.74" xmlns="http://www.w3.org/2000/svg" width="2500" height="1210"><linearGradient id="a" gradientTransform="matrix(1 0 0 -1 0 2500)" gradientUnits="userSpaceOnUse" x1="573.85" x2="2217.65" y1="1291.09" y2="1208.07"><stop offset="0" stopColor="#0064e1" /><stop offset=".4" stopColor="#0064e1" /><stop offset=".83" stopColor="#0073ee" /><stop offset="1" stopColor="#0082fb" /></linearGradient><linearGradient id="b" gradientTransform="matrix(1 0 0 -1 0 2500)" gradientUnits="userSpaceOnUse" x1="400.24" x2="400.24" y1="888.86" y2="1494.91"><stop offset="0" stopColor="#0082fb" /><stop offset="1" stopColor="#0064e0" /></linearGradient><path d="M314.19 1502.88c0 91.16 20 161.14 46.16 203.48 34.29 55.46 85.43 79 137.57 79 67.24 0 128.76-16.69 247.31-180.66 95-131.42 206.89-315.89 282.19-431.54l127.52-195.93c88.58-136.07 191.11-287.33 308.67-389.86 96-83.69 199.5-130.18 303.69-130.18 174.93 0 341.55 101.37 469.07 291.49 139.56 208.21 207.3 470.48 207.3 741.12 0 160.9-31.71 279.12-85.68 372.52-52.13 90.32-153.75 180.57-324.69 180.57v-257.57c146.37 0 182.89-134.5 182.89-288.42 0-219.34-51.14-462.75-163.8-636.68-79.94-123.37-183.55-198.75-297.54-198.75-123.29 0-222.5 93-334 258.77-59.28 88.09-120.13 195.43-188.46 316.56l-75.22 133.25C1006.09 1638 967.81 1699 892.26 1799.68 759.85 1976 646.77 2042.85 497.92 2042.85c-176.59 0-288.25-76.47-357.41-191.7-56.45-93.89-84.18-217.1-84.18-357.48z" fill="#0081fb" /><path d="M259.65 766.82c118.22-182.23 288.83-309.67 484.51-309.67 113.32 0 226 33.54 343.62 129.6 128.68 105 265.83 278 436.94 563l61.35 102.25c148.11 246.74 232.37 373.68 281.69 433.54 63.42 76.87 107.84 99.79 165.54 99.79 146.37 0 182.89-134.5 182.89-288.42l227.48-7.14c0 160.9-31.71 279.12-85.68 372.52-52.13 90.32-153.75 180.57-324.69 180.57-106.27 0-200.41-23.08-304.52-121.3-80-75.38-173.6-209.29-245.58-329.67l-214.11-357.65c-107.42-179.49-206-313.32-263-373.93C944.73 795.13 865.86 716.43 740 716.43c-101.86 0-188.37 71.48-260.76 180.82z" fill="url(#a)" /><path d="M740 716.43c-101.86 0-188.37 71.48-260.76 180.82-102.37 154.5-165 384.63-165 605.63 0 91.16 20 161.14 46.16 203.48l-219.89 144.79c-56.45-93.89-84.18-217.1-84.18-357.48 0-255.29 70.07-521.37 203.32-726.85 118.22-182.23 288.83-309.67 484.51-309.67z" fill="url(#b)" /></svg>
                           </div>
                           <p className="d-none d-sm-block">LLAMA 3</p>
                        </div>
                        <div className="tp-hero-browser-item">
                           <div className='bg-white'>
                              <svg id="RagIcon" enableBackground="new 0 0 512 512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><g><path d="m424.58 271c6.192 17.458 22.865 30 42.42 30 24.813 0 45-20.187 45-45s-20.187-45-45-45c-19.555 0-36.228 12.542-42.42 30h-153.58v-33.889h111.435l24.173-24.174c5.875 2.817 12.451 4.398 19.39 4.398 24.813 0 45-20.187 45-45s-20.187-45-45-45-45 20.187-45 45c0 6.938 1.581 13.514 4.398 19.389l-15.387 15.387h-99.009v-30.025l80.899-19.94v-39.726c6.146-2.162 11.913-5.694 16.819-10.601 17.546-17.545 17.546-46.094 0-63.64-17.545-17.546-46.093-17.545-63.639 0-17.546 17.545-17.546 46.094 0 63.64 4.906 4.906 10.674 8.438 16.82 10.6v16.222l-50.899 12.548v-17.249c0-43.259-35.194-78.453-78.453-78.453-35.099 0-65.509 23.405-75.21 56.141-37.702 5.69-66.695 38.31-66.695 77.573v11.597c-28.992 6.803-50.642 32.877-50.642 63.914v52.576c0 31.037 21.65 57.111 50.642 63.913v11.597c0 39.264 28.993 71.884 66.695 77.574 9.701 32.736 40.111 56.141 75.21 56.141 43.259 0 78.453-35.194 78.453-78.453v-17.248l50.899 12.546v16.223c-6.146 2.162-11.913 5.694-16.82 10.6-17.546 17.545-17.546 46.094 0 63.64 8.773 8.772 20.296 13.159 31.82 13.159s23.047-4.386 31.819-13.159c17.546-17.545 17.546-46.094 0-63.64-4.906-4.906-10.674-8.438-16.819-10.601v-39.725l-80.899-19.941v-30.025h99.008l15.387 15.387c-2.817 5.875-4.398 12.45-4.398 19.389 0 24.813 20.187 45 45 45s45-20.187 45-45-20.187-45-45-45c-6.939 0-13.515 1.581-19.39 4.398l-24.173-24.174h-111.434v-33.889zm42.42-30c8.271 0 15 6.729 15 15s-6.729 15-15 15-15-6.729-15-15 6.729-15 15-15zm-41.002-113.665c8.271 0 15 6.729 15 15s-6.729 15-15 15-15-6.729-15-15 6.729-15 15-15zm-99.706-92.942c5.85-5.848 15.366-5.847 21.213 0 2.833 2.833 4.394 6.6 4.394 10.607s-1.561 7.773-4.394 10.607c-5.849 5.848-15.365 5.847-21.213 0-5.849-5.849-5.849-15.365 0-21.214zm-85.292 378.667c0 26.717-21.736 48.453-48.453 48.453-27.06 0-48.476-22.594-48.476-48.464 0-13.31 5.287-25.721 14.887-34.947l-20.788-21.63c-13.349 12.829-21.528 29.469-23.574 47.563-19.656-6.177-33.954-24.569-33.954-46.237l-.001-39.867h-15c-19.652-.001-35.641-15.99-35.641-35.643v-52.576c0-14.296 8.465-26.646 20.642-32.32 0 39.5 29.884 68.364 66.616 68.364v-30c-20.19 0-36.616-16.426-36.616-36.616v-44.937c0-21.669 14.297-40.061 33.954-46.237 2.046 18.095 10.225 34.735 23.574 47.564l20.788-21.63c-9.6-9.226-14.887-21.637-14.887-34.947 0-26.715 21.728-48.45 48.439-48.464 26.717-.001 48.49 21.735 48.49 48.451zm85.292 43.334c5.849-5.848 15.365-5.849 21.213 0 2.833 2.833 4.394 6.6 4.394 10.607s-1.561 7.773-4.394 10.607c-5.849 5.848-15.365 5.848-21.213 0-5.848-5.85-5.848-15.366 0-21.214zm99.706-101.729c8.271 0 15 6.729 15 15s-6.729 15-15 15-15-6.729-15-15 6.729-15 15-15z" /></g><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /></svg>
                           </div>
                           <p className="d-none d-sm-block">RAG</p>
                        </div>
                        <div className="tp-hero-browser-item">
                           <div className='bg-white'>
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path d="M86.758 70.89c-4.992 0-9.465 2.208-12.528 5.68l-7.851-5.547a21.275 21.275 0 001.312-7.32c0-2.531-.46-4.95-1.27-7.203l7.837-5.488c3.062 3.457 7.523 5.652 12.5 5.652 9.207 0 16.703-7.48 16.703-16.672 0-9.195-7.496-16.672-16.703-16.672-9.211 0-16.707 7.477-16.707 16.672 0 1.645.25 3.23.699 4.735l-7.84 5.488a21.578 21.578 0 00-13.36-7.746v-9.43c7.567-1.586 13.27-8.293 13.27-16.312C62.82 7.53 55.324.055 46.117.055c-9.21 0-16.707 7.476-16.707 16.672 0 7.91 5.555 14.539 12.969 16.238v9.547c-10.117 1.773-17.84 10.59-17.84 21.191 0 10.652 7.797 19.5 17.992 21.211V95c-7.492 1.64-13.12 8.309-13.12 16.273 0 9.196 7.495 16.672 16.706 16.672 9.207 0 16.703-7.476 16.703-16.672 0-7.964-5.629-14.632-13.117-16.273V84.914a21.592 21.592 0 0013.133-7.625l7.902 5.586a16.45 16.45 0 00-.687 4.688c0 9.195 7.496 16.671 16.707 16.671 9.207 0 16.703-7.476 16.703-16.671 0-9.196-7.496-16.672-16.703-16.672zm0-38.984c4.465 0 8.097 3.63 8.097 8.086 0 4.453-3.632 8.082-8.097 8.082-4.469 0-8.102-3.629-8.102-8.082 0-4.457 3.633-8.086 8.102-8.086zm-48.742-15.18c0-4.456 3.632-8.081 8.101-8.081 4.465 0 8.098 3.625 8.098 8.082 0 4.457-3.633 8.082-8.098 8.082-4.469 0-8.101-3.625-8.101-8.082zm16.199 94.547c0 4.457-3.633 8.082-8.098 8.082-4.469 0-8.101-3.625-8.101-8.082 0-4.457 3.632-8.082 8.101-8.082 4.465 0 8.098 3.625 8.098 8.082zm-8.102-36.296c-6.226 0-11.293-5.059-11.293-11.274 0-6.219 5.067-11.277 11.293-11.277 6.23 0 11.297 5.058 11.297 11.277 0 6.215-5.066 11.274-11.297 11.274zm40.645 20.668c-4.469 0-8.102-3.625-8.102-8.082 0-4.458 3.633-8.083 8.102-8.083 4.465 0 8.097 3.625 8.097 8.082 0 4.458-3.632 8.083-8.097 8.083zm0 0" fill="#231f20" /></svg>
                           </div>
                           <p className="d-none d-sm-block">Kafka</p>
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