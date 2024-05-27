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
      <div className="grid gap-5 pt-[30px]">
        {FAQs.map((FAQ, i) => (
          <div
            key={i}
            onClick={() => toggleFAQ(i)}
            className="w-full mx-auto cursor-pointer"
          >
            <div className="rounded-[10px] grid py-[14px] grid-cols-[1fr_auto]">
              <Text type="paragraph" className="text-[#556987]">
                {FAQ.question}
              </Text>

              {showAns && index === i ? (
                <FaMinus className="w-6 h-6 lg:place-self-end place-self-center cursor-pointer" />
              ) : (
                <FaPlus className="w-6 h-6 lg:place-self-end place-self-center cursor-pointer" />
              )}
            </div>

            {showAns && index === i && (
              <div>
                <Text type="subparagraph" className="px-5 text-[#556987]">
                  {FAQ.ans.summary}

                  {FAQ.ans.options &&
                    FAQ.ans.options.map((option, i) => (
                      <Text type="subparagraph">{option}</Text>
                    ))}
                </Text>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
