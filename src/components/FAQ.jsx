import { LuPlusCircle, LuMinusCircle } from "react-icons/lu";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { useEffect, useState } from "react";
import Text from "./Text";

export default function FAQComponent({ FAQs }) {
  const [showAns, setShowAns] = useState(false);
  const [index, setIndex] = useState(0); // Changed initial state to null

  const handleToggle = (i) => {
    setIndex(i === index ? null : i); // Toggle the same FAQ back to null
  };

  return (
    <div className="lg:pb-[130px] pb-[90px] grid gap-7 -mt-6 lg:mt-0">
      <div className="mx-auto max-w-2xl text-center">
        <Text type="heading" className="text-[#082B5B] text-[60px] lg:text-[65px] mb-8">
          FAQs
        </Text>
        <Text type="subparagraph" className="text-[#101010]">
          Find answers to our most commonly asked questions relating to our
          product development and training opportunities here.
        </Text>
      </div>
      <div className="grid lg:grid-cols-3 gap-14 pt-[30px]">
        {FAQs.map((FAQ, i) => (
          <div key={i}>
            {/* desktop view */}
            <div className="lg:grid hidden max-w-md grid-rows-[auto_auto_1fr] gap-3 w-full mx-auto cursor-pointer">
              <div className="flex flex-col gap-3">
                <LuPlusCircle size={25} className="text-[#0F172A]" />
                <p className="text-[#2A3342] text-[20px] font-medium leading-[30px]">
                  {FAQ.question}
                </p>
              </div>
              <Text type="subparagraph" className="text-[#101010]">
                {FAQ.ans.summary}
              </Text>
              <ul>
                {FAQ.ans.options &&
                  FAQ.ans.options.map((option, i) => (
                    <li key={i} className="text-[#101010] my-1 list-disc ml-5">
                      {option}
                    </li>
                  ))}
              </ul>
            </div>

            {/* mobile view */}
            <div
              className={`grid lg:hidden max-w-md ${
                index === i ? "grid-rows-[auto_auto_1fr]" : ""
              } w-full mx-auto cursor-pointer`}
            >
              <div
                className={`grid ${
                  index === i
                    ? "grid-rows-[auto_auto_1fr]"
                    : "grid-cols-[auto_1fr] items-center"
                } gap-3`}
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

              {index === i && (
                <>
                  <Text type="subparagraph" className="text-[#101010]">
                    {FAQ.ans.summary}
                  </Text>
                  <ul>
                    {FAQ.ans.options &&
                      FAQ.ans.options.map((option, i) => (
                        <li
                          key={i}
                          className="text-[#101010] my-1 list-disc ml-5"
                        >
                          {option}
                        </li>
                      ))}
                  </ul>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
