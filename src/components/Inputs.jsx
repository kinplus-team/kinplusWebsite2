import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import React, { useState } from "react";
import coloredTick from "../assets/svg/input/colored-tick.svg";
import transparentTick from "../assets/svg/input/transparent-tick.svg";

const Input = React.forwardRef(
  (
    {
      type,
      placeholder,
      options,
      name,
      selected,
      setSelected,
      label,
      radioText,
      isChecked,
      onCheck,
      isSelect,
      setIsSelect,
      date,
      isTextAreaRequired,
      isRequired,
      maxLength,
      minLength,
      spanText,
      ...rest
    },
    ref
  ) => {
    const [isPass, setIsPass] = useState(false);

    // Function to format the name prop
    const formatName = (str) => {
      return str
        .replace(/([A-Z])/g, " $1") // insert a space before all capital letters
        .replace(/^./, function (str) {
          return str.toUpperCase();
        }) // capitalize the first letter
        .trim(); // remove any leading or trailing spaces
    };

    switch (type) {
      case "select":
        return (
          <div className="relative py-4 gap-2 rounded-sm text-lg text-[#fff]">
            {formatName(name)}
            <label
              onClick={() => setIsSelect(!isSelect)}
              className="p-4 rounded-md grid grid-cols-[1fr_auto] mt-2 border border-white items-center cursor-pointer"
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
              <div className="absolute mt-2 left-0 bg-white right-0 z-10 ">
                {options &&
                  options.map((option, i) => (
                    <div
                      key={i}
                      className="py-[0.8px]"
                    >
                      <div
                        onClick={() => {
                          setSelected(option);
                          setIsSelect(!isSelect);
                        }}
                        className="lg:px-6 px-3 py-4 text-black cursor-pointer hover:text-opacity-80"
                      >
                        {option.title}
                      </div>
                      {i !== options.length - 1 && (
                        <div className="h-[0.8px] mx-auto bg-neutral-600"></div>
                      )}
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
                onCheck();
              }}
              className="flex items-center gap-2 rounded-sm cursor-pointer"
            >
              {isChecked ? (
                <img
                  src={coloredTick}
                  alt={radioText}
                  className="w-6 h-6"
                />
              ) : (
                <img
                  src={transparentTick}
                  alt={radioText}
                  className="w-6 h-6"
                />
              )}
              <p className="text-sm">{radioText}</p>
            </label>
          </div>
        );

      case "password":
        return (
          <label className="border border-black rounded-sm py-3 grid grid-cols-[1fr_auto] gap-4 items-center w-full">
            <input
              ref={ref}
              type={!isPass ? "password" : "text"}
              placeholder={placeholder}
              className="text-lg font-medium placeholder:text-[#9c9c9c] outline-none w-full"
              required={isRequired}
              {...rest}
            />
          </label>
        );

      case "textarea":
        return (
          <div className="text-lg text-[#fff] py-3 grid gap-2">
            <p className="flex items-center space-x-2">
              {formatName(name)}
              <span className="text-xs ml-2 text-smoke-500">{spanText}</span>
            </p>
            <textarea
              ref={ref}
              placeholder={placeholder}
              className="text-lg p-4 block resize-none w-full min-h-[200px] bg-transparent rounded-md border border-white"
              required={isTextAreaRequired}
              maxLength={maxLength}
              minLength={minLength}
              {...rest}
            />
          </div>
        );

      default:
        return (
          <label
            htmlFor={name}
            className="grid gap-2 py-3 rounded-sm text-lg text-[#fff]"
          >
            {formatName(name)}
            <input
              ref={ref}
              type={type}
              id={name}
              className="text-lg font-[400] bg-transparent placeholder:text-[#ffff] placeholder:font-light placeholder:text-[16px] outline-none w-full py-4 lg:px-6 px-3 border border-white rounded-md"
              placeholder={placeholder}
              name={name}
              required={isRequired}
              maxLength={maxLength}
              minLength={minLength}
              {...rest}
            />
          </label>
        );
    }
  }
);

export default Input;
