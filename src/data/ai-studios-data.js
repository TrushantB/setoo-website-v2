import ServiceIconOne from "../svg/service/service-icon-1"
import ServiceIconTwo from "../svg/service/service-icon-2"
import ServiceIconThree from "../svg/service/service-icon-3"

// images import  
import img_1 from "../../public/assets/img/service/sv-icon-1.png";
import img_2 from "../../public/assets/img/service/sv-icon-2.png";
import img_3 from "../../public/assets/img/service/sv-icon-3.png";

// Studios Icon
import icon_1 from "../../public/assets/img/service/sv-icon-4-1.png"
import icon_2 from "../../public/assets/img/service/sv-icon-4-2.png"
import icon_3 from "../../public/assets/img/service/sv-icon-4-3.png"

const  studios_data = [
    // for Studios
    {
        id: 1,
        icon: icon_1,
        img: icon_1,
        title: "AI Labs",
        sub_title: "AI",
        cls: "1",
        description: <>Transforming ideas into intelligent solutions through advanced AI technologies</>,
        delay: ".9s",
        link: '/ai'
    },
    {
        id: 2,
        icon: icon_2,
        img: icon_2,
        title: "Web Studio",
        sub_title: "Website design & development",
        cls: "2",
        description: <>Building dynamic websites with robust CMS and seamless eCommerce capabilities.</>,
        delay: ".9s",
        link: '/web-studio'
    },
    {
        id: 3,
        icon: icon_3,
        img: icon_3,
        title: <>Product Development</>,
        sub_title: "Product  design & Development",
        cls: "3",
        description: <>Developing custom software solutions and upgrading existing products to stay ahead.</>,
        delay: ".9s",
        link: '/product-development'
    },
]
export default studios_data;