import { Link } from "react-router-dom";
import girlOnLaptop from "../../../assets/pages/home/hero/a-girl-on-a-laptop-min.jpeg";
import Button from "../../../components/Button";
import PageLayout from "../../../components/Layout/PageLayout";

export default function HeroPage() {
  return (
    <header>
      <div
        style={{
          backgroundImage: `url(${girlOnLaptop})`,
        }}
        className="max-w-[93rem] relative bg-cover lg:bg-right-bottom bg-center grid content-center bg-fixed"
      >
        {/*Hero Text*/}
        <PageLayout isBgColorWhite={true}>
          <div className="relative z-10 grid content-center gap-8 h-screen mx-auto max-w-[1500px]">
            <h1 className="text-[#F1F1F1] max-w-4xl lg:text-6xl text-4xl font-bold leading-[40px] lg:leading-[65px] capitalize">
              Empowering Innovators Through Product Development and Training{" "}
            </h1>

            <p className="text-[#F1F1F1] lg:text-2xl lg:leading[40px] leading-[24px] max-w-4xl">
              We're your product development partners. We turn your ideas into
              reality. We're experts, we pay attention to details, and we're
              excited to create groundbreaking solutions. We work closely with
              you to make sure everything is perfect.
            </p>

            {/* link */}
            <Link to="/contact-us" className="w-52">
              <Button text="Start a Project" type="customizedBlue" />
            </Link>
          </div>
        </PageLayout>
      </div>
      <div className="absolute top-0 h-full w-full bg-black opacity-70"></div>
    </header>
  );
}
