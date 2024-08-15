import React from 'react';
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicEffect';
import SocialLinks from '@/common/social-links';
import Image from 'next/image';
import solution_1 from "../../../public/assets/img/project/gurumantra-desktop-screen.webp";
import solution_2 from "../../../public/assets/img/project/gurumantra-mobile-app-screen.webp";
import solution_3 from "../../../public/assets/img/project/gurumantra-app-screen.webp";
import Link from 'next/link';


const project_details_data = [
    {
        id: 1,
        cls: "overview", 
        title: "Customer Challenge",        
        description: <>Gurumantra team was facing challenges in making their course mobile-friendly with easy data management along with..</>,
         feture_list: [
            <>Limited access to engaging exam preparation resources.</>,
            <>Inefficient management of a vast quiz question database.</>,
            <>Lack of a community-building and competitive platform.</>,
            <>Need for user data analysis and continuous improvement.</>,
            <>Ensuring data security and privacy.</>,
            <>Balancing user-friendliness with complex exam content.</>,
            <>Aligning with Gurumantra's vision of nurturing creativity and social consciousness.</>,
         ],
    },
    {
        id: 2,
        cls: "overview", 
        title: "Solutions",
       description: <>
         <p>After discussion, team worked from scratch - design to MVP app development.
            The solution we provided include - </p>
         </>,
        feture_list: [
           <>Interactive quiz app with engaging learning resources.</>,
           <>Admin panel for efficient database management.</>,
           <>Community-building and competition features</>,
           <>Data analytics for insights and improvement.</>,
           <>Robust data security and privacy.</>,
           <>User-friendly navigation interface.</>,
           <>Alignment with Gurumantra's vision</>,
        ],
    },
]

const work_details_content = { 
    solution_title: "Result",
   des_1: <><p>Our commitment to creating a cutting-edge learning platform has yielded significant
      improvements. We invite you to witness the astounding results for yourself.
      Experience the power of the Gurumantra Quiz Application by visiting our website.</p></>,
   des_2: <>Your journey to an enhanced learning experience begins here.</>,
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
                              <div className="pt-60 pd-details-solution-img-box">
                                 <div className="pd-details-solution-img mr-30">
                                    <Image src={solution_1} alt="theme-pure" />
                                 </div>
                                 <div className="pd-details-solution-img">
                                    <Image src={solution_2} alt="theme-pure" />
                                 </div>
                                 <div className="pd-details-solution-img">
                                    <Image src={solution_3} alt="theme-pure" />
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