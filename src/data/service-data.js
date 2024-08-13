import ServiceIconOne from "../svg/service/service-icon-1"
import ServiceIconTwo from "../svg/service/service-icon-2"
import ServiceIconThree from "../svg/service/service-icon-3"
import ServiceIconFoure from "../svg/service/service-icon-4"
import ServiceIconFive from "../svg/service/service-icon-5"
import ServiceIconsix from "../svg/service/service-icon-6"
import ServiceIconSeven from "../svg/service/service-icon-7"

// images import  
import img_1 from "../../public/assets/img/service/sv-icon-1.png";
import img_2 from "../../public/assets/img/service/sv-icon-2.png";
import img_3 from "../../public/assets/img/service/sv-icon-3.png";
import img_4 from "../../public/assets/img/service/sv-icon-4.png";
import img_5 from "../../public/assets/img/service/sv-icon-5.png";
// for home 04
import icon_1 from "../../public/assets/img/service/sv-icon-4-1.png"
import icon_2 from "../../public/assets/img/service/sv-icon-4-2.png"
import icon_3 from "../../public/assets/img/service/sv-icon-4-3.png"
import icon_4 from "../../public/assets/img/service/sv-icon-4-4.png"

// for home 05
import img_6 from "../../public/assets/img/service/sv-icon-5-1.png";
import img_7 from "../../public/assets/img/service/sv-icon-5-2.png";
import img_8 from "../../public/assets/img/service/sv-icon-5-3.png";
import img_9 from "../../public/assets/img/service/sv-icon-5-4.png";

// import img_10 from "../../public/";
// import img_11 from "../../public/";
// import img_12 from "../../public/";
// import img_13 from "../../public/";
// import img_14 from "../../public/";
// import img_15 from "../../public/";




