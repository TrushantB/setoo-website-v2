
import project_img_1 from "../../public/assets/img/project/project-img-2.jpg";
import cubyts_logo from "../../public/assets/img/clients/cubyts-logo.webp"

import project_img_2 from "../../public/assets/img/project/project-img-1.jpg";
import vishwamitra_logo from "../../public/assets/img/clients/vishwamitra-logo.svg"

import project_img_3 from "../../public/assets/img/project/project-img-3.jpg";
import gurumantra_logo from "../../public/assets/img/clients/gurumantra-logo.png"

import project_img_4 from "../../public/assets/img/project/project-img-4.jpg";
import kerf_logo from "../../public/assets/img/clients/kerf-logo.png"




const project_data = [
    {
        id: 1,
        img_1: project_img_1,
        logo: cubyts_logo,
        title: "Cubyts",
        description: <>Cubyts offers its own DesignOps platform. In order to develop a solid design hub, 
        they required their website to be fast, secure and scalable with cutting-edge technology.</>,
        client_name: "Cubyts",
        year: "2023",
        link: '/cubyts',
        delay: ".9s",
    },
    {
        id: 2,
        img_1: project_img_2,
        logo: vishwamitra_logo,
        title: "Vishwamitra",
        description: <>This user-friendly mobJ app is built on Jamstack+
        plaform that allows individuals to explore and engage in various volunteering initiatives
        effortlessly.</>,
        client_name: "Vishwamitra",
        year: "2023",
        link: "/vishwamitra",
        delay: ".5s"
    },
    {
        id: 3,
        img_1: project_img_3,
        logo: gurumantra_logo,
        title: "Gurumantra",
        description: <>The Gurumantra Quiz Application is a digital platform designed to empower 
        students. This is the MVP app that provides the interactive way to test and enhance their
        knowledge.</>,
        client_name: "eGurumantra",
        year: "2023",
        link: "/gurumantra",
        delay: ".7s"
    },
    {
        id: 4,
        img_1: project_img_4,
        logo: kerf_logo,
        title: "KERF",
        description: <>Kerf is a furniture manufacturing company , who was looking for a solution 
        for online business. We introduced them an E-commerce platform where they can put their 
        products for sell.</>,
        client_name: "KERF",
        year: "2022",
        link: "/kerf",
        delay: ".7s"
    },
]
export default project_data