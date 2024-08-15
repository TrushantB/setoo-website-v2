import React from "react";
import NiceSelect from "../../ui/nice-select";

const ContactUsForm = () => {
  const selectHandler = (e) => {};
  return (
    <>
      <form onSubmit={(e) => e.preventDefault()} className="box">
        <div className="row gx-20">
          <div className="col-12">
            <div className="postbox__comment-input mb-30">
              <input type="text" className="inputText" required />
              <span className="floating-label">Full Name</span>
            </div>
          </div>
          <div className="col-12">
            <div className="postbox__comment-input mb-30">
              <input type="text" className="inputText" required />
              <span className="floating-label">Your Email</span>
            </div>
          </div>
          <div className="col-12">
            <div className="postbox__comment-input mb-35">
              <input type="text" className="inputText" required />
              <span className="floating-label">Phone Number</span>
            </div>
          </div>
          <div className="col-12">
            <div className="postbox__select mb-30">
              <NiceSelect
                options={[
                  { value: "AI Consultant", text: "AI Consultant" },
                  { value: "AI Engineers", text: "AI Engineers" },
                  { value: "Fullstack Developer", text: "Fullstack Developer" },
                  { value: "Frontend Developer", text: "Frontend Developer" },
                  { value: "Backend Developer", text: "Backend Developer" },
                  { value: "Mobile Developer", text: "Mobile Developer" },
                  { value: "UX Designer", text: "UX Designer" },
                  { value: "Visual Designer", text: "Visual Designer" },
                  { value: "QA Engineers", text: "QA Engineers" },
                  { value: "DevOps Engineers", text: "DevOps Engineers" },
                ]}
                defaultCurrent={0}
                onChange={selectHandler}
              />
            </div>
          </div>
          <div className="col-xxl-12">
            <div className="postbox__comment-input mb-30">
              <textarea className="textareaText" required></textarea>
              <span className="floating-label-2">Message...</span>
            </div>
          </div>
          <div className="col-xxl-12">
            <div className="postbox__btn-box">
              <button className="submit-btn w-100">Send your Request</button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default ContactUsForm;
