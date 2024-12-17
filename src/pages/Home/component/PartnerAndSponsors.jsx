import React from "react";
import { motion } from "framer-motion";
import PageLayout from "../../../components/Layout/PageLayout";
import Partners from "../../../repository/home/partner";
import Text from "../../../components/Text";

// Animation variants
const fadeInDown = {
  initial: { opacity: 0, y: -50, scale: 0.95 },
  whileInView: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
  transition: { duration: 0.5, ease: "easeOut" },
};

const fadeInUp = {
  initial: { opacity: 0, y: 20, scale: 0.95 },
  whileInView: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
  transition: { duration: 0.5, ease: "easeOut" },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function PartnersAndSponsors() {
  return (
    <PageLayout className="grid gap-3">
      {/* Animated Title */}
      <motion.div {...fadeInDown}>
        <Text
          type="title"
          className="capitalize text-center text-[#082B5B]"
        >
          Our Partners
        </Text>
      </motion.div>

      {/* Animated Partner Logos */}
      <motion.div
        className="flex flex-wrap lg:gap-16 gap-8 items-center max-w-5xl mx-auto justify-center"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        viewport={{ once: true, amount: 0.5 }}
      >
        {Partners.map((partner, i) => (
          <motion.div
            key={i + partner.alt}
            {...fadeInUp}
            loading="lazy"
            className=""
          >
            <img
              src={partner.icon}
              height={partner.height}
              width={partner.width}
              className="object-cover lg:w-28 w-16 h-auto"
              alt={partner.alt}
            />
          </motion.div>
        ))}

        {/* Animated Name */}
        <motion.p
          className="text-[15.403px] lg:text-[23.719px] font-medium leading-[110%]"
          {...fadeInUp}
        >
          Akintunde
          <span className="block font-normal">Oyebode</span>
        </motion.p>
      </motion.div>
    </PageLayout>
  );
}
