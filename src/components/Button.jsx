export default function Button({ icon, text, type, className, isLong }) {
  switch (type) {
    case "customizedBlue":
      return (
        <button
          className={`bg-[#1877F9] w-full ${
            isLong
              ? "lg:px-6 lg:py-5 px-3 py-4 rounded-md text-left "
              : " rounded-xl text-center lg:px-4 lg:py-4 px-2 py-4"
          }  text-white text-xl font-medium leading-[24px] border border-[#1877F9] shadow-md ${className}`}
        >
          {text}
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
          {text}
        </button>
      );

    case "transparent":
      return (
        <button
          className={`w-full ${
            isLong ? "px-6 py-5" : "px-3 py-3"
          }   text-[#101010] rounded-md lg:text-xl leading-[24px] text-left ${className}`}
        >
          {text}
        </button>
      );

    case "icon":
      return (
        <button
          className={`bg-[#F8FAFC] flex items-center gap-5 w-full px-6 py-5 rounded-md text-[#64748B] leading-6 text-left border border-[#F8FAFC] ${className}`}
        >
          <img src={icon} className="w-6 h-6" />
          {text}
        </button>
      );
  }
}
