import { Link } from "react-router-dom";
import girlOnLaptop from "../../../assets/pages/home/hero/a-girl-on-a-laptop-min.jpeg";
import Button from "../../../components/Button";
import PageLayout from "../../../components/Layout/PageLayout";
import Text from "../../../components/Text";

export default function HeroPage() {
  return (
    <header>
      <div
        id="target-section"
        style={{
          backgroundImage: `url(${girlOnLaptop})`,
        }}
        className="max-w-[100rem] h-screen relative bg-cover lg:bg-right-bottom bg-center bg-fixed"
      >
        {/*Hero Text*/}
        <PageLayout heroSpacing isBgColorWhite={true}>
          <div className="relative z-10 flex flex-col gap-8 h-screen mx-auto lg:max-w-[1500px]">
            <Text
              type="heading"
              className="lg:max-w-[979px] max-w-[600px] text-[#F1F1F1] capitalize"
            >
              Empowering Innovators Through Product Development and Training
            </Text>

            <Text
              type="paragraph"
              className="lg:max-w-[974px] max-w-[390px] text-[#F1F1F1] capitalize"
            >
              We're your product development partners. We turn your ideas into
              reality. We're experts, we pay attention to details, and we're
              excited to create groundbreaking solutions. We work closely with
              you to make sure everything is perfect.
            </Text>

            {/* link */}
            <Link to="/contact-us/services" className="w-40">
              <Button text="Start a Project" type="customizedBlue" />
            </Link>
          </div>
        </PageLayout>
      </div>
      <div className="absolute top-0 h-screen w-full bg-black opacity-70 bg-fixed"></div>
    </header>
  );
}
