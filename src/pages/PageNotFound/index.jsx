import React from "react";
import { useState, useEffect } from "react";
import kinplusLogoBlue from "../../assets/kinplusBlue.png";
import arrow from "../../assets/PageNotFound/Arrow.svg";
import errorImage from "../../assets/PageNotFound/errorImage.svg";
import errorImageMobile from "../../assets/PageNotFound/errorImageMobile.svg";
import Button from "../../components/Button";
import { Link, useNavigate } from "react-router-dom";
import useDocumentTitle from "../../hooks/useDocumentTitle";

const PageNotFound = () => {
  const [isHover, setIsHover] = useState(false);
  const navigate = useNavigate();
  useDocumentTitle("Error Page")

  // Navigate back one page in the browser's history
  const handleGoBack = () => {    
    navigate(-1);
  };

  return (
    <div className="py-10 flex flex-col items-center justify-center">
      {/* Kinplus logo */}
      <img
        src={kinplusLogoBlue}
        alt="kinplus logo"
        className="h-[30px] lg:h-[61.893px] w-[107.081px] lg:w-[220.919px] mb-[6rem] lg:mb-0 mx-auto block"
      />
      {/* Error Image (Desktop view) */}
      <div className="hidden lg:flex justify-evenly relative mt-[2em] mb-[2em]">
        <img
          src={errorImage}
          alt="Error image"
          className="lg:h-[135.143px] md:w-[400px] lg:w-[515.604px] mx-auto block"
        />
      </div>

      {/* Error Image (Mobile view) */}
      <div className="flex lg:hidden">
        <img
          src={errorImageMobile}
          alt="Error image"
          className="h-[146.56px] w-[304.604px] mx-auto block"
        />
      </div>
      {/* Error text */}
      <div className="mt-[0.5rem] lg:mt-[1em]">
        <p className="text-[#DE0000] md:pl-10 font-bold text-[25.193px] lg:text-[30.125px] text-center">
          Oops...
        </p>
        <h2 className="text-center mx-auto mt-[0.5rem] lg:mt-[1rem] leading-tight lg:leading-normal text-[31.202px] lg:text-[40.355px] font-medium lg:w-[700px]">
          We can’t find the page you’re looking for.
        </h2>
      </div>

      {/* CTA and Home page link */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-[2rem] lg:gap-[13rem] mt-8 lg:mt-6">
        <Button
          text="Go back!"
          type="customizedBlue"
          className="w-[115px] lg:w-[168px] py-[16px] lg:py-[20px] px-[24px] lg:px-[42px]"
          onClick={handleGoBack}
        />

        <Link
          to="/"
          className="flex text-xl font-semibold leading-[112%] gap-[0.6em] hover:gap-[1em] items-center justify-center underline w-60"
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          <span>Go to homepage</span>
          {/* Arrow image */}
          <img
            src={arrow}
            alt="Arrow"
            className={`${isHover ? "w-[45px]" : "w-[35px]"}`}
          />
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
