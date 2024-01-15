import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function ContactUsCard({ label, title, text, link, to }) {
  
  ContactUsCard.propTypes = {
    label: PropTypes.string,
    imageAltText: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string,
    link: PropTypes.string,
    to: PropTypes.string,
  };

  return (
    <div className="flex flex-col justify-center items-center gap-6 bg-white rounded-[0.6em] px-8 py-6 shadow-md hover:shadow- hover:shadow-zinc-600 shadow-zinc-400  w-[75%] md:w-full">
      <span className="text-[#1877F9] text-[20px] font-[400] leading-[125%] self-baseline">{label}</span>
      <h3 className="font-[700] text-[#101010] text-[1.55rem] sm:text-[1.8rem] text-left leading-[156.25%] capitalize">{title}</h3>
      <p className="">{text}</p>
      <Link className="text-[20px] bg-[#1877F9] text-white font-big py-[1.25em] px-[2.6em] leading-[112%] rounded-[10px] hover:bg-blue-700 md:text-[18px]" to={to}>{link}</Link>
    </div>
  );
}
