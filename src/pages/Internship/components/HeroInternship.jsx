import { motion } from "framer-motion";
import Button from "../../../components/Button";
import PageLayout from "../../../components/Layout/PageLayout";
import HeroDesktopImage from "../../../assets/IT_SIWES/Hero/desktop-view.webp";
import backgroundIcon from "../../../assets/svg/background-icon.svg";
import maskedGrid from "../../../assets/svg/masked-grid.svg";
import Text from "../../../components/Text";
import { Link } from "react-scroll";

export default function HeroInternship() {
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
        className="grid lg:grid-cols-[55%_45%]"
      >
        {/* Left side bar */}
        <motion.div
          className="grid sm:grid-flow-row gap-4 lg:gap-3 relative"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div
            className="flex items-center gap-4 lg:gap-16 md:mt-20 lg:mt-0"
            variants={fadeInUp}
          >
            <Text
              type="title"
              className="text-[#1877F9] text-base lg:text-lg lg:tracking-[0.188em] capitalize"
            >
              IT/SIWES
            </Text>
            <motion.div
              className="w-[3.625em] md:w-[4.673em] h-[0.125em] bg-[#222831]"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="relative z-30"
          >
            <Text
              type="heading"
              className="text-[#082B5B] text-[2.188em] md:text-[2.375em] lg:text-[2.188em] md:max-w-2xl max-w-sm"
            >
              Join our IT/SIWES program at Kinplus
            </Text>
          </motion.div>

          <motion.img
            src={backgroundIcon}
            className="lg:w-[159px] w-[120px] lg:h-[128px] absolute bottom-[-60px] right-0 lg:left-[550px] z-0"
            initial={{ opacity: 0, rotate: -10 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          />
        </motion.div>

        {/* Right side bar */}
        <motion.div
          className="grid sm:grid-flow-row gap-6 justify-self-end py-3 relative z-10"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp}>
            <Text
              type="subparagraph"
              className="text-[#101010] lg:w-[91%] mt-[1.5em] lg:mt-0"
            >
              Welcome to Kinplus! We're excited to have you join us for your
              industrial training. Here, you'll gain valuable experience in the
              tech industry and have the opportunity to learn from our team of
              experts. Register now to begin your journey with us.
            </Text>
          </motion.div>

          <motion.div
            className="grid gap-6 relative"
            variants={fadeInUp}
          >
            <motion.div
              className="lg:w-40 w-36"
              variants={scaleIn}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="internship-application-form"
                smooth={true}
                duration={800}
              >
                <Button
                  type="customizedBlue"
                  text="Join us"
                />
              </Link>
            </motion.div>
            <motion.img
              src={maskedGrid}
              className="w-[105px] h-[100px] absolute lg:top-0 lg:right-0 right-[-30px] top-[-30px]"
              initial={{ opacity: 0, rotate: 10 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Hero section image */}
      <motion.div
        className="lg:pt-16 pt-8 mt-[2em] lg:mt-0"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", duration: 1.2, delay: 1 }}
      >
        <motion.img
          src={HeroDesktopImage}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </PageLayout>
  );
}
