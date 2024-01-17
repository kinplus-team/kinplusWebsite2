
import hardwareImage from "../../../assets/whatWeDo/Hardware_repair.png";
import webDevImage from "../../../assets/whatWeDo/Web_development.png";
import mobileDevImage from "../../../assets/whatWeDo/mobile_development.png";
import WhatWeDoCard from "../WhatWeDoCard/Index";
import { Link } from "react-router-dom";

export default function WhatWeDo() {
  const WhatWeDoCardDetails = [
    {
      image: `${webDevImage}`,
      imageAltText: "Web_development_svg_image",
      title: "Web Development",
      text: "From idea to traction-generating product. We're by your side every step of the way, smoothing out bumps as they come with the intention of gaining retention and increasing Customer Lifetime Value",
    },
    {
      image: `${mobileDevImage}`,
      imageAltText: "Mobile_development_svg_image",
      title: "Mobile Development",
      text: "From idea to traction-generating product. We're by your side every step of the way, smoothing out bumps as they come with the intention of gaining retention and increasing Customer Lifetime Value",
    },
    {
      image: `${hardwareImage}`,
      imageAltText: "Hardware_svg_image",
      title: "Hardware Repairs",
      text: "From idea to traction-generating product. We're by your side every step of the way, smoothing out bumps as they come with the intention of gaining retention and increasing Customer Lifetime Value",
    },
  ];

  const whatWeDoText =
    "From idea to traction-generating product, we're by your side every step of the way, smoothing out bumps as they come with the intention of gaining retention and increasing Customer Lifetime Value.";

  return (
    <section className="flex flex-col gap-5">
      <h6 className="mt-10 p-2 text-[#1877F9] text-[1.5rem]">What We Do</h6>
      <div className="flex flex-col gap-16">
        <div className="flex flex-col md:flex-row gap-5 justify-center md:items-start">
          <h3 className="text-3xl md:text-[2.3rem] font-bold text-blue-950 leading-relaxed md:mr-24 md:w-[50%] p-2">
            We Create Beautiful Products That Captures Heart
          </h3>

          <div className="md:w-[70%] p-2">
            <p className="w-[95%] md:w-[75%] text-[#101010] text-[18px] mb-10 ">
              {whatWeDoText}
            </p>
            <Link to={"/contact-us/services"} className="bg-[#1877F9] hover:bg-[#1153AE] transition duration-200 ease-in-out text-white font-bold py-2 px-4 rounded-[0.5em] w-[8em]">
              Learn More
            </Link>
          </div>
        </div>
        <div>
          <div className="flex flex-col md:flex-row gap-5 justify-center items-center md:space-x-5">
            {WhatWeDoCardDetails.map((WhatWeDoCardDetail, index) => (
              <WhatWeDoCard
                image={WhatWeDoCardDetail.image}
                imageAltText={WhatWeDoCardDetail.imageAltText}
                title={WhatWeDoCardDetail.title}
                text={WhatWeDoCardDetail.text}
                key={WhatWeDoCardDetail.title + index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
