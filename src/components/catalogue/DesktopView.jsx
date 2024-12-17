import { motion } from "framer-motion";
import Button from "../Button";
import formatNumber from "../../utilities/formatNumber";
import { useSliderCalculation } from "../../hooks/useSliderCalculation";
import { Link } from "react-router-dom";

export default function DesktopViewCatalogue({
  title,
  catalogues,
  isLinked = true,
}) {
  const { index, setIndex, equalHeight } = useSliderCalculation(catalogues);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const lineVariants = {
    hidden: { scaleY: 0 },
    visible: { scaleY: 1, transition: { duration: 0.5 } },
  };

  const imageVariants = {
    initial: { opacity: 0.8, scale: 1.05 },
    animate: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className="grid lg:grid-cols-[auto_1fr] gap-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={containerVariants}
    >
      {/* Left Side Content */}
      <motion.div
        className="place-self-center"
        variants={itemVariants}
      >
        {title && (
          <motion.h3
            className="text-[#082B5B] lg:text-[40px] text-[25px] border border-red-900 font-[700] lg:leading-[50px] leading-10 capitalized lg:max-w-2xl pb-[17px]"
            variants={itemVariants}
          >
            {title}
          </motion.h3>
        )}

        <div className="grid grid-cols-[5px_500px] gap-8 pl-3">
          {/* Line and Index Display */}
          <div>
            <div className="bg-[#DFDFDF] w-[5px] h-[231.489px]">
              <motion.div
                style={{ transform: `translateY(${equalHeight}px)` }}
                className="bg-[#1877F9] w-[5px] h-[58px]"
                variants={lineVariants}
                initial="hidden"
                animate="visible"
              />
            </div>

            <div className="rotate-[-90deg] translate-y-16">
              <span className="text-[#1877F9] text-lg font-medium">
                {formatNumber(index + 1)}
              </span>
              <span className="text-[#10375C] text-sm">/</span>
              <span className="text-[#9A9A9A] leading-[26px]">
                {formatNumber(catalogues.length)}
              </span>
            </div>
          </div>

          {/* Catalogues Buttons */}
          <motion.div variants={containerVariants}>
            {catalogues.map((catalogue, i) => (
              <Link
                to={
                  isLinked && catalogue.link
                    ? `/trainings/courses/${catalogue.link}`
                    : null
                }
                key={i}
                onMouseEnter={() => setIndex(i)}
              >
                <Button
                  text={catalogue.title}
                  type={i === index ? "customizedBlue" : "transparent"}
                  isLong={true}
                  isLinked={isLinked}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
              </Link>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Right Side Content (Image Background) */}
      <motion.div
        loading="lazy"
        className="place-self-end w-full h-[550px] bg-cover bg-center"
        style={{ backgroundImage: `url(${catalogues[index].image})` }}
        variants={imageVariants}
        initial="initial"
        animate="animate"
      />
    </motion.div>
  );
}
