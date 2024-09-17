import PageLayout from "../../../components/Layout/PageLayout";
import icon from "../../../assets/our_services/Mask Group.png";
import victorImg from "../../../assets/our_services/image 5.png";
import CTA from "../../../assets/our_services/CTA.png";
import Text from "../../../components/Text";
import image2 from "../../../assets/our_services/Rectangle 11.png";
import webDevelopment from "../../../assets/our_services/web_development.png";
import hardwareRepairs from "../../../assets/our_services/hardware_repair.png";
import mobileDevelopment from "../../../assets/our_services/mobile_development.png";
import rectangle from "../../../assets/svg/rectangle.svg";
import smallArrow from "../../../assets/svg/smallArrow.svg";
import rightArrowBold from "../../../assets/svg/right-arrow-bold.svg";

import { Link } from "react-router-dom";
import { useState } from "react";

//front of card
function FrontOfCard({ srcImage, text }) {
  return (
    <Link
      to="/contact-us/services"
      className="rounded-md grid gap-3 cursor-pointer"
    >
      <div className="relative">
        <img src={srcImage} alt="" />

        <div className="absolute bottom-0 left-0 bg-blue-500 w-[84.71px] h-[72px] flex items-center justify-center">
          <img src={smallArrow} alt="" className=" h-7 w-7 " />
        </div>
      </div>
      <p className=" text-[#101010] text-xl font-bold text-center">{text}</p>
    </Link>
  );
}

//back of card
function BackOfCard({ title, text }) {
  return (
    <Link
      to="/contact-us/services"
      className="bg-[#082B5B] h-[450px] lg:h-auto rounded-[0.3125rem] text-[#F1F1F1] relative px-6"
    >
      <div className="mt-32">
        <p className="text-3xl text-center mt-9 mb-5">{title}</p>
        <p className=" text-center text-lg leading-7 max-w-sm mx-auto ">
          {text}
        </p>
      </div>
      <img
        src={rectangle}
        alt=""
        className="absolute top-4 right-4 w-[6.6rem] h-[5.6rem]"
        loading="lazy"
      />

      <div className="text-[#F1F1F1] bg-[#1877F9] w-[300px] h-[72px] px-[2em] py-[0.5em] rounded-[0.3125rem] flex gap-3 items-center justify-center  absolute bottom-0 left-0 ">
        <p className="text-xl font-bold leading-6 flex items-center">
          {" "}
          Talk to us
        </p>

        <img src={rightArrowBold} alt="" className="h-7 w-7 " />
      </div>
    </Link>
  );
}

export default function WhatWeDo() {
  const [isHovered, setIsHovered] = useState("");
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

        <Text type="subparagraph" className="text-[#101010]">
          We'll expertly manage the technical aspects, allowing you to focus on
          bringing your solutions to the market and engaging potential
          investors. Collaborate with our team for seamless execution.
        </Text>

        <div className="hidden lg:block">
          <img src={icon} alt="" />
        </div>
      </div>

      {/* What we do  */}
      <div className="grid lg:grid-cols-3 gap-5 px-1 lg:px-0 pt-10">
        <div
          className="rounded-md grid gap-3"
          onMouseEnter={() => setIsHovered("webDevelopment")}
          onMouseLeave={() => setIsHovered("")}
        >
          {/* first column */}

          {isHovered === "webDevelopment" ? (
            <BackOfCard
              CTAText={"Talk to us"}
              title={"Web Development"}
              text={
                "We help you establish a strong online presence and achieve your business goals by designing and building websites to meet your needs."
              }
            />
          ) : (
            <FrontOfCard
              srcImage={webDevelopment}
              srcCTA={CTA}
              text={"Web Development"}
            />
          )}
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

        {/* second column */}
        <div
          className="rounded-md grid gap-3"
          onMouseEnter={() => setIsHovered("mobileDevelopment")}
          onMouseLeave={() => setIsHovered("")}
        >
          {/* first column */}

          {isHovered === "mobileDevelopment" ? (
            <BackOfCard
              CTAText={"Talk to us"}
              title={"Mobile Development"}
              text={
                "At Kinplus, we excel in mobile development, leveraging innovation to create impactful and user-centric solutions."
              }
            />
          ) : (
            <FrontOfCard
              srcImage={mobileDevelopment}
              srcCTA={CTA}
              text={"Mobile development"}
            />
          )}
        </div>

        {/* last column */}
        <div
          className="rounded-md grid gap-3"
          onMouseEnter={() => setIsHovered("hardwareRepairs")}
          onMouseLeave={() => setIsHovered("")}
        >
          {/* first column */}

          {isHovered === "hardwareRepairs" ? (
            <BackOfCard
              CTAText={"Talk to us"}
              title={"Hardware Repairs"}
              text={
                "We get your tech back up and running smoothly by diagnosing and fixing problems with your computer's physical components. This includes fixing laptops and desktops."
              }
            />
          ) : (
            <FrontOfCard
              srcImage={hardwareRepairs}
              srcCTA={CTA}
              text={"Hardware Repairs"}
            />
          )}
        </div>
      </div>
    </PageLayout>
  );
}
