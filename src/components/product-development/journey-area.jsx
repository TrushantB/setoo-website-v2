import React, {useState, useEffect} from 'react';
import { Navigation, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// slider setting
const setting = {
    loop: true, 
    slidesPerView: 5,
    spaceBetween: 30,
    breakpoints: {
        '1200': {
            slidesPerView: 5,
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
// journey_data
  const journey_data =[
    {
        id: "01", 
        date: "OCT 2019",
        title: <>Level 0: <br /> Getting to know</>,
        description: <>We envision sales teams having the tools <br />
        and talent they need to make remote <br /> work.</>,
    },
    {
        id: "02", 
        date: "OCT 2020",
        title: <>Level 1: <br/> Research and Learn</>,
        description: <>We envision sales teams having the tools <br />
        and talent they need to make remote <br /> work.</>,
    },
    {
        id: "03", 
        date: "OCT 2021",
        title: <>Level 2: <br/> Ideate</>,
        description: <>We envision sales teams having the tools <br />
        and talent they need to make remote <br /> work.</>,
    },
    {
        id: '04', 
        date: "OCT 2022",
        title: <>Level 3: <br/> User map flow</>,
        description: <>We envision sales teams having the tools <br />
        and talent they need to make remote <br /> work.</>,
    },
    {
        id: "05", 
        date: "Present",
        title: <>Level 4: <br />Prioritise desired and viable features</>,
        description: <>We envision sales teams having the tools <br />
        and talent they need to make remote <br /> work.</>,
    },
    {
        id: "06", 
        date: "OCT 2020",
        title: <>Level 5: <br/> Design</>,
        description: <>We envision sales teams having the tools <br />
        and talent they need to make remote <br /> work.</>,
    },
    {
      id: "07", 
      date: "OCT 2021",
      title: <>Level 6: <br/> Development</>,
      description: <>We envision sales teams having the tools <br />
      and talent they need to make remote <br /> work.</>,
  },
  {
      id: '08', 
      date: "OCT 2022",
      title: <>Level 7: <br/> Launch</>,
      description: <>We envision sales teams having the tools <br />
      and talent they need to make remote <br /> work.</>,
  },
  ]

const JourneyArea = () => {

  const [isDragged, setIsDragged] = useState(false);

  const handleSlideChange = () => {
     setIsDragged(true);
  };

  const handleTransitionEnd = () => {
     setIsDragged(false);
  };

    return (
      <>
        <div className="journey-area p-relative fix pt-80">
          <div className="journey-grey-bg black-bg"></div>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="journey-section-box">
                  <h5 className="inner-section-subtitle pb-10">TIMELINE</h5>
                  <h3 className="ab-brand-title pb-0 mb-0">
                    Journey Was Started
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
                    {journey_data.map((item, i) => (
                      <SwiperSlide
                        key={i}
                        className="journey-slider-item p-relative"
                      > 
                        <div className="journey-stroke-text">
                          <h2>{item.id - 1}</h2>
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

export default JourneyArea;