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
import whyLearnFromUs1 from "../../assets/images/training/why-learn-from-us/why-learn-from-us-1.webp";
import whyLearnFromUs2 from "../../assets/images/training/why-learn-from-us/why-learn-from-us-2.webp";
import whyLearnFromUs3 from "../../assets/images/training/why-learn-from-us/why-learn-from-us-3.webp";
import whyLearnFromUs4 from "../../assets/images/training/why-learn-from-us/why-learn-from-us-4.webp";
import whyLearnFromUs5 from "../../assets/images/training/why-learn-from-us/why-learn-from-us-1.webp";

import Text from "../../components/Text.jsx";

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
      <div className=" relative">
        <Text type="title" className="text-[#1877F9] relative z-50">
          What you stand to gain
        </Text>

        <Text
          type="subheading"
          className="text-[#082B5B] text-[30px] lg:text-[40px] mt-4 lg:mt-0 mb-4 lg:mb-0 lg:max-w-2xl relative z-50"
        >
          All programs are designed to meet all your needs
        </Text>
        <div>
          <img
            src={backgroundIcon}
            className="lg:w-[170px] w-[170px] lg:h-[128px] absolute lg:top-[100px] top-[10px] left-40 lg:left-80 z-0"
          />
        </div>
        <div>
          <img
            src={sparkle}
            className="w-40 h-40 absolute top-10 right-36 z-0 hidden lg:block"
          />
        </div>
        <Catalogue isLinked={false} catalouges={reasons} />
      </div>
    </PageLayout>
  );
}
