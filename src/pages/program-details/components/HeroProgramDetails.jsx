import React from "react";
import cuteFaces from "../../../assets/pages/home/whychooseus/choose_us.webp";
import Button from "../../../components/Button.jsx";
import { Link } from "react-router-dom";
import PageLayout from "../../../components/Layout/PageLayout.jsx";
import { motion } from "framer-motion";
export default function HeroProgramDetails({ title, description }) {
  // animation variants
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

  const slideInTop = {
    initial: { y: -100, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    viewport: { once: true },
    transition: { duration: 0.8 },
  };
  
  const slideInBottom = {
    initial: { y: 50, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    viewport: { once: true },
    transition: { duration: 0.8 },
  };

  return (
    <PageLayout className="grid lg:grid-cols-[auto_1fr] gap-10">
      <motion.div {...slideInLeft}>
        <img
          src={cuteFaces}
          alt="cute_faces"
          className="lg:w-[636px] lg:h-[619px] w-[380px] h-[380px] order-last lg:order-first "
        />
      </motion.div>

      <div className="grid lg:gap-6 gap-3 place-self-center pt-5">
        <motion.div {...slideInTop}>
          <h3 className="lg:text-[65px] text-[45px] text-[#082B5B] font-bold leading-[98.462%] lg:max-w-sm max-w-[250px]">
            {title}
          </h3>
        </motion.div>

        <motion.div {...slideInRight}>
          <p className="p-2 text-[#101010] lg:text-[18px]">{description}</p>
        </motion.div>

        <motion.div
          {...slideInBottom}
          className="lg:w-40 w-36"
        >
          <Link to="/contact-us/training">
            <Button
              type="customizedBlue"
              text="Talk to us"
            />
          </Link>
        </motion.div>
      </div>
    </PageLayout>
  );
}
