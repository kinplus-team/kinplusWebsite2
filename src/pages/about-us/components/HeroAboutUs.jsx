import React from "react";
import { motion } from "framer-motion";
import guyLookingAtLaptop from "../../../assets/AboutUs/NewImages/guy-looking-at-laptop.webp";
import girlLookingAtLaptop from "../../../assets/AboutUs/NewImages/girl-looking-at-laptop.webp";
import lookingAtLaptop from "../../../assets/AboutUs/NewImages/looking-at-laptop.webp";
import Text from "../../../components/Text";
import PageLayout from "../../../components/Layout/PageLayout";

export default function HeroAbout() {
  // Animation variants for text content
  const textContainerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const textItemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  // Animation variants for images
  const imageContainerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const imageItemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <PageLayout
      heroSpacing
      className="pb-16 pt-28"
    >
      <motion.div
        id="target-section"
        className="grid lg:grid-cols-[43%_1fr] lg:gap-[90px] gap-10"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.div
          className="grid grid-cols-3 gap-2 order-last lg:order-first"
          variants={imageContainerVariants}
        >
          <motion.div
            variants={imageItemVariants}
            style={{
              backgroundImage: `url(${guyLookingAtLaptop})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              borderRadius: "15px",
              height: "384px",
              width: "100%",
              marginTop: "80px",
            }}
            loading="lazy"
            className="relative"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute top-0 h-full w-full bg-black opacity-40 rounded-2xl"></div>
          </motion.div>

          <motion.div
            variants={imageItemVariants}
            style={{
              backgroundImage: `url(${girlLookingAtLaptop})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              borderRadius: "15px",
              height: "384px",
              width: "100%",
              alignSelf: "start",
            }}
            loading="lazy"
            className="relative"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute top-0 h-full w-full bg-black opacity-40 rounded-2xl"></div>
          </motion.div>

          <motion.div
            variants={imageItemVariants}
            style={{
              backgroundImage: `url(${lookingAtLaptop})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              borderRadius: "15px",
              height: "384px",
              width: "100%",
              marginTop: "80px",
            }}
            loading="lazy"
            className="relative"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute top-0 h-full w-full bg-black opacity-40 rounded-2xl"></div>
          </motion.div>
        </motion.div>

        <motion.div
          className="self-center grid lg:gap-2 gap-3"
          variants={textContainerVariants}
        >
          <motion.div variants={textItemVariants}>
            <Text
              type="title"
              className="text-[#1877F9] capitalize"
            >
              Who We Are
            </Text>
          </motion.div>

          <motion.div variants={textItemVariants}>
            <Text
              type="heading"
              className="text-[#082B5B] text-[35px] lg:text-[52px] capitalize"
            >
              About Kinplus
            </Text>
          </motion.div>

          <motion.div variants={textItemVariants}>
            <Text
              type="subparagraph"
              className="text-[#101010]"
            >
              We are a team of energetic and innovative developers and
              designers, who are passionate about implementing customer needs
              with an approach focused on satisfaction and timely delivery.
            </Text>
          </motion.div>
        </motion.div>
      </motion.div>
    </PageLayout>
  );
}
