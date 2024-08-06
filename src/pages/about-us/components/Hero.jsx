import React from "react";
import guyLookingAtLaptop from "../../../assets/AboutUs/NewImages/guy-looking-at-laptop.jpeg";
import girlLookingAtLaptop from "../../../assets/AboutUs/NewImages/girl-looking-at-laptop.jpeg";
import lookingAtLaptop from "../../../assets/AboutUs/NewImages/looking-at-laptop.jpeg";
import Text from "../../../components/Text";
import PageLayout from "../../../components/Layout/PageLayout";

export default function Hero() {
  return (
    <PageLayout heroSpacing className=" pb-16 pt-28">
      <div
        id="target-section"
        className="grid lg:grid-cols-[43%_1fr] lg:gap-[90px] gap-10"
      >
        <div className="grid grid-cols-3 gap-2 order-last lg:order-first">
          <div
            style={{
              backgroundImage: `url(${guyLookingAtLaptop})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              borderRadius: "15px",
              height: "384px",
              width: "100%",
              marginTop: "80px",
            }}
            loading="lazy"
            className="relative"
          >
            <div className="absolute top-0 h-full w-full bg-black opacity-40 rounded-2xl"></div>
          </div>
          <div
            style={{
              backgroundImage: `url(${girlLookingAtLaptop})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              borderRadius: "15px",
              height: "384px",
              width: "100%",
              alignSelf: "start",
            }}
            loading="lazy"
            className="relative"
          >
            <div className="absolute top-0 h-full w-full bg-black opacity-40 rounded-2xl"></div>
          </div>
          <div
            style={{
              backgroundImage: `url(${lookingAtLaptop})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              borderRadius: "15px",
              height: "384px",
              width: "100%",
              marginTop: "80px",
            }}
            loading="lazy"
            className="relative"
          >
            <div className="absolute top-0 h-full w-full bg-black opacity-40 rounded-2xl"></div>
          </div>
        </div>

        <div className="self-center grid lg:gap-2 gap-3">
          <Text type="title" className="text-[#1877F9] capitalize">
            Who We Are
          </Text>

          <Text type="heading" className="text-[#082B5B] capitalize">
            About Kinplus
          </Text>

          <Text type="subparagraph" className="text-[#556987]">
            We are a team of energetic and innovative developers and designers,
            who are passionate about implementing customer needs with an
            approach focused on satisfaction and timely delivery.
          </Text>
        </div>
      </div>
    </PageLayout>
  );
}
