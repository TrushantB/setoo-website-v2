import React from 'react';
import Count from './count';
// fun fact data 
const fun_fact_data = [
    {
        id: 1, 
        cls: "1",
        count: 85,
        simble: "+",
        description: <>Successful  <br /> Projects Delivered</>
    },
    {
        id: 2, 
        cls: "2",
        count: 24,
        simble: "",
        description: <>24-hour <br /> Issue Resolution</>
    },
    {
        id: 3, 
        cls: "3",
        count: 99,
        simble: "%",
        description: <>Quality <br /> Assurance</>
    },

]

const AugmentationCountArea = () => {
    return (
      <>
        {fun_fact_data.map((item, i) => (
          <div
            key={i}
            className="col-xl-4 col-lg-4 col-md-4 mb-60 tp-counter-br"
          >
            <div
              className={`tp-fun-fact-item tp-fun-fact-space-${item.cls} d-flex align-items-center`}
            >
              <h4>
                <span
                  data-purecounter-duration="1"
                  data-purecounter-end="300"
                  className="purecounter"
                >
                  <Count number={item.count} text={item.simble} />
                </span>
              </h4>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </>
    );
};

export default AugmentationCountArea;