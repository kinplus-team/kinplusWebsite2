import { useState, useEffect, memo, lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { NavLink, useLocation } from "react-router-dom";
import throttle from "lodash/throttle";
import staticData from "../../repository/home/navbar";
import kinplusBlue from "../../assets/kinplusBlue.webp";
import kinplusWhite from "../../assets/kinplusWhite.webp";
import NavItem from "./NavItem";
import OptimizedDropdown from "./OptimizedDropdown";
import OptimizedImage from "./OptimizedImage";

const MobileMenu = lazy(() => import("./MobileMenu"));

const KinplusLogoBlue = memo(() => (
  <OptimizedImage
    src={kinplusBlue}
    alt="Kinplus Logo Blue"
    width={150}
    height={40}
    priority={true}
  />
));

const KinplusLogoWhite = memo(() => (
  <OptimizedImage
    src={kinplusWhite}
    alt="Kinplus Logo White"
    width={150}
    height={40}
    priority={false}
  />
));

export default function Header() {
  const location = useLocation();
  const { pathname } = location;
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [navbarColor, setNavbarColor] = useState(false);

  useEffect(() => {
    const handleScroll = throttle(
      () => setNavbarColor(window.scrollY > 50),
      100,
      { leading: true, trailing: true }
    );

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      handleScroll.cancel();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isDynamicColorPath = ["/careers", "/trainings/workshop", "/"].includes(pathname);
  const textColorClass = isDynamicColorPath
    ? navbarColor
      ? "text-neutral-900"
      : "text-white"
    : "text-neutral-900";

  return (
    <motion.nav
      className={`fixed top-0 w-full z-[999] transition-colors duration-300 ${
        navbarColor ? "bg-gray-50 shadow-sm" : "bg-transparent"
      } lg:px-8 px-4 grid grid-cols-[150px_1fr] items-center justify-between md:py-6`}
    >
      <motion.div>
        <NavLink to="/">
          {(pathname === "/careers" || pathname === "/workshop") && !navbarColor ? (
            <KinplusLogoWhite />
          ) : (
            <KinplusLogoBlue />
          )}
        </NavLink>
      </motion.div>

      <motion.div className="justify-between hidden md:flex md:space-x-3 lg:space-x-6 justify-self-end min-w-[250px]">
        {staticData.NavbarLinks.map((link) =>
          link.to === "/trainings" ? (
            <div
              key={link.to}
              className="relative group"
              onMouseEnter={() => setIsDropDownOpen(true)}
              onMouseLeave={() => setIsDropDownOpen(false)}
            >
              <NavItem
                link={link}
                isActive={location.pathname === link.to}
                textColor={textColorClass}
                isDropDownOpen={isDropDownOpen}
              />
              <OptimizedDropdown
                isOpen={isDropDownOpen}
                items={staticData.trainingList}
                setIsDropDownOpen={setIsDropDownOpen}
              />
            </div>
          ) : link.to === 'https://blog.kinplusgroup.com' ? (
            <a
              key={link.to}
              href={link.to}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-sm lg:text-lg font-medium transition-colors duration-200 border-b-[3px] hover:border-blue-600 border-transparent ${textColorClass}`}
            >
              {link.title}
            </a>
          ) : (
            <NavItem
              key={link.to}
              link={link}
              isActive={location.pathname === link.to}
              textColor={textColorClass}
              isDropDownOpen={isDropDownOpen}
            />
          )
        )}
      </motion.div>

      <div className="justify-self-end items-center md:hidden">
        <Suspense fallback={null}>
          <MobileMenu
            isDropDownOpen={isDropDownOpen}
            setIsDropDownOpen={setIsDropDownOpen}
            navbarColor={navbarColor}
          />
        </Suspense>
      </div>
    </motion.nav>
  );
}
