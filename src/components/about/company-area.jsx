import VideoPopup from '@/modals/video-popup';
import React,{useState} from 'react';

const company_content ={
   sub_title:  "ABOUT THE COMPANY",
   title: <>Setoo is Made <br />For the Businesses.</>,
   info_1: <>Setoo has been in business for half a decade. The company is operating worldwide 
      in the IT industry with its focus to revolutionise business with AI, Web, and Product 
      Development solutions. The additional offerings include DevOps and Remote Sourcing.</>,
   info_2: <>We are talented and diverse team of young professionals working with a detailed 
      process-originated approach to make <strong>AI-driven software solutions</strong>. The solutions are made future-ready with a focus on maximising the customer experience. Building on the foundation of reliability we make every project efficient and effective with high-quality solutions.</>,
   info_3: <></>,   
   vision: <><small className='text-primary'>Vision</small><h3>Transforming the Future with AI-Driven Digital Solutions.</h3></>,
   vision_desc: <>At Setoo, we aim to reshape industries by empowering businesses with transformative AI technology. Our vision is to harness innovation and drive global success, turning groundbreaking ideas into dynamic digital solutions that redefine the future of technology.</>,
   mission: <><small className='text-primary'>Mission</small><h3>Creating Smarter, Faster, and Scalable Solutions with AI.</h3></>,
   mission_desc: <>Setoo is dedicated to delivering cutting-edge AI-driven software solutions that drive digital transformation. We partner with businesses to turn ambitious ideas into impactful technology, offering scalable solutions that accelerate growth and make a lasting market impact.</>,
}
const {sub_title, title, info_1, info_2, info_3, vision, vision_desc, mission, mission_desc}  = company_content


const CompanyArea = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

    return (
        <>
            <div className="ab-company-area pt-105 pb-100">
               <div className="container">
                  <div className="row ab-company-section-space">
                     <div className="col-xl-6">
                        <div className="ab-company-section-box">
                           <h4 className="inner-section-subtitle">{sub_title}</h4>
                           <h3 className="tp-section-title">{title}</h3>
                        </div>
                     </div>
                     <div className="col-xl-6 wow tpfadeRight" data-wow-duration=".9s" data-wow-delay=".5s">
                        <div className="ab-company-right">
                           <div className="ab-company-section-text">
                              <p className="pb-10">{info_1}</p>
                              <p className="pb-10">{info_2}</p>
                              <p>{info_3}</p>
                           </div>
                        </div>
                     </div>
                  </div>
                
                  <div className="row align-items-center pt-75 pb-75">
                     <div className="col-xl-4 align-self-start">
                        {/* <div className="ab-company-video">
                           <a className="popup-video" 
                           onClick={() => setIsVideoOpen(true)} 
                           ><i className="fas fa-play"></i></a>
                           <span>Watch Demo</span>
                        </div> */}
                        <h3 className='h3'>
                         Setoo's Highlights
                        </h3>
                     </div>
                     <div className="col-xl-8">
                        <div className="row">

                           <div className="col-md-4 col-sm-4 mb-40">
                              <div className="ab-company-fun-fact-wrap d-flex justify-content-start">
                                 <div className="ab-company-fun-fact">
                                    <span>RESPONSE TIME</span>
                                    <h4>24<em>hr</em></h4>
                                    <p>Issue Resolution</p>
                                 </div>
                              </div>
                           </div>
                           
                           <div className="col-md-4 col-sm-4 mb-40">
                              <div className="ab-company-fun-fact-wrap d-flex justify-content-md-center justify-content-left">
                                 <div className="ab-company-fun-fact">
                                    <span>RATE</span>
                                    <h4>95<em>%</em></h4>
                                    <p>Client Satisfaction</p>
                                 </div>
                              </div>
                           </div>
                           <div className="col-md-4 col-sm-4 mb-40">
                              <div className="ab-company-fun-fact-wrap ab-company-border-none d-flex justify-content-md-center justify-content-left">
                                 <div className="ab-company-fun-fact">
                                    <span>TEAM OF</span>
                                    <h4>80<em>+</em></h4>
                                    <p>Expert Professionals</p>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="row ab-company-section-space">
                     <div className="col-xl-6 wow tpfadeRight" data-wow-duration=".9s" data-wow-delay=".5s">
                        <p>{vision}</p>
                     </div>
                     <div className="col-xl-6 wow tpfadeRight" data-wow-duration=".9s" data-wow-delay=".5s">
                        <p>{vision_desc}</p>
                     </div>
                  </div>
                  <div className="row ab-company-section-space">
                     <div className="col-xl-6 wow tpfadeRight" data-wow-duration=".9s" data-wow-delay=".5s">
                        <p>{mission}</p>
                     </div>
                     <div className="col-xl-6 wow tpfadeRight" data-wow-duration=".9s" data-wow-delay=".5s">
                        <p>{mission_desc}</p>
                     </div>
                  </div>
               </div>
            </div>

             {/* video modal start */}
      <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={"EW4ZYb3mCZk"}
      />
      {/* video modal end */}
        </>
    );
};

export default CompanyArea;