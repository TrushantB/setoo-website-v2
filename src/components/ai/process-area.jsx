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
        title: <>Defining and Analysing Problem Statement</>,
        description: <>Thoroughly analysing and understanding the problem to define clear objectives and desired outcomes.</>,
    },
    {
        id: "02", 
        date: "step",
        title: <>Data Services</>,
      description: <>Providing comprehensive data management, cleaning, and preprocessing services to ensure high-quality input for models.</>,
    },
    {
        id: "03", 
        date: "step",
        title: <>ML Model Selection</>,
        description: <>Identifying and selecting the most suitable machine learning models for the given problem.</>,
    },
    {
        id: '04', 
        date: "step",
        title: <>Model Optimization & Lifecycle Management</>,
        description: <>We envision sales teams having the tools <br />
        and talent they need to make remote <br /> work.</>,
    },
    {
        id: "05", 
        date: "step",
        title: <>End-to-End <br /> AI Application</>,
        description: <>Delivering complete AI solutions from initial analysis to deployment and maintenance.</>,
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
                  <h5 className="inner-section-subtitle pb-10">AI Process</h5>
                  <h3 className="ab-brand-title pb-0 mb-0">
                    AI Process Overview
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
                          <p>{item.description}</p>
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