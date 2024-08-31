import React from 'react';
import Image from 'next/image';
import SocialLinks from './social-links';

// Note: Remove the static breadcrumb_content and images as these will be passed as props
const BlogHeader = ({ breadcrumbContent, authorImage, shape1, shape2 }) => {
    const { sub_title, title, author_name, author_info } = breadcrumbContent;

    return (
        <div className="breadcrumb__area breadcrumb-ptb-4 p-relative dark-mid-bg">
            <div className="breadcrumb__shape-1">
                <Image src={shape1} alt="breadcrumb-shape-1" />
            </div>
            <div className="breadcrumb__shape-2">
                <Image src={shape2} alt="breadcrumb-shape-2" />
            </div>
            <div className="container">
                <div className="row align-items-end">
                    <div className="col-xl-9 col-lg-9 col-md-9">
                        <div className="blog-details-banner z-index-2">
                            <div className="blog-details-title-box">
                                <span>{sub_title}</span>
                                <h3 className="blog-details-banner-title">{title}</h3>
                            </div>
                            <div className="tp-blog-author-info-box d-flex align-items-center">
                                {/* <div className="tp-blog-avata">
                                    <Image src={authorImage} alt="author-avatar" />
                                </div> */}
                                <div className="tp-blog-author-info">
                                    <h5>{author_name}</h5>
                                    <span>{author_info}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-3">
                        <div className="blog-details-social-box z-index-3 text-md-end text-start">
                            <SocialLinks url={typeof window !== 'undefined' ? window.location.href : ''} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogHeader;
