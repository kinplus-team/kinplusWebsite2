import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Button from "../../../components/Button";
import PageLayout from "../../../components/Layout/PageLayout";
import Input from "../../../components/Inputs";
import { contactUsForTraining } from "../../../services/contactForm";
import programsDetails from "../../../repository/program-details";

export default function ContactUsTraining() {
  const navigate = useNavigate();

  const [gender, setGender] = useState("");
  const [track, setTrack] = useState("");
  const [trackPackage, setTrackPackage] = useState("");
  const [availability, setAvailability] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [religion, setReligion] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [address, setAddress] = useState("");

  const [formKey, setFormKey] = useState(0);

  const [errors, setErrors] = useState({});

  const onSubmit = async (e) => {
    e.preventDefault();

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
        console.log(error);
        toast.error("Something went wrong!");
        setIsLoading(false);
      });

    // Force re-render by updating the form key
    setFormKey(formKey + 1);

    setGender("");
    setTrack("");
    setTrackPackage("");
    setAvailability("");

    setFullName("");
    setEmail("");
    setPhoneNumber("");
    setReligion("");
    setDateOfBirth("");
    setAddress("");
  };

  // Tracks and package options
  const trackOptions = [
    { title: "Web development" },
    { title: "Cybersecurity" },
    { title: "Product Design" },
    { title: "Graphics Design" },
    { title: "Data Analysis" },
  ];

  const packageOptions = [
    { title: "Standard (3 months ₦150k)" },
    { title: "Standard (5 months ₦250k)" },

    { title: "Premium (3 months ₦250k)" },
    { title: "Premium (5 months ₦400k)" },
  ];

  // Gender options
  const genderInput = [{ title: "Male" }, { title: "Female" }];

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
      <div className="w-full bg-blue-950 rounded-[0.9375rem] text-white mx-auto p-10">
        <form key={formKey} onSubmit={onSubmit} className="mx-auto mt-8">
          <h3 className="text-[2.75rem] leading-[3.375rem] capitalize font-[700] md:w-[10.625em]">
            Register With Us For Training
          </h3>
          <div className="grid sm:grid-flow-row gap-2">
            {/* Full name */}
            <div>
              <Input
                type="text"
                name="Full name"
                placeholder="Enter your Full Name"
                setInput={setFullName}
              />
              {errors.fullName && (
                <p className="text-red-500">{errors.fullName}</p>
              )}
            </div>

            {/* Email address */}
            <div>
              <Input
                type="email"
                name="E-Mail"
                placeholder="Enter your E-Mail"
                setInput={setEmail}
              />
              {errors.email && <p className="text-red-500">{errors.email}</p>}
            </div>

            {/* Phone number */}
            <div>
              <Input
                type="text"
                name="Phone Number"
                placeholder="Enter your Phone Number"
                setInput={setPhoneNumber}
              />
              {errors.phoneNumber && (
                <p className="text-red-500">{errors.phoneNumber}</p>
              )}
            </div>

            {/* Religion */}
            <div>
              <Input
                type="text"
                name="Religion"
                placeholder="Enter your Religion"
                setInput={setReligion}
              />
              {errors.religion && (
                <p className="text-red-500">{errors.religion}</p>
              )}
            </div>

            {/* Date of birth and gender */}
            <div className="grid gap-3 sm:grid-cols-2 items-center">
              {/* Date of birth */}
              <Input
                type="date"
                name="Date of Birth"
                placeholder="Date of Birth"
                setInput={setDateOfBirth}
              />

              {/* Gender */}
              <Input
                type="select"
                name="Gender"
                placeholder="Gender"
                selected={gender}
                setSelected={setGender}
                options={genderInput}
              />
            </div>

            {/* Address */}
            <div>
              <Input
                type="text"
                name="Address"
                placeholder="Enter your Address"
                setInput={setAddress}
              />
              {errors.address && (
                <p className="text-red-500">{errors.address}</p>
              )}
            </div>

            {/* Tracks */}
            <Input
              type="select"
              name="Track"
              placeholder="Select Learning Track"
              selected={track}
              setSelected={setTrack}
              options={trackOptions}
            />

            {/* Payment packages */}
            <Input
              type="select"
              name="Package"
              placeholder="Select payment package"
              selected={trackPackage}
              setSelected={setTrackPackage}
              options={packageOptions}
            />

            {/* Availability */}
            <div className="py-3">
              <p className="text-xl text-white">
                How will you be available for the training?
              </p>
              <div onClick={() => setAvailability("Online/Virtual")}>
                <Input
                  type="checkbox"
                  name="availability"
                  placeholder="How will you be available for the meeting?"
                  radioText="Online/Virtual"
                  isChecked={availability === "Online/Virtual"}
                  onCheck={() => setAvailability("Online/Virtual")}
                />
              </div>

              <div onClick={() => setAvailability("Onsite/Physical")}>
                <Input
                  type="checkbox"
                  name="availability"
                  placeholder="How will you be available for the meeting?"
                  radioText="Onsite/Physical"
                  isChecked={availability === "Onsite/Physical"}
                  onCheck={() => setAvailability("Onsite/Physical")}
                />
              </div>

              <div onClick={() => setAvailability("Hybrid")}>
                <Input
                  type="checkbox"
                  name="availability"
                  placeholder="How will you be available for the meeting?"
                  radioText="Hybrid"
                  isChecked={availability === "Hybrid"}
                  onCheck={() => setAvailability("Hybrid")}
                />
              </div>
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
