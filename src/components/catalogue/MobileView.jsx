import { motion } from "framer-motion";
import Button from "../Button";
import { Link } from "react-router-dom";

export default function MobileViewCatalogue({
  title,
  catalogues,
  isLinked = true,
}) {
  // Animation variants
  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: index * 0.1 },
    }),
  };

  return (
    <div className="grid gap-6">
      {/* Title */}
      <motion.h3
        className="text-[#082B5B] lg:text-[40px] text-[35px] font-[700] lg:leading-[50px] leading-10 capitalized lg:max-w-2xl"
        variants={titleVariants}
        initial="hidden"
        animate="visible"
        whileInView={"visible"}
        viewport={{ once: true, amount: 0.5 }}
      >
        {title}
      </motion.h3>

      {/* Courses List */}
      <div className={`grid grid-rows-${catalogues.length} gap-3`}>
        {catalogues.map((catalogue, i) => (
          <motion.div
            key={i}
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
            custom={i}
          >
            <Link
              to={
                isLinked && catalogue.link
                  ? `/trainings/courses/${catalogue.link}`
                  : null
              }
            >
              <Button
                text={catalogue.title}
                icon={catalogue.icon}
                type="icon"
                className="text-left text-[14px]"
              />
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
