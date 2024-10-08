import Button from "../../../components/Button";
import PageLayout from "../../../components/Layout/PageLayout";
import HeroDesktopImage from "../../../assets/IT_SIWES/Hero/desktop-view.webp";
import backgroundIcon from "../../../assets/svg/background-icon.svg";
import maskedGrid from "../../../assets/svg/masked-grid.svg";
import Text from "../../../components/Text";

import { Link } from "react-scroll";

export default function Hero() {
  return (
    <PageLayout className="lg:pt-36 pt-24">
      <div id="target-section" className="grid lg:grid-cols-[55%_45%]">
        {/* left side bar */}
        <div className="grid sm:grid-flow-row gap-4 lg:gap-3 relative">
          <div className="flex items-center gap-4 lg:gap-16 md:mt-20 lg:mt-0">
            <Text type="title" className="text-[#1877F9] text-base lg:text-lg lg:tracking-[0.188em] capitalize">
              IT/SIWES
            </Text>
            <div className="w-[3.625em] md:w-[4.673em] h-[0.125em] bg-[#222831]"></div>
          </div>


          <Text
            type="heading"
            className="text-[#082B5B] text-[2.188em] md:text-[2.375em] lg:text-[2.188em] md:max-w-2xl max-w-sm relative z-30"
          >
            Join our IT/SIWES program at Kinplus
          </Text>

          <img
            src={backgroundIcon}
            className="lg:w-[159px] w-[120px] lg:h-[128px] absolute bottom-[-60px] right-0 lg:left-[550px] z-0"
          />
        </div>

        {/* right side bar */}
        <div className="grid sm:grid-flow-row gap-6 justify-self-end py-3 relative z-10">
          <Text type="subparagraph" className="text-[#101010] lg:w-[91%] mt-[1.5em] lg:mt-0">
            Welcome to Kinplus! We're excited to have you join us for your
            industrial training. Here, you'll gain valuable experience in the
            tech industry and have the opportunity to learn from our team of
            experts. Register now to begin your journey with us.
          </Text>

          <div className="grid gap-6 relative">
            <div className="lg:w-40 w-36">
              <Link
                to="internship-application-form"
                smooth={true}
                duration={800}
              >
                <Button type="customizedBlue" text="Join us" />
              </Link>
            </div>
            <img
              src={maskedGrid}
              className="w-[105px] h-[100px] absolute lg:top-0 lg:right-0 right-[-30px] top-[-30px]"
            />
          </div>
        </div>
      </div>

      {/* hero section image */}
      <div className="lg:pt-16 pt-8 mt-[2em] lg:mt-0">
        <img src={HeroDesktopImage}/>
      </div>
    </PageLayout>
  );
}
