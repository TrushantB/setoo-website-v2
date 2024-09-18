import React from "react";

import img_1 from "../../../public/assets/img/contact/contact-icon-sm-5.png";
import img_2 from "../../../public/assets/img/contact/contact-icon-sm-6.png";
import img_3 from "../../../public/assets/img/contact/contact-icon-sm-7.png";
import Image from "next/image";
import Link from "next/link";

// office location data
const office_data = [
  // {
  //     id: 1,
  //     cls:"",
  //     img: img_1,
  //     location: "Colombia",
  //     address: <>Bogota D.C., Colombia, b. a 181 <br /> C No. 930 Ap 202</>,
  // },
  {
    id: 2,
    cls: "p-relative",
    img: img_2,
    badge: "Office",
    location: "Pune",
    address: (
      <>
        Next to Siddhart Residency, <br /> Aundh, Pune, India
      </>
    ),
  },
  // {
  //     id: 3,
  //     cls:"",
  //     img: img_3,
  //     location: "Egypt",
  //     address: <>Av. Cordoba 1309, 3'A, City of <br /> Buenos Aires, Egypt</>,
  // },
];

const OfficeLocation = () => {
  return (
    <>
      <div className="contact-info-area pb-90">
        <div className="container">
          <div className="row justify-content-center">
            {office_data.map((item, i) => (
              <div key={i} className="col-xl-4 col-lg-4 mb-30">
                <div className={`contact-info-item ${item.cls}`}>
                  {item.badge && (
                    <div className="contact-info-badge">
                      <span>Office</span>
                    </div>
                  )}
                  <div className="contact-info-img">
                    {/* <Image src={item.img} alt="theme-pure" /> */}
                    <svg
                      width={"8rem"}
                      height={"8rem"}
                      id="officeIcon"
                      viewBox="0 0 100 100"
                      xmlns="http://www.w3.org/2000/svg"
                      data-name="Layer 1"
                    >
                      <g
                        fill="none"
                        stroke="#40474e"
                        strokeMiterlimit="10"
                        strokeWidth="2"
                      >
                        <path d="m32.39 19.26h35.25v5.32h-35.25z" />
                        <path d="m34.85 24.58h31.08v14.31h-31.08z" />
                        <path d="m34.85 33.31h31.08" />
                        <path d="m42.1 24.58v9.14" />
                        <path d="m58.18 24.58v8.73" />
                        <path d="m16.57 36.74h18.23v5.63h-18.23z" />
                        <path d="m40.2 80.74h-28v-31.75-6.62h28z" />
                        <path d="m40.2 49.12h-28" />
                        <path d="m19.7 52.62v8.94" />
                        <path d="m26.2 52.62v8.94" />
                        <path d="m33.45 52.62v8.94" />
                        <path d="m17.25 42.37v6.75" />
                        <path d="m23.42 42.37v6.75" />
                        <path d="m29.58 42.37v6.75" />
                        <path d="m35.75 42.37v6.75" />
                        <path d="m65.98 36.74h19.83v5.63h-19.83z" />
                        <path d="m87.8 80.74h-28v-31.75-6.62h28z" />
                        <path d="m87.8 49.12h-28" />
                        <path d="m67.3 52.62v8.94" />
                        <path d="m73.8 52.62v8.94" />
                        <path d="m81.05 52.62v8.94" />
                        <path d="m64.85 42.37v6.75" />
                        <path d="m71.02 42.37v6.75" />
                        <path d="m77.18 42.37v6.75" />
                        <path d="m83.35 42.37v6.75" />
                        <path d="m40.2 44.93h19.6" />
                        <path d="m56.61 80.74v-22.25a6.56 6.56 0 1 0 -13.12 0v22.25z" />
                        <path d="m38.2 80.74h29.1" />
                      </g>
                    </svg>
                  </div>
                  <div className="contact-info-title-box">
                    <h5 className="contact-info-title-sm">
                      <Link href="#">{item.location}</Link>
                    </h5>
                    <p>{item.address}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default OfficeLocation;
