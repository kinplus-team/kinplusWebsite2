import React from "react";
import About from "./components/About";
import OurMissionAndVision from "./components/OurMissionAndVision";
import Careers from "./components/Careers";
import NextProject from "./components/NextProject";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import HeroAbout from "./components/HeroAboutUs";
import WhatWeDoAbout from "./components/WhatWeDoAbout";

export default function AboutUs() {
  useDocumentTitle("About")
  return (
    <div className="overflow-x-hidden">
      <HeroAbout />
      <About />
      <OurMissionAndVision />
      <WhatWeDoAbout />
      <Careers />
      <NextProject />
    </div>
  );
}
