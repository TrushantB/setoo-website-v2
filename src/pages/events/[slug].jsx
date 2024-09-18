
import Head from "next/head";
import Wrapper from "@/layout/wrapper";
import BlogHeader from "@/common/blog-header";
import imgShape1 from "../../../public/assets/img/breadcrumb/breadcrumb-shape-1.png";
import imgShape2 from "../../../public/assets/img/breadcrumb/breadcrumb-shape-2.png";
import imgAuthor from "../../../public/assets/img/blog/blog-avata-1.png";
import HeaderFour from "@/layout/headers/header";
import FooterFour from "@/layout/footers/footer-4";
import Image from "next/image";
import SocialLinks from "@/common/social-links";
import { getPostData, getPostSlugs } from "@/lib/events";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Link from "next/link";
import { Modal } from 'react-responsive-modal';
import { useEffect, useRef, useState } from "react";
import 'react-responsive-modal/styles.css';
export async function getStaticPaths() {
  const slugs = getPostSlugs(); // Get all post slugs
  const paths = slugs.map((slug) => ({
    params: { slug }, // Create path for each post
  }));

  return { paths, fallback: false }; // No fallback, only paths generated at build time
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.slug);

 
  
  
   // Fetch post data at build time
  return { props: { postData } }; // Pass data to the page as props
}





