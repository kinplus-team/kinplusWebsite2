import { useState, useEffect } from "react";
import kinplusLogoBlue from "../../assets/kinplusBlue.png";
import kinplusLogoWhite from "../../assets/kinplusWhite.png";
import { NavLink, useLocation } from "react-router-dom";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import PageLayout from "../Layout/PageLayout";
import staticData from "../../repository/home/navbar";

import changeBackground from "./navbar.utils.js";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const location = useLocation();
  const { pathname } = location;
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [navbarColor, setNavbarColor] = useState(false);

  // handle background color on scroll
  useEffect(() => {
    window.addEventListener("scroll", () => changeBackground(setNavbarColor));
  });

  // close dropdown after click on a link
  // useEffect(() => {
  //   return () => {
  //     setIsDropDownOpen(false);
  //   };
  // }, [pathname]);

  return (
    <nav
      className={`transition-all duration-300 text-black ${
        navbarColor && "bg-[#f1f3f9] w-full"
      } lg:px-[30px] px-4 fixed z-[999] top-0 w-full grid grid-cols-[150px_1fr] items-center justify-between md:py-10`}
    >
      {/* logo */}
      <NavLink to={"/"}>
        <img
          src={
            pathname == "/careers" && !navbarColor
              ? kinplusLogoWhite
              : pathname == "/workshop" && !navbarColor
              ? kinplusLogoWhite
              : pathname == "/careers" && navbarColor
              ? kinplusLogoBlue
              : kinplusLogoBlue
          }
          alt="Kinplus_Logo_with_blue_color"
          loading="lazy"
        />
      </NavLink>

      {/* nav links */}
      <div className="hidden md:grid grid-cols-[auto_auto_100px_auto_auto_auto] gap-10 justify-self-end">
        {staticData.NavbarLinks.map((links, i) => (
          <NavLink
            to={links.to !== "/trainings" && links.to}
            onMouseEnter={() =>
              links.to === "/trainings" && setIsDropDownOpen(true)
            }
            onMouseLeave={() =>
              links.to === "/trainings" && setIsDropDownOpen(false)
            }
            key={i}
            className={({ isActive }) =>
              `${
                isActive &&
                links.title !== "Trainings" &&
                "border-b-[3px] border-blue-600"
              }  ${links.to !== "/trainings" && "navLinkHover"} ${
                pathname == "/careers" ||
                pathname == "/trainings/workshop" ||
                pathname == "/"
                  ? navbarColor
                    ? "text-[#101010]"
                    : "text-white"
                  : "text-[#101010]"
              } flex gap-1 items-center text-[20px]`
            }
          >
            {links.title}
            <div className={`${links.title !== "Trainings" && "hidden"}`}>
              {isDropDownOpen ? (
                <IoIosArrowUp size={13} />
              ) : (
                <IoIosArrowDown size={13} />
              )}
            </div>
          </NavLink>
        ))}

        {/* Dropdown */}
        <div
          className={`bg-white absolute top-20 right-[19.5rem] w-32 z-10 rounded-md font-light 
              text-neutral-600 px-5 shadow-[0_0_5px_0_rgba(255,255,255,0.5)] overflow-hidden transition-all duration-300 ${
                isDropDownOpen ? "h-[145.6px]" : "h-0"
              }`}
          onMouseEnter={() => setIsDropDownOpen(true)}
          onMouseLeave={() => setIsDropDownOpen(false)}
        >
          {staticData.trainingList.map((list, i) => (
            <NavLink
              key={i}
              to={list.to}
            >
              <div
                className={`
                    py-3 grid grid-flow-col gap-3 items-center justify-start hover:text-black
                    ${i > 0 && "border-t border-neutral-200"} `}
              >
                <p className="cursor-pointer hover:font-semibold">
                  {list.title}
                </p>
              </div>
            </NavLink>
          ))}
        </div>
      </div>

      {/* mobile menu */}
      <div className="justify-self-end items-center md:gap-0 md:hidden">
        <MobileMenu
          isDropDownOpen={isDropDownOpen}
          setIsDropDownOpen={setIsDropDownOpen}
          navbarColor={navbarColor}
        />
      </div>
    </nav>
  );
}
