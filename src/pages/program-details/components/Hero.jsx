import React from "react";
import cuteFaces from "../../../assets/pages/home/whychooseus/choose_us.png";
import Button from "../../../components/Button.jsx";
import { Link } from "react-router-dom";
import PageLayout from "../../../components/Layout/PageLayout.jsx";

export default function Hero({ title, description }) {
  return (
    <PageLayout className="grid lg:grid-cols-[auto_1fr] gap-10">
      <img
        src={cuteFaces}
        alt="cute_faces"
        className="lg:w-[636px] lg:h-[619px] w-[380px] h-[380px] order-last lg:order-first "
      />

      <div className="grid lg:gap-6 gap-3 place-self-center pt-5">
        <h3 className="lg:text-[65px] text-[45px] text-[#082B5B] font-bold leading-[98.462%] lg:max-w-sm max-w-[250px]">
          {title}
        </h3>

        <p className="p-2 text-[#101010] lg:text-[18px]">{description}</p>

        <div className="lg:w-40 w-36">
          <Link to="/contact-us/training">
            <Button type="customizedBlue" text="Talk to us" />
          </Link>
        </div>
      </div>
    </PageLayout>
  );
}
