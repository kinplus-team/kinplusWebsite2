import { FaQuoteRight } from "react-icons/fa6";
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
import PageLayout from "../../components/Layout/PageLayout";
import image10 from "../../assets/our_services/image 10.png";
import mobile from "../../assets/our_services/mobile.png";
import mobileF from "../../assets/our_services/mobile-fade.png";
import hardware from "../../assets/our_services/hardware.png";
import hardwareF from "../../assets/our_services/hardware fade.png";
import TrainingTestimonial from "../Training/Testimonial";
import Hero from "./components/Hero";
import WhatWeDo from "./components/WhatWeDo";
import HaveAProjectInMind from "./components/HaveAProjectInMind";
import ApproachToProductDevelopment from "./components/ApproachToProductDevelopment";
import Testimonials from "./components/Testimonials";

export default function Services() {
  return (
    <div>
      <Hero />
      <WhatWeDo />
      <HaveAProjectInMind />
      <ApproachToProductDevelopment />
      <Testimonials />

      {/* our approach to product development */}
      {/* <section>
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

        <div className="flex mt-10  justify-between space-x-5">
          <div className="bg-[#082B5B] w-[25.73763rem] h-[29.1875rem] rounded-[0.3125rem] text-[#F1F1F1] relative">
            <img
              src={icon2}
              alt=""
              className=" w-[6.6rem] h-[5.6rem]  ml-auto  mt-7 mr-7"
              loading="lazy"
            />
            <p className="text-[2rem] text-center mt-9"> Design</p>
            <p className=" text-center text-[1rem] mt-5 lead ">
              Design is the creative process of <br /> conceptualizing and
              crafting user <br />
              interfaces and experiences that <br /> are both visually appealing
              and <br /> easy to use. It involves <br /> understanding user
              needs, <br /> wireframing, prototyping, and <br /> crafting the
              overall look and feel <br /> of a product.
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
            <p className=" text-center text-[1rem] mt-4 lead ">
              Development is the technical execution <br /> of design concepts.
              It involves writing <br /> code to implement features, <br />{" "}
              functionalities, and interactions <br /> outlined in the design
              phase. Frontend <br /> development focuses on the visible <br />{" "}
              parts of a website or application, while <br /> backend
              development deals with the <br /> server-side logic and database{" "}
              <br /> management.
            </p>
          </div>
          <div className="bg-[#082B5B] w-[25.73763rem] h-[29.1875rem] rounded-[0.3125rem] text-[#F1F1F1] relative">
            <img
              src={icon2}
              alt=""
              className=" w-[6.6rem] h-[5.6rem]  ml-auto  mt-7 mr-7"
              loading="lazy"
            />
            <p className="text-[2rem] text-center mt-9"> Engineering</p>
            <p className=" text-center text-[1rem] mt-5 lead ">
              Engineering ensures the structural <br /> integrity, scalability,
              and performance of <br /> a product. It involves architectural{" "}
              <br /> decisions, infrastructure setup, and <br /> system
              integration to build a robust and <br /> reliable platform.
              Engineering also <br /> includes optimizing processes for <br />{" "}
              efficiency and maintaining the technical <br /> health of the
              product over time.
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
      {/* <TrainingTestimonial /> */}
      {/* </section> */}
    </div>
  );
}
