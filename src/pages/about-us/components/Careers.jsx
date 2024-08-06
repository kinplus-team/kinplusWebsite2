import React from "react";
import PageLayout from "../../../components/Layout/PageLayout";
import Button from "../../../components/Button";
import { Link } from "react-router-dom";
import Text from "../../../components/Text";

export default function Careers() {
  return (
    <PageLayout>
      <div className="grid lg:grid-cols-[43%_1fr] lg:gap-[90px] gap-4 items-center">
        <div className="grid gap-3">
          <Text type="title" className="text-[#1877F9]">
            Careers
          </Text>

          <Text
            type="subheading"
            className="text-[#082B5B] capitalize max-w-md"
          >
            Join our Ever-Growing team at Kinplus
          </Text>

          <Link to={"/careers"} className="w-40 hidden lg:block">
            <Button type="customizedBlue" text="Join Us" />
          </Link>
        </div>

        <div className=" grid gap-2">
          <Text type="subparagraph" className="text-[#556987]">
            When you join Kinplus, you'll be working with some of the most
            innovative brands and ventures in the industry. You'll be immersed
            in a culture that values creativity, personal development, and
            accountability. Most importantly, you'll be on a journey that's both
            fulfilling and impactful. Come join us and make a difference.
          </Text>

          <Link to={"/careers"} className="w-40 block lg:hidden">
            <Button type="customizedBlue" text="Join Us" />
          </Link>
        </div>
      </div>
    </PageLayout>
  );
}
