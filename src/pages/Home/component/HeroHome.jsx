import React, { Suspense } from "react";
import { Link } from "react-router-dom";
import HeroImage from "./HeroImage";


const HeroHome = () => {

  return (
    <header className="relative w-full min-h-screen overflow-hidden">
      <Suspense
        fallback={
          <div className="w-full min-h-screen bg-gradient-to-b from-gray-900 to-gray-700" />
        }
      >
        <HeroImage priority />
      </Suspense>

      <div
        className="absolute inset-0 bg-black/60"
        style={{ willChange: "opacity" }}
      />

      <div className="relative z-10  h-full flex flex-col justify-center px-4">
        <div className="flex flex-col container gap-8 max-w-4xl mt-[220px]">
          <h1
            className="text-3xl lg:text-6xl text-gray-100 font-bold "
            style={{
              contentVisibility: "auto",
              containIntrinsicSize: "0 100px",
            }}
          >
            <span className="inline-block animate-[fadeOut_1s_ease-out_forwards]">
              Empowering Innovators
            </span>
            <br />
            <span className="inline-block animate-[fadeIn_1s_ease-out_forwards] delay-100">
              Through Product Development
            </span>
            <br />
            <span className="inline-block animate-[fadeOut_1s_ease-out_forwards] delay-200">
              and Training
            </span>
          </h1>

          <p
            className="text-lg text-gray-100 max-w-2xl animate-[fadeIn_1s_ease-out_forwards] delay-200"
            style={{ containIntrinsicSize: "0 72px" }}
          >
            We're your product development partners. We turn your ideas into
            reality. We're experts, we pay attention to details, and we're
            excited to create groundbreaking solutions. We work closely with you
            to make sure everything is perfect.
          </p>

          <Link
            to="/contact-us/services"
            className="animate-[fadeIn_1s_ease-out_forwards] delay-400"
          >
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Start a Project
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default HeroHome;
