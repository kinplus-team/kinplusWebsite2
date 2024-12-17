import React from "react";

import {
  HiOutlineArrowLongRight,
  HiOutlineArrowLongLeft,
} from "react-icons/hi2";

const NavigationArrows = ({
  onNavigate,
  canScrollLeft,
  canScrollRight,
  className = "",
}) => (
  <div className={`flex items-center gap-5 pt-5 ${className}`}>
    <button
      onClick={() => onNavigate("left")}
      disabled={!canScrollLeft}
      className="transition-all duration-200 disabled:text-gray-400 disabled:cursor-not-allowed"
      aria-label="Previous testimonial"
      aria-live="polite"
    >
      <HiOutlineArrowLongLeft
        size={60}
        className={`${
          !canScrollLeft ? "text-gray-400" : "hover:text-[#1877F9]"
        }`}
      />
    </button>
    <button
      onClick={() => onNavigate("right")}
      disabled={!canScrollRight}
      className="transition-all duration-200 disabled:text-gray-400 disabled:cursor-not-allowed"
      aria-label="Next testimonial"
      aria-live="polite"
    >
      <HiOutlineArrowLongRight
        size={60}
        className={`${
          !canScrollRight ? "text-stone-500" : "hover:text-[#1877F9]"
        }`}
      />
    </button>
  </div>
);

export default NavigationArrows;
