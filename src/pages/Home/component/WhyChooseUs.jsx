import React from "react";
import ChooseUsImages from "../../../assets/pages/home/whychooseus/choose_us.png";
import Button from "../../../components/Button";
import PageLayout from "../../../components/Layout/PageLayout";
import { Link } from "react-router-dom";
import Text from "../../../components/Text";

export default function WhyChooseUs() {
  return (
    <PageLayout>
      <Text type="title" className="text-[#1877F9] capitalize">
        Why Choose Us
      </Text>

      <div className="grid lg:grid-cols-[auto_1fr] gap-10 lg:gap-24 lg:py-8 pt-3">
        <img
          src={ChooseUsImages}
          alt="why choose us"
          className="lg:w-[636px] lg:h-[619px] w-[380px] h-[380px] order-last lg:order-first "
        />

        <div className="grid lg:gap-10 gap-6 place-self-center">
          <Text type="subheading" className="lg:capitalize text-[#082B5B]">
            We excel at solving complex business challenges through strategic
            marketing and product development, driving success for our clients.
          </Text>

          <Text type="subparagraph" className="text-[#556987]">
            Here at Kinplus, we value excellence, innovation, and faith-based
            values. We're on a mission to empower people and businesses with the
            best possible solutions. Our guiding principles are what make us who
            we are. Let us share our story with you.
          </Text>

          <Link to="/about-us" className="w-40">
            <Button type="customizedBlue" text="Meet Kinplus" />
          </Link>
        </div>
      </div>
    </PageLayout>
  );
}
