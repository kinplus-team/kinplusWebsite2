import { IoIosArrowDown } from "react-icons/io";

export default function FAQComponent({ FAQs }) {
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
        {FAQs.map((FAQ, index) => (
          <div
            key={FAQ + index}
            className="bg-white w-[95%] p-6 grid grid-cols-[1fr_auto] rounded-[10px] shadow-md mx-auto"
          >
            <p className="lg:text-xl text-base">{FAQ.question}</p>

            <IoIosArrowDown className="w-6 h-6 text-[#1877F9] lg:place-self-end place-self-center" />
          </div>
        ))}
      </div>
    </div>
  );
}
