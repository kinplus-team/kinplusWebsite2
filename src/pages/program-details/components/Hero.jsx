import React from "react";
import cuteFaces from "../../../assets/pages/home/whychooseus/choose_us.png";
import Button from "../../../components/Button.jsx";
import { Link } from "react-router-dom";

export default function Hero({ title, description }) {
  return (
    <div className="grid lg:grid-cols-[auto_1fr] gap-10 lg:gap-36 py-8 lg:py-32 pt-28">
      <img
        src={cuteFaces}
        alt="cute_faces"
        className="lg:w-[636px] lg:h-[619px] w-[380px] h-[380px] order-last lg:order-first "
      />

      <div className="grid lg:gap-6 gap-3 place-self-center">
        <h3 className="lg:text-[65px] text-[45px] text-[#082B5B] font-bold leading-[98.462%] lg:max-w-sm max-w-[250px]">
          {title}
        </h3>

        <p className="p-2 text-[#101010] lg:text-[18px]">{description}</p>

        <div className="lg:w-44 w-36">
          <Link to="/contact-us/training">
            <Button type="customizedBlue" text="Talk to us" />
          </Link>
        </div>
      </div>
    </div>
  );
}
