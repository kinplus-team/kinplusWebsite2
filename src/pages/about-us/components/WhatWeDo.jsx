import React from "react";
import PageLayout from "../../../components/Layout/PageLayout";
import raptLaptop from "../../../assets/AboutUs/NewImages/raptly-staring-at-laptop.webp";
import twoGirlsLaptop from "../../../assets/AboutUs/NewImages/two-girls-staring-at-laptop.webp";
import busyLaptop from "../../../assets/AboutUs/NewImages/busy-on-the-laptop.webp";
import Text from "../../../components/Text";

export default function WhatWeDo() {
  return (
    <PageLayout>
      {/* What We Do */}
      <div className="grid lg:grid-cols-[43%_1fr] lg:gap-[90px] gap-10 -mt-10 lg:mt-0">
        <div className="grid grid-rows-[auto_auto_1fr] gap-6 lg:gap-3 place-self-center">
          <Text type="title" className="text-[#1877F9] capitalize">
            What We Do
          </Text>

          <Text type="subheading" className="text-[#082B5B] text-[35px] lg:text-[44px] leading-[114.286%] lg:capitalize">
            We Create beautiful products that capture the heart
          </Text>

          <Text type="subparagraph" className="text-[#101010]">
            We're here to support you through the entire process of product
            development, from ideation to launch and beyond. We'll help you
            navigate any challenge that come up along the way, and we're always
            focused on improving customer retention and increasing Customer
            Lifetime Value. We're not just a service provider, we're a partner
            in your success.
          </Text>
          <p className="lg:text-lg leading-[25px]"></p>
        </div>

        <div className="grid  gap-4">
          <div className="relative lg:w-[80%] w-[300px]">
            <div
              style={{
                backgroundImage: `url(${raptLaptop})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                borderRadius: "20px",
                width: "100%",
                height: "288px",
              }}
              loading="lazy"
              className="relative"
            >
              {" "}
            </div>

            <div className="absolute top-0 h-full w-full z-30 bg-black opacity-30 rounded-[20px]"></div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="relative">
              <div
                style={{
                  backgroundImage: `url(${twoGirlsLaptop})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  borderRadius: "20px",
                  width: "100%",
                  height: "288px",
                }}
                loading="lazy"
                className="relative"
              >
                {" "}
              </div>

              <div className="absolute top-0 h-full w-full bg-black opacity-30 rounded-[20px]"></div>
            </div>

            <div className="relative">
              <div
                style={{
                  backgroundImage: `url(${busyLaptop})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  borderRadius: "20px",
                  width: "100%",
                  height: "288px",
                }}
                loading="lazy"
                className="relative"
              >
                {" "}
              </div>

              <div className="absolute top-0 h-full w-full bg-black opacity-30 rounded-[20px]"></div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
