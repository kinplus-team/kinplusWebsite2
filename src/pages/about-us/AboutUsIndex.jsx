import React from "react";
import DefaultHelmet from "../../components/DefaultHelmet";
import About from "./components/About";
import OurMissionAndVision from "./components/OurMissionAndVision";
import Careers from "./components/Careers";
import NextProject from "./components/NextProject";
import HeroAbout from "./components/HeroAboutUs";
import WhatWeDoAbout from "./components/WhatWeDoAbout";

export default function AboutUs() {
  return (
    <div className="overflow-x-hidden">
      {/* Dynamic Helmet for SEO */}
      <DefaultHelmet
        title="About Kinplus Technologies | Empowering the Future of Tech"
        description="Discover the mission, vision, and values that drive Kinplus Technologies. Learn more about our journey, impact, and our work in software development, tech education, and innovation."
        url="https://www.kinplusgroup.com/about"
        image="https://www.kinplusgroup.com/kinplus-opengraph-image.png"
      />

      {/* Page sections */}
      <HeroAbout />
      <About />
      <OurMissionAndVision />
      <WhatWeDoAbout />
      <Careers />
      <NextProject />
    </div>
  );
}
