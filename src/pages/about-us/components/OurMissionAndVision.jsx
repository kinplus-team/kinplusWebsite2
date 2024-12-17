import React from "react";
import { motion } from "framer-motion";
import aboutUsGrid from "../../../assets/AboutUs/NewImages/new-about-us-grid.webp";
import PageLayout from "../../../components/Layout/PageLayout";
import Text from "../../../components/Text";

export default function OurMissionAndVision() {
  // Animation variants for text sections
  const sectionVariants = {
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
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut",
      },
    },
  };

  return (
    <PageLayout>
      <div className="grid lg:grid-cols-[43%_1fr] lg:gap-[90px] gap-5">
        <motion.div
          style={{
            backgroundImage: `url(${aboutUsGrid})`,
            backgroundPosition: "center",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
          className="h-[550px] w-full lg:h-full"
          variants={imageVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        />

        <div className="grid lg:gap-24 gap-9 lg:px-10 lg:order-last order-first">
          {/* vision */}
          <motion.div
            className="self-center grid lg:gap-2 gap-3"
            variants={sectionVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.div variants={textItemVariants}>
              <Text
                type="heading"
                className="text-[#082B5B] text-[35px] lg:text-[64px]"
              >
                Our Vision
              </Text>
            </motion.div>

            <motion.div className="grid gap-4">
              <motion.div variants={textItemVariants}>
                <Text
                  type="subparagraph"
                  className="text-[#23242A]"
                >
                  To promote youth empowerment and create employment via on the
                  job training with a team of experts while developing products
                  and providing services that will help the society and the
                  world at large.
                </Text>
              </motion.div>

              <motion.div variants={textItemVariants}>
                <Text
                  type="subparagraph"
                  className="text-[#23242A]"
                >
                  We believe that technology should connect and empower people.
                  We're committed to driving innovation and creating solutions
                  that will shape a better future. We're at the forefront of the
                  digital revolution, and we're always looking for new ways to
                  make a positive impact on the world. We believe that together,
                  we can build a better tomorrow for everyone.
                </Text>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* mission */}
          <motion.div
            className="self-center grid lg:gap-2 gap-3"
            variants={sectionVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.div variants={textItemVariants}>
              <Text
                type="heading"
                className="text-[#082B5B] text-[35px] lg:text-[64px] capitalize"
              >
                Our Mission
              </Text>
            </motion.div>

            <motion.div className="grid gap-4">
              <motion.div variants={textItemVariants}>
                <Text
                  type="subparagraph"
                  className="text-[#23242A]"
                >
                  To enhance societal development and sustainability by
                  empowering youths with skills and expertise that will make
                  them employable, business minded, skillful and industrious.
                </Text>
              </motion.div>

              <motion.div variants={textItemVariants}>
                <Text
                  type="subparagraph"
                  className="text-[#23242A]"
                >
                  We're driven by a desire to use our technological expertise to
                  deliver solutions that exceed expectations. We work
                  collaboratively with our clients to develop innovative
                  solutions that drive success. We believe in a future where
                  technology is used to empower and transform businesses and
                  individuals, leading to a more connected and successful world.
                </Text>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </PageLayout>
  );
}
