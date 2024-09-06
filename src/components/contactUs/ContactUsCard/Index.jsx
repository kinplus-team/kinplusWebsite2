import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Text from "../../Text";

export default function ContactUsCard({ label, title, text, link, to }) {
  return (
    <div className="w-full flex flex-col justify-center gap-3 bg-white rounded-[0.6em] px-8 py-6">
      <span className="text-[#1877F9] text-2xl font-[400]">{label}</span>
      <Text type="subheading" className="text-[#101010] lg:w-[80%] lg:mb-8 capitalize">
        {title}
      </Text>

      <Text type="subparagraph" className="text-[#101010] lg:w-[90%]">
        {text}
      </Text>

      <Link
        className="text-[12px] self-start sm:text-[16px] md:text-[20px] w-fit bg-[#1877F9] text-white md:mt-8 py-[0.813em] sm:py-[0.876em] md:py-[0.938em] px-[0.938em] sm:px-[1.563em] md:px-[2.188em] leading-[112%] rounded-[5px] md:rounded-[15px] hover:bg-blue-700"
        to={to}
      >
        {link}
      </Link>
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
