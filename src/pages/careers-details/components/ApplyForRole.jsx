import React from "react";
import PageLayout from "../../../components/Layout/PageLayout";
import Input from "../../../components/Inputs";
import Button from "../../../components/Button";

export default function ApplyForRole() {
  const applicationFormImputs = [
    { label: "Full Name", placeholder: "Enter your Fullname" },
    { label: "Email", placeholder: "Enter your email" },
    { label: "Phone number", placeholder: "Enter your phone number" },
    { label: "Job Role", placeholder: "Enter your Job Role" },
  ];

  return (
    <div className="lg:px-[54px] px-0 max-w-[100rem] mx-auto">
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
          <div className="grid lg:gap-x-12 lg:gap-y-6 gap-4 lg:grid-cols-2">
            {applicationFormImputs.map((applicationFormImput, i) => (
              <Input
                type="text"
                name={applicationFormImput.label}
                placeholder={applicationFormImput.placeholder}
              />
            ))}
          </div>
          <div className="bg-[#D9D9D9] w-full rounded-lg py-8 lg:px-16 px-8 text-center">
            <p className="text-lg font-medium">Upload Your CV/Resume*</p>
            <p className="text-lg font-light">Supported Format: PDF</p>
          </div>

          <div className="flex lg:justify-end justify-center">
            <div className="w-44">
              <Button type="customizedWhite" text="Apply Now" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
