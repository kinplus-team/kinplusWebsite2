import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function ContactUsTraining() {
  const navigate = useNavigate();

  const contactUsExplanation =
    " Join dozens of students, fast-growing communities with up to date courses, accessing new career opportunities and building brilliant products with Kinplus.";

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const onSubmit = (data) => {
    try {
      console.log(data);
      toast.success("Form submitted successfully", {
        position: toast.POSITION.TOP_CENTER,
        style: {
          background: "#082B5B",
          color: "#fff",
          fontSize: "20px",
          // width: "34vw",
          padding: "20px 10px",
        },
      });
      setValue("fullName", "");
      setValue("email", "");
      setValue("phoneNumber", "");
      setValue("companyName", "");
      setValue("message", "");
      navigate("/contact-us");
    } catch (error) {
      console.error("Error: ", error)
      toast.error("An error occurred");
    }
  };

  return (
    <section className="flex justify-between flex-col md:flex-row gap-20">
      <div className="md:w-[60%] w-full p-2">
        <h3 className="text-[3.25rem] font-[700] text-blue-950 capitalize">
          Get Started
        </h3>
        <ul className="text-[#101010] text-[1.3rem] list-inside list-disc marker:text-[#101010]">
          <li className="leading-[3.4rem]">Different Plan Options for you</li>
          <li className="leading-[3.4rem]">
            Large pool of vetted and proven instructors
          </li>
          <li className="leading-[3.4rem]">
            Available Resources to help later on
          </li>
          <li className="leading-[3.4rem]">
            Online courses for you to watch anytime
          </li>
        </ul>
        <hr className="h-[4px] bg-white my-12 mr-5" />
        <p className="text-[#101010] text-[1.3rem] leading-[3.4rem]">
          {contactUsExplanation}
        </p>
      </div>
      <div className="md:w-[58%] w-full bg-blue-950 rounded-[0.9375rem]  text-white mx-auto md:ml-20  pl-10 ">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mx-auto mt-8 "
        >
          <h3 className="text-[2.75rem] leading-[3.375rem] capitalize font-[700] md:w-[10.625em]">
            Register With Us For Training
          </h3>
          <div className="flex flex-col gap-8 w-[90%] mt-10">
            <div className="flex flex-col gap-[8px]">
              <label htmlFor="fullName">Full Name</label>
              <input
                className="bg-inherit outline-none p-2 border"
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
                className="bg-inherit outline-none border p-2"
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
              <label htmlFor="companyName">Company Name</label>
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
          <div className="text-center mt-[10px] py-9 ">
            <button
              type="submit"
              className="text-blue-500 bg-white font-bold py-2 px-4 rounded-md transition duration-200 ease-in-out focus:outline-none hover:bg-blue-600 hover:text-white"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
