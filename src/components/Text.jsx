export default function Text({ type, children, className }) {
  switch (type) {
    case "heading":
      return (
        <h1
          className={`lg:text-[65px] text-[33px] font-bold leading-[40px] lg:leading-[75px] ${className}`}
        >
          {children}
        </h1>
      );

    case "subheading":
      return (
        <h3
          className={`lg:text-[40px] text-2xl font-bold lg:leading-[50px] leading-[30px] ${className}`}
        >
          {children}
        </h3>
      );

    case "title":
      return (
        <h5
          className={` lg:text-[20px] text-lg lg:font-medium font-normal lg:leading-[30px] leading-[26px] ${className}`}
        >
          {children}
        </h5>
      );

    case "paragraph":
      return (
        <p
          className={`lg:text-xl text-base lg:leading[32px] leading-[24px] ${className}`}
        >
          {children}
        </p>
      );

    case "subparagraph":
      return (
        <p
          className={`lg:text-lg  text-base lg:leading[30px] leading-[24px] ${className}`}
        >
          {children}
        </p>
      );

    case "link":
      return (
        <h1 className="text-[#F1F1F1] max-w-4xl lg:text-6xl text-4xl font-bold leading-[40px] lg:leading-[65px]">
          Empowering Innovators Through Product Development and Training{" "}
        </h1>
      );
  }
}
