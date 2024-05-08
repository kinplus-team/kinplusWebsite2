import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import PageLayout from "../../../components/layout/PageLayout";

export default function ContactUsTraining() {
  const navigate = useNavigate();
  const [availableTraining, setAvailableTraining] = useState("")

  const contactUsExplanation =
    " At Kinplus, we are passionate about empowering individuals and businesses with the necessary skills and knowledge to succeed in the ever-evolving digital landscape. Our training programs are designed to equip you with the expertise and tools needed to excel in web development, mobile solutions, digital marketing, and more.";

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
    
    <div className="flex space-x-4 flex-col md:flex-row w-full pb-8">
      {/*side text */}
      <div className=" w-full ">
        <h3 className="text-[2.188rem] md:text-[2.813rem] lg:text-[3.25rem] leading-[2.5rem] md:leading-[4rem] font-[700] text-blue-950 w-[20%] mb-6 md:mb-8 capitalize">
          Get Started
        </h3>
        <ul className="text-[#101010] text-[1rem] md:text-[1.125rem] lg:text-[1.3rem] list-inside list-disc marker:text-[#101010]">
          <li className="leading-[1.5rem] md:leading-[3.125rem] lg:leading-[3.4rem]">Training programs designed by professionals.</li>
          <li className="leading-[1.5rem] md:leading-[3.125rem] lg:leading-[3.4rem]">
          Tailor-made to meet your specific needs.
          </li>
          <li className="leading-[1.5rem] md:leading-[3.125rem] lg:leading-[3.4rem]">
          Stay ahead in the digital landscape.
          </li>
          <li className="leading-[1.5rem] md:leading-[3.125rem] lg:leading-[3.4rem]">
          Experience and practical knowledge in the latest technologies.
          </li>
        </ul>
        <hr className="h-[4px] bg-white my-12 mr-5" />
        <p className="text-[#101010] text-[1rem] md:text-[1.125rem] lg:text-[1.3rem] leading-[1.5rem] md:leading-[3.4rem] mb-8 md:mb-0">
          {contactUsExplanation}
        </p>
      </div>

      {/*Training Form */}
      <div className=" w-[90%] bg-blue-950 rounded-[0.9375rem] text-white  md:ml-20  ">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" mt-8 w-[80%] mx-auto "
        >
          <h3 className="text-[2.188rem] md:text-[1.875rem] lg:text-[2.75rem] leading-[2.5rem] md:leading-[3.375rem] w-[110%] capitalize font-[700]">
            Apply for our Training Program
          </h3>

          {/* Full Name */}
          <div className="flex flex-col gap-8 w-full mt-10">
            <div className="flex flex-col ">
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

              {/* E-mail */}
            <div className="flex flex-col ">
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                id="email"
                placeholder="Enter Your E-Mail"
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

              {/* Phone Number */}
            <div className="flex flex-col ">
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

            {/* Religion */}
            <div className="flex flex-col ">
              <label htmlFor="religion">Religion</label>
              <input
                type="text"
                id="religion"
                placeholder="Enter your Religion here"
                {...register("religion", {
                  required: "Religion is required",
                  message: "",
                })}
                className="bg-inherit outline-none border p-2"
              />
              {errors.religion && (
                <p className="text-red-500 pt-[2px] text-sm font-300 italic">
                  {errors.religion.message}
                </p>
              )}
            </div>

            {/* Date of Birth and Gender */}
            <div className="flex space-x-4 ">
            {/* Date of Birth */}
            <div className="flex flex-col w-[50%]">
              <label htmlFor="dateOfBirth">Date of Birth</label>
              <input
              type="date"
                id="dateOfBirth"
                placeholder="Date of Birth"
                {...register("dateOfBirth", {
                  required: "Date of birth is required",
                  message: "",
                })}
                className="bg-inherit outline-none border p-2"
              />
              {errors.dateOfBirth && (
                <p className="text-red-500 pt-[2px] text-sm font-300 italic">
                  {errors.dateOfBirth.message}
                </p>
              )}
            </div>

            {/* Gender */}
            <div className="flex flex-col w-[50%]">
              <label htmlFor="gender">Gender</label>
              <select {...register("gender")} 
              className="bg-inherit outline-none border p-2"
              >
                <option value="gender">Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              {/* <input
                type="text"
                id="religion"
                placeholder="Enter your Religion here"
                {...register("religion", {
                  required: "Company Name is required",
                  message: "",
                })}
                className="bg-inherit outline-none border p-2"
              />
              {errors.religion && (
                <p className="text-red-500 pt-[2px] text-sm font-300 italic">
                  {errors.religion.message}
                </p>
              )} */}
            </div>
            </div>

            {/* Address */}
            <div className="flex flex-col ">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                id="address"
                placeholder="Enter your Address"
                {...register("address", {
                  required: "Address is required",
                  message: "",
                })}
                className="bg-inherit outline-none border p-2"
              />
              {errors.address && (
                <p className="text-red-500 pt-[2px] text-sm font-300 italic">
                  {errors.address.message}
                </p>
              )}
            </div>

            {/* Track */}
            <div className="flex flex-col ">
              <label htmlFor="track">Track</label>
              <select {...register("gender")} 
              className="bg-inherit outline-none border p-2"
              >
                <option value="gender">Select Learning Track</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              {/* <input
                type="text"
                id="track"
                placeholder="Select Learning Track"
                {...register("track", {
                  required: "Company Name is required",
                  message: "",
                })}
                className="bg-inherit outline-none border p-2"
              />
              {errors.track && (
                <p className="text-red-500 pt-[2px] text-sm font-300 italic">
                  {errors.track.message}
                </p> 
              )}*/}
            </div>

            {/* Package */}
            <div className="flex flex-col ">
              <label htmlFor="package">Package</label>
              <select {...register("package")} 
              className="bg-inherit outline-none border p-2"
              >
                <option value="package">Select payment package</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              {/* <input
                type="text"
                id="package"
                placeholder="Select payment package"
                {...register("package", {
                  required: "Company Name is required",
                  message: "",
                })}
                className="bg-inherit outline-none border p-2"
              />
              {errors.package && (
                <p className="text-red-500 pt-[2px] text-sm font-300 italic">
                  {errors.package.message}
                </p>
              )} */}
            </div>

            {/* Available for training */}
            <div className="flex flex-col ">
              <legend>How will you be available for the training
              <div className="flex space-x-4">
              <input
                type="radio"
                name="available-training"
                value="online"
                id="online"
                {...register("available-training", {
                  required: "  is required",
                  message: "",
                  onChange: (e) => {setAvailableTraining(e.target.value)} 
                })}
                checked={availableTraining === "online"}
                className="bg-inherit outline-none border p-2"
              />
               <label htmlFor="online">Online/Virtual</label>
              </div>
              {errors.online && (
                <p className="text-red-500 pt-[2px] text-sm font-300 italic">
                  {errors.online.message}
                </p>
              )}
              <div className="flex space-x-4">
              <input
                type="radio"
                name="available-training"
                value="onsite"
                id="onsite"
                {...register("available-training", {
                  required: "  is required",
                  message: "",
                })}
                checked={availableTraining === "onsite"}
                className="bg-inherit outline-none border p-2"
              />
              
              <label htmlFor="onsite">Onsite/Physical</label>
              </div>
              {errors.onsite && (
                <p className="text-red-500 pt-[2px] text-sm font-300 italic">
                  {errors.onsite.message}
                </p>
              )}
              </legend>
            </div>
            <div className="flex flex-col ">
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

          {/* Submit button */}
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
    </div>
  );
}
