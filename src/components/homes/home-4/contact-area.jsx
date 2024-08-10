import EmailThree from '@/svg/email-3';
import LocationTwo from '@/svg/location-2';
import PhoneThree from '@/svg/phone-3';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

import contact_img from "../../../../public/assets/img/hero/hero-4-3.png"
import shape_1 from "../../../../public/assets/img/contact/shape-4-1.png"
import NiceSelect from '@/ui/nice-select';

const contact_content = {
    sub_title: "CONTACT US",
    title: "Request Free Consultancy",
    phone: "(+91) 2046 750 640",
    email: "hello@setoo.co",
   location: <>Ekdant Dutta Mandir Rd, Aundh, Pune 411007</>,
}
const {sub_title, title , phone, email, location}  = contact_content

const ContactArea = () => {
    const selectHandler = (e) => {};
    return (
        <>
            <div className="tp-contact-area tp-contact-overlay pt-120 pb-120 blue-bg z-index p-relative fix">
               <div className="tp-contact-glob-img">
                  <Image src={contact_img} alt="theme-pure" />
               </div>
               <div className="container">
                  <div className="row">
                     <div className="col-xl-5 col-12 z-index-3 wow tpfadeLeft" data-wow-duration=".9s" data-wow-delay=".3s">
                        <div className="tp-contact-section-box pb-25">
                           <h5 className="tp-section-subtitle-4 pb-10 ">{sub_title}</h5>
                           <h3 className="tp-section-title-6">{title}</h3>
                        </div>
                        <div className="tp-contact-info-box tp-title-anim">
                           <ul>
                              <li>
                                <PhoneThree />                                   
                                 <Link href={`tel:${phone}`}>{phone}</Link>
                              </li>
                              <li>
                                <EmailThree /> 
                                 <Link href={`mailto:${email}`}>{email}</Link>
                              </li>
                              <li>
                                <LocationTwo /> 
                                 <Link href="https://www.google.com/maps/place/Argentina,+Santiago+del+Estero+Province,+Argentina/@-28.9465488,-65.3732971,7.53z/data=!4m5!3m4!1s0x9436ede70248f47b:0x3bdbc4e928700c2a!8m2!3d-29.5355289!4d-62.2664853"
                                    target="_blank">{location}</Link>
                              </li>
                           </ul>
                        </div>
                     </div>

                     <div className="col-xl-7 col-12 wow tpfadeRight" data-wow-duration=".9s" data-wow-delay=".5s">
                        {/* <div className="tp-contact-input-wrapper p-relative">
                           <div className="tp-contact-shape">
                              <Image src={shape_1} alt="theme-pure" />
                           </div>
                           <div className="row">
                              <div className="col-xl-6">
                                 <div className="tp-contact-input mb-20">
                                    <input type="text" placeholder="Full name"  required/>
                                 </div>
                              </div>
                              <div className="col-xl-6">
                                 <div className="tp-contact-input mb-20">
                                    <input type="email" placeholder="Email address" required />
                                 </div>
                              </div>
                              <div className="col-xl-12">
                                 <div className="tp-contact-select">
                                    <div className="tp-select-icon"> 
                                       <NiceSelect
                                        options={[ 
                                            { value: "Hack Protection", text: "Hack Protection" },
                                            { value: "Online Support", text: "Online Support" },
                                            { value: "Live Security", text: "Live Security" },
                                            { value: "Hack Protection2", text: "Hack Protection2" }, 
                                        ]}
                                        defaultCurrent={0}
                                        onChange={selectHandler}
                                        />
                                    </div>
                                 </div>
                              </div>
                              <div className="col-xl-12">
                                 <div className="tp-contact-input mb-20">
                                    <textarea placeholder="Enter your message"></textarea>
                                 </div>
                              </div>
                              <div className="col-xl-12">
                                 <div className="tp-contact-btn">
                                    <button type="submit" className="tp-btn-yellow h-14 w-100">Get a free consultation</button>
                                 </div>
                              </div>
                           </div>
                        </div> */}
                         <h2 class="h4 fw-normal">Have a Great Idea in Mind?</h2>
                         <Link href="#" class="display-1">Let's Talk
                            <svg width="4rem" height="4rem" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                               <g id="Frame 33">
                                  <g id="Vector">
                                     <path d="M0 9.26001L3.95802e-07 10.7379L19.1835 10.7379V9.26001L0 9.26001Z" fill="#FBFBFB"></path>
                                     <path d="M18.9566 8.95393L11.1307 16.7918L12.1742 17.8368L20 9.99897L18.9566 8.95393Z" fill="#FBFBFB"></path>
                                     <path d="M12.1742 2.16113L11.1307 3.20618L18.9566 11.044L20 9.99897L12.1742 2.16113Z" fill="#FBFBFB"></path>
                                  </g>
                               </g>
                            </svg>
                         </Link>                      
                     </div>
                  </div>
               </div>
            </div>
        </>
    );
};

export default ContactArea;