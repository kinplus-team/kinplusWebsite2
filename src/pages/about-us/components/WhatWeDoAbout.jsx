import React from "react";
import { motion } from "framer-motion";
import PageLayout from "../../../components/Layout/PageLayout";
import raptLaptop from "../../../assets/AboutUs/NewImages/raptly-staring-at-laptop.webp";
import twoGirlsLaptop from "../../../assets/AboutUs/NewImages/two-girls-staring-at-laptop.webp";
import busyLaptop from "../../../assets/AboutUs/NewImages/busy-on-the-laptop.webp";
import Text from "../../../components/Text";

export default function WhatWeDoAbout() {
  // Variants for text animations
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // Variants for image animations
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  // Hover animation for images
  const hoverVariants = {
    hover: {
      scale: 1.01,
      transition: { duration: 0.3 },
    },
  };

  // Stagger children animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <PageLayout>
      <motion.div
        className="grid lg:grid-cols-[43%_1fr] lg:gap-[90px] gap-10 -mt-10 lg:mt-0"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.div
          className="grid grid-rows-[auto_auto_1fr] gap-6 lg:gap-3 place-self-center"
          variants={containerVariants}
        >
          <motion.div variants={textVariants}>
            <Text
              type="title"
              className="text-[#1877F9] capitalize"
            >
              What We Do
            </Text>
          </motion.div>

          <motion.div variants={textVariants}>
            <Text
              type="subheading"
              className="text-[#082B5B] text-[35px] lg:text-[44px] leading-[114.286%] lg:capitalize"
            >
              We Create beautiful products that capture the heart
            </Text>
          </motion.div>

          <motion.div variants={textVariants}>
            <Text
              type="subparagraph"
              className="text-[#101010]"
            >
              We're here to support you through the entire process of product
              development, from ideation to launch and beyond. We'll help you
              navigate any challenge that come up along the way, and we're
              always focused on improving customer retention and increasing
              Customer Lifetime Value. We're not just a service provider, we're
              a partner in your success.
            </Text>
          </motion.div>
        </motion.div>

        <motion.div
          className="grid gap-4"
          variants={containerVariants}
        >
          <motion.div
            className="relative md:w-[80%] w-full"
            variants={hoverVariants}
            whileHover="hover"
          >
            <motion.div
              style={{
                backgroundImage: `url(${raptLaptop})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                borderRadius: "20px",
                width: "100%",
                height: "288px",
              }}
              loading="lazy"
              className="relative"
            />
            <motion.div
              className="absolute top-0 h-full w-full z-30 bg-black opacity-30 rounded-[20px]"
              whileHover={{ opacity: 0.1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>

          <motion.div
            className="grid grid-cols-2 gap-3"
            variants={containerVariants}
          >
            <motion.div
              className="relative"
              variants={hoverVariants}
              whileHover="hover"
            >
              <motion.div
                style={{
                  backgroundImage: `url(${twoGirlsLaptop})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  borderRadius: "20px",
                  width: "100%",
                  height: "288px",
                }}
                loading="lazy"
                className="relative "
              />
              <motion.div
                className="absolute top-0 h-full w-full bg-black opacity-30 rounded-[20px]"
                whileHover={{ opacity: 0.1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>

            <motion.div
              className="relative"
              variants={hoverVariants}
              whileHover="hover"
            >
              <motion.div
                style={{
                  backgroundImage: `url(${busyLaptop})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  borderRadius: "20px",
                  width: "100%",
                  height: "288px",
                }}
                loading="lazy"
                className="relative"
              />
              <motion.div
                className="absolute top-0 h-full w-full bg-black opacity-30 rounded-[20px]"
                whileHover={{ opacity: 0.1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </PageLayout>
  );
}
