import React from 'react';
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicEffect';
import SocialLinks from '@/common/social-links';
import Image from 'next/image';
import solution_1 from "../../../public/assets/img/project/vishwamitra-app-screen-1.webp";
import solution_2 from "../../../public/assets/img/project/vishwamitra-app-screen-2.webp";
import solution_3 from "../../../public/assets/img/project/vishwamitra-app-screen-3.webp";
import Link from 'next/link';


const project_details_data = [
    {
        id: 1,
        cls: "overview", 
        title: "Customer Challenge",        
         description: <>Vishwamitra required the user-friendly app to overcome following challenges:</>,
         feture_list: [
            <>
               <strong>Fragmented Volunteer Opportunities:</strong>
               <span>The fragmentation of volunteer opportunities was one of the issues that 
                  VishwaMitra set out to solve. Before the app, those who were interested in 
                  volunteering frequently had to go through different sources to identify chances
                  that matched their interests and capabilities. This took a lot of time, which can
                  put off potential volunteers.</span>
            </>,
            <>
               <strong>Fragmented Volunteer Opportunities:</strong>
               <span>Connecting enthusiastic volunteers with nonprofit organizations was often a 
                  cumbersome and inefficient process. The team likely encountered difficulties
                  in creating meaningful connections due to the absence of a centralized platform
               </span>
            </>,
            <>
               <strong>Limited Visibility:</strong>
               <span>Many potential volunteers were unaware of the diverse range of opportunities
                  available. VishwaMitra likely recognized that raising awareness about different
                  volunteer roles and their potential impact was crucial to attracting a broader
                  volunteer base.
               </span>
            </>,
            <>
               <strong>Tracking and Engagement:</strong>
               <span>Without a dedicated system, tracking volunteer hours, contributions, and impact
                  was challenging. Engaging with organizations and fellow volunteers for inquiries
                  and discussions likely required multiple channels and was not streamlined.
               </span>
            </>,            
         ],
    },
    {
        id: 2,
        cls: "overview", 
        title: "Solutions",
        description: <><span>We build Vishwamitra - app that is gateway to uniting volunteers and charitable organizations.</span>
         <span className='h5 mb-0 fw-medium'>Benefits of this platform:</span> </>,
        feture_list: [
            <>
              <strong>User-Friendly Mobile App:</strong>
              <span>A user-friendly mobile app that streamlines the registration process, allowing 
               users to set up profiles quickly and easily. This would reduce barriers to entry
               for potential volunteers.
              </span>
            </>,
           <>
              <strong>Seamless Registration:</strong>
              <span>Joining the VishwaMitra community is quick and easy! Set up your profile in 
               minutes, highlighting your interests, skills, and availability.
              </span>
           </>,
           <>
              <strong>Explore Opportunities:</strong>
              <span>Dive into a diverse array of volunteer roles posted by social organizations.
               Whether it's teaching, mentoring, environmental work, or something unique, you'll
               find the perfect match.
              </span>
           </>,
           <>
              <strong>Direct Interaction:</strong>
              <span>Engage directly with organizations using our in-app messaging system. Clarify queries,
               gather information, and make informed decisions.
              </span>
           </>,
           <>
              <strong>Tailored Recommendations:</strong>
              <span>Our intelligent algorithm suggests opportunities that align with your profile,
               ensuring that your volunteer experience is both fulfilling and aligned with your
               interests and strengths.
              </span>
           </>,
           <>
              <strong>Track your impact:</strong>
              <span>Monitor your volunteer hours and the positive change you've contributed.
               Share your accomplishments with friends and family, inspiring others to follow suit.
              </span>
           </>,
           <>
              <strong>Community Network</strong>
              <span>Join a vibrant community of volunteers who share insights, stories, and guidance.
               Learn, connect, and grow together.
              </span>
           </>,
        ],
    },
]

const work_details_content = { 
   solution_title: "Result",
   des_1: <><span>The outcome was certainly desired. 
      In order to grab more information about the tailored solution please find the link 
      below for your reference: 
         <Link href="https://vishwamitra.app/">https://vishwamitra.app/</Link>
      </span>
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
                              <div className="pt-30 pd-details-solution-img-box d-flex justify-content-center">
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