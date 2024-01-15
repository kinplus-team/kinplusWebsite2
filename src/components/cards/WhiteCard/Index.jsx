import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { IoMdCheckmarkCircle } from "react-icons/io";

export default function WhiteCard({
  icon1,
  icon2,
  type,
  title,
  description,
  amount,
  discount,
  exclusives,
  item1,
  item2,
  item3,
  item4,
  to,
  linkText,
}) {
  WhiteCard.propTypes = {
    icon1: PropTypes.string,
    icon2: PropTypes.string,
    type: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    amount: PropTypes.string,
    discount: PropTypes.string,
    exclusives: PropTypes.string,
    item1: PropTypes.string,
    item2: PropTypes.string,
    item3: PropTypes.string,
    item4: PropTypes.string,
    to: PropTypes.string,
    linkText: PropTypes.string,
  };

  return (
    <div className=" flex justify-start flex-col space-y-5 rounded-[24px] bg-white shadow-lg shadow-gray-500 p-8 w-[70%] md:w-full mx-auto md:max-w-[90%] pb-[68px] hover:scale-x-[1.01] hover:scale-y-[1.01]">
      <div className="flex space-x-4">
        <div className="flex bg-[#ECEBFF] rounded-lg p-3">
          <img
            src={icon1}
            alt=""
          />
          <img
            src={icon2}
            alt=""
          />
        </div>
        <div>
          <span className="text-[18px] font-[500] leading-[111.111%] text-[#8697B0]">
            {type}
          </span>
          <p className="text-[24px] text-[#170F49] font-bold leading-[145.833%]">
            {title}
          </p>
        </div>
      </div>
      <p className="text-[#170F49] font-[400] text-[18px] leading-[138.889%]">
        {description}
      </p>
      <div className="flex sm:flex-col-reverse xl:flex-row space-x-2">
        <p className="text-[54px] text-[#082B5B] font-bold leading-[122.222%]">
          {amount}
        </p>
        <span className="sm:self-end xl:self-start  line-through decoration-[2px] text-red-700 italic">
          {discount}
        </span>
      </div>
      <p className="text-[18px] text-[#101010] font-[700] leading-[111.111%]">
        {exclusives}
      </p>
      <ul className="mb-[8px] text-[#101010]">
        <div className="flex space-x-2">
          <IoMdCheckmarkCircle className="text-[26px] text-[#1877F9]" />
          <li>{item1}</li>
        </div>
        <div className="flex space-x-2">
          <IoMdCheckmarkCircle className="text-[26px] text-[#1877F9]" />
          <li>{item2}</li>
        </div>
        <div className="flex space-x-2">
          <IoMdCheckmarkCircle className="text-[26px] text-[#1877F9]" />
          <li>{item3}</li>
        </div>
        <div className="flex space-x-2">
          <IoMdCheckmarkCircle className="text-[26px] text-[#1877F9]" />

          <li>{item4}</li>
        </div>
      </ul>
      <div className="self-center space-y-10 flex mb-[68px] ">
        <Link
          to={to}
          className="bg-[#1877F9] rounded-[15px]  text-[20px] text-[#F1F3F9] font-bold leading-[112%] py-[20px] px-[42px] hover:bg-blue-800"
        >
          {linkText}
        </Link>
      </div>
    </div>
  );
}
