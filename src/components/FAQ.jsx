import { LuPlusCircle, LuMinusCircle } from "react-icons/lu";
import { motion } from "framer-motion";
import { useState } from "react";
import Text from "./Text";

const FAQComponent = ({ FAQs }) => {
  const [index, setIndex] = useState(null);

  const handleToggle = (i) => {
    setIndex(i === index ? null : i);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const answerVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.2,
      },
    },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <div className="lg:pb-[130px] pb-[90px] grid gap-7 -mt-6 lg:mt-0">
      <motion.div
        className="mx-auto max-w-2xl text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={containerVariants}
      >
        <Text
          type="heading"
          className="text-[#082B5B] text-[60px] lg:text-[65px] mb-8"
        >
          FAQs
        </Text>
        <Text
          type="subparagraph"
          className="text-[#101010]"
        >
          Find answers to our most commonly asked questions relating to our
          product development and training opportunities here.
        </Text>
      </motion.div>

      <motion.div
        className="grid lg:grid-cols-3 gap-14 pt-[30px]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={containerVariants}
      >
        {FAQs.map((FAQ, i) => (
          <motion.div
            key={i}
            variants={itemVariants}
          >
            {/* desktop view */}
            <div className="lg:grid hidden max-w-md grid-rows-[auto_auto_1fr] gap-3 w-full mx-auto">
              <div className="flex flex-col gap-3">
                <LuPlusCircle
                  size={25}
                  className="text-[#0F172A]"
                />
                <p className="text-[#2A3342] text-[20px] font-medium leading-[30px]">
                  {FAQ.question}
                </p>
              </div>
              <Text
                type="subparagraph"
                className="text-[#101010]"
              >
                {FAQ.ans.summary}
              </Text>
              <ul>
                {FAQ.ans.options?.map((option, i) => (
                  <li
                    key={i}
                    className="text-[#101010] my-1 list-disc ml-5"
                  >
                    {option}
                  </li>
                ))}
              </ul>
            </div>

            {/* mobile view */}
            <div className="lg:hidden max-w-md w-full mx-auto">
              <div
                className="grid grid-cols-[auto_1fr] items-center gap-3 cursor-pointer"
                onClick={() => handleToggle(i)}
              >
                {index === i ? (
                  <LuMinusCircle className="text-[#0F172A] text-2xl" />
                ) : (
                  <LuPlusCircle className="text-[#0F172A] text-2xl" />
                )}
                <p className="text-[#101010] text-[18px] font-medium leading-[30px]">
                  {FAQ.question}
                </p>
              </div>

              <motion.div
                initial="hidden"
                animate={index === i ? "visible" : "hidden"}
                variants={answerVariants}
                className="overflow-hidden"
              >
                <div className="pt-3">
                  <Text
                    type="subparagraph"
                    className="text-[#101010]"
                  >
                    {FAQ.ans.summary}
                  </Text>
                  <ul>
                    {FAQ.ans.options?.map((option, i) => (
                      <li
                        key={i}
                        className="text-[#101010] my-1 list-disc ml-5"
                      >
                        {option}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default FAQComponent;
