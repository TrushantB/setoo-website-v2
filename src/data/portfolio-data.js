

// thumb img import here 
import thumb_img_1 from "../../public/assets/img/project/cubyts-hero-image.webp";
import thumb_img_2 from "../../public/assets/img/project/vishwamitra-banner.webp";
import thumb_img_3 from "../../public/assets/img/project/gurumantra-banner.webp";
import thumb_img_4 from "../../public/assets/img/project/kerf-banner.webp";

// brand logo import here
import brand_logo_1 from "../../public/assets/img/clients/cubyts-logo.webp";
import brand_logo_2 from "../../public/assets/img/clients/vishwamitra-logo.svg";
import brand_logo_3 from "../../public/assets/img/clients/gurumantra-logo.png";
import brand_logo_4 from "../../public/assets/img/clients/kerf-logo.png";



const portfolio_data = [    
    {
        id: 1,
        thumb_img: thumb_img_1,
        brand_logo: brand_logo_1, 
        job_title: "Jamstack, Web Development",
        title: <>Cubyts</>,
        des: <>Cubyts offers its own DesignOps platform. In order to develop a solid design hub,
        they required their website to be fast, secure and scalable with cutting-edge technology.</>,
        delay: ".5s",
        category: "Web Studio",
        filter_id: ["all", "AI", "Web Studio", "Custom Product Development" ],
        link: '/cubyts'
    }, 
    {
        id: 2,
        thumb_img: thumb_img_2,
        brand_logo: brand_logo_2, 
        job_title: "Development, App Design",
        title: <>Vishwamitra</>,
        des: <>The Vishwamitra introduces a mobile and web application designed to connect 
        volunteers with meaningful opportunities.</>,
        delay: ".5s",
        category: "Custom Product Development",
        filter_id: ["all", "AI", "Web Studio", "Custom Product Development"],
        link: '/vishwamitra'
    }, 
    {
        id: 3,
        thumb_img: thumb_img_3,
        brand_logo: brand_logo_3, 
        job_title: "Branding, Illusutration",
        title: <>Gurumantra</>,
        des: <>The Gurumantra Quiz Application is a digital platform designed to empower students.
        This is the MVP app that provides the interactive way to test and enhance their knowledge.</>,
        delay: ".5s",
        category: "Custom Product Development",
        filter_id: ["all", "AI", "Web Studio", "Custom Product Development"],
        link: '/gurumantra'
    }, 
    {
        id: 4,
        thumb_img: thumb_img_4,
        brand_logo: brand_logo_4, 
        job_title: "Web Development",
        title: <>KERF</>,
        des: <>Kerf is a furniture manufacturing company, who was looking for a solution for
        online business. We introduced them an E-commerce platform where they can put their
        products for sell.</>,
        delay: ".5s",
        category: "Web Studio",
        filter_id: ["all", "AI", "Web Studio", "Custom Product Development"],
        link: '/kerf'
    }, 

    
]
export default portfolio_data