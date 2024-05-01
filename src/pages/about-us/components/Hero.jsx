import React from "react";
import guyLookingAtLaptop from "../../../assets/AboutUs/NewImages/guy-looking-at-laptop.jpeg";
import girlLookingAtLaptop from "../../../assets/AboutUs/NewImages/girl-looking-at-laptop.jpeg";
import lookingAtLaptop from "../../../assets/AboutUs/NewImages/looking-at-laptop.jpeg";
import PageLayout from "../../../components/Layout/PageLayout";

export default function Hero() {
  return (
    <PageLayout className="lg:py-36 pt-36 pb-16">
      <div className="grid lg:grid-cols-[43%_1fr] lg:gap-[90px] gap-10">
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
          <p className="text-[#1877F9] lg:text-2xl text-lg font-[400] lg:leading-[125%] leading-[26px] capitalize">
            Who We Are
          </p>

          <h3 className="text-[#082B5B] lg:text-6xl text-4xl font-[700] lg:leading-[75px] leading-[40px] capitalize">
            About Kinplus
          </h3>
          <p className="lg:text-lg leading-[138.889%] font-[400]">
            We are a team of energetic and innovative developers and designers,
            who are passionate about implementing customer needs with an
            approach focused on satisfaction and timely delivery.
          </p>
        </div>
      </div>
    </PageLayout>
  );
}
