import { Link } from "react-router-dom";
import girlOnLaptop from "../../assets/a-girl-on-a-laptop-min.jpeg";

export default function HeroPage() {
  return (
    <header className="relative h-[168vh] max-w-[100rem] ">
      
        {/*BG-Image */}
        <div className="inset-0 overflow-hidden z-0 ">
          <div
            style={{
              backgroundImage: `url(${girlOnLaptop})`,
              WebkitBackgroundSize: "cover",
            }}
            className="absolute inset-0 bg-contain bg-right-bottom "
            loading="lazy"
          ></div>
          <div className="absolute inset-0 bg-gradient-to-br from-black to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-black to-transparent"></div>
        </div>
    <header className="relative h-[100vh] max-w-[100rem] ">
      {/*BG-Image */}
      <div className="inset-0 overflow-hidden z-0 ">
        <div
          style={{
            backgroundImage: `url(${girlOnLaptop})`,
            WebkitBackgroundSize: "cover",
          }}
          className="absolute inset-0 bg-cover bg-right-bottom "
          loading="lazy"
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-black to-transparent"></div>
      </div>

        {/*Hero Text*/}
        <div className="absolute top-[13.75rem] ml-10 text-left text-white z-20 flex flex-col gap-5 sm:gap-[3rem]">
          <h1 className="text-4xl sm:text-[4.063rem] font-bold leading-[4.668rem] sm:tracking-wide">
            Empowering Innovators <br /> Through Product Development <br /> and
            Training{" "}
          </h1>
          <p className="text-2xl leading-[2.813rem]  mt-[0.1rem] tracking-wide">
          We're your product development partners. We turn your ideas into reality. We're  <br />
          experts, we pay attention to details, and we're excited to create groundbreaking <br />
          solutions. We work closely with you to make sure everything is perfect.
          </p>
          <Link
            to="/contact-us/services"
            className="bg-[#1877F9] hover:bg-[#1153AE] transition duration-200 ease-in-out text-white font-medium py-4 px-4 rounded-2xl max-h-[63px]  max-w-[226px] text-xl text-center"
          >
            Start a Project
          </Link>
        </div>
      
      {/*Hero Text*/}
      <div className="absolute top-44 ml-10 text-left text-white z-20 flex flex-col gap-5 sm:gap-20">
        <h1 className="text-4xl sm:text-5xl font-bold leading-[3rem] sm:tracking-wide">
          Empowering Innovators <br /> Through Product Development <br /> and
          Training{" "}
        </h1>
        <p className="text-xl leading-normal  tracking-wide">
          We are your dedicated product development partner, <br />
          bringing your ideas to life with expertise, precision, and a <br />
          passion for pioneering solutions.
        </p>
        <Link
          to="/contact-us/services"
          className="bg-[#1877F9] hover:bg-[#1153AE] transition duration-200 ease-in-out text-white font-medium py-2 px-4 rounded max-w-[150px]"
        >
          Start a Project
        </Link>
      </div>
    </header>
  );
}
