import PageLayout from "../../../components/Layout/PageLayout";
import icon2 from "../../../assets/our_services/Mask Group (1).png";
import { useRef } from "react";
import { BsDashLg } from "react-icons/bs";
import servicesRepo from "../../../repository/Services";
import {
  HiOutlineArrowLongRight,
  HiOutlineArrowLongLeft,
} from "react-icons/hi2";

export default function ApproachToProductDevelopment() {
  const cardScroll = useRef(null);
  return (
    <PageLayout>
      <div className="pb-10">
        <div className="grid lg:grid-cols-3">
          <div>
            <h1 className="text-[#082B5B] font-bold lg:text-4xl text-[28px] leading-9">
              Our Approach to Product <br /> Development
            </h1>
          </div>
          <div>
            <p className="lg:text-[1.125rem] text-lg leading-6 text-[#101010] lg:leading-[1.75rem]">
              We take a startup-like approach to thinking smarter, shipping
              faster, and scaling far and wide.
            </p>
          </div>

          <div className="lg:flex justify-self-end hidden">
            <HiOutlineArrowLongLeft className="text-[4rem] text-[#817f7f]" />
            <HiOutlineArrowLongRight className="text-[4rem] text-[#1877F9]" />
          </div>
        </div>

        {/* images */}
        <div
          className="flex justify-between items-baseline overflow-hidden gap-3 h-[480px] relative overflow-x-auto scroll-ms-9 no-scroll snap-mandatory snap-x scroll-smooth"
          ref={cardScroll}
          //   onScroll={handleScrollEffect}
        >
          {servicesRepo.approachesToProductDevelopment.map((service, index) => (
            <div
              key={index}
              className="bg-[#082B5B] w-96 my-10 grid lg:grid-rows-[auto_1fr] h-full  gap-5"
            >
              <img src={icon2} className="w-20 h-20 justify-self-end" />

              <div className="text-center grid grid-rows-[auto_1fr] gap-3 content-center w-[350px] p-8">
                <h3 className="text-white text-4xl">{service.title}</h3>
                <p className="text-white max-w-sm leading-6 mx-auto">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="lg:hidden flex justify-center ">
          <HiOutlineArrowLongLeft className="text-[4rem] text-[#817f7f]" />
          <HiOutlineArrowLongRight className="text-[4rem] text-[#1877F9]" />
        </div>
      </div>
    </PageLayout>
  );
}