const  service_data = [
    // for home 01 
    {
        id: 1,
        icon: img_1,
        img: img_1,
        title: "AI Data Analysis",
        description: <>Lorem Ipsum is simply dummy text <br /> of the printing</>,
        delay: ".4s",
    },
    {
        id: 2,
        icon: img_2,
        img: img_2,
        title: "Machine Learning",
        description: <>Lorem Ipsum is simply dummy text <br /> of the printing</>,
        delay: ".6s",
    },
    {
        id: 3,
        icon: img_3,
        img: img_3,
        title: "Data Visualization",
        description: <>Lorem Ipsum is simply dummy text <br /> of the printing</>,
        delay: ".7s",
    },
    {
        id: 4,
        icon: img_4,
        img: img_4,
        title: "Business Intelligence",
        description: <>Lorem Ipsum is simply dummy text <br /> of the printing</>,
        delay: ".8s",
    },
    {
        id: 5,
        icon: img_5,
        img: img_5,
        title: "Artificial Intelligence",
        description: <>Lorem Ipsum is simply dummy text <br /> of the printing</>,
        delay: ".9s",
    },

    // for home 03
    {
        id: 6,
        icon: <ServiceIconOne />,
        img: <ServiceIconOne />,
        title: "Project management jamil",
        description: <>Automate Workflows <br /> and Monitor your Sales.</>,
        delay: ".9s",
    },
    {
        id: 7,
        icon: <ServiceIconTwo />,
        img: <ServiceIconTwo />,
        title: "Sales analytics",
        description: <>Track your Marketing to see the best Results.</>,
        delay: ".9s",
    },
    {
        id: 8,
        icon: <ServiceIconThree />,
        img: <ServiceIconThree />,
        title: "Easy Invoicing",
        description: <>Automate recurring invoices and save time.</>,
        delay: ".9s",
    },
    {
        id: 9,
        icon: <ServiceIconFoure/>,
        img: <ServiceIconFoure />,
        title: "Complete Visibility",
        description: <>Get real-time visibility into every expense.</>,
        delay: ".9s",
    },
    
    // for home 04
    {
        id: 10,
        icon: icon_1,
        img: icon_1,
        title: "AI Lab",
        sub_title: "AI",
        cls: "1",
        description: <>Transforming ideas into intelligent solutions through advanced AI technologies</>,
        delay: ".9s",
    },
    {
        id: 11,
        icon: icon_2,
        img: icon_2,
        title: "Web Studio",
        sub_title: "Website design & development",
        cls: "2",
        description: <>Building dynamic websites with robust CMS and seamless eCommerce capabilities.</>,
        delay: ".9s",
    },
    {
        id: 12,
        icon: icon_3,
        img: icon_3,
        title: <>Product development</>,
        sub_title: "Product  design & development",
        cls: "3",
        description: <>Developing custom software solutions and upgrading existing products to stay ahead.</>,
        delay: ".9s",
    },

    // for home 05
    {
        id: 14,
        icon: img_6,
        img: img_6,
        title: <>Live Inventory <br /> Management</>,
        sub_title: "Cloud Backup",
        cls: "4",
        description: <>Track materials and stock for outsourced purchase orders</>,
        delay: ".9s",
    },
    {
        id: 15,
        icon: img_7,
        img: img_7,
        title: <>Real-time Master <br />  Planning</>,
        sub_title: "Cloud Backup",
        cls: "4",
        description: <>Track materials and stock for outsourced purchase orders</>,
        delay: ".9s",
    },
    {
        id: 16,
        icon: img_8,
        img: img_8,
        title: <>Easy Contract <br /> Manufacturing</>,
        sub_title: "Cloud Backup",
        cls: "4",
        description: <>Track materials and stock for outsourced purchase orders</>,
        delay: ".9s",
    },
    {
        id: 17,
        icon: img_9,
        img: img_9,
        title: <>Omnichannel <br /> Order Management</>,
        sub_title: "Cloud Backup",
        cls: "4",
        description: <>Track materials and stock for outsourced purchase orders</>,
        delay: ".9s",
    },

    // service page
    {
        id: 18,
        icon: <ServiceIconOne />,
        img: <ServiceIconOne />,
        title: "Project management jamil",
        description: <>Automate Workflows <br /> and Monitor your Sales.</>,
        delay: ".9s",
    },
    {
        id: 19,
        icon: <ServiceIconTwo />,
        img: <ServiceIconTwo />,
        title: "Sales analytics",
        description: <>Track your Marketing to see the best Results.</>,
        delay: ".9s",
    },
    {
        id: 20,
        icon: <ServiceIconThree />,
        img: <ServiceIconThree />,
        title: "Easy Invoicing",
        description: <>Automate recurring invoices and save time.</>,
        delay: ".9s",
    },
    {
        id: 21,
        icon: <ServiceIconFoure/>,
        img: <ServiceIconFoure />,
        title: "Complete Visibility",
        description: <>Get real-time visibility into every expense.</>,
        delay: ".9s",
    },
    
    {
        id: 22,
        icon: <ServiceIconFive/>,
        img: <ServiceIconFive />,
        title: "FIELDS OPTION",
        description: <>Quick & Easy Repeater Fields Option</>,
        delay: ".9s",
    },
    
    {
        id: 23,
        icon: <ServiceIconsix/>,
        img: <ServiceIconsix />,
        title: "Safe Online Services",
        description: <>Online services to view company level.</>,
        delay: ".9s",
    },
    
    {
        id: 24,
        icon: <ServiceIconSeven/>,
        img: <ServiceIconSeven />,
        title: "Online marketing",
        description: <>Get real-time visibility into every expense.</>,
        delay: ".9s",
    },
    // AI page (Setvices in AI)
    {
        id: 25,
        icon: <ServiceIconOne />,
        img: <ServiceIconOne />,
        title: <>AI <br /> model development</>,
        description: <>AI Model Development creates an intelligent system to build custom models as per specific business requirements. <br /> Our process involves data preparation, algorithm selection, model training, and deployment to deliver data-driven solutions for enhancing efficiency and decision-making.</>,
        delay: ".9s",
    },
    {
        id: 26,
        icon: <ServiceIconTwo />,
        img: <ServiceIconTwo />,
        title: <>Real-time <br />Conversational Digital Humans</>,
        description: <>Real-time conversational digital humans provide lifelike interactions. <br /> AI-powered virtual beings have the ability to understand and respond to natural language, to engage with customers to ensure effective customer service, personalized assistance, or virtual companionship.</>,
        delay: ".9s",
    },
    {
        id: 27,
        icon: <ServiceIconOne />,
        img: <ServiceIconOne />,
        title: <>AI <br /> Application Development</>,
        description: <>AI Application Development crafts software solutions that leverage artificial intelligence to solve real-world problems. Complex data is transformed into actionable insights with custom AI applications. With our expertise, we deliver exceptional business value from ideation to deployment.</>,
        delay: ".9s",
    },
    {
        id: 28,
        icon: <ServiceIconOne />,
        img: <ServiceIconOne />,
        title: <>AI <br /> Strategy and Consultancy</>,
        description: <>AI consultancy ensures the crafting of customised strategies with business goals by identifying opportunities. <br /> We provide ethical and effective AI adoption from roadmap to implementation guidance. <br /> Our data-driven approach maximizes ROI and delivers sustainable results.</>,
        delay: ".9s",
    },
    {
        id: 29,
        icon: <ServiceIconOne />,
        img: <ServiceIconOne />,
        title: <>AI-Powered <br /> Automation</>,
        description: <>AI-Powered Automation uses artificial intelligence to streamline and optimize business processes. Human efforts are reduced by automating repetitive tasks and making human resources available for other strategic initiatives. <br /> Our solutions leverage machine learning and robotic process automation (RPA) to create intelligent systems that deliver measurable results.</>,
        delay: ".9s",
    },
    {
        id: 30,
        icon: <ServiceIconOne />,
        img: <ServiceIconOne />,
        title: "AI Ops and MLOps",
        description: <>AI Ops and MLOps are crucial for managing and scaling AI initiatives. MLOps increases efficiency and reliability by focusing on the lifecycle of machine learning. <br /> AI Ops uses AI and ML to automate tasks and enhance incident response to optimize IT operations. <br /> AI Ops and MLOps ensure to create a robust framework for building and maintaining intelligent systems.</>,
        delay: ".9s",
    },
]
export default service_data