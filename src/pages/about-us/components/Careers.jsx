import React from "react";
import { motion } from "framer-motion";
import PageLayout from "../../../components/Layout/PageLayout";
import Button from "../../../components/Button";
import { Link } from "react-router-dom";
import Text from "../../../components/Text";

export default function Careers() {
  // Main container animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  // Left side content animation variants
  const leftContentVariants = {
    hidden: {
      x: -50,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        staggerChildren: 0.2,
      },
    },
  };

  // Right side content animation variants
  const rightContentVariants = {
    hidden: {
      x: 50,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  // Text animation variants
  const textVariants = {
    hidden: {
      y: 20,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  // Button animation variants
  const buttonVariants = {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  return (
    <PageLayout>
      <motion.div
        className="grid lg:grid-cols-[43%_1fr] lg:gap-[90px] gap-6 items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
      >
        <motion.div
          className="grid gap-3"
          variants={leftContentVariants}
        >
          <motion.div variants={textVariants}>
            <Text
              type="title"
              className="text-[#1877F9]"
            >
              Careers
            </Text>
          </motion.div>

          <motion.div variants={textVariants}>
            <Text
              type="subheading"
              className="text-[#082B5B] text-[35px] lg:text-[44px] leading-[114.286%] lg:capitalize max-w-md lg:max-w-lg"
            >
              Join our Ever-Growing team at Kinplus
            </Text>
          </motion.div>

          <motion.div
            className="w-40 hidden lg:block"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <Link to={"/careers"}>
              <Button
                type="customizedBlue"
                text="Join Us"
              />
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="grid gap-2"
          variants={rightContentVariants}
        >
          <motion.div variants={textVariants}>
            <Text
              type="subparagraph"
              className="text-[#101010]"
            >
              When you join Kinplus, you'll be working with some of the most
              innovative brands and ventures in the industry. You'll be immersed
              in a culture that values creativity, personal development, and
              accountability. Most importantly, you'll be on a journey that's
              both fulfilling and impactful. Come join us and make a difference.
            </Text>
          </motion.div>

          <motion.div
            className="w-40 block lg:hidden"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <Link to={"/careers"}>
              <Button
                type="customizedBlue"
                text="Join Us"
              />
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </PageLayout>
  );
}
