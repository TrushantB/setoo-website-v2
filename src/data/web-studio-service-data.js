import ServiceIconOne from "./../svg/service/service-icon-1"
import ServiceIconTwo from "./../svg/service/service-icon-2"
import ServiceIconThree from "./../svg/service/service-icon-3"

import WebsServiceIcon from "@/svg/service/web-service-icon";
import EcommServiceIcon from "@/svg/service/ecommerce-service";
import JamstackIcon from "@/svg/tech-stack/jamstack-icon";




const  service_data = [
    {
        id: 1,
        icon: <WebsServiceIcon />,
        img: <ServiceIconOne />,
        title: "Websites",
        description: <>Websites built on Content Management System (CMS) that are highly
        versatile and easy to use for users as it allows them to seamlessly create and manage 
        content. These websites are ideal for simple blogs, bespoke and complex e-commerce 
        websites.</>,
        delay: ".9s",
    },
    
    {
        id: 2,
        icon: <JamstackIcon />,
        img: <ServiceIconTwo />,
        title: "Jamstack",
        description: <>A formula to build a fast, secure, and SEO-friendly website, e-commerce platform, and mobile application.</>,
        delay: ".9s",
    },
    
    {
        id: 3,
        icon: <EcommServiceIcon />,
        img: <ServiceIconThree />,
        title: "e-commerce",
        description: <>E-commerce solutions for Shopify, Magento, WordPress, and no-code 
        platforms ensure scalability, customized stores with seamless integration, 
        intuitive design, and enhanced user experience.</>,
        delay: ".9s",
    },
]
export default service_data