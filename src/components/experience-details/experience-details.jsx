import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import FooterFour from "@/layout/footers/footer-4";
import HeaderFour from "@/layout/headers/header";
import contents from "@/data/experience-details-content";
import Link from "next/link";


const ExperienceDetails = () => {
  const [shadow, setShadow] = useState(2);
  const [content, setContent] = useState(null);
  const router = useRouter();
  const { slug } = router.query;

  useEffect(() => {
    if (slug) {
      // Find the matching content based on slug
      const matchingContent = contents.find((item) => item.slug === slug);

      if (matchingContent) {
        setContent(matchingContent);
      } else {
        // Redirect to 404 or experience listing page if content not found
        router.push("/experiences");
      }
    }
  }, [slug, router]);

  // Show loading state while content is being fetched
  if (!content) {
    return (
      <>
        <HeaderFour />
        <div className="pt-120 pb-120 container mx-auto">
          <div className="text-center">Loading...</div>
        </div>
        <FooterFour />
      </>
    );
  }

  return (
    <>
      <HeaderFour />
      <div className="pt-120 pb-120 experience-details container mx-auto">
        <div>
          <Link className="tp-yellow-3 back-btn align-items-center d-flex gap-2" href={"/experiences"}>
            <svg
              fill="#FF5733"
              width={20}
              height={20}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            >
              <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
            </svg>{" "}
            Back
          </Link>
        </div>
        <div className="row">
          <div className="col-12 col-lg-6">
            <iframe
              className="w-100 details-iframe"
              src={content.iframeSrc || "https://prework.setoo.ai"}
              frameBorder="0"
              title={content.title}
            />
          </div>
          <div className="col-12 col-lg-6 details-wrapper">
            <div className="d-flex flex-column gap-4">
              <h2 className="tp-yellow-3">{content.title}</h2>
              <p>{content.description}</p>
              <h4 className="tp-yellow-3">Overview:</h4>
              <p>{content.overview}</p>
              <h4 className="tp-yellow-3">How does it work/help?</h4>
              {content.howItWorks.map((para, index) => (
                <p key={index}>{para}</p>
              ))}
              <h4 className="tp-yellow-3">Benefits</h4>
              <ul className="ps-3 d-flex gap-2 flex-column">
                {content.benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
              {/* Faqs */}
              <div className="mb-5 d-flex flex-column gap-2">
                <h4 className="tp-yellow-3">Faqs</h4>
                <div className="tp-custom-accordion">
                  <div
                    className="accordion tp-inner-font"
                    id="accordionExample"
                  >
                    {content.faqs.map((item) => (
                      <div
                        onClick={() => setShadow(item.id)}
                        key={item.id}
                        className={`accordion-items ${
                          shadow === item.id && "tp-faq-active"
                        }`}
                      >
                        <h2
                          className="accordion-header"
                          id={`heading${item.id}`}
                        >
                          <button
                            className={`accordion-buttons ${
                              shadow === item.id ? "" : "collapsed"
                            }`}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#collapse${item.id}`}
                            aria-expanded={shadow === item.id}
                            aria-controls={`collapse${item.id}`}
                          >
                            {item.question}
                            <span className="accordion-btn"></span>
                          </button>
                        </h2>
                        <div
                          id={`collapse${item.id}`}
                          className={`accordion-collapse collapse ${
                            shadow === item.id ? "show" : ""
                          }`}
                          aria-labelledby={`heading${item.id}`}
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-content">
                            <p>{item.answer}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterFour />
    </>
  );
};

export default ExperienceDetails;
