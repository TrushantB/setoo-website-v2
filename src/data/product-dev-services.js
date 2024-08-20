import MvpIcon from "@/svg/service/mvp-icon"
import ServiceIconOne from "../svg/service/service-icon-1"
import ServiceIconTwo from "../svg/service/service-icon-2"
import ServiceIconThree from "../svg/service/service-icon-3"
import ServiceIconFour from "../svg/service/service-icon-4"
import ServiceIconFive from "../svg/service/service-icon-5"
import ServiceIconSix from "../svg/service/service-icon-6"
import ServiceIconSeven from "../svg/service/service-icon-7"
import WebAppDevelopment from "@/svg/service/web-app-development"
import MobileAppDevelopment from "@/svg/service/mobile-app-development"
import ExistingAppSupport from "@/svg/service/exisiting-app-support"
import CustomDevelopmentIcon from "@/svg/service/custom-development-icon"
import ApiDevelopmentIcon from "@/svg/service/api-development"
import EProdDevelopmentIcon from "@/svg/service/epd-icon"
import DesignSprintIcon from "@/svg/service/design-sprint-icon"
import NewFeatureIcon from "@/svg/service/new-feature-icon"

// images import  
// import img_1 from "./../public/assets/img/service/sv-icon-1.png";
// import img_2 from "./../public/assets/img/service/sv-icon-2.png";
// import img_3 from "./../public/assets/img/service/sv-icon-3.png";
// import img_4 from "./../public/assets/img/service/sv-icon-4.png";
// import img_5 from "./../public/assets/img/service/sv-icon-5.png";

const  service_data = [
    // Product Development Services
    {
        id: 1,
        icon: <MvpIcon />,
        img: <ServiceIconOne />,
        title: <>MVP Development</>,
        description: <>MVP (Minimum Viable Product) is the most basic version of a product, 
        developed to validate market demand quickly. <br /> Bring your idea live into an application within 
        8 weeks with our expert team.</>,
        delay: ".9s",
    },
    {
        id: 2,
        icon: <WebAppDevelopment />,
        img: <ServiceIconTwo />,
        title: <>Web Application Development</>,
        description: <>Web Application Development service transforms your ideas into powerful,
        user-friendly web applications. We focus on intuitive design, robust functionality,
        and seamless performance to meet your business needs. <br /> From concept to deployment,
        we ensure a responsive, secure, and scalable solution that enhances your digital
        presence and drives growth.</>,
        delay: ".9s",
    },
    {
        id: 3,
        icon: <MobileAppDevelopment />,
        img: <ServiceIconThree />,
        title: <>Mobile Application Development <br /> <small>(Native/Cross-Platform)</small></>,
        description: <>We create scalable, cross-platform applications to give your business or
        idea the competitive edge it needs. <br /> Our expertise includes developing robust mobile apps
        for both iOS and Android using React Native, Flutter, or native technologies,
        ensuring high performance and scalability.</>,
        delay: ".9s",
    },
    {
        id: 4,
        icon: <DesignSprintIcon />,
        img: <ServiceIconFour />,
        title: <>Design Sprints</>,
        description: <>Design Sprints rapidly solve complex problems through ideation, 
        prototyping, and testing, delivering innovative solutions and validated user experiences 
        quickly.</>,
        delay: ".9s",
    },
    {
        id: 5,
        icon: <NewFeatureIcon />,
        img: <ServiceIconFive />,
        title: <>Launch New Features</>,
        description: <>Launch new features for your existing products to enhance functionality
        with our team's expertise. </>,
        delay: ".9s",
    },
    {
        id: 6,
        icon: <ExistingAppSupport />,
        img: <ServiceIconSix />,
        title: <>Support Existing Applications</>,
        description: <>We provide continuous support services for the existing applications
        to ensure its maintenance and smooth function.</>,
        delay: ".9s",
    },
    {
        id: 7,
        icon: <CustomDevelopmentIcon />,
        img: <ServiceIconSix />,
        title: <>Custom Development</>,
        description: <>Setoo's expert team understands your custom requirements to strategise
        and develop custom software to cater to specific business requirements.</>,
        delay: ".9s",
    },
    {
        id: 8,
        icon: <EProdDevelopmentIcon />,
        img: <ServiceIconSix />,
        title: <>Enterprise Product Development</>,
        description: <>Enterprise Product Development involves crafting innovative designs and
        deploying robust enterprise solutions that ensure scalability and security to
        drive business success.</>,
        delay: ".9s",
    },
    {
        id: 9,
        icon: <ApiDevelopmentIcon />,
        img: <ServiceIconSix />,
        title: <>API Development</>,
        description: <>API Development service streamlines your software interactions, providing
        seamless integration and communication between diverse applications. <br /> With robust,
        scalable, and secure APIs, we enhance functionality, enabling efficient data exchange
        and process automation.</>,
        delay: ".9s",
    },
]
export default service_data