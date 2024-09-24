import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { contactUsForServices } from "../../../services/contactForm";
import Button from "../../../components/Button";
import Text from "../../../components/Text";
import Input from "../../../components/Inputs";
import useDelay from "../../../hooks/useDelay";

// Define the Zod schema for form validation
const schema = z.object({
  fullName: z
    .string()
    .min(1, "Full name is required")
    .regex(/^[a-zA-Z\s]+$/, "Full Name must contain only alphabets"),
  email: z.string().email("Invalid email address"),
  phoneNumber: z
    .string()
    .regex(/^\d{11}$/, "Phone number must contain exactly 11 digits"),
  companyName: z.string().optional(),
  description: z
    .string()
    .min(20, "Description must be at least 20 characters")
    .refine((desc) => desc.trim().length >= 20, {
      message:
        "Description must have at least 20 characters (excluding leading/trailing spaces)",
    }),
});

export default function ContactUsServices() {
  const [isLoading, setIsLoading] = useState(false);
  const [formKey, setFormKey] = useState(0); // To reset the form
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
    mode: "onChange", // Validate on every change
  });

  const delay = useDelay();

  const onSubmit = async (data) => {
    setIsLoading(true);
    await delay(2000);
    try {
      await contactUsForServices(
        data.fullName,
        data.email,
        data.phoneNumber,
        data.companyName,
        data.description
      );
      toast.success("Form submitted successfully");
      reset(); // Reset form after submission
      setFormKey((prevKey) => prevKey + 1); // Reset the form key
    } catch (error) {
      console.log("error submitting: ", error)
      toast.error("Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="target-section"
      className="grid lg:grid-cols-2 gap-10 lg:py-40 pt-32 pb-16"
    >
      {/* Description */}
      <div className="grid lg:grid-rows-[100px_auto_auto_1fr] grid-rows-[auto_150px_50px_1fr] gap-6 w-full p-2">
        <Text
          type="heading"
          className="text-[#082B5B] text-[35px] lg:text-[52px] leading-[110.286%]  max-w-5 capitalize"
        >
          Get Started
        </Text>

        <ul className="text-[#101010] lg:text-[1.3rem] lg:mt-12 text-base grid gap-3 list-inside list-disc marker:text-[#101010]">
          <li>Get started quickly (1 - 3 weeks)</li>
          <li>Large pool of vetted and proven developers</li>
          <li>All popular software languages and frameworks</li>
          <li>Flexible working hours to meet your timezone</li>
        </ul>
        <hr className="h-[4px] bg-white my-12 mr-5" />
        <p className="text-[#101010] lg:text-xl leading-8">
          Looking to partner with us? We'd love to hear from you. Contact us
          using the details below to explore how we can work together. We're
          committed to providing the best possible service, so don't hesitate to
          get in touch.
        </p>
      </div>

      {/* Services Form */}
      <div className="w-full bg-blue-950 rounded-lg text-white">
        <form
          key={formKey}
          onSubmit={handleSubmit(onSubmit)}
          className="mx-auto mt-8 w-[90%]"
        >
          <Text
            type="heading"
            className="capitalize"
          >
            Tell us about your project
          </Text>

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
              name="Company Name"
              placeholder="Enter your Company Name"
              isRequired={false}
              {...register("companyName")}
            />
            {errors.companyName && (
              <p className="text-red-500">{errors.companyName.message}</p>
            )}
          </div>

          <div>
            {/* Use Controller if needed for textarea */}
            <Controller
              control={control}
              name="description"
              spanText={"(At least 20 characters)"}
              render={({ field }) => (
                <Input
                  type="textarea"
                  name="Description"
                  placeholder="Enter your Message "
                  isTextAreaRequired={true}
                  minLength={20}
                  {...field}
                />
              )}
            />
            {errors.description && (
              <p className="text-red-500">{errors.description.message}</p>
            )}
          </div>

          <div className="text-center mt-4 py-6 w-40 mx-auto">
            <Button
              text={isLoading ? "Submitting..." : "Submit"}
              type="customizedWhite"
              isLoading={isLoading}
            />
          </div>
        </form>
      </div>
    </section>
  );
}
