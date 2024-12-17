import React from "react";
import { motion } from "framer-motion";
import heroImg from "../../../assets/career/new_image_hero.webp";
import heroImgMobile from "../../../assets/career/new_image_hero_mobile.webp";
import target from "../../../assets/career/target.webp";
import Text from "../../../components/Text.jsx";

export default function HeroCareers() {
  const textContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <div id="target-section">
      <div className="bg-[#082B5B] lg:pt-48 pb-10 lg:px-[30px] px-4">
        {/* Desktop view */}
        <div className="lg:grid hidden grid-cols-2 gap-10 items-center">
          <motion.div
            className="flex flex-col gap-4 max-w-4xl mx-auto text-center lg:text-left"
            variants={textContainerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={textVariants}>
              <Text
                type="heading"
                className="text-[#f1f1f1] text-[35px] lg:text-[65px] capitalize"
              >
                Join our team to help shape the future of development.
              </Text>
            </motion.div>

            <motion.div variants={textVariants}>
              <Text
                type="subparagraph"
                className="text-[#fff] max-w-lg mx-auto lg:mx-0"
              >
                At Kinplus, we're building a culture of innovation, teamwork,
                and collaboration.
              </Text>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative flex justify-center lg:justify-end"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Target image positioned behind */}
            <motion.img
              src={target}
              className="absolute lg:h-[450px] w-auto h-[250px] right-[-40px] top-1/2 -translate-y-1/2 z-0"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            />

            {/* Hero image container */}
            <motion.div
              className="relative w-4/5 lg:w-full h-96 lg:h-[500px] z-10"
              whileHover={{ scale: 1 }}
            >
              <motion.div
                className="hidden lg:block w-full h-full rounded-lg bg-cover bg-center bg-no-repeat border-y-[7px] border-white"
                style={{
                  backgroundImage: `url(${heroImg})`,
                }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Mobile screen */}
        <div className="grid lg:hidden grid-rows-[1fr_auto] pt-32 gap-10 items-center">
          <motion.div
            className="flex flex-col gap-4 max-w-4xl mx-auto text-center lg:text-left"
            variants={textContainerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={textVariants}>
              <Text
                type="heading"
                className="text-[#f1f1f1] text-[35px] lg:text-[52px] mb-4 lg:mb-0 capitalize"
              >
                Join our team to help shape the future of development.
              </Text>
            </motion.div>

            <motion.div variants={textVariants}>
              <Text
                type="subparagraph"
                className="text-[#fff] max-w-80 mx-auto lg:mx-0"
              >
                At Kinplus, we're building a culture of innovation, teamwork,
                and collaboration.
              </Text>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative w-full flex justify-center lg:justify-end"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Target image positioned behind for mobile */}
            <motion.img
              src={target}
              className="absolute h-[250px] w-auto right-[-30px] lg:top-1/2 top-[270px] -translate-y-1/2 z-0"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            />

            {/* Mobile hero image */}
            <div className="relative w-full lg:w-full h-96 lg:h-[400px] z-10">
              <motion.div
                className="lg:hidden absolute top-0 w-full h-full rounded-lg bg-cover bg-no-repeat bg-center"
                style={{
                  backgroundImage: `url(${heroImgMobile})`,
                }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
