import SkypeLink from "@/common/skype-link";
import ContactIcon from "@/svg/contact-icon";
import LocationIcon from "@/svg/location-icon";
import SkypeIcon from "@/svg/skype-icon";
import Image from "next/image";
import Link from "next/link";
import React from "react";



const inner_content = {
  title: "Get in Touch!",
  description: <>We will contact again after we receive your request in
  <span className="text-primary text-primary d-inline mx-1">24h</span></>,

  contact_data: [
    {
      id: 1,
      icon: <ContactIcon />,
      title: "hello@setoo.co",
      link: "mailto:hello@setoo.co",
    },
    {
      id: 2,
      icon: <SkypeIcon />,
      title: "Set up a Skype meeting",
      link: "skype:live:.cid.5afb42d5e6f83a1c?chat",
    },
    {
      id: 3,
      icon: <LocationIcon />,
      title: "Aundh, Pune, MH, IND",
      link: "https://maps.app.goo.gl/RmutV2GPSEyuowwt6",
    },
  ],
};
const { title, description, contact_data } = inner_content;

const ContactInner = () => {
  return (
    <>
      <div className="contact-inner-area pb-90">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="contact-inner-title-sm-wrap text-center mb-50">
                <h4 className="contact-inner-title-sm text-white">{title}</h4>
                <p>{description}</p>
              </div>
            </div>
          </div>
          <div className="contact-inner-wrapper">
            <div className="row gx-0">
              {contact_data.map((item, i) => (
                <div key={i} className="col-xl-4 col-lg-4">
                  <div className="contact-inner-item d-flex align-items-center justify-content-center">
                    <div className="contact-inner-img contact-img-1">
                      {item.icon}
                    </div>
                    <div className="contact-inner-link">
                      <Link href={`${item.link}`}>{item.title}</Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div> 
    </>
  );
};

export default ContactInner;
