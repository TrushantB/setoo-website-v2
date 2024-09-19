import ClockIcon from '@/svg/clock-icon';
import LocationIconThree from '@/svg/location-icon-3';
import NiceSelect from '@/ui/nice-select';
import Link from 'next/link';
import React,{useState} from 'react';


const career_content ={
    sub_title: "AI",
    title: "Machine Learning Developer",
    job_post_details: [
        {
            id: 1, 
            cls: "mb-45",
            title: "Job Responsibilities",
            description: <div><p>This is a full-time on-site / remote role for a Machine Learning Developer
               at Setoo Solutions located in Pune. </p> <p>As a Machine Learning Developer, you will be
               responsible for developing and deploying machine learning models, performing data
               analysis, and optimizing algorithms to solve complex business challenges. </p>
               <p>Your expertise in Python, PyTorch, NLP, and LLMs, along with your experience in data
               storage, retrieval, and serverless architectures, will be crucial for this role.
               </p></div>
        },
        {
            id: 2, 
            cls: "mb-45",
            title: "Key Responsibilities",
            description: <></>,
            experiences: [
               <>Develop and implement machine learning models using Python and PyTorch </>,
               <>Work on projects involving Retrieval-Augmented Generation (RAG) and Natural Language
               Processing (NLP).</>,
               <>Fine-tune and deploy large language models (LLMs).</>,
               <>Perform data analytics to drive insights and model improvements.</>,
               <>Utilize Redis and OpenSearch for optimized data storage and retrieval.</>,
               <>Work with both RDBMS and NoSQL databases</>,
               <>Develop and deploy serverless applications.</>,
               <>Implement Text-to-Speech (TTS) and Speech-to-Text (STT) systems.</>,
               <>Collaborate with the development team to integrate AI/ML models into broader systems.</>,
               <>Document all phases of research and development.</>,
               <>Participate in team meetings and contribute to project planning and review sessions</>,
            ],
        },
        {
            id: 3, 
            cls: "mb-45",
            title: "Why Join Us",
            description: <></>,
            experiences: [
               <>Opportunity to work with a talented and dedicated team in a dynamic and innovative environment.</>,
               <>Competitive salary and benefits package</>,
               <>Career growth and development opportunities</>,
               <>Flexible work hours</>,
               <>Wellness programs and initiatives</>,
               <>Inclusive and diverse workplace culture</>,
            ],
        },
        {
            id: 4, 
            cls: "",
            title: "Education & Experience",
           description: <></>, 
           experiences: [
              <>Bachelor's degree in Computer Science, Data Science, Statistics,
              Mathematics, or a related field.</>,
              <>3+ years of experience in machine learning.</>,
              <>Proficient in Python and PyTorch.</>,
              <>Experience with RAG, NLP, LLM, data analytics, TTS, and STT</>,
              <>Knowledge of Redis, OpenSearch, RDBMS, and NoSQL databases.</>,
              <>Familiarity with serverless architectures.</>,
              <>Strong hands-on experience with Python libraries such as TensorFlow, Scikit-learn.</>,
              <>Excellent problem-solving skills and ability to work on complex projects
              with cross-functional teams.</>,
              <>Demonstrated statistical acumen in applying statistical methods to 
              experimental and real-world data.</>,
           ]
        },

    ]
}
const {sub_title, title, job_post_details}  = career_content


