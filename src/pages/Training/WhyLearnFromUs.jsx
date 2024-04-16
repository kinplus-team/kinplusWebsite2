import PageLayout from "../../components/Layout/PageLayout.jsx";
import Catalogue from "../../components/catalogue/Catalogue.jsx";
import cuttinEdgeTraining from "../../assets/svg/why-learn-from-us/cutting-edge-training.svg";
import handsOnExperience from "../../assets/svg/why-learn-from-us/hands-on-experience.svg";
import industryHeight from "../../assets/svg/why-learn-from-us/industry-heights.svg";
import professionalGrowth from "../../assets/svg/why-learn-from-us/professional-growth.svg";
import tailoredCurriculum from "../../assets/svg/why-learn-from-us/tailored-curriculum.svg";
// import sideBarImage from "../../assets/why-learn-from-us/why-learn-from-us.png";
import backgroundIcon from "../../assets/svg/background-icon.svg";
import sparkle from "../../assets/why-learn-from-us/sparkle.png";

// images on the catalogue card
import whyLearnFromUs1 from "../../assets/images/training/why-learn-from-us/why-learn-from-us-1.jpg";
import whyLearnFromUs2 from "../../assets/images/training/why-learn-from-us/why-learn-from-us-2.jpg";
import whyLearnFromUs3 from "../../assets/images/training/why-learn-from-us/why-learn-from-us-3.jpg";
import whyLearnFromUs4 from "../../assets/images/training/why-learn-from-us/why-learn-from-us-4.jpg";
import whyLearnFromUs5 from "../../assets/images/training/why-learn-from-us/why-learn-from-us-1.jpg";

export default function WhyLearnFromUs() {
  const reasons = [
    {
      title: "Cutting-edge training ",
      icon: cuttinEdgeTraining,
      image: whyLearnFromUs1,
    },
    {
      title: "Tailored Curriculum",
      icon: tailoredCurriculum,
      image: whyLearnFromUs2,
    },
    {
      title: "Hands-on Experience",
      icon: handsOnExperience,
      image: whyLearnFromUs3,
    },
    {
      title: "Industry Insights",
      icon: industryHeight,
      image: whyLearnFromUs4,
    },
    {
      title: "Professional Growth",
      icon: professionalGrowth,
      image: whyLearnFromUs5,
    },
  ];

  return (
    <PageLayout>
      <div className="lg:pt-36 lg:pb-28 pt-8 pb-2 relative">
        <h4 className="flex items-center text-[#1877F9] lg:text-[20px] font-[500] lg:leading-[30px] leading-[24px] mt-11 lg:mt-0 ">
          What you stand to gain
          <div className="ml-3 h-[1.5px] w-[74.75px] bg-[#222831]"></div>
        </h4>
        <p className="relative lg:block z-10 text-[#082B5B] lg:text-[40px] text-[35px] font-[700] lg:leading-[50px] leading-10 capitalized lg:max-w-2xl mb-4">
          All programs are designed to meet all your needs
        </p>
        <div>
          <img
            src={backgroundIcon}
            className="lg:w-[170px] w-[170px] lg:h-[128px] absolute lg:top-[250px] top-[180px] left-52 lg:left-80 z-0"
          />
        </div>
        <div>
          <img
            src={sparkle}
            className="w-40 h-40 absolute top-24 right-36 z-0 hidden lg:block"
          />
        </div>
        <Catalogue catalouges={reasons} />
      </div>
    </PageLayout>
  );
}
