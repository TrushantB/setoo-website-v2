import React, { useState } from "react";
import { useForm } from "react-hook-form";
import NiceSelect from "../ui/nice-select";
import { postData } from "../../client";
import toast from "react-hot-toast";

const ContactUsForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = (formData) => {
    setIsLoading(true);
    setData({
      name: formData.fullName,
      email: formData.email,
      phone: `${formData.phoneNumber}`,
    });

    postData("submit", {
      name: formData.fullName,
      email: formData.email,
      phone: `${formData.phoneNumber}`,
    })
      .then((res) => {   
        if (res.status == 201) {
          toast.success(res.message);
          setIsLoading(false);
        }
      })
      .catch((err) => {
        toast.error("something went wrong!");
        setIsLoading(false);
      });
  };

  const selectHandler = (item, name) => {
    setValue(name, item); // Update the form state
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="box">
        <div className="row gx-20">
          <div className="col-12">
            <div className="postbox__comment-input">
              <input
                type="text"
                className="inputText"
                {...register("fullName", { required: "Full Name is required" })}
              />
              <span className="floating-label">Full Name</span>
            </div>
            {errors.fullName && (
              <p className="error-message">{errors.fullName.message}</p>
            )}
          </div>
          <div className="col-12">
            <div className="postbox__comment-input mt-30">
              <input
                type="email"
                className="inputText"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: "Invalid email address",
                  },
                })}
              />
              <span className="floating-label">Your Email</span>
            </div>
            {errors.email && (
              <p className="error-message">{errors.email.message}</p>
            )}
          </div>
          <div className="col-12">
            <div className="postbox__comment-input mt-30">
              <input
                type="text"
                className="inputText"
                {...register("phoneNumber", {
                  required: "Phone Number is required",
                  pattern: {
                    value: /^\+?[1-9]{1,3}[0-9]{10}$/,
                    message: "Invalid phone number",
                  },
                })}
              />
              <span className="floating-label">Phone Number</span>
            </div>
            {errors.phoneNumber && (
              <p className="error-message">{errors.phoneNumber.message}</p>
            )}
          </div>
          <div className="col-12">
            <div className="postbox__select mt-30">
              <NiceSelect
                options={[
                  { value: "", text: "Your Inquiry about" },
                  { value: "AI Lab", text: "AI Lab" },
                  { value: "Web Studio", text: "Web Studio" },
                  {
                    value: "Software Development",
                    text: "Software Development",
                  },
                  { value: "Jamstack", text: "Jamstack" },
                  { value: "Staff Augmentation", text: "Staff Augmentation" },
                  { value: "DevOps", text: "DevOps" },
                  { value: "Other", text: "Other" },
                ]}
                defaultCurrent={0}
                {...register("inquiry", {
                  required: "Inquiry type is required",
                })}
                onChange={selectHandler}
              />
            </div>
            {errors.inquiry && (
              <p className="error-message">{errors.inquiry.message}</p>
            )}
          </div>
          <div className="col-xxl-12">
            <div className="postbox__comment-input mt-30">
              <textarea
                className="textareaText"
                {...register("message", { required: "Message is required" })}
              ></textarea>
              <span className="floating-label-2">Message...</span>
            </div>
            {errors.message && (
              <p className="error-message">{errors.message.message}</p>
            )}
          </div>
          <div className="col-xxl-12">
            <div className="postbox__btn-box mt-30">
              <button className="submit-btn w-100" type="submit">
                {isLoading && (
                  <svg
                    width={24}
                    aria-hidden="true"
                    role="status"
                    className="inline w-4 h-4 me-3 text-white animate-spin"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="#E5E7EB"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentColor"
                    />
                  </svg>
                )}
                Send your Request
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default ContactUsForm;
