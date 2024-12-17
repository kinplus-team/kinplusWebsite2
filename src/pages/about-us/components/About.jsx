import React from "react";
import { motion } from "framer-motion";
import peopleLookingAtLaptop from "../../../assets/AboutUs/NewImages/three-people-looking-at-laptop.webp";
import peopleLookingAtLaptopMobile from "../../../assets/looking_at_laptop.png";
import Text from "../../../components/Text";

export default function About() {
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
    hidden: { opacity: 0, x: -30 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  // Animation variants for image section
  const imageVariants = {
    hidden: { opacity: 0, scale: 1.1 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut",
      },
    },
  };

  // Overlay animation variant
  const overlayVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 0.4,
      transition: {
        duration: 1,
        delay: 0.5,
      },
    },
  };

  return (
    <div className="grid lg:grid-cols-2 bg-[#094FAF]">
      <motion.div
        className="grid gap-4 content-center lg:px-10 px-5 pt-28 pb-10 -mt-[4rem] lg:mt-0"
        variants={textContainerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.div variants={textItemVariants}>
          <Text
            type="subheading"
            className="text-[#f1f1f1] capitalize"
          >
            get to know kinplus
          </Text>
        </motion.div>

        <div className="grid gap-10">
          <motion.div variants={textItemVariants}>
            <Text
              type="paragraph"
              className="text-[#f1f1f1]"
            >
              Kinplus Technologies is a software development company with a
              focus on delivering scalable applications and software to
              businesses, organizations, and individuals. We're driven by a
              passion for innovation and customer satisfaction, and we deliver
              our products on time and within budget.
            </Text>
          </motion.div>

          <motion.div variants={textItemVariants}>
            <Text
              type="paragraph"
              className="text-[#f1f1f1]"
            >
              We offer a wide range of services including software development,
              mobile applications, and shell/console applications. We're also
              dedicated to empowering young people through our training and
              internship programs. If you're looking for a team of innovative
              tech professionals who are dedicated to delivering results, look
              no further than Kinplus Technologies.
            </Text>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        style={{
          backgroundImage: `url(${peopleLookingAtLaptop})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="relative h-full hidden lg:block"
        variants={imageVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.div
          className="absolute top-0 h-full w-full bg-black"
          variants={overlayVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        ></motion.div>
      </motion.div>

      <motion.div
        style={{
          backgroundImage: `url(${peopleLookingAtLaptopMobile})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="relative h-[350px] block lg:hidden"
        variants={imageVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.div
          className="absolute top-0 h-full w-full bg-black"
          variants={overlayVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        ></motion.div>
      </motion.div>
    </div>
  );
}
