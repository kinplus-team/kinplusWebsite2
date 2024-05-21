import React from "react";
import ChooseUsImages from "../../../assets/pages/home/whychooseus/choose_us.png";
import Button from "../../../components/Button";
import PageLayout from "../../../components/Layout/PageLayout";
import { Link } from "react-router-dom";

export default function WhyChooseUs() {
  return (
    <PageLayout className="lg:pt-16 pt-8">
      <h6 className=" text-[#1877F9] text-2xl capitalize leading-[35px]">
        Why Choose Us
      </h6>

      <div className="grid lg:grid-cols-[auto_1fr] gap-10 lg:gap-24 lg:py-8 py-7">
        <img
          src={ChooseUsImages}
          alt="why choose us"
          className="lg:w-[636px] lg:h-[619px] w-[380px] h-[380px] order-last lg:order-first "
        />

        <div className="grid gap-6 place-self-center">
          <h3 className="lg:text-[32px] text-2xl text-[#082B5B] font-bold capitalize lg:leading-[38px] leading-[30px]">
            We excel at solving complex business challenges through strategic
            marketing and product development, driving success for our clients.
          </h3>

          <p className="text-[#0F172A] lg:text-[18px] leading-[24px]">
            Here at Kinplus, we value excellence, innovation, and faith-based
            values. We're on a mission to empower people and businesses with the
            best possible solutions. Our guiding principles are what make us who
            we are. Let us share our story with you.
          </p>

          <Link to="/about-us" className="w-52">
            <Button type="customizedBlue" text="Meet Kinplus" />
          </Link>
        </div>
      </div>
    </PageLayout>
  );
}
