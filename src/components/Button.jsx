import {
  HiOutlineArrowLongRight,
  HiOutlineArrowLongLeft,
} from "react-icons/hi2";

import ArrowButton from "../assets/svg/buttonArrow.svg";

export default function Button({
  icon,
  text,
  type,
  className,
  isLong,
  isLoading,
  isLinked,
}) {
  switch (type) {
    case "customizedBlue":
      return (
        <button
          className={`bg-[#1877F9] w-full ${
            isLong
              ? "lg:px-6 lg:py-5 px-3 py-4 rounded-md text-left hover:text-[#fff]"
              : " rounded-xl text-center lg:px-4 lg:py-4 px-2 py-4"
          }  text-white text-xl font-medium leading-[24px] border border-[#1877F9] shadow-md ${className}`}
        >
          {isLoading ? (
            <div className="flex items-center">
              <svg
                className={`animate-spin -ml-1 mr-3 h-5 w-5 ${"text-white"}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Loading...
            </div>
          ) : isLong ? (
            <div className="flex gap-5 items-center">
              {text}
              {isLinked && <img src={ArrowButton} className="w-[61px]" />}
            </div>
          ) : (
            text
          )}
        </button>
      );

    case "customizedWhite":
      return (
        <button
          className={`bg-white w-full ${
            isLong
              ? "lg:px-6 lg:py-5 px-3 py-4 rounded-md text-left "
              : " rounded-xl text-center lg:px-4 lg:py-4 px-2 py-4"
          } text-[#1877F9] text-xl font-medium leading-[24px] border border-white shadow-md ${className}`}
        >
          {isLoading ? (
            <div className="flex items-center justify-center">
              <svg
                className={`animate-spin -ml-1 mr-3 h-5 w-5 text-[#1877F9]`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Loading...
            </div>
          ) : (
            text
          )}
        </button>
      );

    case "transparent":
      return (
        <button
          className={`w-full ${isLong ? "px-6 py-5" : "px-3 py-3"} ${
            isLinked && "underline"
          }rounded-md lg:text-xl leading-[24px] text-left text-[#556987]  ${className}`}
        >
          {text}
        </button>
      );

    case "icon":
      return (
        <button
          className={`bg-[#F8FAFC] flex items-center gap-5 w-full px-6 py-5 rounded-md text-[#556987] leading-6 text-left border border-[#F8FAFC] ${className}`}
        >
          <img src={icon} className="w-6 h-6" />
          {text}
        </button>
      );
  }
}
