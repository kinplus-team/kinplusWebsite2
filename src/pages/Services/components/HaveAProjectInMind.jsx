import Button from "../../../components/Button";
import { Link } from "react-router-dom";
import PageLayout from "../../../components/Layout/PageLayout";
import iconbg1 from "../../../assets/training/Icons.png";
import iconbg2 from "../../../assets/training/Icons.png";
import image2 from "../../../assets/our_services/Rectangle 11.png";
import image3 from "../../../assets/our_services/Rectangle 51.png";
import servicesRepo from "../../../repository/Services";
import Text from "../../../components/Text";

export default function HaveAProjectInMind() {
  return (
    <PageLayout>
      {/* header */}
      <div className="grid lg:grid-cols-2 gap-3">
        <Text type="subheading" className="capitalize text-[#082B5B] max-w-lg">
          Have a project in mind? Let's get started here
        </Text>

        <Text type="subparagraph" className="text-[#556987]">
          At Kinplus, we tackle intricate business challenges through
          exceptional strategy, marketing, and product development services, 
        </Text>
      </div>

      {servicesRepo.haveAProjectInMind.map((projectInMind, index) => (
        <div
          key={index}
          className={`grid lg:grid-cols-[20%_38%_1fr] ${
            index == 1
              ? "lg:grid-cols-[33%_auto_300px]"
              : "lg:grid-cols-[20%_38%_1fr]"
          } lg:gap-10 gap-3 lg:py-40 py-10`}
        >
          {/* mobile view */}
          <div className="lg:hidden flex gap-3 items-center">
            <p className="text-6xl font-bold leading-[60px] text-[#082B5B]">
              {projectInMind.id}
            </p>
            <div className="bg-[#082B5B] h-7 w-[0.2rem]"></div>
            <p className="text-[#082B5B] text-2xl font-bold leading-7">
              {projectInMind.title}
            </p>
          </div>

          {/* desktop view */}
          <div
            className={`lg:grid ${
              index != 1 ? "grid-cols-[auto_1fr]" : "grid-cols-[auto_300px]"
            } gap-5 justify-self-end hidden ${index == 1 && "order-last"} `}
          >
            <div
              className={`bg-[#082B5B]  w-[0.2rem] ${index != 1 && "hidden"}`}
            ></div>
            <p className="self-start text-[#082B5B] text-[12.5rem] font-bold mt-[-70px]">
              {projectInMind.id}
            </p>
            <div
              className={`bg-[#082B5B]  w-[0.2rem] ml-10 ${
                index == 1 && "hidden"
              }`}
            ></div>
          </div>

          <div className="max-w-lg grid grid-rows-[auto_auto_1fr] gap-4">
            <Text
              type="subheading"
              className="text-[#082B5B] capitalize hidden lg:block"
            >
              {projectInMind.title}
            </Text>

            <Text type="subparagraph" className="text-[#556987]">
              {projectInMind.description}
            </Text>

            <Link to="/contact-us/services" className="w-52 self-center">
              <Button type="customizedBlue" text="Talk to us" />
            </Link>
          </div>

          {/* mobile view */}
          <div className="py-10 lg:hidden block">
            <div className="relative w-full h-96 ">
              <div className="absolute top-[-100px] left-20 flex ">
                <img src={iconbg2} alt="" className="mt-[-40px]  " />
              </div>
              <div className="absolute top-[5%] mt-[30px] z-[100]">
                <img
                  src={projectInMind.image.image1}
                  alt=""
                  className="w-full"
                />
              </div>
              <div className="absolute z-[999] top-5 left-[5%]">
                <img
                  src={projectInMind.image.image2}
                  alt=""
                  className="w-full"
                />
              </div>
            </div>
          </div>

          <div
            className={`relative w-full hidden lg:block ${
              index == 1 && "order-first"
            }`}
          >
            <div className="absolute top-[-150px] flex ">
              <img src={iconbg1} alt="" className="mt-[-20px] ml-[-40px]" />
              <img src={iconbg2} alt="" className="mt-[-40px] ml-[-80px] " />
            </div>
            <div className="absolute top-[5%] mt-[30px] z-[100]">
              <img src={projectInMind.image.image1} alt="" className="w-full" />
            </div>
            <div className="absolute z-[999] top-5 left-[5%]">
              <img src={projectInMind.image.image2} alt="" className="w-full" />
            </div>
          </div>
        </div>
      ))}
    </PageLayout>
  );
}
