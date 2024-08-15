import React from 'react';
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicEffect';
import SocialLinks from '@/common/social-links';
import Image from 'next/image';
import solution_1 from "../../../public/assets/img/project/cubyts-before-results.webp";
import solution_2 from "../../../public/assets/img/project/cubyts-after-results.webp";
import Link from 'next/link';


const project_details_data = [
    {
        id: 1,
        cls: "overview", 
        title: "Customer Challenge",        
         description: <>Cubyts wanted a website that would function as a marketing tool,
         a landing page, and the public face of their ambitious product on the web.
         They were experiencing issues with:</>,
         feture_list: [
            <>Slow loading page</>,
            <>No scalability and online recognition(SEO)</>,
            <>An appropriate web presence serves as company face and product landing page with high
            security and delightful user experience</>,
            <>High maintenance technology architecture</>,
            <>Managing seamless custom content</>
         ],
    },
    {
        id: 2,
        cls: "overview", 
        title: "Solutions",
         description: <><p>Since they wanted the solution to be built with cutting-edge technology,
            we clearly advised them to switch from WordPress to JAMstack.</p>
            <p>Jamstack+ offers the web
               ecosystem for developing robust, long-lasting, blazing-fast, accessible, and highly
               secure websites. The design wireframes were provided by the Cubyts designer,
               who further guided our developers through the whole development and deployment process,
               up to maintenance and support.
            </p>
               <h5>Our solution:</h5> 
            </>,
        feture_list: [
            <>Cutting-edge technology</>,
            <>Quick page load</>,
            <>Simple to manage long-term</>,
            <>SEO</>,
            <>Custom and headless CMS</>,
            <>Quick Launch</>,
            <>Complete package of services</>,
            <>AMC(Annual Maintenance Contract)</>,
        ],
    },
]

const work_details_content = { 
    solution_title: "Result",
   des_1: <><p>We tested the website and mobile app's performance both before and after.
      The outcome was possibly significant.</p>
      <p>Check the results and refer the website - <Link href="https://www.cubyts.com/">https://www.cubyts.com/</Link></p></>,
    des_2: <></>,
}
const {solution_title, des_1, des_2 }  = work_details_content;

const WorkDetailsArea = () => {
   
   useIsomorphicLayoutEffect(() => {
      // ScrollTrigger.create({
      //    trigger: ".social-box-pin",
      //    start: "top 10%",
      //    end: "bottom 60%",
      //    pin: ".social-box-pin",
      //    pinSpacing: false
      //   });
   },[])

    return (
        <>
            <div className="pd-details-area pt-100 pb-100">
               <div className="container">
                  <div className="row g-0">
                     <div className="col-xl-2 col-lg-2 social-box-pin">
                        <div className="pd-details-social-box text-lg-center text-start p-relative">
                           <div className="pd-details-social-title">
                              <span>Share This <br />Story</span>
                           </div>
                           <div className="pd-details-social">
                            <SocialLinks /> 
                           </div>
                        </div>
                     </div>
                     <div className="col-xl-10 col-lg-10 ">
                        <div className="pd-details-wrapper">
                            {project_details_data.map((item, i)  => 
                                <div key={i} className={`pd-details-${item.cls}`}>
                                    <h4 className="pd-details-title">{item.title}</h4>
                                    <p>{item.description}</p>
                                    {item.feture_list && 
                                        <ul>{item.feture_list?.map((list, i)  => 
                                        <li key={i}>{list}</li>)} 
                                        </ul> 
                                    }                                    
                                </div>                                
                            )} 
                           <div className="pd-details-solution">
                              <div className="pd-details-solution-img-box">
                                 <div className="pd-details-solution-img mr-30">
                                    <h6 className='mb-20'>Before</h6>
                                    <Image src={solution_1} alt="theme-pure" />
                                 </div>
                                 <div className="pd-details-solution-img">
                                    <h6 className='mb-20'>After</h6>
                                    <Image src={solution_2} alt="theme-pure" />
                                 </div>
                              </div>
                              <div className="row">
                                 <div className="col-md-3">
                                    <div className="pd-solution-title-box">
                                       <h4 className="pd-details-title">{solution_title}</h4>
                                    </div>
                                 </div>
                                 <div className="col-md-9">
                                    <div className="pd-solution-paragraph">
                                       <p>{des_1}</p>
                                       <p>{des_2}</p>
                                    </div>
                                 </div>
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

export default WorkDetailsArea;