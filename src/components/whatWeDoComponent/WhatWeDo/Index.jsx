
import webDevImage from "../../../assets/whatWeDo/Web_development.png";
import mobileDevImage from "../../../assets/whatWeDo/mobile_development.png";
import WhatWeDoCard from "../WhatWeDoCard/Index";
import { Link } from "react-router-dom";
import CodeImage from "../../../assets/whatWeDo/Animation - 1709891375703 (2).gif"
import mobileDev from "../../../assets/whatWeDo/Animation - 1709891615959.gif"
import hardwareImage from "../../../assets/whatWeDo/Animation - 1709891626344.gif"

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

  const whatWeDoText =
    "We craft products that speak to people's emotions. Our designs are both functional and beautiful, and they connect with people on a deep level. We believe that the best products are the ones that touch our hearts";

  return (
    <section className="flex flex-col gap-5">
      <h6 className="mt-10 p-2 text-[#1877F9] text-[1.5rem]">What We Do</h6>
      <div className="flex flex-col gap-16">
        <div className="flex flex-col md:flex-row gap-5 justify-center md:items-start ">
          <h3 className="text-3xl md:text-[2.4rem] font-bold text-blue-950 leading-snug md:mr-24 md:w-[70%] p-2 ">
            We Create Beautiful Products That Captures Heart
          </h3>

          <div className="md:w-[62%] p-2">
            <p className="w-[100%] md:w-[95%] text-[#101010] text-[17px] mb-10 leading-normal font-medium">
              {whatWeDoText}
            </p>
            <Link to={"/contact-us/services"} className="inline-block bg-[#1877F9] hover:bg-[#1153AE] transition duration-200 ease-in-out text-white font-bold py-4 px-10 rounded-[0.5em]">
              Learn More
            </Link>
          </div>
        </div>
        <div>
          <div className="flex flex-col md:flex-row gap-5 justify-center items-center md:space-x-5 text-center">
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
