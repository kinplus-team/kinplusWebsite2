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
import Text from "../../../components/Text.jsx";

export default function WhatYouStandToGain() {
  const reasons = [
    {
      title: "Work on real-world projects ",
      icon: realProjects,
      image: sideBarImage,
    },
    {
      title: "Collaborate with our team of experts",
      icon: collaborate,
      image: sideBarImage,
    },
    {
      title: "Explore your interests and passions",
      icon: exploreInterest,
      image: sideBarImage,
    },
    {
      title: "Gain valuable skills for your future career",
      icon: gainValuableSkills,
      image: sideBarImage,
    },
    {
      title: "Learn from our knowledgeable mentors",
      icon: learnFromKnowledgeableMentors,
      image: sideBarImage,
    },
  ];

  return (
    <PageLayout className="relative">
      <div className="flex items-center gap-4 lg:gap-5">
            <Text type="title" className="text-[#1877F9] text-sm sm:text-base md:text-lg lg:text-xl">
              What you stand to gain
            </Text>
            <div className="w-[3.625em] md:w-[4.563em] h-[0.125em] bg-[#222831]"></div>
      </div>

      <Text
        type="subheading"
        className="text-[#082B5B] sm:text-[1.75em] md:text-[2.25em] lg:text-[2.5em] md:leading-[128.571%] sm:max-w-lg md:max-w-2xl mt-4 lg:mt-1 relative z-10"
      >
        It's not just a stepping stone to your future, it's a launchpad to
        success
      </Text>

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
      <Catalogue
        catalouges={reasons}
        sidebarImage={sideBarImage}
        isLinked={false}
      />
    </PageLayout>
  );
}
