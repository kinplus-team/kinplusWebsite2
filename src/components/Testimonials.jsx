import React from "react";
import { FaQuoteRight } from "react-icons/fa6";
import Text from "./Text";
import { useTestimonialsSlider } from "../hooks/useTestimonialsSlider";
import NavigationArrows from "./NavigationArrow";
import { motion } from "framer-motion";

export default function Testimonials({ testimonials }) {
  const { handleTestimonialSlider, scrollCon, canScrollLeft, canScrollRight } =
    useTestimonialsSlider(testimonials.length);

  // Animation variants for testimonials
  const testimonialVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: index * 0.1 },
    }),
  };

  const slideInLeft = {
    initial: { x: -100, opacity: 0 },
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

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 grid-cols-[1fr_auto] lg:pb-5 pt-10">
        <motion.div {...slideInLeft}>
          <Text
            type="subheading"
            className="capitalize max-w-lg text-[#082B5B]"
          >
            See what others are saying about us
          </Text>
        </motion.div>

        <motion.div {...slideInTop}>
          <FaQuoteRight className="place-self-end lg:text-[130px] text-[79px] text-[#082B5B] opacity-40" />
        </motion.div>
      </div>

      <div
        ref={scrollCon}
        className="grid grid-cols-[repeat(5,100%)] h-auto overflow-x-auto snap-mandatory snap-x scrollbar-hide scroll-smooth"
        aria-live="polite"
      >
        {testimonials.map((testimonial, i) => (
          <motion.div
            key={i}
            variants={testimonialVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            custom={i}
            className="grid lg:grid-cols-[1fr_auto] grid-rows-[auto_1fr] py-4 lg:gap-16 gap-4 relative snap-center w-full"
          >
            <div className="space-y-6">
              <Text
                type="paragraph"
                className="text-[#101010] max-w-[795px] leading-[30px]"
              >
                {testimonial.text}
              </Text>
            </div>

            <div className="lg:place-self-start justify-self-center">
              <div className="grid place-items-center gap-4">
                <div className="w-[90px] h-[90px] overflow-hidden rounded-full">
                  <img
                    src={testimonial.image}
                    loading="lazy"
                    className="object-cover object-top w-full h-full"
                    alt={testimonial.alt}
                    width={testimonial.imageWidth}
                    height={testimonial.imageHeight}
                  />
                </div>

                <Text
                  type="paragraph"
                  className="font-medium"
                >
                  {testimonial.name}
                </Text>
                <Text
                  type="subparagraph"
                  className="text-gray-600"
                >
                  {testimonial.program}
                </Text>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <NavigationArrows
        onNavigate={handleTestimonialSlider}
        canScrollLeft={canScrollLeft}
        canScrollRight={canScrollRight}
      />
    </div>
  );
}
