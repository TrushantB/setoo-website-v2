import author_img_1 from "../../public/assets/img/blog/blog-avata-1.png";
import author_img_2 from "../../public/assets/img/blog/blog-avata-2.png";
import author_img_3 from "../../public/assets/img/blog/blog-avata-3.png";

import img_1 from "../../public/assets/img/experience/on-call-doctor-healthcare-session.png"
import img_2 from "../../public/assets/img/experience/customer-interaction-digital-human.png"
import img_3 from "../../public/assets/img/experience/conference-room-meeting.png"
import img_4 from "../../public/assets/img/experience/ai-booking-scheduling-agent.png"
import img_5 from "../../public/assets/img/experience/ai-bot-for-client-reviews.png"
import img_6 from "../../public/assets/img/experience/ai-for-personal-engagement.png";

const experience_data = [
  {
    id: 1,
    img: img_1,
    category: "AI Lab",
    color: "1",
    date: "3 August, 2023",
    title: <>On-call Doctor for Healthcare sessions</>,
    description: <>Feel free to ask him any questions related to healthcare</>,
    author_img: author_img_1,
    experience_link: "/experience/ai-on-call-for-doctor",
  },
  {
    id: 2,
    img: img_2,
    category: "AI Lab",
    color: "2",
    date: "5 September, 2023",
    title: <>Digital Human Avatar for real-time customer interaction</>,
    author_img: author_img_2,
    description: (
      <>
        Clove could be your go-to-person for all AI and Tech related inquiries
        and could be used as co presentation for events
      </>
    ),
    experience_link: "experience/digital-human-avatar",
  },
  {
    id: 3,
    img: img_3,
    category: "AI Lab",
    color: "3",
    date: "26 September, 2023",
    title: <>Multiple People Conference Room for Effective Meetings</>,
    author_img: author_img_3,
    description: (
      <>
        Book our spacious Multiple People Conference Room, equipped with
        advanced AV tech and flexible layouts, perfect for team meetings and
        presentations. Elevate your collaboration!
      </>
    ),
    experience_link: "/experience/multiple-people-conference-room-ai",
  },

  {
    id: 4,
    img: img_4,
    category: "AI Lab",
    color: "",
    date: "1 November, 2023",
    title: <>AI Meeting Booking Agent for Seamless Scheduling</>,
    description: (
      <>
        Optimize your scheduling with our AI Meeting Booking Agent. Effortlessly
        coordinate meetings, reduce conflicts, and enhance productivity.
        Experience smarter scheduling today!
      </>
    ),
    author_img: author_img_3,
    experience_link: "/experience/ai-on-call-for-meetings",
  },
  {
    id: 5,
    img: img_5,
    category: "AI Lab",
    color: "",
    date: "24 min",
    title: <>AI Bot for Collecting Real-Time Client Reviews</>,
    description: (
      <>
        Enhance feedback with our AI Bot that collects real-time reviews from
        clients. Streamline your review process and improve customer insights
        effortlessly!
      </>
    ),
    author_img: author_img_3,
    experience_link: "/experience/ai-on-call-for-client-reviews",
  },

  {
    id: 6,
    img: img_6,
    category: "AI Lab",
    color: "",
    date: "24 min",
    title: (
      <>
        Experience personalized engagement like never before with our custom AI
        solution!
      </>
    ),
    description: (
      <>
        Introducing our innovative AI avatar from Setoo AI, designed for dynamic
        interactions tailored to your needs. Choose from a variety of voices and
        personas, each bringing a unique personality to your conversations.
      </>
    ),
    author_img: author_img_3,
    experience_link: "/experience/experience-personalized-engagement-ai",
  },
];
export default experience_data