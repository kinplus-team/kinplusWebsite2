import React, { useState, Suspense, memo } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosMenu } from "react-icons/io";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import staticData from "../../repository/home/navbar";
import closeIcon from "../../assets/components/navbar/svg/closeSvg.svg";
import kinplusBlue from "../../assets/kinplusBlue.webp";
import kinplusWhite from "../../assets/kinplusWhite.webp";

// Import components lazily
const SocialLinks = React.lazy(() => import("./socialLinks"));

// Lazy load images
const KinplusLogoBlue = memo(() => (
  <img
    src={kinplusBlue}
    alt="Kinplus Logo Blue"
    loading="lazy"
    width="150"
    height="40"
  />
));

const KinplusLogoWhite = memo(() => (
  <img
    src={kinplusWhite}
    alt="Kinplus Logo White"
    loading="lazy"
    width="150"
    height="40"
  />
));

const MobileMenu = ({ isDropDownOpen, setIsDropDownOpen, navbarColor }) => {
  const [isMobileNav, setIsMobileNav] = useState(false);
  const location = useLocation();
  const { pathname } = location;
  const currentYear = new Date().getFullYear();

  const menuVariants = {
    open: {
      left: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 30,
        duration: 0.2,
      },
    },
    closed: {
      left: "-100vw",
      opacity: 0,
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 60,
        duration: 0.15,
      },
    },
  };

  const dropdownVariants = {
    hidden: { opacity: 0, height: 0, transition: { duration: 0.2 } },
    visible: { opacity: 1, height: "auto", transition: { duration: 0.2 } },
  };

  const getMenuIconColor = () => {
    const pathsWithBlackIcon = [
      "/about-us",
      "/trainings/courses/graphic-design",
      "/trainings/courses/software-development",
      "/trainings/courses/data-analysis",
      "/trainings/courses/product-design",
      "/sponsor-or-partner-with-us",
      "/trainings/courses/cyber-security",
      "/our-services",
      "/trainings",
      "/trainings/siwes",
      "/contact-us/services",
      "/contact-us/training",
      "/trainings/workshop/kinplus-nitda",
      "/contact-us",
      "/blog",
      "/events",
      "/*",
    ];
    return pathsWithBlackIcon.includes(pathname) || navbarColor
      ? "text-black"
      : "text-white";
  };

  return (
    <>
      <IoIosMenu
        className={`lg:hidden w-7 lg:w-10 h-20 justify-self-end cursor-pointer ${getMenuIconColor()}`}
        onClick={() => setIsMobileNav(true)}
      />

      <AnimatePresence>
        {isMobileNav && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed z-50 top-0 h-screen w-full bg-white"
          >
            <div className="lg:px-11 px-4 h-screen flex flex-col justify-between">
              {/* Header */}
              <div className="grid grid-cols-2 items-center">
                <NavLink
                  to="/"
                  onClick={() => setIsMobileNav(false)}
                  className="focus:outline-none w-fit h-[40px]"
                >
                  {pathname === "/careers" || pathname === "/workshop" ? (
                    <KinplusLogoWhite />
                  ) : (
                    <KinplusLogoBlue />
                  )}
                </NavLink>
                <button
                  className="bg-white w-full h-full py-5 grid content-start justify-items-end"
                  onClick={() => setIsMobileNav(false)}
                  aria-label="Close menu"
                >
                  <img
                    src={closeIcon}
                    alt="multiplication icon"
                    className="w-14 h-14 text-neutral-600 cursor-pointer"
                  />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="grid gap-8">
                {staticData.NavbarLinks.map((navLink, i) => (
                  <div key={i}>
                    {navLink.title === "Trainings" ? (
                      // Use a button for the "Trainings" item instead of NavLink
                      <button
                        className={`text-2xl font-medium leading-9 flex gap-3 items-center w-fit transition-colors duration-200 hover:text-primary`}
                        onClick={() => setIsDropDownOpen(!isDropDownOpen)}
                      >
                        <span>{navLink.title}</span>
                        {isDropDownOpen ? (
                          <IoIosArrowUp className="w-4 h-4" />
                        ) : (
                          <IoIosArrowDown className="w-4 h-4" />
                        )}
                      </button>
                    ) : (
                      // Regular NavLink for other items
                      <NavLink
                        to={navLink.to}
                        className={({ isActive }) =>
                          `text-2xl font-medium leading-9 flex gap-3 items-center
                          hover:text-primary transition-colors duration-200 w-fit border-b-[3px] hover:border-blue-600 border-transparent
                          ${
                            isActive && navLink.to !== "/trainings"
                              ? "border-blue-600"
                              : "hover:border-blue-600 border-transparent"
                          }`
                        }
                        onClick={() => setIsMobileNav(false)}
                      >
                        <span>{navLink.title}</span>
                      </NavLink>
                    )}

                    {/* Dropdown Menu */}
                    <AnimatePresence>
                      {isDropDownOpen && navLink.title === "Trainings" && (
                        <motion.div
                          initial="hidden"
                          animate="visible"
                          exit="hidden"
                          variants={dropdownVariants}
                        >
                          {staticData.trainingList.map((list, i) => (
                            <NavLink
                              key={i}
                              to={list.to}
                              className="px-3 py-1 mt-4 grid grid-flow-col gap-2 items-center 
                            justify-start hover:text-primary hover:font-semibold
                            transition-all duration-200"
                              onClick={() => {
                                setIsMobileNav(false);
                                setIsDropDownOpen(false);
                              }}
                            >
                              <p className="text-xl mb-2">{list.title}</p>
                            </NavLink>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </nav>

              {/* Footer */}
              <footer className="border-t border-gray-100 pt-4 pb-2 mt-auto">
                <p className="text-center text-xs font-medium">
                  &copy; {currentYear} Kinplus Technologies. All rights
                  reserved.
                </p>
                <Suspense fallback={<div className="h-9" />}>
                  <SocialLinks />
                </Suspense>
              </footer>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileMenu;
