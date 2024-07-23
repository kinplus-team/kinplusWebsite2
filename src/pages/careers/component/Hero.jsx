import React from "react";
import heroImg from "../../../assets/career/new_image_hero.png";
import heroImgMobile from "../../../assets/career/new_image_hero_mobile.png";
import target from "../../../assets/career/target.png";
import curvedBackground from "../../../assets/svg/career/curved-background.svg";
import Text from "../../../components/Text.jsx";

export default function Hero() {
  return (
    <div id="target-section">
      <div className="bg-[#082B5B] lg:pt-48 pb-10 lg:px-[30px] px-4">
        <div className="lg:grid hidden grid-cols-2 gap-10 items-center ">
          <div className="flex flex-col gap-4 max-w-4xl mx-auto text-center lg:text-left">
            <Text type="heading" className="text-[#f1f1f1] capitalize">
              Join our team to help shape the future of development.
            </Text>
            <Text
              type="subparagraph"
              className="text-[#fff] max-w-lg mx-auto lg:mx-0"
            >
              At Kinplus, we're building a culture of innovation, teamwork, and
              collaboration.
            </Text>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-4/5 lg:w-full h-96 lg:h-[400px] z-10">
              <div
                className="hidden lg:block w-full h-full rounded-lg bg-cover bg-center bg-no-repeat border-4 border-white"
                style={{
                  backgroundImage: `url(${heroImg})`,
                }}
              ></div>
            </div>
          </div>
        </div>
        <div className="grid lg:hidden grid-rows-[1fr_auto] pt-32 gap-10 items-center ">
          <div className="flex flex-col gap-4 max-w-4xl mx-auto text-center lg:text-left">
            <Text type="heading" className="text-[#f1f1f1] capitalize">
              Join our team to help shape the future of development.
            </Text>
            <Text
              type="subparagraph"
              className="text-[#fff] max-w-80  mx-auto lg:mx-0"
            >
              At Kinplus, we're building a culture of innovation, teamwork, and
              collaboration.
            </Text>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full lg:w-full h-96 lg:h-[400px] z-10">
              <div
                className="lg:hidden absolute top-0 w-full h-full rounded-lg bg-cover bg-no-repeat bg-center"
                style={{
                  backgroundImage: `url(${heroImgMobile})`,
                }}
              ></div>
            </div>
          </div>
        </div>

        <img
          src={target}
          className="lg:w-[500px] lg:h-[500px] w-auto h-[200px] absolute lg:top-96 top-[640px] right-0 z-0"
        />
      </div>
      <div className="bg-[#f1f3f9]">
        <img
          src={curvedBackground}
          alt="Curved Background"
          className="w-full"
        />
      </div>
    </div>
  );
}
