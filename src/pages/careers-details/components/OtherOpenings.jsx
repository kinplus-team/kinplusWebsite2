import React from "react";
import PageLayout from "../../../components/Layout/PageLayout";
import kinplusLogo from "../../../assets/svg/career-details/kinplusLogo.svg";
import { Link } from "react-router-dom";
import Button from "../../../components/Button";

export default function OtherOpenings() {
  const availableRoles = [
    {
      title: "Senior product designer",
      department: "Creative & Design",
      employmentType: "Full-time",
      location: "Ado-Ekiti, Nigeria",
      slug: "senior-product-desginer",
    },
    {
      title: "Product manager",
      department: "product",
      employmentType: "Full-time",
      location: "Ado-Ekiti, Nigeria",
      slug: "product-manager",
    },
    {
      title: "Software developer",
      department: "Engineering",
      employmentType: "Full-time",
      location: "Ado-Ekiti, Nigeria",
      slug: "software-developer",
    },
  ];
  return (
    <PageLayout>
      {/* desktop view */}
      <div className="hidden lg:block">
        <div className="grid grid-cols-2 gap-2 pt-8 lg:pt-20 items-center">
          <p className="text-2xl font-bold leading-9 text-[#0D0C22]">
            Our Other Openings
          </p>

          <Link className="text-[#1877F9] place-self-end font-bold leading-6 capitalize ">
            View all jobs
          </Link>
        </div>

        <div className="grid gap-10 py-16">
          {availableRoles.map((availableRole, i) => (
            <Link to={`/careers/${availableRole.slug}`}>
              <div
                className="grid gap-8 grid-cols-[auto_1fr] border border-[#ECECEC] py-5 px-6"
                key={i}
              >
                <img src={kinplusLogo} className="w-14 h-14" />
                <div className="grid gap-8">
                  <h4 className="#0D0C22 text-xl font-bold leading-6 capitalize">
                    {availableRole.title}
                  </h4>

                  <div className="grid grid-cols-3">
                    {/* department */}
                    <div className="grid gap-2">
                      <h5 className="text-[#0D0C22] font-bold leading-5">
                        Department
                      </h5>
                      <p className="text-[#3D3D4E] leading-6">
                        {availableRole.department}
                      </p>
                    </div>

                    {/* employment type */}
                    <div className="grid gap-2">
                      <h5 className="text-[#0D0C22] font-bold leading-5">
                        Employment Type
                      </h5>
                      <p className="text-[#3D3D4E] leading-6">
                        {availableRole.employmentType}
                      </p>
                    </div>

                    {/* location */}
                    <div className="grid gap-2">
                      <h5 className="text-[#0D0C22] font-bold leading-5">
                        Employment Type
                      </h5>
                      <p className="text-[#3D3D4E] leading-6">
                        {availableRole.location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* mobile view */}
      <div className="lg:hidden pt-20 pb-5 grid gap-4">
        <p className="text-lg font-bold text-[#0D0C22]">Our Other Openings</p>

        {availableRoles.map((availableRole, i) => (
          <div className="grid gap-3 border-b-2 border-white py-5">
            <div className="grid grid-cols-[auto_1fr] gap-4 items-center">
              <img src={kinplusLogo} className="w-6 h-6" />
              <h4 className="#0D0C22 text-lg font-bold leading-6 capitalize">
                {availableRole.title}
              </h4>
            </div>

            <div className="grid gap-3 grid-cols-[auto_1fr_auto]">
              <p className="text-[#3D3D4E] leading-6">
                {availableRole.department}
              </p>
              <p className="text-[#3D3D4E] leading-6 text-center">
                {availableRole.employmentType}
              </p>
              <p className="text-[#3D3D4E] leading-6">
                {availableRole.location}
              </p>
            </div>
          </div>
        ))}

        <div className="flex justify-center">
          <div className="w-44">
            <Button type="customizedBlue" text="Apply Now" />
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
