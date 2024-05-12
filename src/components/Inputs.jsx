import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import { useState } from "react";
import coloredTick from "../assets/svg/input/colored-tick.svg";
import tranparentTick from "../assets/svg/input/transparent-tick.svg";

const Input = ({
  type,
  placeholder,
  options,
  name,
  selected,
  setSelected,
  setInput,
  label,
  radioText,
}) => {
  const [isPass, setIsPass] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [isSelect, setIsSelect] = useState(false);

  switch (type) {
    case "select":
      return (
        <div className="grid py-4 gap-2 rounded-sm text-lg text-[#fff]">
          {name}
          <label
            onClick={() => setIsSelect(!isSelect)}
            className="p-4 rounded-md grid grid-cols-[1fr_auto] border border-white gap-4 items-center cursor-pointer"
          >
            <div className="text-lg whitespace-nowrap overflow-hidden text-ellipsis">
              {selected === "" ? (
                <span className="text-[#fff]">{placeholder}</span>
              ) : (
                selected.title
              )}
            </div>
            <div>
              {isSelect ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
            </div>
          </label>
          {isSelect && (
            <div className="mt-2 cursor-pointer">
              {options &&
                options.map((option, i) => (
                  <div
                    key={i}
                    onClick={() => {
                      setSelected(option);
                      setIsSelect(!isSelect);
                    }}
                    className="lg:px-6 px-3 text-primary-400"
                  >
                    {option.title}
                  </div>
                ))}
            </div>
          )}
        </div>
      );

    case "checkbox":
      return (
        <div className="p-1 py-3 lg:grid gap-2 rounded-sm text-lg text-white font-semibold relative">
          <label
            onClick={(e) => {
              setIsChecked(!isChecked);
            }}
            className="flex items-center gap-2 rounded-sm cursor-pointer"
          >
            {isChecked ? (
              <img src={coloredTick} alt={radioText} className="w-6 h-6" />
            ) : (
              <img src={tranparentTick} alt={radioText} className="w-6 h-6" />
            )}

            <p className="text-sm">{radioText}</p>
          </label>
        </div>
      );

    case "password":
      return (
        <label className="border border-black rounded-sm py-3 grid grid-cols-[1fr_auto] gap-4 items-center w-full">
          <input
            type={!isPass ? "password" : "text"}
            placeholder={placeholder}
            className="text-lg font-medium placeholder:text-[#9c9c9c] outline-none w-full"
            required
            onChange={(e) => setInput(e.target.value)}
          />
          {/* <div onClick={() => setIsPass(!isPass)}>
            {!isPass ? <Eye /> : <EyeSlash />}
          </div> */}
        </label>
      );

    case "textarea":
      return (
        <div className="text-lg text-[#fff] py-3 grid gap-2">
          {name}
          <textarea
            placeholder={placeholder}
            className="text-lg p-4 block resize-none w-full min-h-[200px] bg-transparent rounded-md border border-white"
            onChange={(e) => setInput(e.target.value)}
          ></textarea>
        </div>
      );

    default:
      return (
        <label
          htmlFor={name}
          className="grid gap-2 py-3 rounded-sm text-lg text-[#fff]"
        >
          {name}
          <input
            type={type}
            id={name}
            className="text-lg font-[400] bg-transparent placeholder:text-[#9c9c9c] placeholder:text-[16px] outline-none w-full py-4 lg:px-6 px-3 border border-white rounded-md "
            placeholder={placeholder}
            name={name}
            required
            onChange={(e) => setInput(e.target.value)}
          />
        </label>
      );
  }
};

export default Input;
