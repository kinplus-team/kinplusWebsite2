import React from "react";
import PricingCard from "../../../components/cards/Pricing/Pricing.jsx";
import PageLayout from "../../../components/Layout/PageLayout.jsx";
import { motion } from "framer-motion";

export default function Pricing({ pricingCardDetails }) {
  // Animation variants
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
    initial: { y: -50, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    viewport: { once: true },
    transition: { duration: 0.8 },
  };

  return (
    <PageLayout>
      <motion.div className="grid lg:grid-cols-[600px_1fr] lg:gap-28 gap-5">
        <div>
          <motion.div {...slideInTop}>
            <h4 className=" text-[#1877F9] text-[1rem] md:text-[1rem] lg:text-[1.5rem] py-3 md:p-1">
              Pricing
            </h4>
          </motion.div>
          <motion.div {...slideInLeft}>
            <h6 className="lg:text-[40px] text-[28px] text-[#082B5B] font-bold lg:leading-[125%] leading-9">
              We have different plans depending on what you want to learn
            </h6>
          </motion.div>
        </div>
        <motion.div
          {...slideInRight}
          className="text-[18px] md:text-[19px] place-self-center"
        >
          <p>
            At Kinplus, we're committed to providing you with an exceptional
            payment experience. We offer personalized support and payment
            solutions tailored to your unique needs. Get in touch with us today
            to learn more.
          </p>
        </motion.div>
      </motion.div>

      {pricingCardDetails && (
        <div className="py-10 grid lg:gap-10 gap-6 lg:grid-cols-[417px_417px] place-content-center">
          <motion.div {...slideInLeft}>
            <PricingCard
              type="Medium"
              duration={pricingCardDetails?.medium?.courseDuration}
              description={pricingCardDetails?.medium?.courseDescription}
              price={pricingCardDetails?.medium?.price}
              whatsIncluded={pricingCardDetails?.medium?.whatsIncluded}
            />
          </motion.div>
          <motion.div {...slideInRight}>
            <PricingCard
              type="Pro"
              duration={pricingCardDetails?.pro?.courseDuration}
              description={pricingCardDetails?.pro?.courseDescription}
              price={pricingCardDetails?.pro?.price}
              whatsIncluded={pricingCardDetails?.pro?.whatsIncluded}
            />
          </motion.div>
        </div>
      )}
    </PageLayout>
  );
}
