import PageLayout from "../../../components/Layout/PageLayout.jsx";
import heroImg from "../../../assets/workshopDetails/details.png";
import { motion } from "framer-motion";

export default function HeroWorkshopDetails() {
  // animation variants
  const slideFromLeft = {
    initial: { x: -100, opacity: 0 },
    whileInView: { x: 0, opacity: 1 },
    viewport: { once: true },
    transition: { duration: 0.8 },
  };

  const slideFromRight = {
    initial: { x: 100, opacity: 0 },
    whileInView: { x: 0, opacity: 1 },
    viewport: { once: true },
    transition: { duration: 0.8 },
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

  return (
    <div>
      <PageLayout>
        <div
          id="target-section"
          className="grid gap-4 pb-5"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div {...slideFromLeft}>
            <h2 className="lg:text-[65px] text-[35px] lg:leading-[75px] leading-[40px] capitalize max-w-3xl ">
              NITDA: Mobile App training and the Digital Skill Up training
            </h2>
          </motion.div>
          <motion.div {...slideFromRight}>
            <p className="text-[#101010] lg:text-lg leading-6 max-w-lg justify-self-end">
              Kinplus Technologies, in partnership with NITDA, trained 50+
              participants in Mobile App Development. Serving as the technology
              hub in Ekiti State, similar sessions were held in three other
              states nationwide. Check out the details of the event.
            </p>
          </motion.div>
        </div>
      </PageLayout>
      <motion.div
        initial={{ opacity: 0, rotate: -10 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ duration: 0.8 }}
        whileHover={{ scale: 1.01 }}
      >
        <img
          src={heroImg}
          className="lg:h-[780px]"
        />
      </motion.div>
    </div>
  );
}
