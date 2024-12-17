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
  disabled,
  onClick,
}) {
  const baseStyles = `${className} text-xl font-medium leading-[24px] transition-opacity`;

  const loadingSpinner = (
    <div className="flex items-center">
      <svg
        className="animate-spin -ml-1 mr-3 h-5 w-5 text-current"
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
  );

  switch (type) {
    case "customizedBlue":
      return (
        <button
          className={`${baseStyles} ${
            isLong
              ? "lg:px-6 lg:py-5 px-3 py-4 rounded-md text-left"
              : "rounded-xl text-center lg:px-4 lg:py-4 px-2 py-4"
          } ${
            disabled
              ? "opacity-50 cursor-not-allowed"
              : "bg-blue-700 hover:bg-blue-600"
          } text-white border border-blue-700 shadow-md`}
          onClick={onClick}
          disabled={disabled}
        >
          {isLoading ? (
            loadingSpinner
          ) : isLong ? (
            <div className="flex gap-5 items-center">
              {text}
              {isLinked && (
                <img
                  src={ArrowButton}
                  className="w-[61px]"
                  alt="Arrow"
                />
              )}
            </div>
          ) : (
            <p className="lg:text-base text-sm">{text}</p>
          )}
        </button>
      );

    case "customizedWhite":
      return (
        <button
          className={`${baseStyles} bg-white w-full hover:bg-gray-100 ${
            isLong
              ? "lg:px-6 lg:py-5 px-3 py-4 rounded-md text-left"
              : "rounded-xl text-center lg:px-4 lg:py-4 px-2 py-4"
          } ${
            disabled ? "opacity-50 cursor-not-allowed" : "border-white"
          } text-blue-700 border shadow-md`}
          disabled={disabled}
          onClick={onClick}
        >
          {isLoading ? loadingSpinner : text}
        </button>
      );

    case "transparent":
      return (
        <button
          className={`${baseStyles} w-full ${
            isLong ? "px-6 py-5" : "px-3 py-3"
          } ${
            isLinked && "underline"
          } rounded-md lg:text-xl leading-[24px] text-gray-600 hover:text-gray-700`}
          onClick={onClick}
          disabled={disabled}
        >
          {text}
        </button>
      );

    case "icon":
      return (
        <button
          className={`${baseStyles} bg-gray-100 flex items-center gap-5 w-full px-6 py-5 rounded-md text-gray-600 border border-gray-100 hover:bg-gray-200`}
          onClick={onClick}
          disabled={disabled}
        >
          <img
            src={icon}
            className="w-6 h-6"
            alt="Icon"
          />
          {text}
        </button>
      );

    default:
      return null;
  }
}
