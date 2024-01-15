import { useState } from "react";
import kinplusLogo from "../../../assets/kinplusBlue.png";
import { NavLink, useLocation } from "react-router-dom";
import { MdArrowDropDown } from "react-icons/md";
import Dropdown from "../Dropdown/Index";

export default function Header() {
  const location = useLocation();

  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  const dropDownItems = [
    {
      title: "IT / SIWES",
      to: "/training/siwes",
    },
    {
      title: "Workshop",
      to: "/training/workshop",
    },
    {
      title: "Academy",
      to: "/training/academy",
    },
  ];

  const openDropDown = () => {
    setIsDropDownOpen(!isDropDownOpen);
  };

   const closeDropDown = () => {
     setIsDropDownOpen(false);
   };

  //Check if Route is Homepage
  const isHomepage = location.pathname === "/";

  return (
    <div className="relative ">
      {/*Apply a different color if path is /home or /*/}
      <nav
        className={` flex items-center justify-between p-10 max-w-[100rem] mx-auto ${
          isHomepage
            ? "!text-white !absolute !top-0 !left-0 !right-0 !z-[999]"
            : "bg-[#D9D9D9] text-[#101010]"
        }`}
      >
        <NavLink
          to={"/"}
          className="w-[10%] p-2"
        >
          <img
            className=" h-[33px]"
            src={kinplusLogo}
            alt="Kinplus_Logo_with_blue_color"
            loading="lazy"
          />
        </NavLink>
        <div className=" flex justify-around items-center py-2 text-[1.25rem]  w-8/12">
          {/*Home not needed */}
          {/*<div>
            <NavLink
              to={"/"}
              className={`${
                isHomepage
                  ? "text-white bg-[#1877F9] py-2 px-3 rounded-md"
                  : "hover:text-white py-2 px-3 hover:rounded-md hover:bg-[#1877F9] "
              }`}
            >
              Home
            </NavLink>
            </div>
          */}

          {/*about us*/}
          <div>
            <NavLink
              to={"/about-us"}
              className={({ isActive }) =>
                isActive
                  ? "text-white bg-[#1877F9] py-2 px-3 rounded-md"
                  : "hover:text-white py-2 px-3 hover:rounded-md hover:bg-[#1877F9] "
              }
            >
              About Us
            </NavLink>
          </div>

          {/*Our Services*/}
          <div>
            <NavLink
              to={"/our-services"}
              className={({ isActive }) =>
                isActive
                  ? "text-white bg-[#1877F9] py-2 px-3 rounded-md"
                  : "hover:text-white py-2 px-3 hover:rounded-md hover:bg-[#1877F9] "
              }
            >
              Our Services
            </NavLink>
          </div>

          {/*Training*/}
          <NavLink
            to={"/training"}
            className={({ isActive }) =>
              isActive
                ? "text-white bg-[#1877F9] py-2 px-4 rounded-md "
                : "hover:text-white py-2 px-3 hover:rounded-md hover:bg-[#1877F9]"
            }
            onMouseEnter={openDropDown}
            onMouseLeave={closeDropDown}
          >
            <div className="flex justify-center items-center">
              Training <MdArrowDropDown className="text-3xl" />
            </div>
            <div
              className={`flex flex-col items-center justify-center gap-2 absolute top-[66%]  ${isHomepage ? "left-[67%]" : "left-[67%] bg-[#D9D9D9] bg-opacity-30 backdrop-filter backdrop-blur-sm w-[200px] text-center" }`}
            >
              <div className=" w-[200px]">
                {isDropDownOpen &&
                  dropDownItems.map((dropDownItem, index) => (
                    <div key={dropDownItem.title + index}>
                      <Dropdown
                        title={dropDownItem.title}
                        to={dropDownItem.to}
                        isDropDownOpen={isDropDownOpen}
                      />
                    </div>
                  ))}
              </div>
            </div>
          </NavLink>

          {/*Blog omit for now*/}
          {/*
            div>
            <NavLink
              to={"/blog"}
              className={({ isActive }) =>
                isActive
                  ? "text-white bg-[#1877F9] py-2 px-3 rounded-md"
                  : "hover:text-white py-2 px-3 hover:rounded-md hover:bg-[#1877F9] "
              }
            >
              Blog
            </NavLink>
            </div>
          */}

          {/*Contact-Us*/}
          <div>
            <NavLink
              to={"/contact-us"}
              className={({ isActive }) =>
                isActive
                  ? "text-white bg-[#1877F9] py-2 px-3 rounded-md"
                  : "hover:text-white py-2 px-3 hover:rounded-md hover:bg-[#1877F9] "
              }
            >
              Contact Us
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
}
