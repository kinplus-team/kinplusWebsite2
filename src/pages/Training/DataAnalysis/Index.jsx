import React from "react";
import cuteFaces from "../../../assets/choose_us.png";
import { Link } from "react-router-dom";
import WhiteCard from "../../../components/cards/WhiteCard/Index";
import BlueCard from "../../../components/cards/BlueCard/Index";
import cubeSVG from "../../../assets/svg/cube.png";
import quoteSVG from "../../../assets/svg/commentSign.png";
import arrowSVG from "../../../assets/svg/greater.png";

import eclipse1 from "../../../assets/eclipse/Ellipse-1.png";
import eclipse2 from "../../../assets/eclipse/Ellipse-2.png";
import group3 from "../../../assets/eclipse/group-3.png";
import group4 from "../../../assets/eclipse/Group-4.png";

export default function DataAnalysis() {
  const softwareDevPricingPara =
    "From idea to traction-generating product, we're by your side every step of the way, smoothing out bumps as they come with the intention of gaining retention and increasing Customer Lifetime Value.";

  const designDes =
    "To better understand the meaning of Data Analysis, it describes a series of techniques aimed at extracting relevant and valuable information from extensive and diverse sets of data gathered from different sources and varying in sizes. Apply to get started";

  const whiteCardDetails = [
    {
      type: "Mini",
      icon1: `${eclipse2}`,
      icon2: `${eclipse1}`,
      title: "1 Month Plan",
      description:
        "Lorem ipsum dolor sit amet doloroli sitiol conse ctetur adipiscing elit. ",
      amount: "#30,000",
      exclusives: "What's included",
      item1: "All analytics features",
      item2: "Up to 250,000 tracked visits",
      item3: "Normal support",
      item4: "Up to 3 team members",
      to: "/contact-us/training",
      linkText: "Apply Now",
    },
    {
      icon1: `${group3}`,
      type: "Medium",
      title: "3 Month Plan",
      description:
        "Lorem ipsum dolor sit amet doloroli sitiol conse ctetur adipiscing elit. ",
      amount: "#60,000",
      discount: "#90,000",
      exclusives: "What's included",
      item1: "All analytics features",
      item2: "Up to 500,000 tracked visits",
      item3: "Dedicated support",
      item4: "Up to 50 team members",
      to: "/contact-us/training",
      linkText: "Apply Now",
    },
  ];

  const blueCardDetails = [
    {
      choice: "Popular",
      type: "Pro",
      icon1: `${group4}`,
      title: "6 Month Plan",
      description:
        "Lorem ipsum dolor sit amet doloroli sitiol conse ctetur adipiscing elit. ",
      amount: "#110,000",
      discount: "#180,000",
      exclusives: "What's included",
      item1: "All analytics features",
      item2: "Up to 1,000,000 tracked visits",
      item3: "Premium support",
      item4: "Up to 10 team members",
      to: "/contact-us/training",
      linkText: "Apply Now",
    },
  ];

  return (
    <div className="mt-10">
      <div>
        <div className="flex md:flex-row flex-col items-center">
          <div className="w-[80%] md:w-[45%] md:mr-32 p-2">
            <img
              src={cuteFaces}
              alt="cute_faces"
            />
          </div>
          <div className="flex flex-col space-y-8 w-full md:w-[65%] p-2 self-start relative">
            <div className=" absolute right-2    flex  ">
              <div>
                <div className="h-[60px] w-[60px] text-[#E1E6EF] opacity-80">
                  <img
                    src={cubeSVG}
                    width={16}
                    height={16}
                    alt="cube-svg"
                    className="text-gray-500"
                  />
                </div>
                <div className="ml-12">
                  <img
                    src={arrowSVG}
                    width={16}
                    height={16}
                    alt="greater-than-sign-svg"
                  />
                </div>
              </div>
              <div className="-mt-3">
                <img
                  src={quoteSVG}
                  alt="cloud-like-svg"
                />
              </div>
            </div>
            <h3 className="flex text-[65px] text-[#082B5B] font-bold leading-[98.462%]">
              Data <br /> Analysis
            </h3>

            <p className="p-2 text-[#101010] text-[18px] w-[95%] lg:w-[90%]">
              {designDes}
            </p>
            <Link
              to={"/contact-us/training"}
              className="bg-[#1877F9] hover:bg-[#1153AE] transition duration-200 ease-in-out text-white font-bold py-2 px-4 rounded-[0.5em] mt-10 w-[7em]"
            >
              Talk to us
            </Link>
          </div>
        </div>

        <div className="mt-10 flex md:flex-row flex-col items-center">
          <div className=" md:w-[57%]  p-2">
            <h6 className=" text-[#1877F9] text-[1rem] md:text-[1rem] lg:text-[1.5rem] p-2 md:p-1">
              Pricing
            </h6>
            <h4 className="flex text-[40px] text-[#082B5B] font-bold leading-[125%]">
              We have different plans depending on what you want to learn
            </h4>
          </div>
          <div className="w-full md:w-[65%] p-2 md:p-1 lg:pr-20 text-[18px] md:text-[19px]">
            <p>{softwareDevPricingPara}</p>
          </div>
        </div>
        <div className="mt-10 grid gap-4 lg:gap-0 md:grid-cols-2 lg:grid-cols-3 place-content-center">
          {whiteCardDetails.slice(0, 1).map((whiteCardDetail, index) => (
            <div
              key={whiteCardDetail.title + index}
              className=" "
            >
              <WhiteCard
                key={whiteCardDetail.title + index}
                icon1={whiteCardDetail.icon1}
                icon2={whiteCardDetail.icon2}
                type={whiteCardDetail.type}
                title={whiteCardDetail.title}
                description={whiteCardDetail.description}
                amount={whiteCardDetail.amount}
                discount={whiteCardDetail.discount}
                exclusives={whiteCardDetail.exclusives}
                item1={whiteCardDetail.item1}
                item2={whiteCardDetail.item2}
                item3={whiteCardDetail.item4}
                item4={whiteCardDetail.item4}
                to={whiteCardDetail.to}
                linkText={whiteCardDetail.linkText}
              />
            </div>
          ))}
          {blueCardDetails.map((blueCardDetail, index) => (
            <div
              key={blueCardDetail.title + index}
              className=""
            >
              <BlueCard
                key={blueCardDetail.title + index}
                choice={blueCardDetail.choice}
                icon1={blueCardDetail.icon1}
                type={blueCardDetail.type}
                title={blueCardDetail.title}
                description={blueCardDetail.description}
                amount={blueCardDetail.amount}
                discount={blueCardDetail.discount}
                exclusives={blueCardDetail.exclusives}
                item1={blueCardDetail.item1}
                item2={blueCardDetail.item2}
                item3={blueCardDetail.item4}
                item4={blueCardDetail.item4}
                to={blueCardDetail.to}
                linkText={blueCardDetail.linkText}
              />
            </div>
          ))}
          {whiteCardDetails.slice(1).map((whiteCardDetail, index) => (
            <div
              key={whiteCardDetail.title + index}
              className=""
            >
              <WhiteCard
                key={whiteCardDetail.title + index}
                icon1={whiteCardDetail.icon1}
                icon2={whiteCardDetail.icon2}
                type={whiteCardDetail.type}
                title={whiteCardDetail.title}
                description={whiteCardDetail.description}
                amount={whiteCardDetail.amount}
                discount={whiteCardDetail.discount}
                exclusives={whiteCardDetail.exclusives}
                item1={whiteCardDetail.item1}
                item2={whiteCardDetail.item2}
                item3={whiteCardDetail.item4}
                item4={whiteCardDetail.item4}
                to={whiteCardDetail.to}
                linkText={whiteCardDetail.linkText}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
