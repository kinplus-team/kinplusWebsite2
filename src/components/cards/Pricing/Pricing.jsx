import React from "react";
import medium from "../../../assets/svg/pricing-card/medium.svg";
import pro from "../../../assets/svg/pricing-card/pro.svg";
import paperPlane from "../../../assets/pricing-card/paper-plane.png";
import blueCheckMark from "../../../assets/svg/pricing-card/blue-check-mark.svg";
import whiteCheckMark from "../../../assets/svg/pricing-card/white-check-mark.svg";
import { Link } from "react-router-dom";
import Button from "../../Button";

export default function Pricing({
  type,
  duration,
  description,
  price,
  whatsIncluded,
}) {
  switch (type) {
    case "Medium":
      return (
        <div className=" grid gap-4 grid-rows-[auto_auto_1fr] bg-white shadow-lg rounded-2xl px-10 py-12 h-auto lg:h-[90vh]">
          {/* type */}
          <div className="grid items-center gap-5 grid-cols-[auto_1fr]">
            <div
              style={{
                backgroundImage: `url(${paperPlane})`,
                backgroundSize: "cover",
              }}
              className="p-3"
            >
              <img src={medium} className="h-10 w-10" />
            </div>

            <div className="grid">
              <p className="text-[18px] font-[500] leading-[111.111%] text-[#8697B0]">
                Standard
              </p>
              <p className="text-[24px] text-[#170F49] font-bold leading-[145.833%]">
                {duration}
              </p>
            </div>
          </div>

          {/* description and price */}
          <div>
            <p className="text-[#170F49] font-[400] text-[18px] leading-[138.889%">
              {description}
            </p>

            <p className="text-[54px] text-[#082B5B] font-bold">
              &#8358;{price}
            </p>
          </div>

          {/* what's included */}
          <div className="grid gap-4">
            <p className="text-[18px] text-[#101010] font-[700] leading-[111.111%]">
              What’s included
            </p>

            <div className="grid gap-3">
              {whatsIncluded?.map((more, i) => (
                <div key={i} className="grid grid-cols-[auto_1fr] gap-2">
                  <img src={blueCheckMark} />
                  <p>{more}</p>
                </div>
              ))}
            </div>

            <Link to="/contact-us/training">
              <div className="w-40 mx-auto">
                <Button type="customizedBlue" text="Apply Now" />
              </div>
            </Link>
          </div>
        </div>
      );

    case "Pro":
      return (
        <div className=" grid gap-4 grid-rows-[auto_auto_1fr] bg-[#082B5B] text-white shadow-lg rounded-2xl px-10 py-12 h-auto lg:h-[90vh]">
          {/* type */}
          <div className="grid items-center gap-5 grid-cols-[auto_1fr] relative">
            <div
              style={{
                backgroundImage: `url(${paperPlane})`,
                backgroundSize: "cover",
              }}
              className="p-3"
            >
              <img src={pro} className="h-10 w-10" />
            </div>

            <div>
              <div
                className="w-28 text-center py-3 px-5 rounded-xl absolute top-[-25px] right-[-10px] text-sm"
                style={{ background: "rgba(255, 255, 255, 0.2)" }}
              >
                Popular
              </div>
              <p className="text-[18px] font-[500] leading-[111.111%] text-[#EFF0F6]">
                Premium
              </p>
              <p className="text-[24px] text-[#fff] font-bold leading-[145.833%]">
                {duration}
              </p>
            </div>
          </div>

          {/* description and price */}
          <div>
            <p className="text-[#D9DBE9] font-[400] text-[18px] leading-[138.889%]">
              {description}
            </p>

            <p className="text-[54px] text-[#FFF] font-bold">&#8358;{price}</p>
          </div>
          {/* what's included */}
          <div className="grid gap-4">
            <p className="text-[18px] text-[#fff] font-[700] leading-[111.111%]">
              What’s included
            </p>

            <div className="grid gap-3">
              {whatsIncluded?.map((more, i) => (
                <div key={i} className="grid grid-cols-[auto_1fr] gap-2">
                  <img src={whiteCheckMark} />
                  <p>{more}</p>
                </div>
              ))}
            </div>

            <Link to="/contact-us/training">
              <div className="w-40 mx-auto">
                <Button type="customizedWhite" text="Apply Now" />
              </div>
            </Link>
          </div>
        </div>
      );
  }
}
