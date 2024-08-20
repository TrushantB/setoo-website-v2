import React from 'react';
import Count from './count';
// fun fact data 
const fun_fact_data = [
    {
        id: 1, 
        cls: "1",
        count: 5,
        simble: "+",
        description: <>Years <br /> Of Experience</>
    },
    {
        id: 2, 
        cls: "2",
        count: 200,
        simble: "%",
        description: <>Year on <br /> Growth</>
    },
    {
        id: 3, 
        cls: "3",
        count: 7,
        simble: "+",
        description: <>Countries <br /> Of Operation</>
    },

]

const CountArea = () => {
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

export default CountArea;