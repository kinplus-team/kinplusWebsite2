import React, { useState } from "react";
import Input from "../../../components/Inputs";
import Button from "../../../components/Button";
import { submitResume } from "../../../services/resumeServices";
import { toast } from "react-toastify";
import axios from "axios";
import { z } from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";

// validation schema
const applyForRoleSchema = z.object({
  fullName: z
    .string()
    .min(1, "Full name is required")
    .regex(/^[a-zA-Z\s]+$/, "Full Name must contain only alphabets"),
  email: z.string().email("Invalid email address"),
  phoneNumber: z
    .string()
    .regex(/^\d{11}$/, "Phone number must be exactly 11 digits"),
  jobRole: z.string().min(1, "Job role is required"),
  portfolioLink: z
    .string()
    .url("Please enter a valid URL starting with https://")
    .optional(),
  cv: z.instanceof(File).refine((file) => file?.type === "application/pdf", {
    message: "Please upload a PDF file",
  }),
});

export default function ApplyForRole() {
  const [isLoading, setIsLoading] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    control,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(applyForRoleSchema),
    mode: "onChange", // Validate on every change
  });

  const watchCV = watch("cv");

  const handleResumeUpload = async (file) => {
    const resume = new FormData();

    if (file.type !== "application/pdf") {
      throw new Error("Please upload a PDF file");
    }

    resume.append("file", file);
    resume.append("upload_preset", "cover-image");

    try {
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dh8baxegc/image/upload",
        resume
      );
      return response.data.secure_url;
    } catch (error) {
      console.error("Error uploading to Cloudinary:", error);
      throw new Error("Failed to upload resume");
    }
  };

  const roleOptions = [
    { title: "Frontend Developer", value: "Frontend Developer" },
    { title: "Product Designer", value: "Product Designer" },
    { title: "Product Manager", value: "Product Manager" },
    { title: "Backend Developer", value: "Backend Developer" },
    { title: "Cybersecurity Expert", value: "Cybersecurity Expert" },
    { title: "Others", value: "Others" },
  ];

  const handleDropdownToggle = (dropdownName) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      const resumeLink = await handleResumeUpload(data.cv);
      await submitResume(
        data.fullName,
        data.email,
        data.phoneNumber,
        data.jobRole,
        data.portfolioLink,
        resumeLink
      );
      setIsLoading(false);
      toast.success("Thank you for submitting your resume!");
      reset();
    } catch (error) {
      console.error("Error submitting application:", error);
      toast.error(
        error.message || "Something went wrong with your application."
      );
      setIsLoading(false);
    }
  };

  return (
    <div className="lg:px-[54px] px-0 max-w-[100rem] mx-auto lg:py-24 py-5 bg-[#f1f3f9]">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="grid gap-5 bg-[#082B5B] lg:p-14 p-6 rounded-lg"
      >
        <h3 className="lg:text-[48px] text-[35px] font-[700] text-[#fff] lg:leading-[64px] leading-[40px] max-w-md">
          Apply for Job
        </h3>
        <p className="text-[#fff] text-lg lg:leading-[30px] leading-[26px] max-w-2xl">
          You are just a single step away from joining the best team to work
          with. Apply now to become a part of the Kinplus family.
        </p>
        <div className="grid gap-6">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid lg:gap-x-12 lg:gap-y-6 gap-4 lg:grid-cols-2 mb-10">
              <div>
                <Input
                  type="text"
                  name="Full Name"
                  placeholder="Enter your Full Name"
                  isRequired={true}
                  {...register("fullName")}
                />
                {errors.fullName && (
                  <p className="text-red-500 ">{errors.fullName.message}</p>
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

              {/* Dropdown for Job Role */}
              <div>
                <Input
                  type="select"
                  name="jobRole"
                  placeholder="What role are you interested in?"
                  options={roleOptions}
                  isSelect={activeDropdown === "jobRole"}
                  setIsSelect={() => handleDropdownToggle("jobRole")}
                  error={errors.jobRole?.message}
                  selected={watch("jobRole")}
                  setSelected={(value) => setValue("jobRole", value)}
                />
                {errors.jobRole && (
                  <p className="text-red-500">{errors.jobRole.message}</p>
                )}
              </div>

              <div>
                <Input
                  type="text"
                  name="Portfolio link"
                  placeholder="Portfolio link (Optional)"
                  isRequired={false}
                  {...register("portfolioLink")}
                />
                {errors.portfolioLink && (
                  <p className="text-red-500">{errors.portfolioLink.message}</p>
                )}
              </div>
            </div>

            <Controller
              name="cv"
              control={control}
              render={({ field: { onChange, onBlur, name } }) => (
                <div>
                  <label className="cursor-pointer">
                    <div className="bg-[#D9D9D9] w-full rounded-lg py-8 lg:px-16 px-8 text-center flex flex-col items-center">
                      {watchCV ? (
                        <p>{watchCV.name}</p>
                      ) : (
                        <>
                          <p className="text-lg font-medium">
                            Upload Your CV/Resume{" "}
                            <span className="text-red-500">*</span>
                          </p>
                          <p className="text-lg font-light">
                            Supported Format: PDF
                          </p>
                        </>
                      )}
                      <input
                        type="file"
                        onChange={(e) => {
                          const file = e.target.files[0];
                          onChange(file);
                        }}
                        onBlur={onBlur}
                        name={name}
                        accept="application/pdf"
                        className="hidden"
                      />
                    </div>
                  </label>
                  {errors.cv && (
                    <p className="text-red-500 mt-1">{errors.cv.message}</p>
                  )}
                </div>
              )}
            />

            <div className="flex lg:justify-end justify-center mt-5">
              <div className="w-40">
                <Button
                  type="customizedWhite"
                  text="Apply Now"
                  isLoading={isLoading}
                />
              </div>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
}
