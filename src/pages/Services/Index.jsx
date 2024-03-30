import React from "react";
import { FaQuoteRight } from "react-icons/fa6";
import handsonlaptop from "../../assets/our_services/image 10.png";
import icon from "../../assets/our_services/Mask Group.png";
import victorImg from "../../assets/our_services/image 5.png";
import CTA from "../../assets/our_services/CTA.png";
import icon2 from "../../assets/our_services/Mask Group (1).png";
import image2 from "../../assets/our_services/Rectangle 11.png";
import icon3 from "../../assets/our_services/Group 539.png";
import iconbg1 from "../../assets/training/Icons.png";
import iconbg2 from "../../assets/training/Icons.png";
import image3 from "../../assets/our_services/Rectangle 51.png";
import { HiArrowLongLeft } from "react-icons/hi2";
import { HiArrowLongRight } from "react-icons/hi2";
import image4 from "../../assets/our_services/image 5a.png";
import image5 from "../../assets/our_services/Rectangle 11b.png";
import { BsDashLg } from "react-icons/bs";
// import TrainingTestimonial from "../Training/TrainingTestimonial/Index";

export default function Services() {
  return (
    <div>
      {/* What We Do */}
      {/* <section>
        <div className="flex justify-between items-center">
          <h1 className="  text-[#082B5B] text-[2.5rem] font-bold">
            What we do
          </h1>
          <div className=" w-[43%] text-[1.125rem] ">
            <p>
              {" "}
              We'll handle all the boring and technical stuff (or work with your
              team if you have one) so you can focus on taking your solution to
              the market and pitching to potential investors.
            </p>
          </div>
          <div className="">
            <img src={icon} alt="" className=" h-[5.6rem] " />
          </div>
        </div>

        <div className="flex mt-10  justify-between">
          <div className="  flex flex-col items-center relative justify-between">
            <img
              src={victorImg}
              alt=""
              className="w-[25.73763rem] h-[26.1875rem] "
            />
            <img
              src={CTA}
              alt=""
              className="w-[5.29463rem] h-[4.5] absolute bottom-0 left-0  mb-[3.15rem] ml-0"
            />
            <p className=" mt-5 text-[#101010] text-[1.25rem] font-bold">
              Web Development
            </p>
          </div>

          <div className="bg-[#082B5B] w-[25.73763rem] h-[29.1875rem] rounded-[0.3125rem] text-[#F1F1F1] relative">
            <img
              src={icon2}
              alt=""
              className=" w-[6.6rem] h-[5.6rem]  ml-auto  mt-7 mr-7"
              loading="lazy"
            />
            <p className="text-[2rem] text-center mt-9">Mobile Development</p>
            <p className=" text-center text-[1.125rem] mt-5 ">
              Comfortable space, Full speed wifi, <br /> Free coffe & Snack
              <br /> and many more
            </p>
            <p className="text-[#F1F1F1] bg-[#1877F9] w-[12em] h-[4em] px-[2em] py-[0.5em] rounded-[0.3125rem] flex items-center justify-center  absolute bottom-0 left-0 ">
              Talk to us
              <span>
                {" "}
                <img src={icon3} alt="" className=" h-6 w-6 ml-5" />
              </span>
            </p>
          </div>
          <div className="  flex flex-col items-center  relative justify-between">
            <img
              src={image2}
              alt=""
              className="w-[25.73763rem] h-[26.1875rem] "
            />
            <img
              src={CTA}
              alt=""
              className="w-[5.29463rem] h-[4.5] absolute bottom-0 left-0  mb-[3.15rem] ml-0"
            />
            <p className=" mt-5 text-[#101010] text-[1.25rem] font-bold">
              Hardware Repairs
            </p>
          </div>
        </div>
      </section> */}

      {/* Have a project in mind? */}
      {/* <section>
        <div className="flex ">
          <h1 className=" w-[50%] text-[2.5rem] text-[#082B5B]  font-bold leading-[3.125rem]">
            Have a project in mind? Let's get started here
          </h1>
          <p className=" w-[40%] font-normal leading-[1.5625rem] ml-40 text-[#000000DE] ">
            We solve complex business challenges with outstanding <br />{" "}
            strategy, marketing and product development services.
          </p>
        </div>

        <div className="flex items-start justify-end space-x-20 ml-[5em] mt-32 ">
          <div className="flex">
            <p className="self-start text-[#082B5B] text-[12.5rem] font-bold mt-[-70px]">
              1
            </p>
            <div className="h-[32.12525rem] bg-[#082B5B]  w-[0.2rem] ml-10"></div>
          </div>

          <div className="w-[45%]">
            <h1 className="text-[#082B5B] font-bold text-[2.75rem] leading-[3.375rem] mb-10">
              Web Development
            </h1>
            <p className="text-[1.125rem] font-normal leading-6 mb-10">
              At Kinplus, we are dedicated to helping you reach <br /> the top
              of your industry. Our software development <br /> services
              integrate the vision, resources and <br /> experience needed to
              meet your technology goals
            </p>

            <p className="text-[1.125rem] font-normal leading-6 mb-10">
              At Kinplus, we are dedicated to helping you reach <br /> the top
              of your industry. Our software development <br /> services
              integrate the vision, resources and <br /> experience needed to
              meet your technology goals
            </p>

            <button className="bg-[#1877F9] hover:bg-[#1153AE] transition duration-200 ease-in-out text-white font-bold py-2 px-4 rounded-[0.5em] mt-5 w-[7em]">
              Talk to us
            </button>
          </div>

          <div className="w-[45%] relative">
            <div className="absolute flex mt-[-150px] mb-90px]  ml-[-50px] overflow-hidden ">
              <img src={iconbg1} alt="" className="mt-[-20px] ml-[-40px]" />
              <img src={iconbg2} alt="" className="mt-[-40px] ml-[-80px] " />
            </div>
            <div className="absolute top-[5%] mt-[30px] z-[100]">
              <img src={image3} alt="" />
            </div>
            <div className="absolute z-[999] mt-[10px] top-0 left-[5%]">
              <img src={image2} alt="" />
            </div>
          </div>
        </div>
      </section> */}

      {/* Mobile Development */}
      {/* <section>
        <div className="flex space-y-20 mr-[5em] mt-32 ">
          <div className="w-[45%] relative ">
            <div className="absolute flex mt-[-150px] mb-90px]  ml-[-50px] overflow-hidden ">
              <img src={iconbg1} alt="" className="mt-[-20px] ml-[-40px]" />
              <img src={iconbg2} alt="" className="mt-[-40px] ml-[-80px] " />
            </div>
            <div className="absolute top-[5%] mt-[120px] z-[100]">
              <img src={image3} alt="" />
            </div>
            <div className="absolute z-[999] mt-[90px] top-0 left-[5%]">
              <img src={image2} alt="" />
            </div>
          </div>

          <div className="w-[45%] ">
            <h1 className="text-[#082B5B] font-bold text-[2.75rem] leading-[3.375rem] mb-10">
              Mobile Development
            </h1>
            <p className="text-[1.125rem] font-normal leading-6 mb-10">
              At Kinplus, we are dedicated to helping you reach <br /> the top
              of your industry. Our software development <br /> services
              integrate the vision, resources and <br /> experience needed to
              meet your technology goals
            </p>

            <p className="text-[1.125rem] font-normal leading-6 mb-10">
              At Kinplus, we are dedicated to helping you reach <br /> the top
              of your industry. Our software development <br /> services
              integrate the vision, resources and <br /> experience needed to
              meet your technology goals
            </p>

            <button className="bg-[#1877F9] hover:bg-[#1153AE] transition duration-200 ease-in-out text-white font-bold py-2 px-4 rounded-[0.5em] mt-5 w-[7em]">
              Talk to us
            </button>
          </div>

          <div className="h-[32.12525rem] bg-[#082B5B]  w-[0.2rem] mr-10"></div>
          <div>
            <p className="self-start text-[#082B5B] text-[12.5rem] font-bold mt-[-70px]">
              2
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="flex items-start justify-end space-x-20 ml-[5em] mt-32 ">
          <div className="flex">
            <p className="self-start text-[#082B5B] text-[12.5rem] font-bold mt-[-70px]">
              3
            </p>
            <div className="h-[32.12525rem] bg-[#082B5B]  w-[0.2rem] ml-10"></div>
          </div>

          <div className="w-[55%]">
            <h1 className="text-[#082B5B] font-bold text-[2.75rem] leading-[3.375rem] mb-10">
              Hardware Sale & Repairs
            </h1>
            <p className="text-[1.125rem] font-normal leading-6 mb-10">
              At Kinplus, we are dedicated to helping you reach <br /> the top
              of your industry. Our software development <br /> services
              integrate the vision, resources and <br /> experience needed to
              meet your technology goals
            </p>

            <p className="text-[1.125rem] font-normal leading-6 mb-10">
              At Kinplus, we are dedicated to helping you reach <br /> the top
              of your industry. Our software development <br /> services
              integrate the vision, resources and <br /> experience needed to
              meet your technology goals
            </p>

            <button className="bg-[#1877F9] hover:bg-[#1153AE] transition duration-200 ease-in-out text-white font-bold py-2 px-4 rounded-[0.5em] mt-5 w-[7em]">
              Talk to us
            </button>
          </div>

          <div className="w-[45%] relative">
            <div className="absolute flex mt-[-150px] mb-90px]  ml-[-50px] overflow-hidden ">
              <img src={iconbg1} alt="" className="mt-[-20px] ml-[-40px]" />
              <img src={iconbg2} alt="" className="mt-[-40px] ml-[-80px] " />
            </div>
            <div className="absolute top-[5%] mt-[30px] z-[100]">
              <img src={image3} alt="" />
            </div>
            <div className="absolute z-[999] mt-[10px] top-0 left-[5%]">
              <img src={image2} alt="" />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="flex items-start justify-between">
          <div className="mr-10">
            <h1 className="text-[#082B5B] font-bold text-[2.5rem] leading-normal">
              {" "}
              Our Approach to Product <br /> Development
            </h1>
          </div>
          <div>
            <p className="text-[1.125rem] text-[#101010] leading-[1.75rem]">
              We take a startup-like approach to thinking smarter, <br />{" "}
              shipping faster, and scaling far and wide.
            </p>
          </div>

          <div className="flex">
            <HiArrowLongLeft className="text-[4rem] text-[#817f7f]" />
            <HiArrowLongRight className="text-[4rem] text-[#1877F9]" />
          </div>
        </div>

        <div className="flex mt-10  justify-between">
          <div className="  flex flex-col items-center justify-center  relative justify-between">
            <img
              src={image4}
              alt=""
              className="w-[25.73763rem] h-[26.1875rem] "
            />
            <p className=" mt-5 text-[#101010] text-[1.25rem] font-bold">
              Design
            </p>
          </div>

          <div className="bg-[#082B5B] w-[25.73763rem] h-[29.1875rem] rounded-[0.3125rem] text-[#F1F1F1] relative">
            <img
              src={icon2}
              alt=""
              className=" w-[6.6rem] h-[5.6rem]  ml-auto  mt-7 mr-7"
              loading="lazy"
            />
            <p className="text-[2rem] text-center mt-9"> Development</p>
            <p className=" text-center text-[1.125rem] mt-5 lead ">
              At Kinplus, we are dedicated to <br /> helping you reach the top
              of your <br /> industry. Our software <br /> development services
              integrate <br /> the vision, resources and <br />
              experience needed to meet your <br /> technology goals
            </p>
          </div>
          <div className="  flex flex-col items-center  relative justify-between">
            <img
              src={image5}
              alt=""
              className="w-[25.73763rem] h-[26.1875rem] "
            />

            <p className=" mt-5 text-[#101010] text-[1.25rem] font-bold">
              Engineering
            </p>
          </div>
        </div>

        <div className="flex justify-center items-center mt-14 text-[3rem]">
          <BsDashLg className="mr-0" />
          <BsDashLg />
          <BsDashLg />
          <BsDashLg />
        </div>
      </section> */}
      {/* <section> */}
      {/*Testimonial */}
      {/* <TrainingTestimonial />
      </section> */}
    </div>
  );
}
