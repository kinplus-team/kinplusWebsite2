import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { contactUsForServices } from "../../../services/contactForm";
import Button from "../../../components/Button";
import { useState } from "react";
import Text from "../../../components/Text";
import Input from "../../../components/Inputs";

export default function ContactUsServices() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const [formKey, setFormKey] = useState(0);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [message, setMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({ mode: "all" });

  // const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const onSubmit = async (data) => {
    setIsLoading(true);
    await contactUsForServices(
      fullName,
      email,
      phoneNumber,
      companyName,
      message
    )
      .then(() => {
        toast.success("Form submitted successfully");
        setIsLoading(false);
        setFormKey(formKey + 1);
      })
      .catch((error) => {
        toast.error("Something went wrong!");
        setIsLoading(false);
      });
  };

  return (
    <section
      id="target-section"
      className="grid lg:grid-cols-2 gap-10 lg:py-40 pt-32 pb-16"
    >
      {/*Explanation*/}
      <div className="grid lg:grid-rows-[100px_auto_auto_1fr] grid-rows-[auto_150px_50px_1fr] gap-6 w-full p-2">
        <Text type="heading" className=" text-[#082B5B] capitalize">
          Get Started
        </Text>

        <ul className="text-[#101010] lg:text-[1.3rem] text-base grid gap-3 list-inside list-disc marker:text-[#101010]">
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

      {/*Services Form*/}
      <div className="w-full bg-blue-950 rounded-[0.9375rem]  text-white mx-auto md:ml-0  pl-1">
        <form
          key={formKey}
          onSubmit={handleSubmit(onSubmit)}
          className="mx-auto mt-8 w-[90%]"
        >
          <Text type="heading" className="capitalize">
            Tell us about your project
          </Text>

          <Input
            type="text"
            name="Full name"
            placeholder="Enter your Full Name"
            setInput={setFullName}
          />
          {/* {errors.fullName && (
                <p className="text-red-500 pt-[2px] text-sm font-300 italic">
                  {errors.fullName.message}
                </p>
              )} */}

          {/* email address */}
          <Input
            type="email"
            name="E-Mail"
            placeholder="Enter your E-Mail"
            setInput={setEmail}
          />

          {/* Phone number */}
          <Input
            type="text"
            name="Phone Number"
            placeholder="Enter your Phone Number"
            setInput={setPhoneNumber}
          />

          <Input
            type="text"
            name="Company name"
            placeholder="Enter your company name"
            setInput={setCompanyName}
          />

          <Input type="textarea" name="Message" setInput={setMessage} />

          <div className="text-center mt-[10px] py-9 w-40 mx-auto ">
            <Button
              text="Submit"
              type="customizedWhite"
              isLoading={isLoading}
            />
          </div>
        </form>
      </div>
    </section>
  );
}
