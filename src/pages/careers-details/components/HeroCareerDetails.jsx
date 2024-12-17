import React from "react";
import { motion } from "framer-motion";
import kinplusLogo from "../../../assets/svg/career-details/kinplusLogo.svg";
import PageLayout from "../../../components/Layout/PageLayout";
import location from "../../../assets/svg/career-details/location.svg";

export default function HeroCareerDetails() {
  // Animation variants for container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  // Animation variants for children
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  // Special animation for the logo
  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  // Animation for the location container
  const locationVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <PageLayout className="pt-36 lg:pt-44">
      <motion.div
        id="target-section"
        className="grid gap-2 justify-center text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          variants={logoVariants}
          whileHover={{
            scale: 1.1,
            rotate: [0, -10, 10, -10, 0],
            transition: { duration: 0.5 },
          }}
        >
          <img
            src={kinplusLogo}
            className="w-14 h-14 mx-auto"
            alt="Kinplus Logo"
          />
        </motion.div>

        <motion.h3
          variants={itemVariants}
          className="text-[#0D0C22] lg:text-4xl text-[28px] font-bold lg:leading-[52px] leading-9 capitalize"
        >
          Senior Product Designer
        </motion.h3>

        <motion.p
          variants={itemVariants}
          className="lg:text-xl text-lg text-[#0D0C22] font-bold lg:leading-6 leading-7 capitalize"
        >
          Design - Full time
        </motion.p>

        <motion.div
          className="flex gap-2 justify-center items-center"
          variants={locationVariants}
        >
          <motion.img
            src={location}
            className="w-5 h-5"
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.2 }}
          />
          <motion.p
            className="leading-6 text-[#0D0C22]"
            whileHover={{ x: 3 }}
            transition={{ duration: 0.2 }}
          >
            Ado, Ekiti, Nigeria
          </motion.p>
        </motion.div>
      </motion.div>
    </PageLayout>
  );
}
