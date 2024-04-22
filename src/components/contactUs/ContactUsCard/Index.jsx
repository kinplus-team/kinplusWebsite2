import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function ContactUsCard({ label, title, text, link, to }) {
  

  return (
    <div className="w-full flex flex-col justify-center gap-6 bg-white rounded-[0.6em] px-8 py-6 shadow-md hover:shadow- hover:shadow-zinc-600 shadow-zinc-400  ">
      <span className="text-[#1877F9] text-[16px] sm:text-[20px] md:text-[24px] sm:mt-4 font-[400] leading-[10.25%] md:leading-[125%] self-baseline">{label}</span>
      <h3 className="font-[700] text-[#101010] text-[1.55rem] sm:text-[2.3rem] text-left sm:leading-[125%] md:leading-[156.25%] capitalize">{title}</h3>
      <p className="md:w-[93%] pr-7 text-[14px] sm:text-[18px] md:text-22px]">{text}</p>
      <Link className="text-[12px] sm:text-[16px] md:text-[20px] w-fit bg-[#1877F9] text-white md:mt-8 py-[0.813em] sm:py-[0.876em] md:py-[0.938em] px-[0.938em] sm:px-[1.563em] md:px-[2.188em] leading-[112%] rounded-[5px] md:rounded-[15px] hover:bg-blue-700" to={to}>{link}</Link>
    </div>
  );
}


ContactUsCard.propTypes = {
  label: PropTypes.string,
  imageAltText: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  link: PropTypes.string,
  to: PropTypes.string,
};