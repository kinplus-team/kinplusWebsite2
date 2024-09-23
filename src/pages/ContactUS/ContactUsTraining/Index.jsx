import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import { z } from "zod";
import Button from "../../../components/Button";
import PageLayout from "../../../components/Layout/PageLayout";
import Input from "../../../components/Inputs";
import { contactUsForTraining } from "../../../services/contactForm";
import useDelay from "../../../hooks/useDelay";

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

export default function ContactUsTraining() {
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
      toast.error("Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  };

  const trackOptions = [
    { title: "Web development", value: "Web development" },
    { title: "Cybersecurity", value: "Cybersecurity" },
    { title: "Product Design", value: "Product Design" },
    { title: "Graphics Design", value: "Graphics Design" },
    { title: "Data Analysis", value: "Data Analysis" },
  ];

  const packageOptions = [
    { title: "Standard (3 months ₦150k)", value: "Standard (3 months ₦150k)" },
    { title: "Standard (5 months ₦250k)", value: "Standard (5 months ₦250k)" },
    { title: "Premium (3 months ₦250k)", value: "Premium (3 months ₦250k)" },
    { title: "Premium (5 months ₦400k)", value: "Premium (5 months ₦400k)" },
  ];

  const genderInput = [
    { title: "Male", value: "Male" },
    { title: "Female", value: "Female" },
  ];

  return (
    <PageLayout className="flex justify-between flex-col md:flex-row gap-20 lg:py-40 py-32">
      <div
        id="target-section"
        className="grid lg:grid-rows-[100px_auto_auto_1fr] grid-rows-[100px_150px_50px_1fr] gap-6 w-full p-2"
      >
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
      {/* Right side form */}
      <div className="w-full bg-blue-950 rounded-[0.9375rem] text-white mx-auto p-10">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mx-auto mt-8"
        >
          <h3 className="text-[2.75rem] leading-[3.375rem] capitalize font-[700] md:w-[10.625em]">
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
      </div>
    </PageLayout>
  );
}
