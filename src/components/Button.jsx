export default function Button({ icon, text, type, className }) {
  switch (type) {
    case "customizedBlue":
      return (
        <button
          className={`bg-[#1877F9] w-full lg:px-6 lg:py-5 px-3 py-4 rounded-md text-white text-xl leading-[24px] text-left border border-[#1877F9] shadow-md ${className}`}
        >
          {text}
        </button>
      );

    case "customizedWhite":
      return (
        <button
          className={`bg-[#ffffff] hover:bg-[#1153AE] transition duration-200 ease-in-out text-[#1877F9] hover:text-[#ffffff] font-bold p-4 w-full text-lg ${className}`}
        >
          {text}
        </button>
      );

    case "transparent":
      return (
        <button
          className={`w-full px-6 py-5  text-[#101010] rounded-md lg:text-xl leading-[24px] text-left ${className}`}
        >
          {text}
        </button>
      );

    case "icon":
      return (
        <button
          className={`bg-[#F8FAFC] flex gap-6 w-full px-6 py-5 rounded-md text-[#64748B] leading-6 text-left border border-[#F8FAFC] ${className}`}
        >
          <img src={icon} className="w-6 h-6" />
          {text}
        </button>
      );
  }
}
