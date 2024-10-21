import React, {useState, useEffect} from 'react';
import { Navigation, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// slider setting
const setting = {
    loop: true, 
    slidesPerView: 4,
    spaceBetween: 30,
    breakpoints: {
        '1200': {
            slidesPerView: 4,
        },
        '992': {
            slidesPerView: 3,
        },
        '768': {
            slidesPerView: 2,
        },
        '576': {
            slidesPerView: 2,
        },
        '0': {
            slidesPerView: 1,
        },
    }, 
      scrollbar: {
        el: ".tp-scrollbar",
        clickable: true,
    },
  }
// process_data
  const process_data =[
    {
        id: "01", 
        date: "step",
        title: <>Evaluation of Staff's Requirements</>,
        description: <>A discovery call is set to understand your project requirements, objectives, etc.</>,
    },
    {
        id: "02", 
        date: "step",
        title: <>Availability of Specialists</>,
        description: <>The availability of resources is checked with respect to the expertise required. </>,
    },
    {
        id: "03", 
        date: "step",
        title: <>Assessment of Qualifications</>,
        description: <>As per your project needs we check the qualifications of selected candidates and send their CVs.</>,
    },
    {
        id: '04', 
        date: "step",
        title: <>External Requirement</>,
        description: <>In the internal resource network if no suitable candidate is found then the recruiter's network is used to find a suitable candidate.</>,
    },
    {
        id: "05", 
        date: "step",
        title: <>Final Qualification</>,
        description: <>Suitable candidates can be interviewed to understand their qualifications and communication skills.</>,
    },
    {
      id: "06",
      date: "step",
      title: <>Continuous Support</>,
      description: <>Continuous support is provided to integrate the workers in your team.</>,
    },
  ]

const ProcessArea = () => {

  const [isDragged, setIsDragged] = useState(false);

  const handleSlideChange = () => {
     setIsDragged(true);
  };

  const handleTransitionEnd = () => {
     setIsDragged(false);
  };

    return (
      <>
        <div className="journey-area p-relative fix">
          <div className="journey-grey-bg black-bg"></div>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="journey-section-box">
                  <h5 className="inner-section-subtitle pb-10" name="journey-subtitle">Process</h5>
                  <h3 className="ab-brand-title pb-0 mb-0" name="journey-title">
                    Steps to Hire Remote Professionals
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid g-0">
            <div className="row g-0">
              <div className="col-xl-12">
                <div className="journey-slider-wrapper">
                  <Swiper
                    {...setting}
                    onSliderMove={handleSlideChange}
                    onTransitionEnd={handleTransitionEnd}
                    modules={[Navigation, Scrollbar]}
                    className={`swiper-container journey-slider-active ${isDragged ? "dragged" : ""}`}
                  >
                    {process_data.map((item, i) => (
                      <SwiperSlide
                        key={i}
                        className="journey-slider-item p-relative"
                      > 
                        <div className="journey-stroke-text">
                          <h2>{item.id}</h2>
                        </div>
                        <div className="journey-slider-meta">
                          <span>{item.date}</span>
                        </div>
                        <div className="journey-slider-content">
                          <h4 className="journey-slider-title">{item.title}</h4>
                          <p name="journey-slider-description">{item.description}</p>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  <div className="tp-scrollbar"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
};

export default ProcessArea;