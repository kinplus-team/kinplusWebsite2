import { Link } from "react-router-dom";

import Button from "../../../components/Button.jsx";
import curvedBackground from "../../../assets/svg/career/curved-background.svg";
import heroImg from "../../../assets/workshop/hero.png";
import Text from "../../../components/Text.jsx";
import { motion } from "framer-motion";

export default function HeroWorkshop() {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const slideInLeft = {
    initial: { x: -100, opacity: 0 },
    whileInView: { x: 0, opacity: 1 },
    viewport: { once: true },
    transition: { duration: 0.8 },
  };

  const slideInRight = {
    initial: { x: 100, opacity: 0 },
    whileInView: { x: 0, opacity: 1 },
    viewport: { once: true },
    transition: { duration: 0.8 },
  };

  const slideInBottom = {
    initial: { y: -100, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    viewport: { once: true },
    transition: { duration: 0.8 },
  };

  const slideInUp = {
    initial: { y: 100, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    viewport: { once: true},
    transition: { duration: 0.8 },
  };

  return (
    <motion.div
    >
      <div
        id="target-section"
        className="bg-[#082B5B] "
      >
        <div className=" grid lg:grid-cols-[auto_1fr] relative gap-4 lg:pt-48 pt-28 pb-5 lg:px-[30px] px-4 max-w-[100rem] mx-auto">
          <div className="grid gap-4 max-w-2xl">
            <motion.div {...slideInLeft}>
              <Text
                type="heading"
                className="text-[#fff] text-[35px] lg:text-[65px] capitalize"
              >
                Be a part of our sponsored and partnered training Workshops
              </Text>
            </motion.div>
            <motion.div {...slideInBottom}>
              <Text
                type="subparagraph"
                className="text-[#8896AB] max-w-lg"
              >
                Join our sponsored and partnered training workshop programs.
                Grow your skills and knowledge in a supportive environment
              </Text>
            </motion.div>

            <motion.div
              className="w-80 mb-4"
              {...slideInRight}
            >
              <Button
                type="customizedWhite"
                text="Join Ongoing Workshop"
                className="rounded-md"
                disabled={true}
              />
            </motion.div>

            <div className="lg:px-[54px] px-4 lg:hidden block ml-6">
              <Link
                to="/sponsor-or-partner-with-us"
                className="text-base lg:text-lg font-bold underline text-[#fff] cursor-pointer"
              >
                <p>Sponsor or Partner with us</p>
              </Link>
            </div>
          </div>
          <motion.div {...slideInUp} className="relative h-32 lg:h-auto lg:w-auto mb-10 lg:mb-0">
            <div className="lg:w-[554px] lg:h-[464px] mx-auto absolute lg:block top-[20px] px-5 z-20 lg:place-self-start ">
              <img src={heroImg} />
            </div>
          </motion.div>
        </div>
      </div>
      <div className="bg-[#f1f3f9] relative ">
        <div className="lg:px-[54px] px-4 max-w-[100rem] mx-auto lg:block hidden">
          <Link
            to="/sponsor-or-partner-with-us"
            className="text-base lg:text-lg font-bold underline text-[#fff] absolute top-0  z-10 lg:ml-6"
          >
            <p>Sponsor or Partner with us</p>
          </Link>
        </div>

        <img src={curvedBackground} />
      </div>
    </motion.div>
  );
}
