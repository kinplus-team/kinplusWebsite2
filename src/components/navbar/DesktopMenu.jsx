import { useState, useEffect } from "react";
import kinplusLogoBlue from "../../assets/kinplusBlue.png";
import kinplusLogoWhite from "../../assets/kinplusWhite.png";
import { NavLink, useLocation } from "react-router-dom";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import MobileMenu from "./MobileMenu";
import staticData from "../../repository/home/navbar";
import changeBackground from "./navbar.utils.js";

export default function Header() {
  const location = useLocation();
  const { pathname } = location;
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [navbarColor, setNavbarColor] = useState(false);

  // Handle background color on scroll
  useEffect(() => {
    const handleScroll = () => changeBackground(setNavbarColor);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`transition-all duration-300 text-black ${
        navbarColor && "bg-[#f1f3f9] w-full"
      } lg:px-[30px] px-4 fixed z-[999] top-0 w-full grid grid-cols-[150px_1fr] items-center justify-between md:py-10`}
    >
      {/* Logo */}
      <NavLink to={"/"}>
        <img
          src={
            (pathname === "/careers" || pathname === "/workshop") &&
            !navbarColor
              ? kinplusLogoWhite
              : kinplusLogoBlue
          }
          alt="Kinplus_Logo_with_blue_color"
          loading="lazy"
        />
      </NavLink>

      {/* Nav Links */}
      <div className="hidden md:grid grid-cols-[auto_auto_100px_auto_auto_auto] gap-10 justify-self-end">
        {staticData.NavbarLinks.map((links, i) => (
          <div
            key={i}
            className="relative"
          >
            <NavLink
              to={links.to !== "/trainings" && links.to}
              onMouseEnter={() =>
                links.to === "/trainings" && setIsDropDownOpen(true)
              }
              onMouseLeave={() =>
                links.to === "/trainings" && setIsDropDownOpen(false)
              }
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
              {links.title === "Trainings" &&
                (isDropDownOpen ? (
                  <IoIosArrowUp size={13} />
                ) : (
                  <IoIosArrowDown size={13} />
                ))}
            </NavLink>

            {/* Dropdown */}
            {links.title === "Trainings" && isDropDownOpen && (
              <div
                className="bg-white absolute top-8 -right-3 w-32 z-10 rounded-md font-light text-neutral-600 px-5 shadow-[0_0_5px_0_rgba(255,255,255,0.5)] overflow-hidden transition-all duration-300"
                onMouseEnter={() =>
                  links.to === "/trainings" && setIsDropDownOpen(true)
                }
                onMouseLeave={() =>
                  links.to === "/trainings" && setIsDropDownOpen(false)
                }
              >
                {staticData.trainingList.map((list, i) => (
                  <NavLink
                    key={i}
                    to={list.to}
                    className="block py-3 hover:text-black hover:font-semibold"
                    onClick={() => setIsDropDownOpen(false)}
                  >
                    {list.title}
                  </NavLink>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Mobile Menu */}
      <div className="justify-self-end items-center md:hidden">
        <MobileMenu
          isDropDownOpen={isDropDownOpen}
          setIsDropDownOpen={setIsDropDownOpen}
          navbarColor={navbarColor}
        />
      </div>
    </nav>
  );
}
