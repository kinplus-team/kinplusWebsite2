
import './style.css'
import { Link } from 'react-router-dom';
import girlOnLaptop from "../../assets/beautiful_girl_pressing_laptop.jpeg";

export default function HeroPage() {



  return (
    <body>
      <div className="relative h-[100vh] max-w-[100rem] ">
        <div className="inset-0 overflow-hidden z-0 ">
          <div
            style={{
              backgroundImage: `${girlOnLaptop}`,
              WebkitBackgroundSize: "cover",
              MozBackgroundSize: "cover",
              OBackgroundSize: "cover"
            }}
            className="absolute inset-0 bg-cover bg-right-bottom "
            loading="lazy"
          ></div>
          <div className="absolute inset-0 bg-gradient-to-br from-black to-transparent"></div>
        </div>
      </div>
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
    </body>
  );
}
