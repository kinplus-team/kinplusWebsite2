import PageLayout from "../../../components/Layout/PageLayout";
import icon from "../../../assets/our_services/Mask Group.png";
import victorImg from "../../../assets/our_services/image 5.png";
import CTA from "../../../assets/our_services/CTA.png";
import Text from "../../../components/Text";
import image2 from "../../../assets/our_services/Rectangle 11.png";
import webDevelopment from "../../../assets/our_services/web_development.png";
import hardwareRepairs from "../../../assets/our_services/hardware_repair.png";
import mobileDevelopment from "../../../assets/our_services/mobile_development.png";

import { Link } from "react-router-dom";

export default function WhatWeDo() {
  return (
    <PageLayout>
      <div className="grid lg:grid-cols-[500px_1fr_auto] lg:gap-5 items-center">
        <div className="grid grid-cols-2">
          <Text type="subheading" className="text-[#082B5B]">
            What we do
          </Text>

          <img
            src={icon}
            alt=""
            className="block lg:hidden w-[50px] place-self-end"
          />
        </div>

        <Text type="subparagraph" className="text-[#556987]">
          We'll expertly manage the technical aspects, allowing you to focus on
          bringing your solutions to the market and engaging potential
          investors. Collaborate with our team for seamless execution.
        </Text>

        <div className="hidden lg:block">
          <img src={icon} alt="" />
        </div>
      </div>

      {/* What we do  */}
      <div className="grid lg:grid-cols-3 gap-5 pt-10">
        {/* first column */}
        <div className="rounded-md grid gap-3">
          <div className="relative">
            <img src={webDevelopment} alt="" />

            <Link to="/contact-us/services">
              <img
                src={CTA}
                alt=""
                className="w-[5.29463rem] h-[4.5] absolute bottom-0 left-0"
              />
            </Link>
          </div>

          <p className=" text-[#101010] text-xl font-bold text-center">
            Web Development
          </p>
        </div>

        {/* second column */}
        {/* <div className="bg-[#082B5B] h-[450px] lg:h-auto rounded-[0.3125rem] text-[#F1F1F1] relative">
          <img
            src={icon2}
            alt=""
            className=" w-[6.6rem] h-[5.6rem]  ml-auto  mt-7 mr-7"
            loading="lazy"
          />

          <p className="text-3xl text-center mt-9 mb-5">Mobile Development</p>
          <p className=" text-center text-lg leading-7 max-w-sm mx-auto ">
            At Kinplus, we excel in mobile development, leveraging innovation to
            create impactful and user-centric solutions.
          </p>

          <div className="text-[#F1F1F1] bg-[#1877F9] w-[300px] h-[72px] px-[2em] py-[0.5em] rounded-[0.3125rem] flex gap-3 items-center justify-center  absolute bottom-0 left-0 ">
            <p className="text-xl font-bold leading-6"> Talk to us</p>
            <span>
              {" "}
              <img src={icon3} alt="" className=" h-7 w-7 " />
            </span>
          </div>
        </div> */}

        {/* last column */}
        <div className="grid gap-3">
          <div className="relative">
            <img src={mobileDevelopment} alt="" />

            <Link to="/contact-us/services">
              <img
                src={CTA}
                alt=""
                className="w-[5.29463rem] h-[4.5] absolute bottom-0 left-0"
              />
            </Link>
          </div>

          <p className="text-[#101010] text-[1.25rem] font-bold text-center">
            Mobile development{" "}
          </p>
        </div>

        {/* last column */}
        <div className="grid gap-3">
          <div className="relative">
            <img src={hardwareRepairs} alt="" />
            <Link to="/contact-us/services">
              <img
                src={CTA}
                alt=""
                className="w-[5.29463rem] h-[4.5] absolute bottom-0 left-0"
              />
            </Link>
          </div>

          <p className="text-[#101010] text-[1.25rem] font-bold text-center">
            Hardware Repairs
          </p>
        </div>
      </div>
    </PageLayout>
  );
}
