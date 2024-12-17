import React from "react";
import { motion } from "framer-motion";
import ChooseUsImages from "../../../assets/pages/home/whychooseus/choose_us.webp";
import Button from "../../../components/Button";
import PageLayout from "../../../components/Layout/PageLayout";
import { Link } from "react-router-dom";
import Text from "../../../components/Text";

// Animation Variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: {
    opacity: 1,
    y: 0,
  },
  transition: { duration: 0.6, ease: "easeOut" },
};

const fadeInLeft = {
  initial: { opacity: 0, x: -20 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const staggerContainer = {
  animate: {
    transition: { staggerChildren: 0.2 },
  },
};

export default function WhyChooseUsHome() {
  return (
    <PageLayout>
      {/* Animated Title */}
      <motion.div {...fadeInUp}>
        <Text
          type="title"
          className="text-[#1877F9] capitalize"
        >
          Why Choose Us
        </Text>
      </motion.div>

      {/* Content with Staggered Animations */}
      <motion.div
        className="grid lg:grid-cols-[auto_1fr] gap-10 lg:gap-24 lg:py-8 pt-3"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        {/* Image Section */}
        <motion.div
          {...fadeInLeft}
          className="lg:w-[636px] lg:h-[619px] w-[95% min-w-[300px] mx-auto h-[380px]"
        >
          <img
            src={ChooseUsImages}
            width={646}
            height={632}
            loading="lazy"
            alt="why choose us"
            className="object-cover w-full h-full order-last lg:order-first"
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          variants={staggerContainer}
          className="grid lg:gap-10 gap-6 place-self-center"
        >
          <motion.div {...fadeInUp}>
            <Text
              type="subheading"
              className="lg:capitalize text-[#082B5B]"
            >
              We excel at solving complex business challenges through strategic
              marketing and product development, driving success for our
              clients.
            </Text>
          </motion.div>

          <motion.div {...fadeInUp}>
            <Text
              type="subparagraph"
              className="text-[#556987]"
            >
              Here at Kinplus, we value excellence, innovation, and faith-based
              values. We're on a mission to empower people and businesses with
              the best possible solutions. Our guiding principles are what make
              us who we are. Let us share our story with you.
            </Text>
          </motion.div>

          <motion.div {...fadeInUp}>
            <Link
              to="/about-us"
              className="w-40"
            >
              <Button
                type="customizedBlue"
                text="Meet Kinplus"
              />
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </PageLayout>
  );
}
