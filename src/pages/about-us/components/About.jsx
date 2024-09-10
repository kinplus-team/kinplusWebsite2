import React from "react";
import peopleLookingAtLaptop from "../../../assets/AboutUs/NewImages/three-people-looking-at-laptop.webp";
import peopleLookingAtLaptopMobile from "../../../assets/looking_at_laptop.png";
import Text from "../../../components/Text";

export default function About() {
  return (
    <div className="grid lg:grid-cols-2 bg-[#094FAF]">
      <div className="grid gap-4 content-center lg:px-10 px-5 pt-28 pb-10">
        <Text type="subheading" className="text-[#f1f1f1] capitalize">
          What is Kinplus?
        </Text>

        <div className="grid gap-3">
          <Text type="paragraph" className="text-[#f1f1f1]">
            Kinplus Technologies is a software development company with a focus
            on delivering scalable applications and software to businesses,
            organizations, and individuals. We're driven by a passion for
            innovation and customer satisfaction, and we deliver our products on
            time and within budget.
          </Text>

          <Text type="paragraph" className="text-[#f1f1f1]">
            We offer a wide range of services including software development,
            mobile applications, and shell/console applications. We're also
            dedicated to empowering young people through our training and
            internship programs. If you're looking for a team of innovative tech
            professionals who are dedicated to delivering results, look no
            further than Kinplus Technologies.
          </Text>
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url(${peopleLookingAtLaptop})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="relative h-full hidden lg:block "
      >
        <div className="absolute top-0 h-full w-full bg-black opacity-40"></div>
      </div>

      <div
        style={{
          backgroundImage: `url(${peopleLookingAtLaptopMobile})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="relative h-[350px] block lg:hidden"
      >
        <div className="absolute top-0 h-full w-full bg-black opacity-40"></div>
      </div>
    </div>
  );
}
