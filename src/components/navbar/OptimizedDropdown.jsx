import { motion, AnimatePresence } from "framer-motion";
import React, { memo } from "react";
import { NavLink } from "react-router-dom";

const OptimizedDropdown = memo(({ isOpen, items, setIsDropDownOpen }) => {
  const dropdownVariants = {
    hidden: { opacity: 0, scaleY: 0.9, pointerEvents: "none" },
    visible: { opacity: 1, scaleY: 1, pointerEvents: "auto" },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="absolute top-0 pt-8 -right-3 z-10"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={dropdownVariants}
          transition={{ duration: 0.2 }}
        >
          <div className="bg-white w-32 rounded-md font-light text-neutral-600 px-5 shadow-lg">
            {items.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className="block py-3 hover:text-black hover:font-semibold transition-colors"
                onClick={() => setIsDropDownOpen(false)}
              >
                {item.title}
              </NavLink>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
});

export default OptimizedDropdown;
