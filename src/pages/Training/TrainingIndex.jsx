import React, { useState, useRef } from "react";
import DefaultHelmet from "../../components/DefaultHelmet";
import HeroTraining from "./HeroTraining.jsx";
import Statistics from "./Statistics.jsx";
import Dedication from "./Dedication.jsx";
import OurCoursesTraining from "./OurCoursesTraining.jsx";
import NextCohortTraining from "./NextCohortTraining.jsx";
import WhyLearnFromUs from "./WhyLearnFromUs.jsx";
import GalleryTraining from "./GalleryTraining.jsx";
import TestimonialTraining from "./TestimonialTraining.jsx";
import FAQTraining from "./FAQTraining.jsx";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import { z } from "zod";
import Button from "../../components/Button";
import Input from "../../components/Inputs";
import { contactUsForTraining } from "../../services/contactForm";
import useDelay from "../../hooks/useDelay";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// validation schema
const contactUsTrainingSchema = z.object({
  fullName: z
    .string()
    .min(1, "Full name is required")
    .regex(/^[a-zA-Z\s]+$/, "Full Name must contain only alphabets"),
  email: z.string().email("Invalid email address"),
  phoneNumber: z
    .string()
    .regex(/^\d{11}$/, "Phone number must be exactly 11 digits"),
  religion: z.string().min(1, "Religion is required"),
  dateOfBirth: z.preprocess(
    (val) => (val ? new Date(val) : null),
    z
      .date()
      .max(new Date("2010-12-31"), "Date of birth must be before 2010-12-31")
  ),
  gender: z.string().min(1, "Gender is required"),
  address: z.string().min(5, "Address must be at least 5 characters"),
  track: z.string().min(1, "Track is required"),
  trackPackage: z.string().min(1, "Track Package is required"),
  availability: z.string().min(1, "Availability is required"),
});

