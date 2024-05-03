import React from "react";
import { Link } from "react-router-dom";
import guyLookingAtLaptop from "../../assets/AboutUs/NewImages/guy-looking-at-laptop.jpeg";
import peopleLookingAtLaptop from "../../assets/AboutUs/NewImages/three-people-looking-at-laptop.jpeg";
import girlLookingAtLaptop from "../../assets/AboutUs/NewImages/girl-looking-at-laptop.jpeg";
import lookingAtLaptop from "../../assets/AboutUs/NewImages/looking-at-laptop.jpeg";
import svgIcon from "../../assets/AboutUs/Icons.svg";
import bgImage2 from "../../assets/AboutUs/bg-image2.png";
import aboutUsIcons1 from "../../assets/AboutUs/aboutUsIcons1.png";
import aboutUsIcons2 from "../../assets/AboutUs/aboutUsIcons2.png";
import aboutUsGrid from "../../assets/AboutUs/NewImages/new-about-us-grid.png";
import busyLaptop from "../../assets/AboutUs/NewImages/busy-on-the-laptop.jpeg";
import traineeListen from "../../assets/AboutUs/NewImages/trainees-listening.jpeg";
import traineeListen2 from "../../assets/AboutUs/NewImages/three-people-looking-at-laptop.jpeg";
import idea from "../../assets/AboutUs/idea.jpeg";

import workPc from "../../assets/AboutUs/NewImages/working-on-pc-1.jpeg";
import workPc2 from "../../assets/AboutUs/NewImages/working-on-pc-2.jpeg";
import PageLayout from "../../components/Layout/PageLayout";
import Hero from "./components/Hero";
import About from "./components/About";
import OurMissionAndVision from "./components/OurMissionAndVision";
import WhatWeDo from "./components/WhatWeDo";

export default function AboutUs() {
  return (
    <div>
      <Hero />
      <About />
      <OurMissionAndVision />
      <WhatWeDo />

      {/**Careers**/}
      {/* <div className="flex flex-col md:flex-row md:items-center space-y-8  md:space-x-[91px] mt-[50px] md:mt-[271px]">
        <div className="w-[100%] md:w-[60%]">
          <h4 className="text-[#1877F9] text-[0.938rem] md:text-[1.5rem] leading-[31.25%] font-[400] mb-4 md:mb-0 p-1">
            Careers
          </h4>
          <p className="text-[#082B5B] text-[1.876rem] md:text-[2.75rem] font-[700] capitalize leading-[122.727%] p-0 mt-1 md:mb-10">
            Join our Ever-Growing team at Kinplus
          </p>
          <Link
            className="hidden md:block bg-[#1877F9] hover:bg-[#1153AE] transition duration-200 ease-in-out capitalize text-white font-bold py-[1.25em] px-[1.563em] md:px-[2.625em] rounded-[0.938em]  w-[12em] text-center"
            to={"/contact-us/training"}
          >
            Join Us
          </Link>
        </div>

        <div className="w-[100%] md:w-[73%]">
          <p className="text-[0.963rem] md:text-[1.125rem] text-black font-normal leading-[156.25%]">
            When you join Kinplus, you'll be working with some of the most
            innovative brands and ventures in the industry. You'll be immersed
            in a culture that values creativity, personal development, and
            accountability. Most importantly, you'll be on a journey that's both
            fulfilling and impactful. Come join us and make a difference.
          </p>
        </div>
        <Link
          className="md:hidden bg-[#1877F9] hover:bg-[#1153AE] transition duration-200 ease-in-out capitalize text-white font-bold py-[1.25em] px-[1.563em] md:px-[2.625em] rounded-[0.938em]  w-[7em] text-center"
          to={"/contact-us/training"}
        >
          Join Us
        </Link>
      </div> */}

      {/**Next Project**/}
      {/* <div className="w-full flex flex-col mt-[148px] space-y-2 p-0"> */}
      {/**Big image and Next text**/}
      {/* <div className="w-full flex flex-col space-y-2 lg:flex-row lg:space-x-2 lg:space-y-0"> */}
      {/**Big image**/}
      {/* <div
            style={{
              backgroundImage: `url(${traineeListen})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              height: "534px",
              width: "100%",
            }}
            loading="lazy"
          ></div> */}
      {/**Next text**/}
      {/* <div className="mr-[-50px] w-full flex flex-col gap-2">
            <div className="relative h-[534px]  ">
              <div
                className="absolute flex items-center text-center flex-col space-y-[32px]  w-full h-full text-[#ffffff] bg-[#1877F9]
                 p-8 sm:p-[50px] md:p-[80px]"
              >
                <p className="text-[1.8rem] sm:text-[2.8rem] md:text-[3.5rem] font-[700] leading-[110%]  p-1">
                  Ready for your next project?
                </p>
                <p className="text-[1.125rem] leading-[160%] font-[400]  p-1 ">
                  We design, build, and scale platforms for forward-thinking
                  <br />
                  experiences, allowing companies to focus on measurable
                  <br />
                  outcomes.
                </p>
                <Link
                  className="bg-[#ffffff] hover:bg-[#1153AE] transition duration-200 ease-in-out text-[#1877F9] hover:text-[#ffffff] font-bold py-2 px-4 rounded-[0.5em]  w-[7em] text-center "
                  to={"/contact-us/services"}
                >
                  Talk to us
                </Link>
              </div>
            </div>
          </div> */}
      {/* </div> */}

      {/**Small images**/}
      {/* <div className="flex gap-2 h-[210px]">
          <div
            className="flex-grow  "
            style={{
              backgroundImage: `url(${idea})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              width: "528px",
            }}
          ></div>
          <div
            className="  "
            style={{
              backgroundImage: `url(${traineeListen2})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              width: "177px",
            }}
          ></div>
          <div
            className="flex-grow "
            style={{
              backgroundImage: `url(${workPc})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              width: "528px",
            }}
          ></div>

          <div
            className=""
            style={{
              backgroundImage: `url(${workPc2})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              width: "177px",
            }}
          ></div>
        </div> */}
      {/* </div> */}
    </div>
  );
}
