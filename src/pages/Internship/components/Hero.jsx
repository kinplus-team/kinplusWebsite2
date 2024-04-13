import Button from "../../../components/Button";
import PageLayout from "../../../components/Layout/PageLayout";
import HeroDesktopImage from "../../../assets/IT_SIWES/Hero/desktop-view.png";
import HeroMobileImage from "../../../assets/IT_SIWES/Hero/desktop-view.png";
import backgroundIcon from "../../../assets/svg/background-icon.svg";
import maskedGrid from "../../../assets/svg/masked-grid.svg";

export default function Hero() {
  return (
    <PageLayout>
      <div className="grid lg:grid-cols-[55%_45%] lg:pb-10 lg:pt-40">
        {/* left side bar */}
        <div className="grid sm:grid-flow-row gap-4 lg:gap-0 relative">
          <h4 className="flex items-center text-[#1877F9] lg:text-[18px] font-[500] lg:tracking-[3px] uppercase lg:leading-[111.111%] leading-[24px] mt-12 lg:mt-0">
            IT/SIWES
            <div className="ml-3 h-[1.5px] w-[74.75px]  bg-[#222831]"></div>
          </h4>

          <div className="relative z-10">
            <p className="text-[#082B5B] lg:text-[52px] text-[35px] font-[700] lg:leading-[64px] leading-[40px] tracking-[-0.16px] lg:max-w-xl max-w-sm ">
              Join our IT/SIWES program at Kinplus
            </p>
          </div>

          <div>
            <img
              src={backgroundIcon}
              className="lg:w-[159px] w-[120px] lg:h-[128px] absolute bottom-[-40px] right-0 lg:left-96 z-0"
            />
          </div>
        </div>

        {/* right side bar */}
        <div className="grid sm:grid-flow-row gap-6 justify-self-end">
          <p className="text-[#101010] lg:text-[18px] lg:max-w-[600px] mt-5 lg:mt-0">
            Welcome to Kinplus! We're excited to have you join us for your
            industrial training. Here, you'll gain valuable experience in the
            tech industry and have the opportunity to learn from our team of
            experts. Register now to begin your journey with us.
          </p>
          <div className="grid gap-6 relative">
            <div className="lg:w-40 w-36">
              <Button type="customizedBlue" text="Join us" />
            </div>
            <img
              src={maskedGrid}
              className="w-[105px] h-[100px] absolute lg:top-0 lg:right-0 right-[30px] top-[-30px]"
            />
          </div>
        </div>
      </div>

      {/* hero section image */}
      <div className="mt-5 lg:mt-0">
        <img src={HeroDesktopImage} className="hidden lg:block" />
        <img src={HeroMobileImage} className="block lg:hidden" />
      </div>
    </PageLayout>
  );
}
