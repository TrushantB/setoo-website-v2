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
   title_1: <>Product Development</>,
   title_2: "",
   info: <>Crafting a strategy to ensure smooth development with a structured process. </>,
   btn_1: "Contact Us",
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
                           <i><i className="child-1">{title_1}</i></i>
                           <i><i className="child-1">{title_2}</i></i>
                        </h2>
                        <p className="tp-char-animation-2 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".7s">{info}</p>
                     </div>
                     <div className="tp-hero-btn-3 text-center wow tpfadeUp" data-wow-duration="1s" data-wow-delay=".9s">
                        <Link className="tp-btn-blue-lg tp-btn-hover alt-color-black" href="/contact">
                           <span>{btn_1}</span>
                           <b></b>
                        </Link>
                        {/* <Link className="tp-btn-border tp-btn-hover alt-color-black" href="#">
                           <span>{btn_2}</span>
                           <b></b>
                        </Link> */}
                     </div>
                     <div className="tp-hero-browser-wrapper d-flex align-items-center justify-content-center flex-wrap wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".9s">
                        <div className="tp-hero-browser-item">
                           <div className='bg-white'>
                              <svg fill="none" height="2500" width="1667" xmlns="http://www.w3.org/2000/svg" viewBox="1.466 2.199 285.068 427.602"><path d="M1.466 2.2h285.068V429.8H1.466z" stroke-width="3" /><path d="M144 216c0-39.359 31.907-71.267 71.267-71.267 39.359 0 71.267 31.908 71.267 71.267 0 39.36-31.908 71.267-71.267 71.267C175.907 287.267 144 255.36 144 216z" fill="#1abcfe" /><path d="M1.466 358.534c0-39.359 31.907-71.267 71.267-71.267H144v71.267c0 39.36-31.907 71.267-71.267 71.267S1.466 397.894 1.466 358.534z" fill="#0acf83" /><path d="M144 2.2v142.533h71.267c39.36 0 71.267-31.907 71.267-71.267S254.627 2.2 215.267 2.2z" fill="#ff7262" /><path d="M1.466 73.466c0 39.36 31.907 71.267 71.267 71.267H144V2.199H72.733c-39.36 0-71.267 31.908-71.267 71.267z" fill="#f24e1e" /><path d="M1.466 216c0 39.36 31.907 71.267 71.267 71.267H144V144.733H72.733c-39.36 0-71.267 31.908-71.267 71.267z" fill="#a259ff" /></svg>
                           </div>
                           <p className="d-none d-sm-block">Figma</p>
                        </div>
                        <div className="tp-hero-browser-item">
                           <div className='bg-white'>
                              <svg fill="none" height="15" viewBox="0 0 15 15" width="15" xmlns="http://www.w3.org/2000/svg"><path d="m4.5 4.5.40534-.29275c-.12698-.17581-.35282-.24972-.55917-.183-.20636.06673-.34617.25888-.34617.47575zm3 9.5c-3.58985 0-6.5-2.9101-6.5-6.5h-1c0 4.1421 3.35786 7.5 7.5 7.5zm6.5-6.5c0 3.5899-2.9101 6.5-6.5 6.5v1c4.1421 0 7.5-3.3579 7.5-7.5zm-6.5-6.5c3.5899 0 6.5 2.91015 6.5 6.5h1c0-4.14214-3.3579-7.5-7.5-7.5zm0-1c-4.14214 0-7.5 3.35786-7.5 7.5h1c0-3.58985 2.91015-6.5 6.5-6.5zm-2.5 12v-7.5h-1v7.5zm-.90534-7.20725 6.50004 8.99995.8106-.5854-6.49996-9.00005zm5.90534-.79275v6h1v-6z" fill="#000" /></svg>
                           </div>
                           <p className="d-none d-sm-block">Next JS</p>
                        </div>
                        <div className="tp-hero-browser-item">
                           <div className='bg-white'>
                              <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="m15.383 18.316 3.361-3.274h8.349l-7.396 7.396z" fill="#40d0fd" /><path d="m4.907 16.125 4.199 4.299 17.987-18.137h-8.349z" fill="#41d0fd" /><path d="m11.176 22.479 4.259 4.196 4.262-4.237-4.314-4.122z" fill="#1fbcfd" /><path d="m15.435 26.675 4.262-4.237 7.292 7.375h-8.396z" fill="#095a9d" /><path d="m15.435 26.675 3.971-1.321-1.338-1.297z" fill="#0e5199" /></svg>
                           </div>
                           <p className="d-none d-sm-block">Flutter</p>
                        </div>
                        <div className="tp-hero-browser-item">
                           <div className='bg-white'>
                              <svg height="264" preserveAspectRatio="xMidYMid" viewBox="0 0 256 264" width="256" xmlns="http://www.w3.org/2000/svg"><g fill="none"><path d="m45.9853445 256.455035-45.9853445 1.59526 23.5727668-23.967452 22.4144135 22.374027z" fill="#f15a24" /><path d="m254.580742 137.579706c-8.543545 66.613581-69.475503 113.676506-136.07807 105.123783-66.6135802-8.54538-113.6765055-69.475503-105.1329609-136.083576 8.5490519-66.6117454 69.46816-113.68017787 136.0872479-105.12561877 66.609909 8.54170887 113.683849 69.47733867 105.123783 136.08357677" fill="#f15a24" /><path d="m164.981832 87.5318642c7.990986 8.4939796.104637 28.5770008.104637 28.5770008s-7.794562 28.393426-52.421457 65.212909l-8.330599-8.176396 56.651008-57.899312 1.094102-1.477773c1.507145-2.456223 2.755449-26.4016456 2.902309-26.2364288" fill="#999" /><path d="m164.981832 87.5318642c7.990986 8.4939796.104637 28.5770008.104637 28.5770008s-7.794562 28.393426-52.421457 65.212909l-8.330599-8.176396 56.651008-57.899312 1.094102-1.477773c1.507145-2.456223 2.755449-26.4016456 2.902309-26.2364288z" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.918" /><path d="m92.099191 161.108415 72.763317-73.7858254c3.693514 4.3855883 4.479212 9.110789 3.407138 15.8424564-.721447 4.662785-8.774848 13.981013-8.774848 13.981013l-55.160385 55.999319" fill="#666" /><path d="m92.099191 161.108415 72.763317-73.7858254c3.693514 4.3855883 4.479212 9.110789 3.407138 15.8424564-.721447 4.662785-8.774848 13.981013-8.774848 13.981013l-55.160385 55.999319" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.201" /><path d="m164.981832 87.583265-72.882641 73.526986.1468594-.143188-.0275361.011015-18.0820616-17.817715c37.7079823-46.9050514 62.0884763-55.6505277 62.0884763-55.6505277s15.871828-6.1956303 27.194686-1.3878212c.870142.4662786 1.248305.7342969 1.560381 1.4630866" fill="#ff931e" /><path d="m164.981832 87.583265-72.882641 73.526986.1468594-.143188-.0275361.011015-18.0820616-17.817715c37.7079823-46.9050514 62.0884763-55.6505277 62.0884763-55.6505277s15.871828-6.1956303 27.194686-1.3878212c.870142.4662786 1.248305.7342969 1.560381 1.4630866z" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.918" /><path d="m112.665012 181.319938c-17.388151 14.320626-39.6410192 36.815812-69.888545 52.505901l6.7279955 28.762411-28.5164208-28.086858 71.1093136-73.392977" fill="#999" /><path d="m112.665012 181.319938c-17.388151 14.320626-39.6410192 36.815812-69.888545 52.505901l6.7279955 28.762411-28.5164208-28.086858 71.1093136-73.392977" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.918" /><path d="m74.6229244 143.400845 17.6653481 17.59559-40.810387 8.839099 22.7540258-26.752272.3928488.317583z" fill="#f15a24" /><path d="m74.6229244 143.400845 17.6653481 17.59559-40.810387 8.839099 22.7540258-26.752272.3928488.317583z" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.918" /><path d="m158.024368 66.2464323c-1.73294 15.6405243 9.527503 29.7206678 25.168027 31.4646229 15.627674 1.7366123 29.720668-9.5330097 31.464623-25.1680269 1.738448-15.6350171-9.540352-29.7298465-25.173534-31.4682944-15.64236-1.7274335-29.724339 9.5275025-31.459116 25.1716984" fill="#999" /><path d="m158.024368 66.2464323c-1.73294 15.6405243 9.527503 29.7206678 25.168027 31.4646229 15.627674 1.7366123 29.720668-9.5330097 31.464623-25.1680269 1.738448-15.6350171-9.540352-29.7298465-25.173534-31.4682944-15.64236-1.7274335-29.724339 9.5275025-31.459116 25.1716984z" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.918" /><path d="m210.565149 85.1380562c5.25573-7.67891 4.98404-19.1669853 3.928488-22.5704515-1.294198-4.167135-4.190999-10.9446956-9.242962-14.467485l-26.713722 24.6062897s20.530942 22.0582795 21.065143 22.1317091c.222125.0257004 6.16993-2.6985411 10.963053-9.7000623" fill="#666" /><path d="m210.565149 85.1380562c5.25573-7.67891 4.98404-19.1669853 3.928488-22.5704515-1.294198-4.167135-4.190999-10.9446956-9.242962-14.467485l-26.713722 24.6062897s20.530942 22.0582795 21.065143 22.1317091c.222125.0257004 6.16993-2.6985411 10.963053-9.7000623zm-5.38974-19.2752941s2.568204 6.3076106-.690239 11.2145497z" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.918" /><path d="m104.964073 173.156392-29.4820212 5.246552 17.7956858-18.489597" fill="#666" /><path d="m104.964073 173.156392-29.4820212 5.246552 17.7956858-18.489597m-17.9700814-16.384 37.4803508 35.273788" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.918" /></g></svg>
                           </div>
                           <p className="d-none d-sm-block">Postman</p>
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