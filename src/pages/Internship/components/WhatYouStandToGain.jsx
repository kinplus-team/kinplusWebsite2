import PageLayout from "../../../components/Layout/PageLayout.jsx";
import Catalogue from "../../../components/catalogue/Catalogue.jsx";
import realProjects from "../../../assets/svg/what-you-stand-to-gain/real-projects.svg";
import collaborate from "../../../assets/svg/what-you-stand-to-gain/collaborate.svg";
import exploreInterest from "../../../assets/svg/what-you-stand-to-gain/explore-interest.svg";
import gainValuableSkills from "../../../assets/svg/what-you-stand-to-gain/gain-valuable-skills.svg";
import learnFromKnowledgeableMentors from "../../../assets/svg/what-you-stand-to-gain/learn-from-knowledgeable-mentors.svg";
import sideBarImage from "../../../assets/IT_SIWES/what-you-stand-to-gain.png";
import backgroundIcon from "../../../assets/svg/background-icon.svg";
import sparkle from "../../../assets/why-learn-from-us/sparkle.png";

export default function WhatYouStandToGain() {
  const reasons = [
    { title: "Work on real-world projects ", icon: realProjects },
    { title: "Collaborate with our team of experts", icon: collaborate },
    { title: "Explore your interests and passions", icon: exploreInterest },
    {
      title: "Gain valuable skills for your future career",
      icon: gainValuableSkills,
    },
    {
      title: "Learn from our knowledgeable mentors",
      icon: learnFromKnowledgeableMentors,
    },
  ];

  return (
    <PageLayout>
      <div className="lg:pt-24 lg:pb-28 pt-8 pb-16 relative">
        <h4 className="flex items-center text-[#1877F9] lg:text-[20px] font-[500] lg:leading-[30px] leading-[24px] mt-11 mb-5 lg:mt-0 ">
          What you stand to gain
          <div className="ml-3 h-[1.5px] w-[74.75px] bg-[#222831]"></div>
        </h4>
        <p className="relative lg:block z-10 text-[#082B5B] lg:text-[40px] text-[28px] font-[700] lg:leading-[50px] leading-9 capitalized lg:max-w-2xl">
          It's not just a stepping stone to your future, it's a launchpad to
          success
        </p>
        <div>
          <img
            src={backgroundIcon}
            className="lg:w-[159px] w-[120px] lg:h-[128px] absolute lg:top-[230px] top-[180px] left-52 lg:left-80 z-0"
          />
        </div>
        <div>
          <img
            src={sparkle}
            className="w-40 h-40 absolute top-24 right-36 z-0 hidden lg:block"
          />
        </div>
        <Catalogue catalouges={reasons} sidebarImage={sideBarImage} />
      </div>
    </PageLayout>
  );
}
