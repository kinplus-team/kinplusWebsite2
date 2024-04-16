import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useState } from "react";

export default function FAQComponent({ FAQs }) {
  const [showAns, setShowAns] = useState(false);
  const [index, setIndex] = useState(-1);

  return (
    <div className=" py-10 grid gap-7">
      <div className="mx-auto max-w-2xl text-center">
        <h4 className="lg:text-[65px] text-[50px] text-[#082B5B] font-[700] leading-[125%] capitalized">
          FAQs
        </h4>
        <p className="text-lg">
          Find answers to oue commonly most asked questions relating to our
          product development and training opportunities here.
        </p>
      </div>
      <div className="grid gap-5">
        {FAQs.map((FAQ, i) => (
          <div
            key={i}
            onClick={() => {
              setShowAns(!showAns);
              setIndex(i);
            }}
            className="bg-white w-[95%] p-6 grid grid-cols-[1fr_auto] rounded-[10px] shadow-md mx-auto"
          >
            <p className="lg:text-xl text-base">{FAQ.question}</p>
            {/* {showAns && index === i && (
              <p className="text-neutral-500 pt-3 font-normal text-sm md:text-lg">
                {FAQ.} 
              </p>
            )}   */}

            {showAns && index === i ? (
              <IoIosArrowDown className="w-6 h-6 text-[#1877F9] lg:place-self-end place-self-center" />
            ) : (
              <IoIosArrowUp className="w-6 h-6 text-[#1877F9] lg:place-self-end place-self-center" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
