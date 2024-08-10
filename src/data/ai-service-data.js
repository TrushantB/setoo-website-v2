import ServiceIconOne from "./../svg/service/service-icon-1"
import ServiceIconTwo from "./../svg/service/service-icon-2"
import ServiceIconThree from "./../svg/service/service-icon-3"
import ServiceIconFour from "./../svg/service/service-icon-4"
import ServiceIconFive from "./../svg/service/service-icon-5"
import ServiceIconSix from "./../svg/service/service-icon-6"
import ServiceIconSeven from "./../svg/service/service-icon-7"

// images import  
// import img_1 from "./../public/assets/img/service/sv-icon-1.png";
// import img_2 from "./../public/assets/img/service/sv-icon-2.png";
// import img_3 from "./../public/assets/img/service/sv-icon-3.png";
// import img_4 from "./../public/assets/img/service/sv-icon-4.png";
// import img_5 from "./../public/assets/img/service/sv-icon-5.png";

const  service_data = [
    // AI page (Setvices in AI)
    {
        id: 1,
        icon: <ServiceIconOne />,
        img: <ServiceIconOne />,
        title: <>AI <br /> model development</>,
        description: <>AI Model Development creates an intelligent system to build custom models as per specific business requirements. <br /> Our process involves data preparation, algorithm selection, model training, and deployment to deliver data-driven solutions for enhancing efficiency and decision-making.</>,
        delay: ".9s",
    },
    {
        id: 2,
        icon: <ServiceIconTwo />,
        img: <ServiceIconTwo />,
        title: <>Real-time <br />Conversational Digital Humans</>,
        description: <>Real-time conversational digital humans provide lifelike interactions. <br /> AI-powered virtual beings have the ability to understand and respond to natural language, to engage with customers to ensure effective customer service, personalized assistance, or virtual companionship.</>,
        delay: ".9s",
    },
    {
        id: 3,
        icon: <ServiceIconThree />,
        img: <ServiceIconThree />,
        title: <>AI <br /> Application Development</>,
        description: <>AI Application Development crafts software solutions that leverage artificial intelligence to solve real-world problems. Complex data is transformed into actionable insights with custom AI applications. With our expertise, we deliver exceptional business value from ideation to deployment.</>,
        delay: ".9s",
    },
    {
        id: 4,
        icon: <ServiceIconFour />,
        img: <ServiceIconFour />,
        title: <>AI <br /> Strategy and Consultancy</>,
        description: <>AI consultancy ensures the crafting of customised strategies with business goals by identifying opportunities. <br /> We provide ethical and effective AI adoption from roadmap to implementation guidance. <br /> Our data-driven approach maximizes ROI and delivers sustainable results.</>,
        delay: ".9s",
    },
    {
        id: 5,
        icon: <ServiceIconFive />,
        img: <ServiceIconFive />,
        title: <>AI-Powered <br /> Automation</>,
        description: <>AI-Powered Automation uses artificial intelligence to streamline and optimize business processes. Human efforts are reduced by automating repetitive tasks and making human resources available for other strategic initiatives. <br /> Our solutions leverage machine learning and robotic process automation (RPA) to create intelligent systems that deliver measurable results.</>,
        delay: ".9s",
    },
    {
        id: 6,
        icon: <ServiceIconSix />,
        img: <ServiceIconSix />,
        title: "AI Ops and MLOps",
        description: <>AI Ops and MLOps are crucial for managing and scaling AI initiatives. MLOps increases efficiency and reliability by focusing on the lifecycle of machine learning. <br /> AI Ops uses AI and ML to automate tasks and enhance incident response to optimize IT operations. <br /> AI Ops and MLOps ensure to create a robust framework for building and maintaining intelligent systems.</>,
        delay: ".9s",
    },
]
export default service_data