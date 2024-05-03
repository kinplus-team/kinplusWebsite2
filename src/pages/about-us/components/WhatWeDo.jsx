import React from "react";
import PageLayout from "../../../components/Layout/PageLayout";
import raptLaptop from "../../../assets/AboutUs/NewImages/raptly-staring-at-laptop.jpeg";
import twoGirlsLaptop from "../../../assets/AboutUs/NewImages/two-girls-staring-at-laptop.jpeg";
import busyLaptop from "../../../assets/AboutUs/NewImages/busy-on-the-laptop.jpeg";

export default function WhatWeDo() {
  return (
    <PageLayout className="lg:py-20 py-10">
      <div className="grid lg:grid-cols-[43%_1fr] lg:gap-[90px] gap-10">
        <div className="grid grid-rows-[auto_auto_1fr] gap-3">
          <h6 className="text-[#1877F9] lg:leading-[35px] leading-[28px] capitalize lg:text-2xl text-xl">
            What We Do
          </h6>

          <h3 className="text-[#082B5B] lg:text-5xl text-4xl font-bold lg:leading-[54px] leading-[40px] capitalize">
            We Create beautiful products that capture hearts
          </h3>

          <p className="lg:text-lg leading-[25px]">
            We're here to support you through the entire process of product
            development, from ideation to launch and beyond. We'll help you
            navigate any challenges that come up along the way, and we're always
            focused on improving customer retention and increasing Customer
            Lifetime Value. We're not just a service provider, we're a partner
            in your success.
          </p>
        </div>

        <div className="grid  gap-4">
          <div className="relative lg:w-[515px] w-[350px]">
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

            <div className="absolute top-0 h-full w-full z-30 bg-black opacity-40 rounded-[20px]"></div>
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

              <div className="absolute top-0 h-full w-full bg-black opacity-40 rounded-[20px]"></div>
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

              <div className="absolute top-0 h-full w-full bg-black opacity-40 rounded-[20px]"></div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
