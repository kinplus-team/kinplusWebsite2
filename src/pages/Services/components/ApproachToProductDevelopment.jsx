import PageLayout from "../../../components/Layout/PageLayout";
import icon2 from "../../../assets/our_services/Mask Group (1).png";
import { useRef } from "react";
import { BsDashLg } from "react-icons/bs";
import servicesRepo from "../../../repository/Services";
import Text from "../../../components/Text";

import {
  HiOutlineArrowLongRight,
  HiOutlineArrowLongLeft,
} from "react-icons/hi2";

export default function ApproachToProductDevelopment() {
  const cardScroll = useRef(null);
  const handleScroll = (direction) => {
    cardScroll.current &&
      direction === "right" &&
      (cardScroll.current.scrollLeft += 350);
    cardScroll.current &&
      direction === "left" &&
      (cardScroll.current.scrollLeft -= 350);
  };

  return (
    <PageLayout>
      <div className="grid lg:grid-cols-[auto_auto_1fr] lg:gap-10 gap-5 items-center">
        <div>
          <Text type="subheading" className="text-[#082B5B] max-w-lg ">
            Our Approach to Product <br /> Development
          </Text>
        </div>
        <div>
          <Text type="subparagraph" className="text-[#556987] max-w-lg">
            We take a startup-like approach to thinking smarter, shipping
            faster, and scaling far and wide.
          </Text>
        </div>

        <div className="lg:flex justify-self-end hidden">
          <HiOutlineArrowLongLeft
            className="text-[4rem] text-[#817f7f] hover:text-[#1877F9]"
            onClick={() => handleScroll("left")}
          />
          <HiOutlineArrowLongRight
            className="text-[4rem] text-[#817f7f] hover:text-[#1877F9]"
            onClick={() => handleScroll("right")}
          />
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
            className="bg-[#082B5B] w-96 my-10 grid grid-rows-[auto_1fr] h-full  gap-5"
          >
            <img src={icon2} className="w-24 h-24 justify-self-end my-5 mx-5" />

            <div className="text-center grid grid-rows-[auto_1fr] gap-3 content-center w-[350px] px-8 lg:py-4 py-2">
              <h3 className="text-white text-4xl">{service.title}</h3>
              <p className="text-white max-w-sm leading-6 mx-auto">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="lg:hidden flex justify-center ">
        <HiOutlineArrowLongLeft
          className="text-[4rem] text-[#817f7f] hover:text-[#1877F9]"
          onClick={() => handleScroll("left")}
        />
        <HiOutlineArrowLongRight
          className="text-[4rem] text-[#817f7f] hover:text-[#1877F9]"
          onClick={() => handleScroll("right")}
        />
      </div>
    </PageLayout>
  );
}
