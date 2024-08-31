import { useEffect, useState } from 'react';
import Link from "next/link";

const socialLinks = [
  {
    link: (url) => `http://facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    icon: 'fab fa-facebook-f',
  },
  {
    link: (url) => `http://twitter.com/intent/tweet?url=${encodeURIComponent(url)}`,
    icon: 'fab fa-twitter',
  },
  {
    link: (url) => `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    icon: 'fab fa-linkedin-in',
  },
];

const SocialLinks = () => {
  const [url, setUrl] = useState('');

  useEffect(() => {
    // Set the URL when the component mounts
    setUrl(window.location.href);
  }, []);

  return (
    <div className="social-links blog-details-social-box">
      {socialLinks.map((l, i) => (
        <a
          key={i}
          href={l.link(url)}
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <i className={l.icon}></i>
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;






const copy_right_text = {
  copy_right: <>Copyright <Link href="contact">@Setoo Solutions</Link> – {new Date().getFullYear()} | All rights reserved.</>,
}
const {copy_right}  = copy_right_text

export const CopyRight = ()  => {
  return (
    <>
    {copy_right}
    </>
  )
}




// home 04 social link
const social_links_two = [
  {
      link: "https://www.instagram.com/setooists/",
      target: "_blank",
      icon: "fab fa-instagram", 
      color: "2",
  },
  {
    link: "https://www.linkedin.com/company/setoos",
    target: "_blank",
    icon: "fab fa-linkedin-in",
    color: "4", 
  }, 
];

export const  SocialLinksTwo = ()  => {
   return (
     <>
        {social_links_two.map((link, i) => (
          <Link
            key={i}
            target={link.target}
            className={`icon-color-${link.color}`}
            href={link.link}
          >
            <i className={link.icon}></i>
            <span></span>
          </Link>
        ))}
     </>
   );
}