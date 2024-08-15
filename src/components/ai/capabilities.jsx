import React from 'react';
import Image from 'next/image';

import plan_img_1 from "../../../public/assets/img/service/ai-capabilities.png"
import plan_img_2 from "../../../public/assets/img/plan/plan-1-2.png"
import plan_img_3 from "../../../public/assets/img/plan/plan-1-3.png"
import plan_img_4 from "../../../public/assets/img/plan/plan-1-4.png"
import plan_img_5 from "../../../public/assets/img/plan/plan-1-5.png"
import plan_img_6 from "../../../public/assets/img/plan/plan-1-6.png"

import img from "../../../public/assets/img/cta/cta-title-icon-2.png";

const plan_content = {
    img_box : [
        {id:1, img: plan_img_1, cls: "1",},
        // {id:2, img: plan_img_2, cls: "2 d-none d-sm-block",},
        // {id:3, img: plan_img_3, cls: "3",},
        // {id:4, img: plan_img_4, cls: "4",},
        // {id:5, img: plan_img_5, cls: "5 d-none d-sm-block",},
        // {id:6, img: plan_img_6, cls: "6 d-none d-sm-block",},
    ],

    sub_title: "Capabilities",
    title: <><span>Catalysts</span> of AI </>, 

}
const {img_box, sub_title, title}  = plan_content

const accordion_data = [
    {
        id: 1,
        question: "Conversational AI",
        answer: <>Conversational AI understands context, interprets nuances, and provides accurate, human-like interactions across platforms to enhance your customer experience and business growth.</> ,
        accordion_id: "convAI",
        collapsed: "collapsed",
        data_bs_target: "#conversAI",
        aria_expanded: true,
        aria_controls: "conversAI",
        show: "show",
        actice: "",
      },
    {
        id: 2,
        question: "Computer Vision",
        answer: <>Computer Vision analyzes visual data for smooth integration with AI solutions, enhancing data interpretation and overall system functionality.</>,
        accordion_id: "computerVision",
        collapsed: "",
        data_bs_target: "#compVision",
        aria_expanded: false,
        aria_controls: "compVision",
        show: "",
        actice: "",
    
      },
      {
          id: 3,
          question: "NLP",
          answer: <>NLP bridges the gap between computer and human-understandable languages. Our expert team uses a strong stack of AI technologies to provide suitable solutions for business growth.</> ,
          accordion_id: "nlpHeading",
          collapsed: "",
          data_bs_target: "#nlp",
          aria_expanded: false,
          aria_controls: "nlp",
          show: "",
          actice: "",
        },
        {
            id: 4,
            question: "RAG and LLM Langchain",
            answer: <>Retrieval Augmented Generation (RAG) uses external knowledge with the power of Large Language Models (LLMs). <br /> A well-liked framework for creating RAG apps is called Langchain. RAG models offer more precise, educational, and current answers by gaining access to pertinent data. This method improves LLMs' performance in a range of applications.</>,
            accordion_id: "llmLangChain",
            collapsed: "",
            data_bs_target: "#llm",
            aria_expanded: false,
            aria_controls: "llm",
            show: "",
            actice: "",
        }
]
const Capabilities = () => {
    return (
        <>
            <div onContextMenu={e => e.preventDefault()} className= "tp-plan-area tp-plan-space fix">
                  <div className= "container">
                     <div className= "row align-items-center">
                        <div className= "col-xl-5 col-lg-5 wow tpfadeLeft" data-wow-duration=".9s" data-wow-delay=".3s">
                        <div className= "tp-plan-section-box">
                              <div className= "tp-plan-section-icon pb-30">
                                 <Image src={img} alt="theme-pure" />
                              </div>
                              <span className= "tp-section-subtitle-5">{sub_title}</span>
                              <h3 className= "tp-section-title-5 pb-25">{title} </h3>
                        </div> 
                        <div className= "tp-custom-accordio-2">
                              <div className= "accordion" id="capabilitiesAI">
                                {accordion_data.map((item, i) => 
                                    <div key={i} className= "accordion-items">
                                        <h2 className= "accordion-header" id={item.accordion_id}>
                                        <button 
                                            className={`accordion-buttons ${item.collapsed}`} 
                                            type="button" 
                                            data-bs-toggle="collapse"
                                            data-bs-target={item.data_bs_target} 
                                            aria-expanded={item.aria_expanded} 
                                            aria-controls={item.aria_controls}
                                            >
                                            {item.question}
                                        </button>
                                        </h2>
                                        <div 
                                        id={item.aria_controls} 
                                        className= {`accordion-collapse collapse ${item.show}`} 
                                        aria-labelledby={item.accordion_id}
                                        data-bs-parent="#capabilitiesAI"
                                        >
                                        <div className= "accordion-body">
                                            {item.answer}
                                        </div>
                                        </div>
                                    </div>
                                )} 
                              </div>
                        </div>
                        </div>
                        <div className= "col-xl-7 col-lg-7  wow tpfadeRight" data-wow-duration=".9s" data-wow-delay=".5s">
                           <div className= "tp-plan-2-img-box p-relative">
                            {img_box.map((item, i)  => 
                                <div key={i} className= {`tp-plan-2-img-${item.cls}`}>
                                    <Image src={item.img} alt="theme-pure" />
                                </div> 
                            )} 
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
        </>
    );
};

export default Capabilities;