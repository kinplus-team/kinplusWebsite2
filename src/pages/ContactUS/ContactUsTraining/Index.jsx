import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Button from "../../../components/Button";
import PageLayout from "../../../components/Layout/PageLayout";
import Input from "../../../components/Inputs";
import { contactUsForTraining } from "../../../services/contactForm";
import { useState } from "react";

export default function ContactUsTraining() {
  const navigate = useNavigate();

  const [gender, setGender] = useState("");
  const [track, setTrack] = useState("");
  const [trackPackage, setTrackPackage] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const genderInput = [{ title: "Male" }, { title: "Female" }];

  const [fullName, setFullName] = useState(null);
  const [email, setEmail] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [religion, setReligion] = useState(null);
  const [dateOfBirth, setDateOfBirth] = useState(null);
  // const [gender, setGender] = useState(null);
  const [address, setAddress] = useState(null);
  const [availability, setAvailability] = useState(null);

  const trackOptions = [
    { title: "Web development" },
    { title: "Cyber security" },
  ];

  const packageOptions = [{ title: "Medium" }, { title: "Pro" }];
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const onSubmit = async () => {
    setIsLoading(true);

    await contactUsForTraining(
      fullName,
      email,
      phoneNumber,
      religion,
      dateOfBirth,
      gender.title,
      address,
      track.title,
      trackPackage.title,
      availability
    )
      .then(() => {
        toast.success("Form submitted successfully");
        setIsLoading(false);
      })
      .catch((error) => {
        toast.error("Something went wrong!");
        setIsLoading(false);
      });
  };

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
      <div className="w-full bg-blue-950 rounded-[0.9375rem]  text-white mx-auto p-10">
        <form onSubmit={handleSubmit(onSubmit)} className="mx-auto mt-8 ">
          <h3 className="text-[2.75rem] leading-[3.375rem] capitalize font-[700] md:w-[10.625em]">
            Register With Us For Training
          </h3>
          <div className="grid sm:grid-flow-row gap-2">
            <Input
              type="text"
              name="Full name"
              placeholder="Enter you Full Name"
              setInput={setFullName}
            />

            <Input
              type="email"
              name="E-Mail"
              placeholder="Enter your E-Mail"
              setInput={setEmail}
            />
            <Input
              type="text"
              name="Phone Number"
              placeholder="Enter your Phone Number"
              setInput={setPhoneNumber}
            />
            <Input
              type="text"
              name="Religion"
              placeholder="Enter your Religion"
              setInput={setReligion}
            />

            {/* Date of birth and gender */}
            <div className="grid gap-3 grid-cols-2 items-center">
              <Input
                type="date"
                name="Date of Birth"
                placeholder="Date of Birth"
                setInput={setDateOfBirth}
              />
              <Input
                type="select"
                name="Gender"
                placeholder="Gender"
                selected={gender}
                setSelected={setGender}
                options={genderInput}
              />
            </div>

            <Input
              type="text"
              name="Address"
              placeholder="Enter your Address"
              setInput={setAddress}
            />

            <Input
              type="select"
              name="Track"
              placeholder="Select Learning Track "
              selected={track}
              setSelected={setTrack}
              options={trackOptions}
            />

            <Input
              type="select"
              name="Package"
              placeholder="Select payment package"
              selected={trackPackage}
              setSelected={setTrackPackage}
              options={packageOptions}
            />

            {/* health chanllenges */}
            <div className="py-3">
              <p className="text-xl text-white">
                How will you be available for the meeting?
              </p>
              <div onClick={() => setAvailability("Online/virtual")}>
                <Input
                  type="checkbox"
                  name="Online/virtual"
                  placeholder="How will you be available for the meeting"
                  radioText="Yes"
                />
              </div>

              <div onClick={() => setAvailability("Onsite/physical")}>
                <Input
                  type="checkbox"
                  name="Online/physical"
                  placeholder="How will you be available for the meeting?"
                  radioText="No"
                />
              </div>
            </div>
          </div>
          <div className="text-center mt-[10px] py-9 w-40 mx-auto ">
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
