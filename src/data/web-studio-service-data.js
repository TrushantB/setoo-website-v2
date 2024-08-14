import ServiceIconOne from "./../svg/service/service-icon-1"
import ServiceIconTwo from "./../svg/service/service-icon-2"
import ServiceIconThree from "./../svg/service/service-icon-3"

// images import  
import img_1 from "../../public/assets/img/service/sv-icon-1.png";
import img_2 from "../../public/assets/img/service/sv-icon-2.png";
import img_3 from "../../public/assets/img/service/sv-icon-3.png";
import img_4 from "../../public/assets/img/service/sv-icon-4.png";
import img_5 from "../../public/assets/img/service/sv-icon-5.png";




const  service_data = [
    {
        id: 1,
        icon: <ServiceIconOne />,
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
        icon: <ServiceIconTwo />,
        img: <ServiceIconTwo />,
        title: "Jamstack",
        description: <>A formula to build a fast, secure, and SEO-friendly website, e-commerce platform, and mobile application.</>,
        delay: ".9s",
    },
    
    {
        id: 3,
        icon: <ServiceIconThree />,
        img: <ServiceIconThree />,
        title: "eCommerce",
        description: <>E-commerce solutions for Shopify, Magento, WordPress, and no-code 
        platforms ensure scalability, customized stores with seamless integration, 
        intuitive design, and enhanced user experience.</>,
        delay: ".9s",
    },
]
export default service_data