export default function Training() {
  const delay = useDelay();
    const [isLoading, setIsLoading] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
  
    const {
      register,
      handleSubmit,
      setValue,
      watch,
      reset,
      formState: { errors },
    } = useForm({
      resolver: zodResolver(contactUsTrainingSchema),
      mode: "onChange",
    });
  
    const handleDropdownToggle = (dropdownName) => {
      setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
    };
  
    const onSubmit = async (data) => {
      setIsLoading(true);
      await delay(2000);
  
      try {
        await contactUsForTraining(
          data.fullName,
          data.email,
          data.phoneNumber,
          data.religion,
          data.dateOfBirth,
          data.gender,
          data.address,
          data.track,
          data.trackPackage,
          data.availability
        );
        toast.success("Form submitted successfully");
        reset();
      } catch (error) {
        console.log("From client:", error);
        toast.error("Something went wrong!");
      } finally {
        setIsLoading(false);
      }
    };
  
    const trackOptions = [
      { title: "Web Development", value: "Web Development" },
      { title: "Cybersecurity", value: "Cybersecurity" },
      { title: "Product Design", value: "Product Design" },
      { title: "Graphic Design", value: "Graphic Design" },
      { title: "Data Analysis", value: "Data Analysis" },
      {title: "Digital Marketing", value: "Digital Marketing"},
    ];
  
    const packageOptions = [
      { title: "Medium (3 months)", value: "Medium (3 months)" },
      { title: "Pro (5 months)", value: "Pro (5 months)" },
    ];
  
    const genderInput = [
      { title: "Male", value: "Male" },
      { title: "Female", value: "Female" },
    ];
  
    // animation variants
    // const slideInLeft = {
    //   initial: { x: -100, opacity: 0 },
    //   whileInView: { x: 0, opacity: 1 },
    //   viewport: { once: true },
    //   transition: { duration: 0.8 },
    // };
  
    const slideInRight = {
      initial: { x: 100, opacity: 0 },
      whileInView: { x: 0, opacity: 1 },
      viewport: { once: true },
      transition: { duration: 0.8 },
    };

    const formRef = useRef(null);

    const scrollToForm = () => {
      formRef.current?.scrollIntoView({ behavior: "smooth" });
    };

  return (
    <>
      {/* Default Helmet for SEO */}
      <DefaultHelmet
        title="Training Opportunities | Kinplus Technologies"
        description="Explore our diverse training programs and discover how Kinplus Technologies is empowering the next generation of tech experts."
        url="https://www.kinplusgroup.com/training"
        image="https://www.kinplusgroup.com/kinplus-opengraph-image.png" // OG Image
      />

      <div className="overflow-hidden">
        <HeroTraining />

        <div ref={formRef} className="max-w-[90vw] mt-[8vh] lg:mt-[20vh] mx-auto">
          {/* Right side form */}
          <motion.div
            {...slideInRight}
            className="w-full mt-8 bg-blue-950 rounded-[0.9375rem] text-white mx-auto p-10"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="mx-auto ">
              <h3 className="text-[2.75rem] leading-[3.375rem] capitalize font-[700] ">
                Register With Us For Training
              </h3>
              <div className="grid sm:grid-flow-row gap-2">
                <div>
                  <Input
                    type="text"
                    name="Full Name"
                    placeholder="Enter your Full Name"
                    isRequired={true}
                    {...register("fullName")}
                  />
                  {errors.fullName && (
                    <p className="text-red-500">{errors.fullName.message}</p>
                  )}
                </div>

                <div>
                  <Input
                    type="email"
                    name="Email"
                    placeholder="Enter your E-Mail"
                    isRequired={true}
                    {...register("email")}
                  />
                  {errors.email && (
                    <p className="text-red-500">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <Input
                    type="text"
                    name="Phone Number"
                    placeholder="Enter your Phone Number"
                    isRequired={true}
                    maxLength={11}
                    {...register("phoneNumber")}
                  />
                  {errors.phoneNumber && (
                    <p className="text-red-500">{errors.phoneNumber.message}</p>
                  )}
                </div>

                <div>
                  <Input
                    type="text"
                    name="Religion"
                    placeholder="Enter your Religion"
                    isRequired={true}
                    {...register("religion")}
                  />
                  {errors.religion && (
                    <p className="text-red-500">{errors.religion.message}</p>
                  )}
                </div>

                <div className="grid gap-3 sm:grid-cols-2 items-center">
                  <div className="relative">
                    <Input
                      type="date"
                      name="Date of Birth"
                      placeholder="Date of Birth"
                      isRequired={true}
                      max="2010-12-31"
                      {...register("dateOfBirth")}
                    />
                    {errors.dateOfBirth && (
                      <p className="text-red-500 absolute -bottom-5">
                        {errors.dateOfBirth.message}
                      </p>
                    )}
                  </div>

                  <div className="relative">
                    <Input
                      type="select"
                      name="gender"
                      placeholder="Gender"
                      options={genderInput}
                      isSelect={activeDropdown === "gender"}
                      setIsSelect={() => handleDropdownToggle("gender")}
                      error={errors.gender?.message}
                      selected={watch("gender")}
                      setSelected={(value) => setValue("gender", value)}
                    />
                    {errors.gender && (
                      <p className="text-red-500 absolute -bottom-5">
                        {errors.gender.message}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <Input
                    type="text"
                    name="Address"
                    placeholder="Enter your Address"
                    isRequired={true}
                    {...register("address")}
                  />
                  {errors.address && (
                    <p className="text-red-500">{errors.address.message}</p>
                  )}
                </div>

                <div>
                  <Input
                    type="select"
                    name="track"
                    placeholder="Select Learning Track"
                    options={trackOptions}
                    isSelect={activeDropdown === "track"}
                    setIsSelect={() => handleDropdownToggle("track")}
                    error={errors.track?.message}
                    selected={watch("track")}
                    setSelected={(value) => setValue("track", value)}
                  />
                </div>

                <div>
                  <Input
                    type="select"
                    name="trackPackage"
                    placeholder="Select payment package"
                    options={packageOptions}
                    isSelect={activeDropdown === "trackPackage"}
                    setIsSelect={() => handleDropdownToggle("trackPackage")}
                    error={errors.trackPackage?.message}
                    selected={watch("trackPackage")}
                    setSelected={(value) => setValue("trackPackage", value)}
                  />
                </div>

                <div className="py-3">
                  <p className="text-xl text-white">
                    How will you be available for the training?
                  </p>
                  <Input
                    type="checkbox"
                    name="availability"
                    radioText="Online/Virtual"
                    isChecked={watch("availability") === "Online/Virtual"}
                    onCheck={() => setValue("availability", "Online/Virtual")}
                    error={errors.availability?.message}
                  />
                  <Input
                    type="checkbox"
                    name="availability"
                    radioText="Onsite/Physical"
                    isChecked={watch("availability") === "Onsite/Physical"}
                    onCheck={() => setValue("availability", "Onsite/Physical")}
                    error={errors.availability?.message}
                  />
                  <Input
                    type="checkbox"
                    name="availability"
                    radioText="Hybrid"
                    isChecked={watch("availability") === "Hybrid"}
                    onCheck={() => setValue("availability", "Hybrid")}
                    error={errors.availability?.message}
                  />
                </div>
              </div>

              <div className="text-center mt-[10px] py-9 w-40 mx-auto">
                <Button
                  text="Submit"
                  isLoading={isLoading}
                  type="customizedWhite"
                />
              </div>
            </form>
          </motion.div>
        </div>

        {/* <Statistics /> */}
        <Dedication />
        <OurCoursesTraining />
        <NextCohortTraining />

        {/* Call to Action Button */}
          <Link className="lg:w-40 mx-auto flex items-center justify-center mt-[10%] lg:mt-[5%]">
            <Button onClick={scrollToForm} type="customizedBlue" text="Register now" />
          </Link>

        <WhyLearnFromUs />
        <GalleryTraining />
        <TestimonialTraining />
        <FAQTraining />
      </div>
    </>
  );
}
