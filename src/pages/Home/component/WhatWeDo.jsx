import Button from "../../../components/Button";
import { Link } from "react-router-dom";
import CodeImage from "../../../assets/pages/home/whatWeDo/Animation - 1709891375703 (2).gif";
import mobileDev from "../../../assets/pages/home/whatWeDo/Animation - 1709891615959.gif";
import hardwareImage from "../../../assets/pages/home/whatWeDo/Animation - 1709891626344.gif";
import PageLayout from "../../../components/Layout/PageLayout";
import Text from "../../../components/Text";

export default function WhatWeDo() {
  const WhatWeDoCardDetails = [
    {
      image: `${CodeImage}`,
      imageAltText: "Web_development_svg_image",
      title: "Web Development",
      text: "We help you unlock the power of the web. We create websites that are beautiful, functional, and aligned with your brand. With our expertise, we'll transform your digital presence and help you reach new heights.",
    },
    {
      image: `${mobileDev}`,
      imageAltText: "Mobile_development_svg_image",
      title: "Mobile Development",
      text: "We bring your mobile vision to life. We create user-friendly and impactful mobile apps that elevate your brand and increase your reach. Our team has the skills and experience to take your digital presence to the next level.",
    },
    {
      image: `${hardwareImage}`,
      imageAltText: "Hardware_svg_image",
      title: "Hardware Repairs",
      text: "We'll get your hardware working like new. Our repair experts are skilled in fixing a range of devices, and we take pride in delivering top-quality results. When you trust us with your repairs, you'll get the best possible performance from your devices.",
    },
  ];

  return (
    <PageLayout>
      <Text type="title" className="text-[#1877F9] capitalize">
        What We Do
      </Text>

      <div className="grid lg:gap-16 gap-5">
        {/* title */}
        <div className="grid lg:grid-cols-[auto_1fr] gap-4 lg:gap-36 lg:py-8 pt-3">
          <Text
            type="subheading"
            className="capitalize text-[#082B5B] max-w-xl"
          >
            We create beautiful product that captures the heart
          </Text>

          <div className="grid gap-6 place-self-center">
            <Text type="subparagraph" className="text-[#556987]">
              We craft products that speak to people's emotions. Our designs are
              both functional and beautiful, and they connect with people on a
              deep level. We believe that the best products are the ones that
              touch our hearts.
            </Text>

            <Link to="/our-services" className="w-40">
              <Button type="customizedBlue" text="Learn More" />
            </Link>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-5 justify-center items-center text-center py-5">
          {WhatWeDoCardDetails.map((WhatWeDoCardDetail, index) => (
            <div
              key={index}
              className="grid lg:grid-rows-[80px_auto_160px] overflow-hidden grid-rows-[90px_auto_1fr] justify-center items-center gap-5 bg-white rounded-[0.6em] lg:px-8 px-3 py-6 shadow-md border-2"
            >
              <img
                src={WhatWeDoCardDetail.image}
                alt={WhatWeDoCardDetail.imageAltText}
                className="h-[100px] w-[100px] place-self-center"
              />
              <h3 className="font-medium text-[#2A3342] lg:text-[32px] text-[28px] capitalize leading-normal">
                {WhatWeDoCardDetail.title}
              </h3>

              <Text
                type="subparagraph"
                className="text-[#556987] place-self-center"
              >
                {WhatWeDoCardDetail.text}
              </Text>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
