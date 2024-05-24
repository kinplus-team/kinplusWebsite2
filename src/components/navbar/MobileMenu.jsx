import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

// assets
import kinplusLogoBlue from "../../assets/kinplusBlue.png";
import kinplusLogoWhite from "../../assets/kinplusWhite.png";

// react icons
import { IoIosMenu } from "react-icons/io";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

import closeIcon from "../../assets/components/navbar/svg/closeSvg.svg";

// social media icon
import facebookIcon from "../../assets/components/navbar/svg/facebook.svg";
import instagramIcon from "../../assets/components/navbar/svg/instagram.svg";
import linkedInIcon from "../../assets/components/navbar/svg/linkedIn.svg";
import twitterIcon from "../../assets/components/navbar/svg/twitter.svg";

// Static Data
import staticData from "../../repository/home/navbar";

const MobileMenu = ({ isDropDownOpen, setIsDropDownOpen, navbarColor }) => {
  const [isMobileNav, setIsMobileNav] = useState(false);
  const location = useLocation();
  const { pathname } = location;

  // console.log(navbarColor);
  return (
    <>
      <IoIosMenu
        className={`lg:hidden w-7 lg:w-10 h-20  justify-self-end   ${
          pathname === "/" && navbarColor
            ? "text-black"
            : pathname == "/about-us"
            ? "text-black"
            : "text-white"
        }`}
        onClick={() => setIsMobileNav(true)}
      />
      <div
        className={`fixed z-50 top-0 h-screen w-full bg-white transition-[1s] ${
          isMobileNav ? "left-0" : "left-[-100vw]"
        }`}
      >
        <div className="lg:px-[44px] px-4 h-screen flex flex-col justify-between">
          {/* header */}
          <div className="grid grid-cols-2 items-center">
            <NavLink
              to={"/"}
              onClick={() => {
                setIsMobileNav(false);
              }}
            >
              <img
                src={
                  pathname == "/careers" || pathname == "/workshop"
                    ? kinplusLogoWhite
                    : kinplusLogoBlue
                }
                className="w-32"
                alt="Kinplus_Logo"
                loading="lazy"
              />
            </NavLink>

            <div
              className="bg-white w-full h-full py-5 grid content-start"
              onClick={() => setIsMobileNav(false)}
            >
              <img
                src={closeIcon}
                className="justify-self-end text-xl text-neutral-600 w-14 h-14"
              />
            </div>
          </div>

          {/* links */}
          <div className="grid gap-8 ">
            {staticData.NavbarLinks.map((navLinks, i) => (
              <NavLink
                key={i}
                to={navLinks.to}
                className={`text-3xl font-medium leading-[36px] flex gap-3 ${
                  !isDropDownOpen && "items-center"
                }`}
                onClick={() => {
                  navLinks.title !== "Trainings"
                    ? setIsMobileNav(false)
                    : setIsDropDownOpen(!isDropDownOpen);
                }}
              >
                <div>
                  <div className="flex items-center gap-2">
                    {navLinks.title}

                    <div
                      className={`${
                        navLinks.title !== "Trainings" && "hidden"
                      }`}
                    >
                      {isDropDownOpen ? (
                        <>
                          <IoIosArrowUp size={13} />
                        </>
                      ) : (
                        <IoIosArrowDown size={13} />
                      )}
                    </div>
                  </div>

                  {isDropDownOpen && navLinks.title == "Trainings" && (
                    <div>
                      {staticData.trainingList.map((list, i) => (
                        <NavLink key={i} to={list.to}>
                          <div
                            className={`px-3 py-1 grid grid-flow-col gap-2 items-center justify-start hover:text-black font-light`}
                            onClick={() => {
                              setIsMobileNav(false);
                              setIsDropDownOpen(false);
                            }}
                          >
                            <p className="cursor-pointer text-base">
                              {list.title}
                            </p>
                          </div>
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              </NavLink>
            ))}
          </div>

          {/* bottom section */}
          <div>
            <div className="flex gap-3 justify-center py-4">
              {[facebookIcon, linkedInIcon, instagramIcon, twitterIcon].map(
                (icon, index) => (
                  <img key={index} src={icon} className="w-10 h-10" />
                )
              )}
            </div>

            <div className="bg-black h-[0.915px] w-full"></div>
            <div className="py-4">
              <p className="text-lg leading-6 mx-auto text-center max-w-xs">
                Copyright © 2024 Kinplus Technologies. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
