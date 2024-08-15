import ClockIcon from '@/svg/clock-icon';
import LocationIconThree from '@/svg/location-icon-3';
import NiceSelect from '@/ui/nice-select';
import Link from 'next/link';
import React,{useState} from 'react';


const career_content ={
    sub_title: "HR",
    title: "Associate HR",
    job_post_details: [
        {
            id: 1, 
            cls: "mb-45",
            title: "Job Responsibilities",
            description: <>Associate HR will play a pivotal role in shaping and executing the 
          company's human resources strategies and policies. This role requires a proactive and 
          strategic thinker who can manage all aspects of HR, including talent acquisition, 
          employee relations, performance management, compliance, organizational development, 
          and culture enhancement.</>, 
        },
        {
            id: 2, 
            cls: "mb-45",
            title: "Key Responsibilities",
            description: <></>,
            experiences: [
               <><strong>Strategic HR Management:</strong> 
                  <ul><li>Develop and implement HR strategies
                   and initiatives aligned with the overall business strategy.</li>
                  <li>Partner with senior management to provide strategic HR guidance and support.</li>
                  <li>Lead HR projects and initiatives to drive organizational effectiveness and
                      efficiency.</li>
                   </ul> </>,
                  <><strong>Recruitment and Onboarding:</strong>
                     <ul>
                        <li>Lead the recruitment process, including drafting JD, job posting, screening, 
                           interviewing, and hiring for various positions.</li>
                        <li>Develop and implement effective onboarding programs to ensure a smooth integration of new hires.</li>
                     </ul>
                  </>,
               <><strong>Employee Relations:</strong>
                  <ul>
                     <li>Act as a point of contact for employee queries and concerns.</li>
                     <li>Manage employee relations issues, conducting investigations and resolving
                        conflicts as necessary.</li>
                     <li>Foster a positive work environment and promote company culture and values.</li>
                  </ul>
               </>,
               <><strong>Performance Management:</strong>
                  <ul>
                     <li>Assist in the development and implementation of performance 
                        management systems.</li>
                     <li>Provide guidance and support to managers and employees on 
                        performance-related issues.</li>
                     <li>Conduct performance reviews and provide feedback to employees.</li>
                  </ul>
               </>,
               <><strong>Compliance and Policies:</strong>
                  <ul>
                     <li>Ensure HR practices comply with all applicable employment laws and regulations.</li>
                     <li>Maintain and update HR policies and procedures as needed.</li>
                     <li>Conduct regular audits to ensure compliance with company policies 
                        and legal requirements.</li>
                  </ul>
               </>,
               <><strong>Organizational Development:</strong>
                  <ul>
                     <li>Support organizational change initiatives and promote a culture of continuous improvement.</li>
                     <li>Develop and implement strategies for talent management, succession planning, and workforce planning.</li>
                     <li>Lead initiatives to enhance organizational culture and employee experience.</li>
                  </ul>
               </>,
               <><strong>HR Metrics and Reporting:</strong>
                  <ul>
                     <li>Develop and maintain HR metrics to track and analyze key performance indicators</li>
                     <li>Prepare and present HR reports to senior management, highlighting trends
                        and areas for improvement.</li>
                     <li>Use data-driven insights to inform HR strategies and decisions.</li>
                  </ul>
               </>,
               <><strong>Employee Engagement and Culture:</strong>
                  <ul>
                     <li>Develop and implement programs to enhance employee engagement and foster 
                        a positive workplace culture.</li>
                     <li>Plan and execute employee events and recognition programs to boost morale
                        and team spirit.</li>
                     <li>Promote diversity, equity, and inclusion within the organization.</li>
                  </ul>
               </>,
               <><strong>Training and Development:</strong>
                  <ul>
                     <li>Oversee the development and implementation of training programs
                        to enhance employee skills and knowledge.</li>
                     <li>Identify leadership development opportunities and create programs
                        to cultivate future leaders.</li>
                     <li>Monitor and evaluate the effectiveness of training programs and make
                        necessary adjustments.</li>
                  </ul>
               </>,
               <><strong>HR Projects and Initiatives:</strong>
                  <ul>
                     <li>Lead or participate in HR projects and initiatives to improve processes
                        and employee experience.</li>
                     <li>Collaborate with cross-functional teams to implement HR strategies aligned with business objectives</li>
                     <li>Monitor and evaluate the effectiveness of training programs and make
                        necessary adjustments.</li>
                  </ul>
               </>,
               <><strong>Attendance Calculation:</strong>
                  <ul>
                     <li>Oversee the attendance tracking system to ensure accurate recording
                        and reporting of employee attendance.</li>
                     <li>Develop and implement attendance policies and procedures to
                        promote punctuality and minimize absenteeism.</li>
                     <li>Address attendance issues promptly and take corrective actions
                        when necessary.</li>
                  </ul>
               </>,
               <><strong>Effective Use of HR Tools:</strong>
                  <ul>
                     <li>Utilize HR tools and software (e.g., HRIS, ATS) to streamline HR
                        processes and improve efficiency.</li>
                     <li>Train and support staff in the effective use of HR tools.</li>
                     <li>Continuously evaluate and recommend improvements to HR technology and systems.</li>
                  </ul>
               </>,
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
              <>Bachelor's degree in Human Resources, Business Administration,
                 or a related field. Any certification is a plus.</>,
              <>Minimum of 2 to 5  years of experience in HR, preferably in the IT industry.</>,
              <>Strong knowledge of HR best practices, employment laws, and regulations.</>,
              <>Excellent communication, interpersonal, and leadership skills.</>,
              <>Proven ability to manage multiple priorities and meet deadlines in a fast-paced
              environment.</>,
              <>Experience with HR software and systems (e.g., HRIS, ATS , GreytHR).</>,
              <>Demonstrated ability to think strategically and implement HR initiatives
              that align with business goals.</>,
              <>Strong problem-solving and decision-making skills.</>
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
                                 Full-time
                              </span>
                              <span>Experience: 2 to 5 years</span>
                           </div>
                           {job_post_details.map((item, i)  => 
                              <div key={i} className={`career-details-job-responsiblity ${item.cls}`}>
                              <h4 className="career-details-title-sm">{item.title}</h4>
                              <p className="pb-15">{item.description}</p>
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