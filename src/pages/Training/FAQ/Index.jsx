import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

export default function FAQ() {
  const FAQs = [
    {
      question: "Outside of Ado–Ekiti, where else can I get in contact with Kinplus Technologies?",
    },
    {
      question: "Can I repair my laptop at Kinplus Technologies?",
    },
    {
      question: "Can I observe my IT/SIWES at Kinplus?",
    },
    {
      question: "What training tracks are on offer for IT/SIWES?",
    },
    {
      question: "Is IT/SIWES at Kinplus Technologies open to only students of tertiary institutions in Ekiti State?",
    },
    {
      question: "Can I enroll in two training tracks for my IT/SIWES?",
    },
    {
      question: "Do I need to have experience on my preferred training track before I can observe my IT/SIWES at Kinplus Technologies?",
    },
    {
      question: "What training tracks are available in the Academy training category?",
    }
  ];

  return (
    <section >
  
      {/*FAQs*/}
      <div className="md:w-[100%] w-full">
        <div className="text-center"><h4 className="text-[65px] text-[#082B5B] font-[700] leading-[115.385%] capitalize">
          FAQs
        </h4>
        <p className="text-[#101010] text-[18px] font-[400] leading-[138.889%] mt-[18px]">
          Find answers to oue commonly most asked questions relating to our
          product <br /> development and training opportunities here.
        </p></div>
        <div className="mt-[47px] flex flex-col gap-4">
          {FAQs.map((FAQ, index) => (
            <div
              key={FAQ + index}
              className="flex items-center justify-between p-2 md:p-[30px] bg-[#ffffff] rounded-[10px] shadow-lg shadow-gray-400"
            >
              <p className="text-[#0F172A] text-[18px] md:text-[24px] font-[400] leading-[125%] p-[2px]">
                {FAQ.question}
              </p>
              <RiArrowDropDownLine className="text-[#1877F9] text-[42px] cursor-pointer" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
