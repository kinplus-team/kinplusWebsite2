import DSN from "../../assets/svg/trusted-by/DSN.svg";
import ekitiStateGovernment from "../../assets/svg/trusted-by/ekiti-state-government.svg";
import GDG from "../../assets/svg/trusted-by/GDG.svg";
import microsoft from "../../assets/svg/trusted-by/microsoft.svg";
import NITDA from "../../assets/svg/trusted-by/NITDA.svg";
import trainingHall from "../../assets/training/training-hall.webp";
import trainingHallMobileView from "../../assets/training/training-hall-mobile.webp";
import PageLayout from "../../components/Layout/PageLayout";
import backgroundIcon from "../../assets/svg/background-icon.svg";
import Text from "../../components/Text";

export default function Index() {
  const trustedByArray = [DSN, ekitiStateGovernment, GDG, NITDA];

  return (
    <PageLayout className="lg:pt-36 pt-24">
      <div
        id="target-section"
        className="grid lg:grid-cols-[55%_45%] items-start"
      >
        {/* left side bar */}
        <div className="grid sm:grid-flow-row gap-4 lg:gap-6 relative">
          <div className="flex items-center gap-4">
            <Text type="title" className="text-[#1877F9] text-base lg:text-lg lg:tracking-[3px] capitalize">
              DIGITAL SKILL TRAINING
            </Text>
            <div className="w-[74px] lg:w-[74.775px] h-[2px] lg:h-[2px] bg-[#222831]"></div>
          </div>

          <div className="relative z-50">
            <Text type="heading" className="text-[#082B5B] text-[35px] lg:text-[52px]">
              We Are Building Tech Leaders.
            </Text>
          </div>

          <div>
            <img
              src={backgroundIcon}
              className="lg:w-[159px] w-[120px] lg:h-[128px] absolute bottom-[-50px] left-52 lg:left-60 z-0"
            />
          </div>
        </div>

        {/* right side bar */}
        <div className="grid sm:grid-flow-row gap-6 justify-self-end relative z-50">
          <Text type="subparagraph" className="text-[#101010] mt-2 lg:mt-0">
            In todays rapidly evolving technological landscape, it is crucial
            for learners, students, and youths to have access to industry
            knowledge and opportunities in the tech industry.
          </Text>
          <p className="text-[#101010] lg:text-[18px] lg:max-w-[600px] mt-5 lg:mt-0"></p>
          <div className="grid gap-6 -mt-6 lg:mt-0">
            <p className="text-[#556987] text-sm lg:text-base">
              Trusted by <br />
              leading companies/agencies
            </p>
            <div className="grid grid-cols-[50px_50px_50px_50px_0.5fr] lg:grid-cols-[60px_60px_60px_0.2fr_0.3fr] gap-3 lg:gap-10 items-center">
              {trustedByArray.map((image, i) => (
                <img
                  key={i}
                  src={image}
                  alt="Kinplus_Logo_with_blue_color"
                  loading="lazy"
                  className="flex place-items-center h-10"
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* hero section image */}
      <div className="mt-5 lg:mt-0 pt-5">
        <img src={trainingHall} className="hidden lg:block" />
        <img src={trainingHallMobileView} className="block lg:hidden" />
      </div>
    </PageLayout>
  );
}
