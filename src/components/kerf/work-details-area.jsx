import React from 'react';
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicEffect';
import SocialLinks from '@/common/social-links';
import Image from 'next/image';
import solution_1 from "../../../public/assets/img/project/kerf-screen-1.webp";
import solution_2 from "../../../public/assets/img/project/kerf-screen-2.webp";
import Link from 'next/link';


const project_details_data = [
    {
        id: 1,
        cls: "overview", 
        title: "Customer Challenge",        
      description: <><span>KERF is a furniture firm, it was previously an offline business.
         Because of the tremendous buzz around online shopping in the decade that followed,
         businesses have had to find ways to adapt to the changing conditions of the business.</span>
         <span>With this rise in business, Kerf required a brand-new website that would speak for 
            itself to buyers throughout the world.</span>
         <span> The challenges faced was - </span>
         </>,
         feture_list: [
            <>Expansion of business online</>,
            <>Choosing the right e-commerce platform that would meet the client's 
            needs while providing scalability.</>,
            <>Project strategy and planning</>,
            <>Appealing web presence</>,
            <>Ensuring the website was SEO-friendly and capable of supporting marketing efforts.</>
         ],
    },
    {
        id: 2,
        cls: "overview", 
        title: "Solutions",
       description: <><span>Based on the business requirement from KERF, we knew the sure shot
         solution and that was establishing an e-commerce platform for them.</span>
            <span>We Provided:</span>
         </>,
        feture_list: [
            <>
              <strong>Strategy solution:</strong>
              <span>
                 As the client was unaware of online store and it's process, we helped them
                 understand the concept with working and its impact on business.
              </span>
            </>,
            <>
               <strong>From scratch design:</strong>
               <span>Our team then worked on UX research around e-commerce website design. 
                  We designed a modern and responsive website with a clean and intuitive interface,
                  mobile optimization, and a streamlined checkout process.</span>
               <span>A focus on high-quality product images and clear product descriptions improved
                  the user experience.
               </span>
            </>,
            <>
               <strong>SEO and marketing:</strong>
               <span>KERF website is all well equipped with SEO best practices, ensuring optimized
                  product descriptions, metadata, and an XML sitemap for search engines.
                  We integrated social media sharing options and email marketing tools.
               </span>
            </>,
            <>
               <strong>Payment integrations:</strong>
               <span>For online purchasing, the payment gateways were integrated and ensured
                  the secure online transactions.
               </span>
            </>,
        ],
    },
]

const work_details_content = { 
    solution_title: "Result",
   des_1: <>The KERF website project met the client's expectations of building online
      presence and fostering brand recognition to potential customers.
      </>,
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
                              <span name="share-this-text">Share This <br />Story</span>
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
                              <div className="row">
                                 <div className="col-md-3">
                                    <div className="pd-solution-title-box">
                                       <h4 className="pd-details-title">{solution_title}</h4>
                                    </div>
                                 </div>
                                 <div className="col-md-9">
                                    <div className="pd-solution-paragraph">
                                       <p>{des_1}</p>
                                       {/* <p>{des_2}</p> */}
                                    </div>
                                 </div>
                              </div>
                              <div className="pd-details-solution-img-box pt-60">
                                 <div className="pd-details-solution-img mr-30">
                                    <Image src={solution_1} alt="theme-pure" />
                                 </div>
                                 <div className="pd-details-solution-img">
                                    <Image src={solution_2} alt="theme-pure" />
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