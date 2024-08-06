import { Link } from "react-router-dom";

import Button from "../../../components/Button.jsx";
import curvedBackground from "../../../assets/svg/career/curved-background.svg";
import heroImg from "../../../assets/workshop/hero.png";
import Text from "../../../components/Text.jsx";

export default function Hero() {
  return (
    <div>
      <div id="target-section" className="bg-[#082B5B] ">
        <div className=" grid lg:grid-cols-[auto_1fr] relative gap-4 lg:pt-48 pt-28 pb-5 lg:px-[60px] px-4 max-w-[100rem] mx-auto">
          <div className="grid gap-4 max-w-3xl">
            <Text type="heading" className="text-[#fff] capitalize">
              Be a part of our sponsored and partnered training Workshops
            </Text>

            <Text type="subparagraph" className="text-[#8896AB] max-w-lg">
              Join our sponsored and partnered training workshop programs. Grow
              your skills and knowledge in a supportive environment
            </Text>

            <div className="w-80">
              <Button
                type="customizedWhite"
                text="Join Ongoing Workshop"
                className="rounded-md"
                disabled={true}
              />
            </div>

            <div className="lg:px-[54px] px-4 lg:hidden block">
              <Link
                to="/sponsor-or-partner-with-us"
                className="text-lg font-bold underline text-[#fff] cursor-pointer"
              >
                <p>Sponsor or Partner with us</p>
              </Link>
            </div>
          </div>
          <div className="relative h-32 lg:h-auto lg:w-auto">
            <div className="lg:w-[554px] lg:h-[464px] mx-auto absolute lg:block top-[20px] px-5 z-20 lg:place-self-start">
              <img src={heroImg} />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#f1f3f9] relative ">
        <div className="lg:px-[54px] px-4 max-w-[100rem] mx-auto lg:block hidden">
          <Link
            to="/sponsor-or-partner-with-us"
            className="text-lg font-bold underline text-[#fff] absolute top-0  z-10"
          >
            <p>Sponsor or Partner with us</p>
          </Link>
        </div>

        <img src={curvedBackground} />
      </div>
    </div>
  );
}
