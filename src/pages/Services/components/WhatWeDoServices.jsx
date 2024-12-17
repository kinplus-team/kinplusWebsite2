import { motion } from "framer-motion";
import PageLayout from "../../../components/Layout/PageLayout";
import icon from "../../../assets/our_services/Mask Group.png";
import Text from "../../../components/Text";
import webDevelopment from "../../../assets/our_services/web_development.webp";
import hardwareRepairs from "../../../assets/our_services/hardware_repair.webp";
import mobileDevelopment from "../../../assets/our_services/mobile_development.webp";
import rectangle from "../../../assets/svg/rectangle.svg";
import smallArrow from "../../../assets/svg/smallArrow.svg";
import rightArrowBold from "../../../assets/svg/right-arrow-bold.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

// Motion Variants for Animations
const cardHoverVariants = {
  hover: { scale: 1.01, transition: { duration: 0.3 } },
};

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// Front of Card Component
function FrontOfCard({ srcImage, text }) {
  return (
    <motion.div
      variants={cardHoverVariants}
      whileHover="hover"
      className=""
    >
      <Link
        to="/contact-us/services"
        className="relative rounded-md grid gap-3 cursor-pointer"
      >
        <img
          src={srcImage}
          alt=""
        />
        <div className="absolute bottom-10  left-0 bg-blue-500 w-[84.71px] h-[72px] flex items-center justify-center">
          <img
            src={smallArrow}
            alt=""
            className="h-7 w-7"
          />
        </div>

        <p className="text-[#101010] text-xl font-bold text-center">{text}</p>
      </Link>
    </motion.div>
  );
}

// Back of Card Component
function BackOfCard({ title, text }) {
  return (
    <Link
      to="/contact-us/services"
      className="bg-[#082B5B] h-[450px] lg:h-auto rounded-[0.3125rem] text-[#F1F1F1] relative px-6"
    >
      <div className="mt-32">
        <p className="text-3xl text-center mt-9 mb-5">{title}</p>
        <p className="text-center text-lg leading-7 max-w-sm mx-auto">{text}</p>
      </div>
      <img
        src={rectangle}
        alt="rectangle"
        className="absolute top-4 right-4 w-[6.6rem] h-[5.6rem]"
        loading="lazy"
      />
      <div className="text-[#F1F1F1] bg-[#1877F9] w-[300px] h-[72px] px-[2em] py-[0.5em] rounded-[0.3125rem] flex gap-3 items-center justify-center absolute bottom-0 left-0">
        <p className="text-xl font-bold leading-6 flex items-center">
          Talk to us
        </p>
        <img
          src={rightArrowBold}
          alt="right arrow"
          className="h-7 w-7"
        />
      </div>
    </Link>
  );
}

export default function WhatWeDoServices() {
  const [isHovered, setIsHovered] = useState("");

  return (
    <PageLayout>
      <motion.div
        initial="hidden"
        animate="visible"
        whileInView={"visible"}
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
        className="grid lg:grid-cols-[500px_1fr_auto] lg:gap-5 items-center"
      >
        <div className="grid grid-cols-2">
          <Text
            type="subheading"
            className="text-[#082B5B]"
          >
            What we do
          </Text>
          <img
            src={icon}
            alt="icon"
            className="block lg:hidden w-[50px] place-self-end"
          />
        </div>
        <Text
          type="subparagraph"
          className="text-[#101010]"
        >
          We'll expertly manage the technical aspects, allowing you to focus on
          bringing your solutions to the market and engaging potential
          investors. Collaborate with our team for seamless execution.
        </Text>
        <div className="hidden lg:block">
          <img
            src={icon}
            alt=""
          />
        </div>
      </motion.div>

      {/* Cards Section */}
      <div className="grid lg:grid-cols-3 gap-5 px-1 lg:px-0 pt-10">
        {[
          {
            name: "webDevelopment",
            title: "Web Development",
            text: "We help you establish a strong online presence...",
          },
          {
            name: "mobileDevelopment",
            title: "Mobile Development",
            text: "At Kinplus, we excel in mobile development...",
          },
          {
            name: "hardwareRepairs",
            title: "Hardware Repairs",
            text: "We get your tech back up and running smoothly...",
          },
        ].map((service) => (
          <motion.div
            key={service.name}
            className="rounded-md grid gap-3"
            onMouseEnter={() => setIsHovered(service.name)}
            onMouseLeave={() => setIsHovered("")}
            variants={cardHoverVariants}
            whileHover="hover"
          >
            {isHovered === service.name ? (
              <BackOfCard
                title={service.title}
                text={service.text}
              />
            ) : (
              <FrontOfCard
                srcImage={
                  service.name === "webDevelopment"
                    ? webDevelopment
                    : service.name === "mobileDevelopment"
                    ? mobileDevelopment
                    : hardwareRepairs
                }
                text={service.title}
              />
            )}
          </motion.div>
        ))}
      </div>
    </PageLayout>
  );
}
