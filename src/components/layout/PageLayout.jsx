import { useLocation } from "react-router-dom";

export default function PageLayout({ children }) {
  const location = useLocation();

  //Check if Route is Homepage
  const isHomepage = location.pathname === "/";

  return (

    <div className={`${
      isHomepage
        ? "bg-[#101010] "
        : "bg-[#f1f3f9] "
    }`}>
      <div className={` lg:px-[54px] px-4 max-w-[100rem] mx-auto}`}>

        {children}
      </div>
    </div>
  );
}
