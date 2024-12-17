import { motion } from "framer-motion";
import PageLayout from "../../../components/Layout/PageLayout.jsx";
import Catalogue from "../../../components/catalogue/Catalogue.jsx";
import courses from "../../../repository/course.js";
import Text from "../../../components/Text.jsx";
import { Link } from "react-router-dom";
import Button from "../../../components/Button.jsx";

// Animation Variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const fadeInLeft = {
  initial: { opacity: 0, x: -20 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const fadeInRight = {
  initial: { opacity: 0, x: 20 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.3 } },
};

export default function OurCoursesHome() {
  return (
    <PageLayout>
      <motion.div
        className="grid lg:grid-cols-[auto_1fr] gap-4 lg:gap-36 lg:pb-20 pb-6"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        {/* Subheading with Animation */}
        <motion.div {...fadeInLeft}>
          <Text
            type="subheading"
            className="max-w-[700px] text-[#082B5B] capitalize"
          >
            We are dedicated to empowering the next generation with essential
            skills to thrive in the ever-evolving tech landscape
          </Text>
        </motion.div>

        {/* Description and Button with Animation */}
        <div
          className="grid gap-6 place-self-center"
          variants={fadeInUp}
        >
          <motion.div {...fadeInRight}>
            <Text
              type="subparagraph"
              className="text-[#556987]"
            >
              Equipping the Next Generation with Essential Tech Skills. We
              provide hands-on training in essential tech skills to prepare the
              next generation for the future of work. Our approach is
              interactive and engaging, and our curriculum is designed to meet
              the needs of tomorrow's workforce.
            </Text>
          </motion.div>

          <motion.div {...fadeInUp}>
            <Link
              to="/trainings"
              className="w-40"
            >
              <Button
                type="customizedBlue"
                text="View Our Training Programs"
              />
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Course Catalogue */}
      <Catalogue
        title="Our Courses"
        catalouges={courses}
      />
    </PageLayout>
  );
}
