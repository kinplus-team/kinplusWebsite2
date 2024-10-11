import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

// assets
import kinplusLogoBlue from "../../assets/kinplusBlue.png";
import kinplusLogoWhite from "../../assets/kinplusWhite.png";

// react icons
import { IoIosMenu } from "react-icons/io";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

// close icon
import closeIcon from "../../assets/components/navbar/svg/closeSvg.svg";

// social media icon
import facebookIcon from "../../assets/components/navbar/svg/facebook.svg";
import instagramIcon from "../../assets/components/navbar/svg/instagram.svg";
import linkedInIcon from "../../assets/components/navbar/svg/linkedIn.svg";
import twitterIcon from "../../assets/components/navbar/svg/twitter.svg";

// Social media links
const bottomIcons = [
  {
    icon: facebookIcon,
    link: "https://web.facebook.com/kinplustechnologies/?_rdc=1&_rdr",
  },
  {
    icon: linkedInIcon,
    link: "https://www.linkedin.com/company/kinplustechnologies/",
  },
  {
    icon: instagramIcon,
    link: "https://www.instagram.com/kinplustechnologies/",
  },
  { icon: twitterIcon, link: "https://twitter.com/kinplustech" },
];

// Static Data
import staticData from "../../repository/home/navbar";

const MobileMenu = ({ isDropDownOpen, setIsDropDownOpen, navbarColor }) => {
  const [isMobileNav, setIsMobileNav] = useState(false);
  const location = useLocation();
  const { pathname } = location;

  const currentYear = new Date().getFullYear();

  return (
    <>
      <IoIosMenu
        className={`lg:hidden w-7 lg:w-10 h-20 justify-self-end ${
          pathname === "/" && navbarColor ? "text-black" : "text-white"
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
                  pathname === "/careers" || pathname === "/workshop"
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
              <div key={i}>
                <NavLink
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
                  <div className="flex items-center gap-2">
                    {navLinks.title}

                    {navLinks.title === "Trainings" && (
                      <div>
                        {isDropDownOpen ? (
                          <IoIosArrowUp size={13} />
                        ) : (
                          <IoIosArrowDown size={13} />
                        )}
                      </div>
                    )}
                  </div>
                </NavLink>

                {/* Dropdown Links */}
                {isDropDownOpen && navLinks.title === "Trainings" && (
                  <div>
                    {staticData.trainingList.map((list, i) => (
                      <NavLink
                        key={i}
                        to={list.to}
                        className="px-3 py-1 mt-4 grid grid-flow-col gap-2 items-center justify-start hover:text-black font-light"
                        onClick={() => setIsMobileNav(false)} // Close the mobile nav on click
                      >
                        <p className="text-[1.3rem] mb-2">{list.title}</p>
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="border-t border-[#f1f3f9] pt-6 pb-4 mt-auto">
            <p className="text-center text-sm font-medium">
              &copy; {currentYear} Kinplus Technologies. All rights reserved.
            </p>
            <div className="flex justify-center gap-5 mt-3">
              {bottomIcons.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={item.icon}
                    className="w-6 h-6"
                    alt="social icon"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
