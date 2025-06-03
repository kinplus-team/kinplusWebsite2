import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "react-toastify";
import { contactUsForServices } from "../../../services/contactForm";
import Button from "../../../components/Button";
import Text from "../../../components/Text";
import Input from "../../../components/Inputs";
import useDelay from "../../../hooks/useDelay";
import { motion } from "framer-motion";
import PageLayout from "../../../components/Layout/PageLayout";
import DefaultHelmet from "../../../components/DefaultHelmet";
import FormModal from "../../../components/FormModal";


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

  const [isFormModalOpen, setIsFormModalOpen] = useState(false);

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
      setIsFormModalOpen(true); // Open modal

    } catch (error) {
      toast.error("Something went wrong!");
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
    <>
      {/* Default Helmet for SEO */}
      <DefaultHelmet
        title="Partner with Kinplus | Hire Developers & Tech Experts"
        description="Partner with Kinplus Technologies to hire vetted developers, engineers, and tech experts quickly (1–3 weeks). Get flexible, scalable software development solutions tailored to your needs."
        url="https://www.kinplusgroup.com/contact-us/services"
        image="https://www.kinplusgroup.com/kinplus-opengraph-image.png"
      />

      <PageLayout
        id="target-section"
        className="grid lg:grid-cols-2 gap-10 lg:py-40 pt-32 pb-16 overflow-x-hidden"
      >
        {/* Description */}
        <div className="grid lg:grid-rows-[350px_80px_auto] grid-rows-[250px_50px_1fr] gap-6 w-full p-2">
          <motion.div {...slideInLeft} className="">
            <Text
              type="heading"
              className="text-[#082B5B] text-[35px] lg:text-[52px] leading-[110.286%]  max-w-5 capitalize"
            >
              Get Started
            </Text>

            <ul className="text-[#101010] lg:text-[1.3rem] mt-12 text-base grid gap-3 list-inside list-disc marker:text-[#101010]">
              <li>Get started quickly (1 - 3 weeks)</li>
              <li>Large pool of vetted and proven developers</li>
              <li>All popular software languages and frameworks</li>
              <li>Flexible working hours to meet your timezone</li>
            </ul>
          </motion.div>
          <hr className="h-[4px] bg-white my-12 mr-5" />
          <motion.div {...slideInLeft}>
            <p className="text-[#101010] lg:text-xl leading-8">
              Looking to partner with us? We'd love to hear from you. Contact us
              using the details below to explore how we can work together. We're
              committed to providing the best possible service, so don't
              hesitate to get in touch.
            </p>
          </motion.div>
        </div>

        {/* Services Form */}
        <motion.div
          {...slideInRight}
          className="w-full mt-8 bg-blue-950 rounded-lg text-white"
        >
          <form
            key={formKey}
            onSubmit={handleSubmit(onSubmit)}
            className="mx-auto  w-[90%]"
          >
            <Text type="heading" className="capitalize py-4 text-2xl">
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
        </motion.div>
        <FormModal
          isOpen={isFormModalOpen}
          onClose={() => setIsFormModalOpen(false)}
          message="We are glad that you are entrusting your project to us. Our team will review your entries and reach out to you through your email or phone. You may want to reach out to us more directly. You can contact us through call or WhatsApp on our official line +234 811 640 0858.  We look forward to providing you the best service."
        />
      </PageLayout>
    </>
  );
}
