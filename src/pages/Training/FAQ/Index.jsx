import React from "react";
import peopleCoding from "../../../assets/trainingPics/FAQ/working_coding.jpeg";
import { RiArrowDropDownLine } from "react-icons/ri";

export default function FAQ() {
  const FAQs = [
    {
      question: "How many courses can we take at once?",
    },
    {
      question: "How many courses can we take at once?",
    },
    {
      question: "How many courses can we take at once?",
    },
    {
      question: "How many courses can we take at once?",
    },
    {
      question: "How many courses can we take at once?",
    },
  ];

  return (
    <section className="relative flex flex-col lg:flex-row gap-2">
      {/*FAQs image*/}
      <div className=" lg:-ml-32 lg:w-[65%] w-0 h-0">
        <div className="overflow-hidden">
          <div className="mt-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="534"
              height="522"
              viewBox="0 0 534 522"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M26.9327 166.66C0.640848 218.766 -10.9325 292.146 13.1786 362.559C37.2897 432.971 98.8608 475.299 184.868 503.292C346.248 555.817 499.386 487.929 523.265 420.686C545.57 357.878 534.304 314.119 478.269 257.38C422.234 200.641 383.309 160.339 368.651 103.023C354.21 46.5579 335.203 12.8386 291.348 4.0236C243.915 -5.51043 194.031 1.28871 147.22 30.985C99.4641 61.281 51.3916 118.187 26.9327 166.66Z"
                fill="#1877F9"
              />
            </svg>
          </div>
          <div className="-mt-[250px] ml-[95px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="534"
              height="522"
              viewBox="0 0 534 522"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M26.9327 166.66C0.640848 218.766 -10.9325 292.146 13.1786 362.559C37.2897 432.971 98.8608 475.299 184.868 503.292C346.248 555.817 499.386 487.929 523.265 420.686C545.57 357.878 534.304 314.119 478.269 257.38C422.234 200.641 383.309 160.339 368.651 103.023C354.21 46.5579 335.203 12.8386 291.348 4.0236C243.915 -5.51043 194.031 1.28871 147.22 30.985C99.4641 61.281 51.3916 118.187 26.9327 166.66Z"
                fill="#1877F9"
              />
            </svg>
          </div>
        </div>
        <div
          className="lg:absolute lg:top-[5%] lg:left-5 lg:right-[50%] lg:rounded-[15px] lg:w-[488px] lg:h-[822px] w-0"
          style={{
            backgroundImage: `url(${peopleCoding})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          loading="lazy"
        ></div>
      </div>

      {/*FAQs*/}
      <div className="md:w-[60%] w-full">
        <h4 className="text-[65px] text-[#082B5B] font-[700] leading-[115.385%] capitalize">
          FAQs
        </h4>
        <p className="text-[#101010] text-[18px] font-[400] leading-[138.889%] mt-[18px]">
          Find answers to oue commonly most asked questions relating to our
          product development and training opportunities here.
        </p>
        <div className="mt-[47px] flex flex-col gap-4">
          {FAQs.map((FAQ) => (
            <div
              key={FAQ.id}
              className="flex items-center gap-8 p-2 md:p-[30px] bg-[#ffffff] rounded-[10px] shadow-lg shadow-gray-400"
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
