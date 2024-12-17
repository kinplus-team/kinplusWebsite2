export default function PageLayout({
  children,
  className,
  isBgColorWhite,
  heroSpacing,
}) {
  return (
    <div className={isBgColorWhite ? "bg-white" : "bg-gray-100"}>
      <div
        className={`${
          heroSpacing ? "lg:py-48 py-32" : "lg:pt-32 pt-16"
        } lg:px-[30px] px-4 max-w-[93rem] mx-auto ${className}`}
      >
        {children}
      </div>
    </div>
  );
}
