export default function PageLayout({ children, className, bgColor }) {
  return (
    <div className={`${bgColor}`}>
      <div className={` lg:px-[30px] px-4 max-w-[93rem] mx-auto ${className} `}>
        {children}
      </div>
    </div>
  );
}
