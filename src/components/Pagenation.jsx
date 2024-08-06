import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";

export default function Pagenation() {
  const pagenation = [1, 2, 3];
  return (
    <div className="lg:grid gap-2 grid-cols-[auto_50px_50px_50px_auto] justify-center hidden">
      <IoIosArrowRoundBack className="w-12 h-12 hover:text-[#1877F9]" />
      {pagenation.map((page, i) => (
        <div
          key={i}
          className={`py-4 rounded-md ${
            i == 0
              ? "bg-[#1877F9] text-white border border-[#1877F9]"
              : "border-2 border-[#828282] text-[#828282]"
          } text-center text-sm font-bold leading-[20px]`}
        >
          {page}
        </div>
      ))}
      <IoIosArrowRoundForward className="w-12 h-12 hover:text-[#1877F9]" />
    </div>
  );
}
