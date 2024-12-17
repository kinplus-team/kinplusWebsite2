import { motion } from "framer-motion";
import { memo } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { NavLink } from "react-router-dom";


const NavItem = memo(({ link, isActive, textColor, isDropDownOpen }) => {
  const variants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.2 } },
    hover: { y: -2, transition: { duration: 0.2 } },
  };

  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="relative px-2"
    >
      <NavLink
        to={link.to !== "/trainings" ? link.to : "#"}
        className={`${
          isActive && link.to !== "/trainings"
            ? "border-b-2 border-blue-600"
            : ""
        } ${
          link.to !== "/trainings" ? "navLinkHover" : ""
        } ${textColor} flex gap-1 items-center lg:text-lg`}
      >
        {link.title}
        {link.title === "Trainings" && (
          <motion.span
            animate={{ rotate: isDropDownOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <IoIosArrowDown className="w-3 h-3" />
          </motion.span>
        )}
      </NavLink>
    </motion.div>
  );
});

export default NavItem