export default function PageLayout({ children, className }) {
  return (
    <div className="bg-[#f1f3f9]">
      <div className={` lg:px-[30px] px-4 max-w-[93rem] mx-auto ${className} `}>
        {children}
      </div>
    </div>
  );
}
