import Button from "../../../components/Button";
import { Link } from "react-router-dom";
import CodeImage from "../../../assets/pages/home/whatWeDo/Animation - 1709891375703 (2).gif";
import mobileDev from "../../../assets/pages/home/whatWeDo/Animation - 1709891615959.gif";
import hardwareImage from "../../../assets/pages/home/whatWeDo/Animation - 1709891626344.gif";
import PageLayout from "../../../components/Layout/PageLayout";

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
      <h6 className="text-[#1877F9] leading-[35px] capitalize text-2xl">
        What We Do
      </h6>

      <div className="grid lg:gap-16 gap-5">
        {/* title */}
        <div className="grid lg:grid-cols-[auto_1fr] gap-4 lg:gap-36 lg:py-7 py-6">
          <h3 className="lg:text-[32px] text-2xl max-w-xl text-[#082B5B] font-bold capitalize lg:leading-[38px] leading-[30px]">
            We Create Beautiful Products That Captures Heart
          </h3>

          <div className="grid gap-6 place-self-center">
            <p className="text-[#0F172A] lg:text-[18px] leading-[25px]">
              We craft products that speak to people's emotions. Our designs are
              both functional and beautiful, and they connect with people on a
              deep level. We believe that the best products are the ones that
              touch our hearts.
            </p>

            <Link to="/our-services" className="w-52">
              <Button type="customizedBlue" text="Learn More" />
            </Link>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-5 justify-center items-center text-center py-5">
          {WhatWeDoCardDetails.map((WhatWeDoCardDetail, index) => (
            <div
              key={index}
              className="grid lg:grid-rows-[80px_auto_150px] overflow-hidden grid-rows-[90px_auto_1fr] justify-center items-center gap-3 bg-white rounded-[0.6em] px-8 py-6 shadow-md border-2"
            >
              <img
                src={WhatWeDoCardDetail.image}
                alt={WhatWeDoCardDetail.imageAltText}
                className="h-[100px] w-[100px] place-self-center"
              />
              <h3 className="font-medium  text-[#101010] text-3xl capitalize leading-[50px]">
                {WhatWeDoCardDetail.title}
              </h3>
              <p className="text-lg leading-6 text-center place-self-start">
                {WhatWeDoCardDetail.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
