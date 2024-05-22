import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Button from "../../../components/Button";
import PageLayout from "../../../components/Layout/PageLayout";

export default function ContactUsTraining() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const onSubmit = (data) => {
    try {
      console.log(data);
      toast.success("Thank you for reaching out to us");
    } catch (error) {
      console.log("Error: ", error);
      toast.error("An error occurred");
    }
  };

  return (
    <PageLayout className="flex justify-between flex-col md:flex-row gap-20 lg:py-40 py-32">
      <div className="grid lg:grid-rows-[100px_auto_auto_1fr] grid-rows-[100px_150px_50px_1fr] gap-6 w-full p-2">
        <h3 className="text-5xl font-bold text-[#082B5B] capitalize max-w-10">
          Get Started
        </h3>
        <ul className="text-[#101010] lg:text-[1.3rem] text-base grid gap-3 list-inside list-disc marker:text-[#101010]">
          <li>Different Plan Options for you</li>
          <li>Large pool of vetted and proven instructors</li>
          <li>Available Resources to help later on</li>
          <li>Online courses for you to watch anytime</li>
        </ul>
        <hr className="h-[4px] bg-white my-12 mr-5" />
        <p className="text-[#101010] lg:text-xl leading-8">
          Looking to partner with us? We'd love to hear from you. Contact us
          using the details below to explore how we can work together. We're
          committed to providing the best possible service, so don't hesitate to
          get in touch.
        </p>
      </div>
      <div className="w-full bg-blue-950 rounded-[0.9375rem]  text-white mx-auto p-10">
        <form onSubmit={handleSubmit(onSubmit)} className="mx-auto mt-8 ">
          <h3 className="text-[2.75rem] leading-[3.375rem] capitalize font-[700] md:w-[10.625em]">
            Register With Us For Training
          </h3>
          <div className="flex flex-col gap-8 mt-10">
            <div className="flex flex-col gap-[8px]">
              <label htmlFor="fullName">Full Name</label>
              <input
                className="bg-inherit outline-none p-2 border w-full"
                type="text"
                id="fullName"
                placeholder="Enter Your Full Name"
                {...register("fullName", {
                  required: "Full name is required",
                  minLength: {
                    value: 3,
                    message: "Full name should have at least 3 characters",
                  },
                  maxLength: {
                    value: 100,
                    message: "Full name should not exceed 50 characters",
                  },
                })}
              />
              {errors.fullName && (
                <p className="text-red-500 pt-[2px] text-sm font-300 italic">
                  {errors.fullName.message}
                </p>
              )}
            </div>

            <div className="flex flex-col gap-[8px]">
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                id="email"
                placeholder="Enter Your E-mail address"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
                className="bg-inherit outline-none border p-2 w-full"
              />
              {errors.email && (
                <p className="text-red-500 py-[2px] text-sm font-300 italic">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="flex flex-col gap-[8px]">
              <label htmlFor="phoneNumber">Phone Number</label>
              <input
                type="text"
                id="phoneNumber"
                placeholder="Enter Your Phone Number"
                {...register("phoneNumber", {
                  required: "Phone number is required",
                  minLength: {
                    value: 5,
                    message: "Phone number should have at least 5 digits",
                  },
                })}
                className="bg-inherit outline-none border p-2"
              />
              {errors.phoneNumber && (
                <p className="text-red-500 pt-[2px] text-sm font-300 italic">
                  {errors.phoneNumber.message}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-[8px]">
              <label htmlFor="companyName">Religion</label>
              <input
                type="text"
                id="companyName"
                placeholder="Company Name"
                {...register("companyName", {
                  required: "Company Name is required",
                  message: "",
                })}
                className="bg-inherit outline-none border p-2"
              />
              {errors.phoneNumber && (
                <p className="text-red-500 pt-[2px] text-sm font-300 italic">
                  {errors.companyName.message}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-[8px]">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                placeholder="What do you have for us"
                {...register("message", {
                  required: "Message is required",
                  message: "",
                })}
                className="bg-inherit outline-none border p-2 h-[297px] resize-none"
              />
              {errors.message && (
                <p className="text-red-500 pt-[2px] text-sm font-300 italic">
                  {errors.message.message}
                </p>
              )}
            </div>
          </div>
          <div className="text-center mt-[10px] py-9 w-40 mx-auto ">
            <Button text="Submit" type="customizedWhite" />
          </div>
        </form>
      </div>
    </PageLayout>
  );
}
