import React from "react";
import { motion } from "framer-motion";
import traineeListen from "../../../assets/AboutUs/NewImages/trainees-listening.webp";
import traineeListen2 from "../../../assets/AboutUs/NewImages/three-people-looking-at-laptop.webp";
import workPc from "../../../assets/AboutUs/NewImages/working-on-pc-1.webp";
import workPc2 from "../../../assets/AboutUs/NewImages/working-on-pc-2.webp";
import idea from "../../../assets/AboutUs/idea.jpeg";
import { Link } from "react-router-dom";
import Button from "../../../components/Button";
import Text from "../../../components/Text";

export default function NextProject() {
  // Main content animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  // Image animation variants
  const imageVariants = {
    hidden: {
      scale: 1.2,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.01,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  // Overlay animation variants
  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 0.3 },
    hover: { opacity: 0.1 },
  };

  // Content animation variants
  const contentVariants = {
    hidden: {
      x: 50,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  };

  // Bottom images container variants
  const bottomImagesVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <motion.div
      className="lg:pt-20 lg:pb-2 py-5 bg-[#f1f3f9]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <motion.div
        className="grid lg:grid-cols-2 lg:gap-2 overflow-hidden"
        variants={containerVariants}
      >
        <motion.div
          className="relative overflow-hidden"
          variants={imageVariants}
          whileHover="hover"
        >
          <motion.img
            src={traineeListen}
            className="w-full h-full"
            variants={imageVariants}
          />
          <motion.div
            className="absolute top-0 h-full w-full z-30 bg-black bg-opacity-35"
            variants={overlayVariants}
          />
        </motion.div>

        <div className="h-full text-[#ffffff] bg-[#1877F9] grid content-center lg:py-0 py-10">
          <motion.div
            className="lg:max-w-xl max-w-xs text-center lg:text-left mx-auto grid gap-4"
            variants={contentVariants}
          >
            <motion.div variants={contentVariants}>
              <Text
                type="heading"
                className="text-[#ffff]"
              >
                Ready for your next project?
              </Text>
            </motion.div>

            <motion.div variants={contentVariants}>
              <Text
                type="subparagraph"
                className="text-[#ffff]"
              >
                We design, build, and scale platforms for forward-thinking
                experiences, allowing companies to focus on measurable outcomes.
              </Text>
            </motion.div>

            <motion.div
              variants={contentVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="lg:place-self-start place-self-center"
            >
              <Link to={"/contact-us/services"}>
                <div className="w-40">
                  <Button
                    type="customizedWhite"
                    text="Talk to us"
                  />
                </div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* bottom images */}
      <motion.div
        className="grid grid-cols-[30%_19.2%_30%_1fr] gap-2 my-2"
        variants={bottomImagesVariants}
      >
        {[idea, traineeListen2, workPc, workPc2].map((image, index) => (
          <motion.div
            key={index}
            style={{
              backgroundImage: `url(${image})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              height: "210px",
              width: "100%",
            }}
            className="relative overflow-hidden"
            variants={imageVariants}
            whileHover="hover"
          >
            <motion.div
              className="absolute top-0 h-full w-full z-30 bg-black bg-opacity-35"
              variants={overlayVariants}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
