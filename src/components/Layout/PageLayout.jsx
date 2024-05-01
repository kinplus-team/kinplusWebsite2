export default function PageLayout({ children, className, isBgColorWhite }) {
  console.log(isBgColorWhite);
  return (
    <div className={!isBgColorWhite && "bg-[#f1f3f9]"}>
      <div className={` lg:px-[30px] px-4 max-w-[93rem] mx-auto ${className} `}>
        {children}
      </div>
    </div>
  );
}
