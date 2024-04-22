import DSN from "../../assets/svg/trusted-by/DSN.svg";
import ekitiStateGovernment from "../../assets/svg/trusted-by/ekiti-state-government.svg";
import GDG from "../../assets/svg/trusted-by/GDG.svg";
import microsoft from "../../assets/svg/trusted-by/microsoft.svg";
import NITDA from "../../assets/svg/trusted-by/NITDA.svg";
import trainingHall from "../../assets/training/training-hall.png";
import trainingHallMobileView from "../../assets/training/training-hall-mobile.png";
import PageLayout from "../../components/Layout/PageLayout";
import backgroundIcon from "../../assets/svg/background-icon.svg";

export default function Index() {
  const trustedByArray = [DSN, ekitiStateGovernment, GDG, microsoft, NITDA];

  return (
    <PageLayout>
      <div className="grid lg:grid-cols-[55%_45%] lg:pb-[45px] lg:pt-[150px]">
        {/* left side bar */}
        <div className="grid sm:grid-flow-row gap-4 lg:gap-0 relative">
          <h4 className="flex items-center text-[#1877F9] lg:text-[18px] font-[500] lg:tracking-[3px] uppercase lg:leading-[111.111%] leading-[24px] mt-12 lg:mt-0">
            DIGITAL SKILL TRAINING
            <div className="ml-3 h-[1.5px] w-[74.75px]  bg-[#222831]"></div>
          </h4>

          <div className="relative z-10">
            <p className="text-[#082B5B] lg:text-[52px] text-[35px] font-[700] lg:leading-[64px] leading-[40px] tracking-[-0.16px] lg:max-w-xl max-w-sm ">
              We Are Building Tech Leaders.
            </p>
          </div>

          <div>
            <img
              src={backgroundIcon}
              className="lg:w-[159px] w-[120px] lg:h-[128px] absolute bottom-[-20px] left-52 lg:left-48 z-0"
            />
          </div>
        </div>

        {/* right side bar */}
        <div className="grid sm:grid-flow-row gap-6 justify-self-end">
          <p className="text-[#101010] lg:text-[18px] lg:max-w-[600px] mt-5 lg:mt-0">
            In todays rapidly evolving technological landscape, it is crucial
            for learners, students, and youths to have access to industry
            knowledge and opportunities in the tech industry.
          </p>
          <div className="grid gap-6">
            <p className="text-[#475569] text-sm lg:text-base">
              Trusted by <br />
              leading companies
            </p>
            <div className="grid grid-cols-[50px_50px_50px_50px_0.5fr] lg:grid-cols-[60px_60px_60px_0.2fr_0.3fr] gap-3 lg:gap-10 items-center">
              {trustedByArray.map((image, i) => (
                <img
                  key={i}
                  src={image}
                  alt="Kinplus_Logo_with_blue_color"
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* hero section image */}
      <div className="mt-5 lg:mt-0">
        <img src={trainingHall} className="hidden lg:block" />
        <img src={trainingHallMobileView} className="block lg:hidden" />
      </div>
    </PageLayout>
  );
}
