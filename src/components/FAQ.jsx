import { LuPlusCircle } from "react-icons/lu";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

import { FaPlus, FaMinus } from "react-icons/fa6";
import { useState } from "react";
import Text from "./Text";

export default function FAQComponent({ FAQs }) {
  const [showAns, setShowAns] = useState(false);
  const [index, setIndex] = useState(0);

  const [isFAQToggled, setIsFAQToggled] = useState(false);

  const handleToggle = (i) => {
    setIndex(i);
    setIsFAQToggled(!isFAQToggled);
  };

  // console.log(isFAQToggled);

  return (
    <div className="lg:pb-[130px] pb-[90px] grid gap-7">
      <div className="mx-auto max-w-2xl text-center">
        <Text type="heading" className="text-[#082B5B]">
          FAQs
        </Text>

        <Text type="subparagraph" className="text-[#556987]">
          Find answers to oue commonly most asked questions relating to our
          product development and training opportunities here.
        </Text>
      </div>
      <div className="grid lg:grid-cols-3 gap-14 pt-[30px]">
        {FAQs.map((FAQ, i) => (
          <>
            {/* desktop view */}
            <div
              key={i}
              className="lg:grid hidden max-w-md grid-rows-[auto_auto_1fr] gap-3 w-full mx-auto cursor-pointer"
            >
              <div className="flex flex-col gap-3">
                <LuPlusCircle size={25} className="text-blue-400" />
                <p className="text-[#2A3342] text-[20px] font-medium leading-[30px]">
                  {FAQ.question}
                </p>
              </div>

              <Text type="subparagraph" className="text-[#556987]">
                {FAQ.ans.summary}
              </Text>

              <ul>
                {FAQ.ans.options &&
                  FAQ?.ans?.options.map((option, i) => (
                    <li key={i} className="text-[#556987] my-1 list-disc ml-5">
                      {" "}
                      {option}
                    </li>
                  ))}
              </ul>
            </div>

            {/* mobile view */}
            <div
              key={i + 2}
              className={`grid lg:hidden max-w-md ${
                index == i && "grid-rows-[auto_auto_1fr]"
              } w-full mx-auto cursor-pointer`}
            >
              <div
                className={`grid ${
                  index == i
                    ? "grid-rows-[auto_auto_1fr]"
                    : " grid-cols-[auto_1fr] items-center"
                } gap-3`}
              >
                <LuPlusCircle
                  className={"text-blue-400 text-2xl"}
                  onClick={() => handleToggle(i)}
                />
                <p className="text-[#2A3342] text-[18px] font-medium leading-[30px]">
                  {FAQ.question}
                </p>
              </div>

              {index == i ? (
                <>
                  <Text type="subparagraph" className={`text-[#556987]`}>
                    {FAQ.ans.summary}
                  </Text>

                  <ul>
                    {FAQ.ans.options &&
                      FAQ?.ans?.options.map((option, i) => (
                        <li
                          key={i}
                          className={`text-[#556987] my-1 list-disc ml-5`}
                        >
                          {" "}
                          {option}
                        </li>
                      ))}
                  </ul>
                </>
              ) : (
                <div></div>
              )}
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
