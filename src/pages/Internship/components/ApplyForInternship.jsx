import { useState } from "react";
import Input from "../../../components/Inputs";
import PageLayout from "../../../components/Layout/PageLayout";
import Button from "../../../components/Button";
import { ApplyForSIWES } from "../../../services/internshipServices";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Text from "../../../components/Text";
import { Element } from "react-scroll";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import useDelay from "../../../hooks/useDelay";
import { motion } from "framer-motion";
import FormModal from "../../../components/FormModal";

// Validation schema for SIWES form
const siwesSchema = z.object({
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
  nameOfInstitution: z.string().min(1, "Institution name is required"),
  courseOfStudy: z.string().min(1, "Course of study is required"),
  duration: z
    .string()
    .min(1, "Duration is required")
    .regex(/^\d+$/, "Duration should be a number"),
  startDate: z.preprocess(
    (val) => (val ? new Date(val) : null),
    z.date().min(new Date(), "Start date must be in the future")
  ),
  endDate: z.preprocess(
    (val) => (val ? new Date(val) : null),
    z.date().min(new Date(), "End date must be in the future")
  ),
  anyHealthChallenges: z.string(),
  descriptionOfHealthChallenges: z.string().optional(),
});

export default function ApplyForInternship() {
  const [isLoading, setIsLoading] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const delay = useDelay();
  const navigate = useNavigate();
  const [formKey, setFormKey] = useState(0);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    control,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(siwesSchema),
    mode: "onChange",
  });

  const handleDropdownToggle = (dropdownName) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  const genderInput = [
    { title: "Male", value: "Male" },
    { title: "Female", value: "Female" },
  ];
  const healthChallenge = watch("anyHealthChallenges");

  const [isFormModalOpen, setIsFormModalOpen] = useState(false);

  const onSubmit = async (data) => {
    setIsLoading(true);
    await delay(2000);

    try {
      await ApplyForSIWES(
        data.fullName,
        data.email,
        data.phoneNumber,
        data.religion,
        data.dateOfBirth,
        data.gender,
        data.address,
        data.nameOfInstitution,
        data.courseOfStudy,
        data.duration,
        data.startDate,
        data.endDate,
        data.anyHealthChallenges,
        data.descriptionOfHealthChallenges || ""
      );

      toast.success("Thank you for applying!");
      reset(); // Clear the form
      setFormKey((prevKey) => prevKey + 1); // Reset form key to clear inputs

      setIsFormModalOpen(true); // Open modal

    } catch (error) {
      toast.error("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  // animation variants
  const slideInLeft = {
    initial: { x: -100, opacity: 0 },
    whileInView: { x: 0, opacity: 1 },
    viewport: { once: true },
    transition: { duration: 0.8 },
  };

  const slideInRight = {
    initial: { x: 100, opacity: 0 },
    whileInView: { x: 0, opacity: 1 },
    viewport: { once: true },
    transition: { duration: 0.8 },
  };

  return (
    <PageLayout>
      <Element
        name="internship-application-form"
        className="grid lg:grid-cols-2 gap-8 lg:py-[55px] py-[30px]"
        style={{ borderTop: "1px solid rgba(0, 0, 0, 0.42) " }}
      >
        {/* Left side */}
        <div className="grid lg:grid-rows-[240px_160px_25px_150px] gap-6 place-items-start mt-4 md:mt-8 lg:mt-16">
          <motion.div
            {...slideInLeft}
            className="text-[#082B5B] text-[2.188em] sm:text-[2.5em] md:text-[2.75em] lg:text-[3.25em] font-bold leading-[40px] md:leading-[114.286%] lg:leading-[62px] max-w-lg capitalize"
          >
            We are looking forward to meeting you
          </motion.div>

          <motion.dev {...slideInLeft}>
            <Text
              type="paragraph"
              className="text-[#101010] sm:mt-4 md:mt-6 lg:mt-0 lg:w-[90%] lg:pb-6"
            >
              We're thrilled to welcome you to our team! We're looking forward
              to getting to know you, learning about your unique perspective,
              and sharing our expertise with you. You have the potential to make
              a positive impact in the tech industry, and we're excited to be
              part of your journey. Get ready to learn, grow, and have fun with
              us.
            </Text>
          </motion.dev>
        </div>

        {/* Right side form */}
        <motion.div
          {...slideInRight}
          className="bg-[#082B5B] lg:p-14 p-6 rounded-lg lg:mt-4"
        >
          <h3 className="lg:text-[44px] text-[35px] font-[700] text-[#F1F1F1] lg:leading-[54px] leading-[40px] max-w-md">
            Apply for our SIWES/IT program
          </h3>

          <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 mt-6">
            {/* Full Name */}
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

            {/* Email */}
            <div>
              <Input
                type="email"
                name="Email"
                placeholder="Enter your E-Mail"
                isRequired={true}
                {...register("email")}
              />
              {errors.email && (
                <p className="text-red-500 ">{errors.email.message}</p>
              )}
            </div>
            {/* Phone Number */}
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
                <p className="text-red-500 ">{errors.phoneNumber.message}</p>
              )}
            </div>

            {/* Religion */}
            <div>
              {" "}
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

            {/* Date of Birth & Gender */}
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="relative flex flex-col">
                <Input
                  type="date"
                  name="dateOfBirth"
                  placeholder="Date of Birth"
                  max="2010-12-31"
                  {...register("dateOfBirth")}
                />
                {errors.dateOfBirth && (
                  <p className="text-red-500 absolute -bottom-5">
                    {errors.dateOfBirth.message}
                  </p>
                )}
              </div>

              <div className="relative flex flex-col">
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

            {/* Address */}
            <div>
              <Input
                type="text"
                name="Address"
                placeholder="Enter your Address"
                isRequired={true}
                {...register("address")}
              />
              {errors.address && (
                <p className="text-red-500 ">{errors.address.message}</p>
              )}
            </div>

            {/* Institution Name */}
            <div>
              <Input
                type="text"
                name="Name of Institution"
                placeholder="Enter the Name of your School"
                isRequired={true}
                {...register("nameOfInstitution")}
              />
              {errors.nameOfInstitution && (
                <p className="text-red-500 ">
                  {errors.nameOfInstitution.message}
                </p>
              )}
            </div>

            {/* Course of Study */}
            <div>
              {" "}
              <Input
                type="text"
                name="Course of Study"
                placeholder="Tell us what you are studying"
                isRequired={true}
                {...register("courseOfStudy")}
              />
              {errors.courseOfStudy && (
                <p className="text-red-500 ">{errors.courseOfStudy.message}</p>
              )}
            </div>

            {/* Duration */}
            <div>
              <Input
                type="text"
                name="How long is your IT/SIWES?"
                placeholder="How many months are you using?"
                isRequired={true}
                spanText={"( in months )"}
                {...register("duration")}
              />
              {errors.duration && (
                <p className="text-red-500 ">{errors.duration.message}</p>
              )}
            </div>

            {/* Start Date & End Date */}
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="relative">
                <Input
                  type="date"
                  name="Start Date"
                  placeholder="When are you starting?"
                  min={new Date().toISOString().split("T")[0]} // Ensure future date
                  {...register("startDate")}
                />
                {errors.startDate && (
                  <p className="text-red-500 absolute -bottom-5">
                    {errors.startDate.message}
                  </p>
                )}
              </div>

              <div className="relative">
                <Input
                  type="date"
                  name="End Date"
                  placeholder="When are you likely to finish?"
                  min={new Date().toISOString().split("T")[0]} // Ensure future date
                  {...register("endDate")}
                />
                {errors.endDate && (
                  <p className="text-red-500 absolute -bottom-5">
                    {errors.endDate.message}
                  </p>
                )}
              </div>
            </div>

            {/* Health Challenges */}
            <div className="py-3">
              <p className="text-xl text-white">
                Do you have any health challenges?
              </p>
              <Input
                type="checkbox"
                radioText="Yes"
                isChecked={healthChallenge === "Yes"}
                onCheck={() => setValue("anyHealthChallenges", "Yes")}
              />
              <Input
                type="checkbox"
                radioText="No"
                isChecked={healthChallenge === "No"}
                onCheck={() => setValue("anyHealthChallenges", "No")}
              />
            </div>

            {/* Health Challenges Description (Conditional) */}
            {healthChallenge === "Yes" && (
              <Input
                type="textarea"
                name="Description of Health Challenges"
                placeholder="Please describe your health challenge"
                {...register("descriptionOfHealthChallenges")}
              />
            )}

            {/* Submit Button */}
            <div className="w-40 mx-auto">
              <Button
                type="customizedWhite"
                text="Submit"
                isLoading={isLoading}
              />
            </div>
          </form>
        </motion.div>

        <FormModal
          isOpen={isFormModalOpen}
          onClose={() => setIsFormModalOpen(false)}
          message="Thank you for your interest in our organization. Please proceed to our office with the letter from your institution for a session with our team. Please note that this application does not guarantee the approval of your IT/SIWES program with the company. Thank you."
        />
      </Element>
    </PageLayout>
  );
}
