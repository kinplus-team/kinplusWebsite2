import { useState } from "react";
import kinplusLogoBlue from "../../assets/kinplusBlue.png";
import kinplusLogoWhite from "../../assets/kinplusWhite.png";
import { NavLink, useLocation } from "react-router-dom";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import PageLayout from "../Layout/PageLayout";
import staticData from "../../repository/home/navbar";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const location = useLocation();
  const { pathname } = location;
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  return (
    <PageLayout className="relative">
      <nav className="absolute z-30 top-0 lg:w-[95%] w-[92%] grid grid-cols-[150px_1fr] items-center justify-between lg:py-10">
        {/* logo */}
        <NavLink to={"/"}>
          <img
            src={
              pathname == "/careers" || pathname == "/workshop"
                ? kinplusLogoWhite
                : kinplusLogoBlue
            }
            alt="Kinplus_Logo_with_blue_color"
            loading="lazy"
          />
        </NavLink>

        {/* nav links */}
        <div className="hidden lg:grid grid-cols-[auto_auto_100px_auto_auto_auto] gap-10 justify-self-end">
          {staticData.NavbarLinks.map((links, i) => (
            <NavLink
              to={links.to !== "/training" && links.to}
              key={i}
              className={({isActive}) => (`${links.title !== "Trainings" && "navLinkHover"} flex gap-1 items-center 
              ${
                isActive && links.to !=="/trainings" 
                && "border-b-[3px] border-blue-600"} 
              ${
                pathname == "/careers" ||
                pathname == "/trainings/workshop" ||
                pathname == "/"
                  ? "text-white"
                  : "text-[#101010]"
              } text-[20px] `)}
            >
              {links.title}
              <div
                className={`${links.title !== "Trainings" && "hidden"}`}
                onClick={() => setIsDropDownOpen(!isDropDownOpen)}
              >
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
            className={`bg-white absolute top-20 right-60 w-32 z-10 rounded-md font-light 
              text-neutral-600 px-5 shadow-[0_0_5px_0_rgba(255,255,255,0.5)] overflow-hidden transition-all duration-300 ${
                isDropDownOpen ? "h-[145.6px]" : "h-0"
              }`}
          >
            {staticData.trainingList.map((list, i) => (
              <NavLink key={i} to={list.to}>
                <div
                  className={`
                    py-3 grid grid-flow-col gap-3 items-center justify-start hover:text-black hover:font-semibold
                    ${i > 0 && "border-t border-neutral-200"} `}
                >
                  <p className="cursor-pointer">{list.title}</p>
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
          />
        </div>
      </nav>
    </PageLayout>
  );
}
