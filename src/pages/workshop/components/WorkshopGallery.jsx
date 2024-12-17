import PageLayout from "../../../components/Layout/PageLayout.jsx";
import Button from "../../../components/Button.jsx";
import { Link } from "react-router-dom";
import explore from "../../../assets/workshop/explore.png";
import Text from "../../../components/Text.jsx";
import { motion } from "framer-motion";

export default function WorkshopGallery() {
  // Animation variants with more subtle effects
  const fadeIn = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const slideInLeft = {
    initial: { x: -50, opacity: 0 },
    whileInView: { x: 0, opacity: 1 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  const slideInRight = {
    initial: { x: 50, opacity: 0 },
    whileInView: { x: 0, opacity: 1 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  const slideInBottom = {
    initial: { y: -30, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  const slideInUp = {
    initial: { y: 30, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  // Refined scale animation for the image
  const scaleIn = {
    hidden: { opacity: 0, scale: 0.98 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 25,
      },
    },
  };

  return (
    <PageLayout className="pt-28 lg:pt-0 pb-5">
      <div className="relative">
        <div className="grid lg:grid-cols-2 lg:gap-16 gap-4 pt-16 lg:pb-24 lg:absolute z-10">
          {/* desktop */}
          <motion.div
            {...slideInUp}
            className="lg:grid gap-4 bg-white ml-14 p-16 hidden"
          >
            <motion.div {...slideInBottom}>
              <Text
                type="title"
                className="text-[#1877F9] uppercase"
              >
                OUR PREVIOUS WORKSHOP
              </Text>
            </motion.div>

            <motion.div {...slideInLeft}>
              <p className="text-[#082B5B] text-5xl font-bold leading-[50px] tracking-wide">
                Kinplus-NITDA: Mobile App training and the Digital Skill Up
                training
              </p>
            </motion.div>
          </motion.div>

          {/* mobile */}
          <div className="grid gap-4 lg:hidden">
            <motion.div {...slideInBottom}>
              <h4 className="text-[#1877F9] lg:text-xl text-base lg:font-medium lg:uppercase lg:tracking-wider">
                OUR PREVIOUS WORKSHOP
              </h4>
            </motion.div>

            <motion.div {...slideInLeft}>
              <p className="text-[#082B5B] lg:text-5xl text-4xl font-bold lg:leading-[50px] tracking-wide">
                Kinplus-NITDA: Mobile App training and the Digital Skill Up
                training
              </p>
            </motion.div>
          </div>

          {/* content */}
          <div>
            <motion.div {...slideInRight}>
              <Text
                type="subparagraph"
                className="text-[#556987]"
              >
                Kinplus Technologies, in partnership with NITDA, trained 50+
                participants in Mobile App Development. Serving as the
                technology hub in Ekiti State, similar sessions were held in
                three other states nationwide. Check out the details of the
                event.
              </Text>
            </motion.div>
            <motion.div {...slideInUp}>
              <Link to="/trainings/workshop/kinplus-nitda">
                <div className="w-56 my-5">
                  <Button
                    text="Explore workshop"
                    type="customizedBlue"
                  />
                </div>
              </Link>
            </motion.div>
          </div>
        </div>

        <div className="relative h-[230px] lg:h-auto w-full lg:pt-[380px] lg:pb-20 pt-[40px]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={scaleIn}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.99 }}
            className="w-full h-full"
          >
            <img
              src={explore}
              className="h-full w-full object-cover"
              alt="Workshop exploration"
            />
          </motion.div>
        </div>
      </div>
    </PageLayout>
  );
}
