import React, { useState } from "react";
import { useForm } from "react-hook-form";
import NiceSelect from "../ui/nice-select";
import { getData, postData } from "../../client";
import toast from "react-hot-toast";


const ContactUsForm = () => {

  const [data, setData] = useState({
    name:"",
    email:"",
    phone:""
  });
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  

  const onSubmit = (formData) => {

toast.success("loading")
    setData({
      name:formData.fullName,
      email:formData.email,
      phone:`+91${formData.phoneNumber}`
    })

   postData("submit",{
      name:formData.fullName,
      email:formData.email,
      phone:`+91${formData.phoneNumber}`
    }).then((res)=>{
      if(res.status ==200){
        console.log(res.status);
        
        toast.success("Success")
      }
    console.log(res)
   }).catch((err)=>{
   console.log(err);
   
   })
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
            {errors.fullName && <p className="error-message">{errors.fullName.message}</p>}
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
            {errors.email && <p className="error-message">{errors.email.message}</p>}
        </div>
        <div className="col-12">
          <div className="postbox__comment-input mt-30">
            <input
              type="text"
              className="inputText"
              {...register("phoneNumber", {
                required: "Phone Number is required",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Invalid phone number",
                },
              })}
            />
            <span className="floating-label">Phone Number</span>
          </div>
            {errors.phoneNumber && <p className="error-message">{errors.phoneNumber.message}</p>}
        </div>
        <div className="col-12">
          <div className="postbox__select mt-30">
            <NiceSelect
              options={[
                { value: "", text: "Your Inquiry about" },
                { value: "AI Lab", text: "AI Lab" },
                { value: "Web Studio", text: "Web Studio" },
                { value: "Software Development", text: "Software Development" },
                { value: "Jamstack", text: "Jamstack" },
                { value: "Staff Augmentation", text: "Staff Augmentation" },
                { value: "DevOps", text: "DevOps" },
                { value: "Other", text: "Other" },
              ]}
              defaultCurrent={0}
              {...register("inquiry", { required: "Inquiry type is required" })}
              onChange={selectHandler}
            />
          </div>
            {errors.inquiry && <p className="error-message">{errors.inquiry.message}</p>}
        </div>
        <div className="col-xxl-12">
          <div className="postbox__comment-input mt-30">
            <textarea
              className="textareaText"
              {...register("message", { required: "Message is required" })}
            ></textarea>
            <span className="floating-label-2">Message...</span>
          </div>
            {errors.message && <p className="error-message">{errors.message.message}</p>}
        </div>
        <div className="col-xxl-12">
          <div className="postbox__btn-box mt-30">
            <button className="submit-btn w-100" type="submit">
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
;
