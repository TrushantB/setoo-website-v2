import ContactUsForm from '@/forms/contact-us-form';
import SendIcon from '@/svg/send-icon';
import Link from 'next/link';
import React from 'react';

import img from "../../../public/assets/img/contact/contact-icon-sm-4.png";
import Image from 'next/image';


const contact_content  = {
   sub_title: "CONTACT US",
   tilte: <>Setoo Team is Here for You</>,
   info: <>Expert professionals right by your side to guide you to success</> ,
     
}
const {sub_title, tilte, info}  =  contact_content


const ContactFormArea = () => {
    return (
      <>
        <div id="scheduleMeeting" className="contact-form-area pb-90 pt-10">
          <div className="container">
            <div className="row gx-0">
              <div className="col-xl-5 col-lg-6">
                <div className="contact-form-left">
                  <div className="contact-form-section-box pb-80">
                    <h5 className="inner-section-subtitle">{sub_title}</h5>
                    <h4 className="tp-section-title pb-10">{tilte}</h4>
                    <p>{info}</p>
                  </div>
                  <div className="contact-form-social-box p-relative">
                    <div className="contact-form-social-item">
                      <Link
                        href="https://www.linkedin.com/company/setoos"
                        target="_blank"
                      >
                        <i className="fab fa-linkedin-in"></i>
                      </Link>
                      <Link
                        href="https://www.instagram.com/setooists/"
                        target="_blank"
                      >
                        <i className="fab fa-instagram"></i>
                      </Link>
                    </div>
                    {/* <div className="contact-form-section-img">
                                 <Image src={img} alt="theme-pure" />
                              </div> */}
                  </div>
                </div>
              </div>
              <div className="col-xl-7 col-lg-6">
                <div className="contact-form-right-warp">
                  <div className="postbox__comment-form">
                    <ContactUsForm />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
};

export default ContactFormArea;