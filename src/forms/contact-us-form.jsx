import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import NiceSelect from "../ui/nice-select";
import { postData } from "../../client";
import toast from "react-hot-toast";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

const ContactUsForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isChecked, setIsChecked] = useState(true); // Default checked

  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const {
    register,
    control,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm();

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const onSubmit = (formData) => {
    setIsLoading(true);
    setData({
      name: formData.fullName,
      email: formData.email,
      phone: `${formData.phoneNumber}`,
      consent: isChecked, // Use isChecked for consent
    });

    postData("submit", {
      name: formData.fullName,
      email: formData.email,
      phone: `${formData.phoneNumber}`,
      consent: isChecked, // Send consent state
    })
      .then((res) => {
        if (res.status === 201) {
          toast.success(res.message);
          setIsLoading(false);
          reset();
        }
      })
      .catch((err) => {
        toast.error("Something went wrong!");
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
              <Controller
                name="phoneNumber"
                control={control}
                defaultValue=""
                rules={{
                  required: "Phone Number is required",
                  pattern: {
                    value: /^\+?[1-9]{1,3}[0-9]{10}$/,
                    message: "Invalid phone number",
                  },
                }}
                render={({ field, fieldState: { error } }) => (
                  <>
                    <PhoneInput
                      {...field}
                      defaultCountry="in"
                      className="inputText"
                      onChange={(value) => field.onChange(value)}
                    />
                  </>
                )}
              />
              <span className="phone-no">Phone Number</span>
            </div>
            {errors.phoneNumber && (
              <p className="error-message">{errors.phoneNumber.message}</p>
            )}
          </div>
          <div className="col-12">
            <div className="postbox__comment-input mt-30 d-flex gap-2 align-items-start">
              
                <input
                  type="checkbox"
                  className="mt-1 form-check-input mr-5"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                  id="isConsent"
                  required
                />
              <label name="isConsent" htmlFor="isConsent">By checking this box, you consent to us contacting you via phone or email to discuss your inquiry and provide further information about our services.</label>
              {errors.callConsent && (
                <p className="error-message">{errors.callConsent.message}</p>
              )}              
            </div>            
          </div>
          <div className="col-xxl-12">
            <div className="postbox__btn-box mt-30">
              <button
                disabled={isLoading}
                className={`submit-btn w-100 ${isLoading ? "contact-btn" : ""}`}
                type="submit"
              >
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
                Schedule a Meeting
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default ContactUsForm;
