import ServiceIconOne from "./../svg/service/service-icon-1"
import ServiceIconTwo from "./../svg/service/service-icon-2"
import ServiceIconThree from "./../svg/service/service-icon-3"
import ServiceIconFour from "./../svg/service/service-icon-4"
import ServiceIconFive from "./../svg/service/service-icon-5"
import ServiceIconsix from "./../svg/service/service-icon-6"

// images import  
import img_1 from "../../public/assets/img/service/sv-icon-1.png";
import img_2 from "../../public/assets/img/service/sv-icon-2.png";
import img_3 from "../../public/assets/img/service/sv-icon-3.png";
import img_4 from "../../public/assets/img/service/sv-icon-4.png";
import img_5 from "../../public/assets/img/service/sv-icon-5.png";

const  service_data = [
    {
        id: 1,
        icon: ServiceIconOne,
        img: img_1,
        title: "Effective Communication",
        description: <>We value effective communication for work efficiency.</>,
        delay: ".4s",
    },
    {
        id: 2,
        icon: ServiceIconTwo,
        img: img_2,
        title: "Time-Saving Process",
        description: <>Our staff augmentation will help you recruit talent and save your recruitment time.</>,
        delay: ".6s",
    },
    {
        id: 3,
        icon: ServiceIconThree,
        img: img_3,
        title: "Adaptability and Flexibility",
        description: <>Our staff will quickly adjust to your working environment and ensure efficient working.</>,
        delay: ".7s",
    },
    {
        id: 4,
        icon: ServiceIconFour,
        img: img_4,
        title: "High Scalability",
        description: <>Our talent can help you scale your business with their expertise.</>,
        delay: ".8s",
    },
    {
        id: 5,
        icon: ServiceIconFive,
        img: img_5,
        title: "Culturally Fit",
        description: <>Our talents ensure to align with your business organisation's values and culture.</>,
        delay: ".9s",
    },
    {
        id: 6,
        icon: ServiceIconFive,
        img: img_5,
        title: "Convenient Time Zone",
        description: <>We ensure to work within business hours and maintain smooth communication while working on projects.</>,
        delay: ".9s",
    },
]
export default service_data