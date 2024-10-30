import experience_data from '@/data/experience-data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const experience_content = {
    sub_title: "Our Latest",
    title: "Experiences",
}
const { sub_title, title } = experience_content

const { login } = useKindeAuth();

const ExperienceArea = () => {
    return (
        <>
            <div className="tp-blog-area blue-bg pt-60 pb-90">
                <div className="container">                    
                    <div className="row align-items-end tp-blog-four-section-space">
                        <div className="col-xl-6 col-lg-6">
                            <div className="tp-blog-four-section-box">
                                <h5 className="tp-section-subtitle-4 pb-10" name="section-subtitle">{sub_title}</h5>
                                <h3 className="tp-section-title-4" name="section-title">{title}</h3>
                            </div>
                        </div>
                        {/* <div className="col-xl-6 col-lg-6 wow tpfadeRight" data-wow-duration=".9s" data-wow-delay=".5s">
                            <div className="tp-blog-four-btn text-start text-lg-end">
                                <Link className="tp-btn-yellow-border" href="/blog-details">Show More <i className="far fa-angle-right"></i></Link>
                            </div>
                        </div> */}
                    </div>
                    <div className="row">
                        {experience_data.map((item, i) =>
                            <div  onClick={login} key={i} className="col-xl-6 col-lg-6 col-md-6 mb-40 wow tpfadeUp" data-wow-duration=".9s"
                                data-wow-delay=".7s">
                                <div className="tp-blog-four-item p-relative fix h-100 d-flex flex-column">
                                    <div className="tp-blog-four-img fix">
                                        <Link href={item.experience_link} target="_blank"><Image src={item.img} alt="theme-pure" /></Link>
                                    </div>
                                    <div className="tp-blog-four-content-wrapper d-flex flex-column flex-grow-1">
                                        <div className="tp-blog-four-meta">
                                            <span className="child-1">{item.category}</span>
                                            {/* <span className="child-2">{item.date}</span> */}
                                        </div>
                                        <div className="tp-blog-four-info">
                                            <h4 className="tp-blog-four-title-sm"><Link href={item.experience_link} target="_blank">{item.title}</Link></h4>
                                            <p>{item.description}</p>
                                        </div>
                                        <div className="tp-blog-four-btn mt-auto">
                                            <Link className="tp-btn-service tp-btn-yellow text-white tp-btn-hover" 
                                            href={item.experience_link} target="_blank">Experience It Live <span>&#8599;</span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                        }

                    </div>
                </div>
            </div>
        </>
    );
};

export default ExperienceArea;