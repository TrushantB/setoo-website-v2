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
    // DevOps page (Setvices in AI)
    {
        id: 1,
        icon: <ServiceIconOne />,
        img: <ServiceIconOne />,
        title: <>Cloud Migration <br /> <small>(Migration from One Cloud to Another)</small></>,
        description: <>DevOps cloud migration service seamlessly transfers applications and data between clouds, ensuring minimal downtime and optimal performance.</>,
        delay: ".9s",
    },
    {
        id: 2,
        icon: <ServiceIconTwo />,
        img: <ServiceIconTwo />,
        title: <>Migrate On-Premises Infra to AWS</>,
        description: <>Migrate on-premises infrastructure to AWS with seamless integration, enhanced security, scalability, and cost-efficiency using our expert DevOps services.</>,
        delay: ".9s",
    },
    {
        id: 3,
        icon: <ServiceIconThree />,
        img: <ServiceIconOne />,
        title: <>Cloud Cost Optimisation</>,
        description: <>Cloud Cost Optimisation involves monitoring and providing security to enhance performance to detect issues in real-time, ensure protection from threats, and establish regulatory compliance for cloud infrastructure.</>,
        delay: ".9s",
    },
    {
        id: 4,
        icon: <ServiceIconFour />,
        img: <ServiceIconOne />,
        title: <>Infrastructure as a Code</>,
        description: <>Infrastructure as Code (IaC) service manages IT infrastructure through code, establishes automation and a consistent environment. <br /> Industry tools are used to define, deploy, and update infrastructure programmatically.</>,
        delay: ".9s",
    },
    {
        id: 5,
        icon: <ServiceIconFive />,
        img: <ServiceIconOne />,
        title: <>Terraform</>,
        description: <>Terraform is an open-source infrastructure as a code tool enabling safe and efficient management and provisioning of cloud resources across providers.</>,
        delay: ".9s",
    },
    {
        id: 6,
        icon: <ServiceIconSix />,
        img: <ServiceIconOne />,
        title: "CI/CD",
        description: <>CI/CD as a service automates code integration and delivery, boosting development speed, reliability, and quality for tech companies.</>,
        delay: ".9s",
    },
    {
        id: 7,
        icon: <ServiceIconSeven />,
        img: <ServiceIconOne />,
        title: "Secure Cloud Infrastructure",
        description: <>Secure Cloud Infrastructure ensures robust data protection with encryption, multi-layer security, continuous monitoring, and compliance as required.</>,
        delay: ".9s",
    },
    {
        id: 8,
        icon: <ServiceIconOne />,
        img: <ServiceIconOne />,
        title: "MLOps",
        description: <>MLOps streamlines the machine learning lifecycle, enhancing deployment, monitoring, and scalability for technological companies, ensuring efficient operations.</>,
        delay: ".9s",
    },
]
export default service_data