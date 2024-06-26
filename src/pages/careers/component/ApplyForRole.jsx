import React, { useState } from "react";
import PageLayout from "../../../components/Layout/PageLayout";
import Input from "../../../components/Inputs";
import Button from "../../../components/Button";
import { submitResume } from "../../../services/resumeServices";
import { toast } from "react-toastify";
import axios from "axios";

export default function ApplyForRole() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [jobRole, setJobRole] = useState("");
  const [cv, setCv] = useState("");

  const [portfolioLink, setPortfolioLink] = useState("");

  const [formKey, setFormKey] = useState(0);

  const [isloading, setIsLoading] = useState(false);

  const roleOptions = [
    { title: "Frontend Developer" },
    { title: "Product Designer" },
    { title: "Product Manager" },
    { title: "Backend Developer" },
    { title: "Cybersecurity Expert" },
  ];

  const applicationFormImputs = [
    {
      label: "Full Name",
      placeholder: "Enter your Fullname",
      fn: setFullName,
      type: "text",
    },
    {
      label: "Email",
      placeholder: "Enter your email",
      fn: setEmail,
      type: "text",
    },
  ];

  const handleResumeUpload = async () => {
    const resume = new FormData();
    resume.append("file", cv);
    resume.append("upload_preset", "cover-image");

    return axios.post(
      "https://api.cloudinary.com/v1_1/dh8baxegc/image/upload",
      resume
    );
  };

  const submitApplicantResume = async () => {
    setIsLoading(true);

    const resumeLink = await handleResumeUpload();
    if (resumeLink.data.secure_url) {
      submitResume(
        fullName,
        email,
        phoneNumber,
        jobRole.title,
        resumeLink.data.secure_url,
        portfolioLink
      )
        .then((response) => {
          toast.success(
            "Thank you for submitting your resume, we will go through it and give you feedback"
          );
          setIsLoading(false);
        })
        .catch((error) => {
          toast.error(error.response.errors[0].message);
          setIsLoading(false);
        });
    }

    setJobRole("");
    // Force re-render by updating the form key
    setFormKey(formKey + 1);
  };

  return (
    <div className="lg:px-[54px] px-0 max-w-[100rem] mx-auto lg:py-24 py-5 bg-[#f1f3f9]">
      <div className="grid gap-5 bg-[#082B5B] lg:p-14 p-6 rounded-lg">
        <h3 className="lg:text-[48px] text-[35px] font-[700] text-[#fff] lg:leading-[64px] leading-[40px] max-w-md">
          Apply for Job
        </h3>
        <p className="text-[#fff] text-lg  lg:leading-[30px] leading-[26px]">
          You are just a single step away from joining the best team to work
          with, look for a perfect opportunity with us and become a part of the
          Kinplus family.
        </p>
        <div className="grid gap-6">
          <div
            key={formKey}
            className="grid lg:gap-x-12 lg:gap-y-6 gap-4 lg:grid-cols-2"
          >
            {applicationFormImputs.map((applicationFormImput, i) => (
              <Input
                type={applicationFormImput.type}
                key={i}
                name={applicationFormImput.label}
                placeholder={applicationFormImput.placeholder}
                setInput={applicationFormImput.fn}
              />
            ))}

            <Input
              type="text"
              name="Phone number"
              placeholder="Enter your phone number"
              setInput={setPhoneNumber}
            />

            <Input
              type="select"
              name="Job role"
              placeholder="What role are you interested in?"
              selected={jobRole}
              setSelected={setJobRole}
              options={roleOptions}
            />

            <Input
              type="text"
              name="portfolio link"
              placeholder="portfolio link (Optional)"
              setInput={setPortfolioLink}
            />
          </div>

          <label className="cursor-pointer">
            <div className="bg-[#D9D9D9] w-full rounded-lg py-8 lg:px-16 px-8 text-center flex flex-col items-center">
              <p className="text-lg font-medium">Upload Your CV/Resume*</p>
              <p className="text-lg font-light">Supported Format: PDF</p>
              <input
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file && file.type === "application/pdf") {
                    setCv(file);
                  } else {
                    alert("Please upload a PDF file.");
                  }
                }}
                type="file"
                className="hidden"
                accept="application/pdf"
              />

              {cv.name}
            </div>
          </label>

          <div className="flex lg:justify-end justify-center">
            <div className="w-40" onClick={() => submitApplicantResume()}>
              <Button
                type="customizedWhite"
                text="Apply Now"
                isLoading={isloading}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