export default function Post({ postData }) {

   const [open, setOpen] = useState(false);
  const [tabIndex, setTabIndex] = useState(0);
  const scrollToRef = useRef(null);

  const onOpenModal = () => setOpen(true);

  const onCloseModal = () => setOpen(false);
    
  // console.log('Post Data:', postData); // Check data in the browser console
  const {
    title,
    description,
    openGraph,
    contentHtml,
    schema,
    author_name,
    
    author_info,
    sub_title,
    hero_image,
    tocHtml,
  } = postData;
  // Prepare schema with hero image and other details
  const schemaWithHeroImage = {
    ...schema.article,
    image: hero_image || schema.image?.url,
    breadcrumb: schema.breadcrumb,
    organization: schema.organization,
    ...(schema.faq && { faq: schema.faq }), // Add FAQ schema only if present
  };

  // Pass the extracted data to the BlogHeader component
  const breadcrumbContent = {
    sub_title: sub_title || "Default Subtitle",
    title: title || "Default Title",
    author_name: author_name || "Unknown Author",
    author_info: author_info || "No Author Info",
  };

  useEffect(() => {
    const hash = window.location.hash;
    if (hash === "#leaveReview") {
      setOpen(true);

      //remove the hash after opening the modal
      window.history.replaceState(null, '', window.location.pathname)
    }
  });

  useEffect(() => {
    window.addEventListener("message", (event) => {
      // For security, you can check the origin of the message
      if (event.origin !== "https://fp.setoo.ai") {
        return;
      }
    
      // Access the data sent from the iframe
      setTabIndex(1);
      onCloseModal();
      handleScrollToElement();
    });
  },[])


  // Function to scroll to the element
  const handleScrollToElement = () => {
    if (scrollToRef.current) {
     const elementPosition = scrollToRef.current.getBoundingClientRect().top + window.pageYOffset;
      const offset = - 100; // Adjust this value to add more scroll offset
      window.scrollTo({
        top: elementPosition + offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <Wrapper>
      <Head>
        <title>{openGraph?.title || title}</title>
        <meta
          name="description"
          content={openGraph?.description || description}
        />
        <meta property="og:type" content={openGraph?.type || "article"} />
        <meta property="og:url" content={openGraph?.url} />
        <meta property="og:image" content={openGraph?.image} />
        <meta property="og:site_name" content={openGraph?.site_name} />
        <meta property="og:title" content={openGraph?.title || title} />
        <meta
          property="og:description"
          content={openGraph?.description || description}
        />
        {/* Add JSON-LD schema markup */}
        {schema && (
          <script type="application/ld+json">{JSON.stringify(schema)}</script>
        )}
        {schemaWithHeroImage && (
          <script type="application/ld+json">
            {JSON.stringify(schemaWithHeroImage)}
          </script>
        )}
      </Head>
      <HeaderFour />
      <BlogHeader
        breadcrumbContent={breadcrumbContent}
        authorImage={imgAuthor}
        shape1={imgShape1}
        shape2={imgShape2}
      />
      <article className="container postbox__area">
        <div className="pb-100">
          <div className="blog-details-img-area mb-30">
            <div className="blog-details-big-img z-index-2">
              {hero_image && (
                <Image
                  src={hero_image}
                  alt="Hero Image"
                  className="article-hero-image"
                  width={1200}
                  height={675}
                />
              )}
            </div>
          </div>
          <div className="row">
            <div className="col-xxl-4 col-xl-4 col-lg-4 align-self-start sticky-lg-top"></div>
            <div className="col-12">
              <div className="postbox__details-wrapper pr-20 pb-10">
                <h2>Event Description</h2>

                {description}
              </div>
              <div className="mt-5 pt-50 ">
                <Modal
                  classNames={"p-0 position-relative"}
                  showCloseIcon={false}
                  open={open}
                  onClose={onCloseModal}
                  center
                >
                  <button
                    className="position-absolute"
                    style={{ right: "50px", top: "30px", cursor: "pointer" }}
                    onClick={onCloseModal}
                  >
                    <svg
                      width={20}
                      height={20}
                      style={{ fill: "white" }}
                      className="fill-white position-absolute"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 384 512"
                    >
                      <path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z" />
                    </svg>
                  </button>

                  <iframe
                    src="https://fp.setoo.ai"
                    className="w-full modal-iframe"
                    frameBorder="0"
                  ></iframe>
                </Modal>
                <Tabs
                  className={"position-relative py-2"}
                  focusTabOnClick={false}
                  selectedIndex={tabIndex}
                  onSelect={(index) => setTabIndex(index)}
                >
                  <button
                    onClick={onOpenModal}
                    className={`tp-btn-yellow tp-btn-hover  d-md-inline-block position-absolute top-0 end-0 review-btn`}
                  >
                    <span  ref={scrollToRef}>Leave a Review</span>
                    <b></b>
                  </button>
                  <TabList>
                    <Tab>Event Details</Tab>
                    <Tab>Reviews</Tab>
                  </TabList>

                  <TabPanel>
                    <h4 className="my-4 fw-medium h5">At this Session you will</h4>
                    <div className="tp-plan-feature">
                      <ul className="mx-0">
                        <li>
                          <i className="far fa-check"></i>
                          Discover AI strategies to build business credibility.
                        </li>{" "}
                        <li>
                          <i className="far fa-check"></i>
                          Learn from industry expert and AI specialist.
                        </li>{" "}
                        <li>
                          <i className="far fa-check"></i>
                          Discover AI strategies to build business credibility.
                        </li>{" "}
                        <li>
                          <i className="far fa-check"></i>
                          Network with like-minded professionals and business
                          leaders.
                        </li>
                      </ul>
                    </div>
                    <div className="d-flex flex-column flex-lg-row gap-3 gap-lg-5 mt-50">
                      <div className="d-flex gap-2 align-items-center">
                        <img
                          src="/assets/img/events/Date.svg"
                          alt="date icon"
                        />
                        <p className="mb-0">19th September 2024</p>
                      </div>
                      <div className="d-flex gap-2 align-items-center">
                        <img
                          src="/assets/img/events/Time.svg"
                          alt="time icon"
                        />
                        <p className="mb-0">7:29 AM</p>
                      </div>
                      <div className="d-flex gap-2 align-items-center">
                        <img
                          src="/assets/img/events/Location.svg"
                          alt="location icon"
                        />
                        <p className="mb-0">
                          <Link href={'https://maps.app.goo.gl/W8FkbpQiJVDPtqkJ7'} target="_blank">
                          The Sky Kitchen, Singhad Road, Pune
                          </Link>
                        </p>
                      </div>
                    </div>
                  </TabPanel>
                  <TabPanel className="">
                    <iframe
                      src="https://fp.setoo.ai/dashboard"
                      frameBorder="0"
                      className="w-100 tabs"
                      height={500}
                    ></iframe>
                  </TabPanel>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </article>
      <FooterFour />
    </Wrapper>
  );
}
