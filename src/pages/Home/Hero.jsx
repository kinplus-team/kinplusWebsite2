import { Link } from "react-router-dom";
import girlOnLaptop from "../../assets/pages/home/hero/a-girl-on-a-laptop-min.jpeg";
import Button from "../../components/Button";

export default function HeroPage() {
  return (
    <header className="">
      <div
        style={{
          backgroundImage: `url(${girlOnLaptop})`,
        }}
        className="absolute inset-0 bg-cover lg:bg-right-bottom bg-center grid content-center"
        loading="lazy"
      >
        {/*Hero Text*/}
        <div className="relative z-10 lg:px-[44px] px-4 grid gap-8">
          <h1 className="text-[#F1F1F1] max-w-4xl lg:text-6xl text-4xl font-bold leading-[40px] lg:leading-[65px] capitalize">
            Empowering Innovators Through Product Development and Training{" "}
          </h1>

          <p className="text-[#F1F1F1] lg:text-2xl lg:leading[40px] leading-[24px] max-w-4xl">
            We're your product development partners. We turn your ideas into
            reality. We're experts, we pay attention to details, and we're
            excited to create groundbreaking solutions. We work closely with you
            to make sure everything is perfect.
          </p>

          {/* link */}
          <Link to="/contact-us/services" className="w-60">
            <Button text="Start a Project" type="customizedBlue" />
          </Link>
        </div>
        <div className="absolute top-0 h-full w-full bg-black opacity-80"></div>
      </div>
    </header>
  );
}
