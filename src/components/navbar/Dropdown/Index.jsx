import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

export default function Dropdown({ title, to, isDropDownOpen }) {
  const location = useLocation();

  const isHomepage = location.pathname === "/";

  return (
    isDropDownOpen && (
      <div className="my-3 text-[#101010] p-1">
        <Link
          to={to}
          className={`${
            isHomepage
              ? "text-white hover:bg-[#1877F9] py-2 px-3 rounded-md"
              : "hover:text-white hover:bg-[#1877F9] py-2 px-3 rounded-md"
          }`}
        >
          {title}
        </Link>
      </div>
    )
  );
}

Dropdown.propTypes = {
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};