const CareerDetailsArea = () => {
    const [isOpen, setIsOpen]  = useState(false)
    const applyHandler = () =>{
        setIsOpen(true) 
    }

  const selectHandler = (e) => {};
    return (
        <>
            <div className="career-details-area career-border-bottom pt-110 pb-110">
               <div className="container">
                  <div className="row align-items-start">
                     <div className="col-xl-7 col-lg-7">
                        <div className="career-details-wrapper">
                           <div className="career-details-title-box">
                              <span>{sub_title}</span>
                              <h4 className="career-details-title">{title}</h4>
                           </div>
                           <div className="career-details-location-box">
                              <span> 
                                 <LocationIconThree />
                                 Pune, IND
                              </span>
                              <span> 
                                 <ClockIcon />
                                 Full-time (On Site / Remote)
                              </span>
                              <span>Experience: 3 to 5 years</span>
                           </div>
                           {job_post_details.map((item, i)  => 
                              <div key={i} className={`career-details-job-responsiblity ${item.cls}`}>
                              <h4 className="career-details-title-sm">{item.title}</h4>
                              <div className="pb-15">{item.description}</div>
                              {item.experiences && 
                              <div className="career-details-job-list">
                                 <ul>
                                 {item?.experiences?.map((list , index)  =>
                                    <li key={index}> 
                                          <i className="fal fa-long-arrow-right"></i>
                                             {list}
                                    </li>
                                 )} 
                                 </ul>
                              </div>
                              }
                           </div>
                              )
                           } 
                        </div>
                     </div>
                     <div className="col-xl-5 col-lg-5 career-details-pin sticky-top">
                        <div className="col-xxl-12">
                           <div className="postbox__apply-btn-border">
                              <div id="my-btn" className="postbox__apply-btn-box">
                                 {!isOpen && 
                                 <button onClick={() => applyHandler()} className="submit-btn mb-50 w-100" 
                                 >Apply For This Job</button>
                                 }
                              </div>
                           </div>
                        </div>
                        {isOpen &&
                        <div id="show" className="career-details-hide-wrapper" >
                        
                           <div className="career-details-apply-info-box pb-10">
                              <div className="career-details-profile-box pb-20">
                                 <h4 className="career-details-title-sm text-white">Profile</h4>
                                 <p>Basic information about you</p>
                              </div>
                              <div className="postbox__comment-form">
                                 <form  onSubmit={(e) => e.preventDefault()} className="box">
                                    <div className="row gx-20">
                                       <div className="col-12">
                                          <div className="postbox__comment-input mb-30">
                                             <input type="text" className="inputText" required />
                                             <span className="floating-label">Full  Name</span>
                                          </div>
                                       </div>
                                       <div className="col-12">
                                          <div className="postbox__comment-input mb-30">
                                             <input type="text" className="inputText" required />
                                             <span className="floating-label">Your Email</span>
                                          </div>
                                       </div>
                                       <div className="col-12">
                                          <div className="postbox__comment-input mb-30">
                                             <input type="text" className="inputText" required />
                                             <span className="floating-label">Phone</span>
                                          </div>
                                       </div>
                                       <div className="col-12">
                                          <div className="postbox__comment-input mb-35">
                                             <input type="text" className="inputText" required />
                                             <span className="floating-label">Address</span>
                                          </div>
                                       </div>
                                    </div>
                                 </form>
                              </div>
                           </div>

                           <div className="career-details-apply-info-box">
                              <div className="career-details-profile-box pb-20">
                                 <h4 className="career-details-title-sm text-white">Application Details</h4>
                                 <p>Summarize your relevant experience</p>
                              </div>
                              <div className="postbox__comment-form">
                                 <form onSubmit={(e) => e.preventDefault()} className="box">
                                    <div className="row gx-20">
                                       <div className="col-12">
                                          <div className="postbox__comment-input mb-30">
                                             <input type="text" className="inputText" required />
                                             <span className="floating-label">LinkedIn Profile</span>
                                          </div>
                                       </div>
                                       <div className="col-12">
                                          <div className="postbox__comment-input mb-30">
                                             <input type="text" className="inputText" required />
                                             <span className="floating-label">Personal website</span>
                                          </div>
                                       </div>
                                       {/* <div className="col-12">
                                          <div className="postbox__select mb-30"> 
                                             <NiceSelect
                                             options={[
                                             { value: "Your Inquiry about", text: "Your Inquiry about" },
                                             { value: "01 Year", text: "01 Year" },
                                             { value: "02 Year", text: "02 Year" },
                                             { value: "03 Year", text: "03 Year" },
                                             { value: "04 Year", text: "04 Year" },
                                             { value: "05 Year", text: "05 Year" },
                                             ]}
                                             defaultCurrent={0}
                                             onChange={selectHandler}
                                             />
                                          </div>
                                       </div> */}
                                       <div className="col-12">
                                          <div className="postbox__comment-input mb-35">
                                             <input type="text" className="inputText" required />
                                             <span className="floating-label">Expected salary</span>
                                          </div>
                                       </div>
                                    </div>
                                 </form>
                              </div>
                              {/* <div className="col-xxl-12">
                                 <div className="postbox__authorization-title-box">
                                    <h5 className="career-details-title-sm pb-15 text-white">US work authorization<span>*</span></h5>
                                 </div>
                                 <div className="postbox__authorization p-relative">
                                    <div className="switcher mb-15">
                                       <label htmlFor="toggle-0">
                                          <small className="switcher-icon"> 
                                             Are you legally authorized to work in the <br /> United States?
                                          </small>
                                          <input type="checkbox" id="toggle-0" />
                                          <span><small></small></span>
                                       </label>
                                    </div>
                                    <div className="switcher">
                                       <label htmlFor="toggle-1">
                                          <small className="switcher-icon"> 
                                             Do you or will you require sponsorship for a US <br /> employment visa (e.g. H-1B)?
                                          </small>
                                          <input type="checkbox" id="toggle-1" />
                                          <span><small></small></span>
                                       </label>
                                    </div>
                                 </div>
                              </div> */}
                              <div className="col-xxl-12">
                                 <div className="postbox__comment-input mb-30">
                                    <textarea className="textareaText" required ></textarea>
                                    <span className="floating-label-2">Personal note</span>
                                 </div>
                              </div>
                              <div className="col-xxl-12">
                                 <div className="postbox__resume-title-box">
                                    <h5 className="career-details-title-xs pb-15">Upload a recent resume or CV</h5>
                                 </div>
                                 <div className="postbox__resume mb-30">
                                    <input id="cv" type="file" hidden />
                                    <label htmlFor="cv">
                                       <span> 
                                          Drag to upload your resume, or browse
                                       </span>
                                    </label>
                                 </div>
                              </div>
                              <div className="col-xxl-12">
                                 <div className="postbox__btn-box mb-50">
                                    <button className="submit-btn w-100">Submit Application</button>
                                 </div>
                              </div>
                           </div>

                        </div>
                        }
                        <div className="col-xxl-12">
                           <div className="career-details-social-box mb-20">
                            <Link className="instagram p-relative" href="https://www.instagram.com/setooists/">
                                 <div className="insta-bg"></div>
                                 <i className="fab fa-instagram"></i>
                              </Link>
                              <Link className="linkedin" href="https://www.linkedin.com/company/setoos">
                                 <i className="fab fa-linkedin-in"></i>
                              </Link>
                           </div>
                           {/* <div className="career-details-bottom-text text-center">
                              <Link href="#">Employee at Setoo?</Link>
                           </div> */}
                        </div>
                     </div>
                  </div>
               </div>
            </div>
        </>
    );
};

export default CareerDetailsArea;