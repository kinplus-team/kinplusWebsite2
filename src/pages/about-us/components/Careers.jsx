import React from "react";
import PageLayout from "../../../components/Layout/PageLayout";
import Button from "../../../components/Button";
import { Link } from "react-router-dom";

export default function Careers() {
  return (
    <PageLayout className="lg:py-20 py-10">
      <div className="grid lg:grid-cols-[43%_1fr] lg:gap-[90px] gap-4">
        <div className="grid gap-3">
          <h6 className="text-[#1877F9] lg:text-2xl text-xl lg:leading-8 leading-7">
            Careers
          </h6>
          <h3 className="text-[#082B5B] lg:text-5xl text-3xl font-bold capitalize lg:leading-[50px] leading-[40px]">
            Join our Ever-Growing team at Kinplus
          </h3>

          <Link to={"/contact-us/training"} className="w-40 hidden lg:block">
            <Button type="customizedBlue" text="Join Us" />
          </Link>
        </div>

        <div className=" grid gap-2">
          <p className="lg:text-lg leading-[25px] max-w-2xl">
            When you join Kinplus, you'll be working with some of the most
            innovative brands and ventures in the industry. You'll be immersed
            in a culture that values creativity, personal development, and
            accountability. Most importantly, you'll be on a journey that's both
            fulfilling and impactful. Come join us and make a difference.
          </p>
          <Link to={"/contact-us/training"} className="w-40 block lg:hidden">
            <Button type="customizedBlue" text="Join Us" />
          </Link>
        </div>
      </div>
    </PageLayout>
  );
}
