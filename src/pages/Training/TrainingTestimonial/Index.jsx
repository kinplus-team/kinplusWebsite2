import React from "react";
import { FaQuoteRight } from "react-icons/fa6";
import bigHairWoman from "../../../assets/trainingPics/trainingTestimonial/woman-with-big-hair.jpeg";

export default function TrainingTestimonial() {
  const testimonialTexts = [
    {
      text: `“Partnering with Kinplus has been a game-changer for our business.
      Their commitment to excellence goes beyond expectations, seamlessly
      blending innovation and problem-solving. Kinplus not only creates
      cutting-edge applications but also dives deep into understanding our
      unique business challenges.”`,
    },
  ];

  const testifierDetails = [
    {
      image: `${bigHairWoman}`,
      name: "Oladare Jonathan",
      program: "Software Developer",
    },
  ];

  return (
    <section className="flex flex-col md:flex-row gap-20 overflow-hidden">
      <div className="flex flex-col gap-14 md:w-[70%]">
        <h4 className="text-[35px] sm:text-[40px] text-[#082B5B] font-[700] leading-[125%] capitalized">
          See what others are <br /> saying about us
        </h4>
        {testimonialTexts.map((testimonialText, index) => (
          <p
            key={testimonialText + index}
            className="text-[24px] font-[400] leading-[187.5%] text-[#101010] "
          >
            {testimonialText.text}
          </p>
        ))}
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="198"
            height="27"
            viewBox="0 0 198 27"
            fill="none"
          >
            <path
              d="M197.369 14.3235L186.507 25.5138C186.158 25.8719 185.722 26.0509 185.285 26.0509C184.849 26.0509 184.413 25.8719 184.064 25.5138C183.366 24.7976 183.366 23.6786 184.064 22.9624L191.96 14.8159H166.483C165.524 14.8159 164.738 14.0102 164.738 13.0254C164.738 12.0407 165.524 11.235 166.483 11.235H191.96L184.064 3.08851C183.366 2.37234 183.366 1.25331 184.064 0.537132C184.762 -0.179044 185.853 -0.179044 186.55 0.537132L197.413 11.7274C198.067 12.4883 198.067 13.6521 197.369 14.3235Z"
              fill="#1877F9"
            />
            <rect
              x="89.6934"
              y="10.832"
              width="104.699"
              height="4.47534"
              rx="2.23767"
              fill="#1877F9"
            />
            <path
              d="M0.529087 14.3235L11.3916 25.5138C11.7405 25.8719 12.1768 26.0509 12.6131 26.0509C13.0493 26.0509 13.4855 25.8719 13.8345 25.5138C14.5325 24.7976 14.5325 23.6786 13.8345 22.9624L5.9385 14.8159H31.4152C32.3749 14.8159 33.1602 14.0102 33.1602 13.0254C33.1602 12.0407 32.3749 11.235 31.4152 11.235H5.9385L13.8345 3.08851C14.5325 2.37234 14.5325 1.25331 13.8345 0.537132C13.1365 -0.179044 12.0459 -0.179044 11.3479 0.537132L0.485447 11.7274C-0.168919 12.4883 -0.168903 13.6521 0.529087 14.3235Z"
              fill="#9A9A9A"
            />
            <rect
              width="59.009"
              height="4.00159"
              rx="2.00079"
              transform="matrix(-1 0 0 1 62.1787 11.0449)"
              fill="#9A9A9A"
            />
          </svg>
        </div>
      </div>

      <div className="self-start flex flex-row-reverse md:flex-col items-center gap-20 md:w-[25%]">
        <FaQuoteRight className="mt-[-100px] md:mt-0 text-[80px] md:text-[150px]" />

        {testifierDetails.map((testifierDetail, index) => (
          <div
            key={testifierDetail + index}
            className="flex flex-col items-center gap-[4px]"
          >
            <div className="w-[90px] h-[90px] mb-2">
              <img
                src={testifierDetail.image}
                width={96}
                height={96}
                className="rounded-full "
              />
            </div>
            <p className="text-[0.8rem] md:text-[20px] lg:text-[24px] text-[#101010] font-[400] leading-[125%]">
              {testifierDetail.name}
            </p>
            <span className="text-[0.8rem] md:text-[1rem] lg:text-[1.125rem] text-[#101010] leading-[138.889%] -mt-[5px]">
              {testifierDetail.program}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
