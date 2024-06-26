import PageLayout from "../../../components/Layout/PageLayout.jsx";
import heroDesktopView from "../../../assets/career/hero-desktop-view.png";
import heroMobileView from "../../../assets/career/hero-mobile-view.png";
import curvedBackground from "../../../assets/svg/career/curved-background.svg";
import Text from "../../../components/Text.jsx";

export default function Hero() {
  return (
    <div id="target-section">
      <div className="bg-[#082B5B] h-[700px] grid gap-4 lg:place-content-center py-36 lg:py-0 ">
        <div className="grid lg:gap-4 max-w-4xl mx-auto">
          <Text
            type="heading"
            className="text-[#f1f1f1]  capitalize text-center"
          >
            Join our team to help shape the future of development.
          </Text>

          <Text
            type="subparagraph"
            className="text-[#fff] text-center lg:max-w-6xl max-w-xs mx-auto"
          >
            At Kinplus, we're building a culture of innovation, teamwork, and
            collaboration. We value diversity, creativity, and a positive work
            environment. Our team is dedicated to making a difference in the
            tech industry, and we're always looking for talented individuals to
            join us on our journey.
          </Text>
          <p className="text-[#fff] text-center lg:text-xl text-lg lg:leading-8 leading-6 px-4 "></p>
        </div>

        <div className="relative">
          <div
            className="absolute top-0 w-full h-[531px] rounded-lg hidden lg:block "
            style={{
              background: `url(${heroDesktopView})`,
              backgroundRepeat: "no-repeat",
            }}
          ></div>

          <div className="px-4">
            <div
              className="absolute top-6 w-[90%] h-[266px] rounded-lg lg:hidden  "
              style={{
                background: `url(${heroMobileView})`,
                backgroundRepeat: "no-repeat",
              }}
            ></div>
          </div>
        </div>
      </div>
      <div className="bg-[#f1f3f9]">
        <img src={curvedBackground} />
      </div>
    </div>
  );
}
