import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

import { FaPlus, FaMinus } from "react-icons/fa6";
import { useState } from "react";
import Text from "./Text";

export default function FAQComponent({ FAQs }) {
  const [showAns, setShowAns] = useState(false);
  const [index, setIndex] = useState(-1);

  const toggleFAQ = (i) => {
    if (index === i) {
      setShowAns(!showAns);
    } else {
      setIndex(i);
      setShowAns(true);
    }
  };

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
          <div
            key={i}
            onClick={() => toggleFAQ(i)}
            className="grid  max-w-md grid-rows-[auto_auto_1fr] gap-3 w-full mx-auto cursor-pointer"
          >
            <p className="text-[#2A3342] text-[20px] font-medium leading-[30px]">
              {FAQ.question}
            </p>

            <Text type="subparagraph" className="text-[#556987]">
              {FAQ.ans.summary}
            </Text>

            <ul>
              {FAQ.ans.options &&
                FAQ?.ans?.options.map((option, i) => (
                  <li className="text-[#556987] my-1 list-disc ml-5">
                    {" "}
                    {option}
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
