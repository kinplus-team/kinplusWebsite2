import { useState } from "react";
import kinplusLogo from "../../assets/kinplusBlue.png";
import { IoIosMenu } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import PageLayout from "../layout/PageLayout";

export default function Header() {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  const NavbarLinks = [
    { title: "About Us", to: "/about-us" },
    { title: "Our Services", to: "/our-services" },
    { title: "Trainings", to: "/training" },
    { title: "Blogs", to: "/blog" },
    { title: "Contact Us", to: "/contact" },
  ];

  const trainingList = [
    {
      title: "IT / SIWES",
      to: "/training/siwes",
    },
    {
      title: "Workshop",
      to: "/training/workshop",
    },
    {
      title: "Academy",
      to: "/training/academy",
    },
  ];

  return (
    <PageLayout>
      <nav
        className={` grid grid-cols-[150px,1fr] items-center justify-between lg:py-10`}
      >
        {/* logo */}
        <NavLink to={"/"}>
          <img
            src={kinplusLogo}
            alt="Kinplus_Logo_with_blue_color"
            loading="lazy"
          />
        </NavLink>

        {/* nav links */}
        <div className="hidden lg:grid grid-cols-[auto_auto_100px_auto_auto] gap-10 justify-self-end justify-end">
          {NavbarLinks.map((links, i) => (
            <NavLink
              to={links.to}
              key={i}
              className={"flex gap-1 items-center text-[#101010] text-[20px]"}
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
            className={`bg-white absolute top-20 right-64 w-40 z-10 rounded-md font-light 
              text-neutral-600 px-5 shadow-[0_0_5px_0_rgba(255,255,255,0.5)] overflow-hidden transition-all duration-300 ${
                isDropDownOpen ? "h-[145.6px]" : "h-0"
              }`}
          >
            {trainingList.map((list, i) => (
              <NavLink key={i} to={list.to}>
                <div
                  className={`
                    py-3 grid grid-flow-col gap-3 items-center justify-start hover:text-black
                    ${i > 0 && "border-t border-neutral-200"} `}
                >
                  <p className="cursor-pointer">{list.title}</p>
                </div>
              </NavLink>
            ))}
          </div>
        </div>

        {/* mobile menu */}
        <IoIosMenu className="lg:hidden w-7 lg:w-10 h-20  justify-self-end" />
      </nav>
    </PageLayout>
  );
}
