import Image from 'next/image';
import React, {useEffect, useState} from 'react';
import Link from 'next/link';
import bg_shape from "../../public/assets/img/platform/p-bg.png";
import platform_img from "../../public/assets/img/payment/platform-1.png"; 

const platform_content ={
    sub_title: "What we offer",
    title: "Our Core Services",
    description: <>Spectrum of our services delivering continuous successful results</>,

}
const { sub_title, title, description }  = platform_content

// plat form data 
const platform_data = [
    {
        id: 1,
        cls: "one", 
        count: "01",
        title: "Design",
        sub_title: "Design",
        des: <>Crafting intuitive designs that transform user interactions into 
        seamless experiences.</>,
    },
    {
        id: 2,
        cls: "two",
        count: "02",
        title: "Development",
        sub_title: "Development",
        des: <>Development involves converting an idea into a strategy to build a product
        with efficient functionality.</>,
    },
    {
        id: 3,
        cls: "three",
        count: "03",
        title: "Quality Assurance",
        sub_title: "Quality Assurance",
        des: <>Delivering results with continuous testing to ensure efficient and effective quality.</>,
    },
    {
        id: 4,
        cls: "four", 
        count: "04",
        title: "DevOps",
        sub_title: "DevOps",
        des: <>Delivering applications and optimizing operations at high speed for maximum efficiency.</>,
    },
    {
        id: 5,
        cls: "five", 
        count: "05",
        title: "Remote Sourcing",
        sub_title: "Remote Sourcing",
        des: <>Transform your hiring strategy with remote sourcing, where the perfect candidate is always within reach.</>,
    }
]

const PlatformArea = ({style_carrer}) => {

    const [active, setActive] = useState(3);
    const handleToggle = (id) => {
        setActive(id)
    }
    const handleAll = (id) => {
        setActive("all")
    }
    

    function mediaSize() { 
		/* Set the matchMedia */
		if (window.matchMedia('(max-width: 991px)').matches) {
            setActive("all") 
		} else {
		 setActive(1)
		}
	};
	
    useEffect(() => {
        /* Call the function */
		mediaSize();
	/* Attach the function to the resize event listener */
	  window.addEventListener('resize', mediaSize, false); 
    },[])

 

    return (
        <>                        
            <div className={`fix tp-platform-area ${style_carrer ? "tp-platform-inner pt-120" : "border-tb blue-bg pt-115 pb-105"} p-relative z-index`} >   
                {style_carrer ? null : 
                    <div className="tp-platform-bg-shape">
                        <Image src={bg_shape} alt="" />
                    </div>
                }                                      
               <div className="container">
                  <div className={`row align-items-end ${style_carrer ? "mb-60" : "mb-40"} `}>
                     <div className={`col-xl-7 col-lg-6 ${style_carrer && "wow tpfadeLeft"}`} 
                            data-wow-duration={style_carrer && ".9s"} 
                            data-wow-delay={style_carrer && ".3s"} >
                        <div className="tp-platform-section-box"> 
                           <span className={`${style_carrer ? "inner-section-subtitle" : "tp-section-subtitle-4"} pb-10`}>{sub_title}</span>
                           <h2 className={`${style_carrer ? "tp-section-title" : "tp-section-title-4"}`}>{title}</h2>
                        </div>
                     </div>
                     <div className="col-xl-5 col-lg-6  wow tpfadeRight" data-wow-duration=".9s" data-wow-delay=".5s">
                        <div className="tp-platform-text">
                           <p>{description}</p>
                        </div>
                     </div>
                  </div>
                  <div className="row align-items-center">
                     {/* <div className="col-xl-2 col-lg-2 d-none d-xl-block">
                        <div className="tp-platform-img-box">
                           <Image src={platform_img} alt="" />
                        </div>
                     </div> */}
                     <div className="col-xl-12 col-lg-12">
                        <div className="row-custom-wrapper">
                           <div className="row-custom">
                            {platform_data.map((item, i)  => 
                                <div key={i} className={`col-custom ${active === "all" ? "active" : item.id === active ? "active" : ""}`}  onClick={active !== "all" ? () => handleToggle(item.id) : () => handleAll() }>
                                    <div className="tp-panel-item">
                                        <div className="tp-panel-content">
                                        <span>{item.count}.</span>
                                        <h4 className={`tp-panel-title child-${item.cls}`}> {item.sub_title}</h4>
                                        </div>
                                    </div>
                                    <div className="tp-panel-item-2">
                                        <div className="tp-panel-content-2">
                                        <span>{item.count}.</span>
                                        <h4 className="tp-panel-title-2">{item.title}</h4>
                                        <p>{item.des}</p>
                                        {/* <Link className='text-primary mt-30 d-inline-block' href={item.link}>Read more about {item.title} <i className='fal fa-arrow-right'></i> </Link> */}
                                        </div>
                                    </div>
                                </div>
                                )
                            } 
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
        </>
    );
};

export default PlatformArea;