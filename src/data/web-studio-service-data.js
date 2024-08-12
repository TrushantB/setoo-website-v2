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
        title: "Website",
        description: <>Quick & Easy Repeater Fields Option</>,
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
        description: <>Get real-time visibility into every expense.</>,
        delay: ".9s",
    },
]
export default service_data