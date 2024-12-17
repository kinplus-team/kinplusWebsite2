import { motion } from "framer-motion";
import DSN from "../../assets/svg/trusted-by/DSN.svg";
import ekitiStateGovernment from "../../assets/svg/trusted-by/ekiti-state-government.svg";
import GDG from "../../assets/svg/trusted-by/GDG.svg";
import NITDA from "../../assets/svg/trusted-by/NITDA.svg";
import trainingHall from "../../assets/training/training-hall.webp";
import trainingHallMobileView from "../../assets/training/training-hall-mobile.webp";
import PageLayout from "../../components/Layout/PageLayout";
import backgroundIcon from "../../assets/svg/background-icon.svg";
import Text from "../../components/Text";

export default function HeroTraining() {
  const trustedByArray = [DSN, ekitiStateGovernment, GDG, NITDA];

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", damping: 20, stiffness: 100 },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 20,
      },
    },
  };

  return (
    <PageLayout className="lg:pt-36 pt-24">
      <div
        id="target-section"
        className="grid lg:grid-cols-[55%_45%] items-start"
      >
        {/* Left Side Bar */}
        <motion.div
          className="grid sm:grid-flow-row gap-4 lg:gap-6 relative"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div
            className="flex items-center gap-4"
            variants={fadeInUp}
          >
            <Text
              type="title"
              className="text-[#1877F9] text-base lg:text-lg lg:tracking-[3px] capitalize"
            >
              DIGITAL SKILL TRAINING
            </Text>
            <motion.div
              className="w-[74px] lg:w-[74.775px] h-[2px] bg-[#222831]"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />
          </motion.div>

          <motion.div
            className="relative z-50"
            variants={fadeInUp}
          >
            <Text
              type="heading"
              className="text-[#082B5B] text-[35px] lg:text-[52px]"
            >
              We Are Building Tech Leaders.
            </Text>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, rotate: -10 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <img
              src={backgroundIcon}
              className="lg:w-[159px] w-[120px] lg:h-[128px] absolute bottom-[-50px] left-52 lg:left-60 z-0"
              alt="Background Icon"
            />
          </motion.div>
        </motion.div>

        {/* Right Side Bar */}
        <motion.div
          className="grid sm:grid-flow-row gap-6 justify-self-end relative z-50"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp}>
            <Text
              type="subparagraph"
              className="text-[#101010] mt-2 lg:mt-0"
            >
              In today's rapidly evolving technological landscape, it is crucial
              for learners, students, and youths to have access to industry
              knowledge and opportunities in the tech industry.
            </Text>
          </motion.div>

          <motion.div
            className="grid gap-6 -mt-6 lg:mt-0"
            variants={fadeInUp}
          >
            <motion.p
              className="text-[#556987] text-sm lg:text-base"
              variants={fadeInUp}
            >
              Trusted by <br />
              leading companies/agencies
            </motion.p>
            <motion.div
              className="grid grid-cols-[50px_50px_50px_50px_0.5fr] lg:grid-cols-[60px_60px_60px_0.2fr_0.3fr] gap-3 lg:gap-10 items-center"
              variants={staggerContainer}
            >
              {trustedByArray.map((image, i) => (
                <motion.img
                  key={i}
                  src={image}
                  alt={`Logo ${i + 1}`}
                  loading="lazy"
                  className="flex place-items-center h-10"
                  variants={scaleIn}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                />
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Hero Section Image */}
      <motion.div
        className="mt-5 pt-5"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", duration: 1.2, delay: 1 }}
      >
        <motion.img
          src={trainingHall}
          className="hidden lg:block"
          alt="Training Hall"
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.3 }}
        />
        <motion.img
          src={trainingHallMobileView}
          className="block lg:hidden"
          alt="Training Hall Mobile"
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </PageLayout>
  );
}
