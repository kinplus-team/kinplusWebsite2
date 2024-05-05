import React from "react";
import traineeListen from "../../../assets/AboutUs/NewImages/trainees-listening.jpeg";
import traineeListen2 from "../../../assets/AboutUs/NewImages/three-people-looking-at-laptop.jpeg";
import workPc from "../../../assets/AboutUs/NewImages/working-on-pc-1.jpeg";
import workPc2 from "../../../assets/AboutUs/NewImages/working-on-pc-2.jpeg";
import idea from "../../../assets/AboutUs/idea.jpeg";
import { Link } from "react-router-dom";
import Button from "../../../components/Button";

export default function NextProject() {
  return (
    <div className="lg:pt-20 lg:pb-2 py-5 bg-[#f1f3f9]">
      <div className="grid lg:grid-cols-2 lg:gap-2">
        <div className="relative">
          <img src={traineeListen} className="w-full h-full" />
          <div className="absolute top-0 h-full w-full z-30 bg-black opacity-30 rounded-[20px]"></div>
        </div>

        <div className="h-full text-[#ffffff] bg-[#1877F9] grid content-center lg:py-0 py-10">
          <div className="lg:max-w-xl max-w-xs text-center lg:text-left mx-auto grid gap-4">
            <h3 className="lg:text-6xl text-3xl font-bold lg:leading-[61px] leading-[36px] place-self-center">
              Ready for your next project?
            </h3>

            <p className="lg:text-lg lg:leading-7 leading-6">
              We design, build, and scale platforms for forward-thinking
              experiences, allowing companies to focus on measurable outcomes.
            </p>

            <Link
              to={"/contact-us/services"}
              className="lg:place-self-start place-self-center"
            >
              <div className="w-40">
                <Button type="customizedWhite" text="Talk to us" />
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* bottom images */}
      <div className="grid grid-cols-[30%_19.2%_30%_1fr] gap-2 my-2">
        <div
          style={{
            backgroundImage: `url(${idea})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            height: "210px",
            width: "100%",
          }}
          className="relative"
        >
          <div className="absolute top-0 h-full w-full z-30 bg-black opacity-30"></div>
        </div>

        <div
          style={{
            backgroundImage: `url(${traineeListen2})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            height: "210px",
            width: "100%",
          }}
          className="relative"
        >
          <div className="absolute top-0 h-full w-full z-30 bg-black opacity-30"></div>
        </div>

        <div
          style={{
            backgroundImage: `url(${workPc})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            height: "210px",
            width: "100%",
          }}
          className="relative"
        >
          <div className="absolute top-0 h-full w-full z-30 bg-black opacity-30"></div>
        </div>

        <div
          style={{
            backgroundImage: `url(${workPc2})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            height: "210px",
            width: "100%",
          }}
          className="relative"
        >
          <div className="absolute top-0 h-full w-full z-30 bg-black opacity-30"></div>
        </div>
      </div>
    </div>
  );
}
