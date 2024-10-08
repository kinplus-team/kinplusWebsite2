import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import OurMissionAndVision from "./components/OurMissionAndVision";
import WhatWeDo from "./components/WhatWeDo";
import Careers from "./components/Careers";
import NextProject from "./components/NextProject";
import useDocumentTitle from "../../hooks/useDocumentTitle";

export default function AboutUs() {
  useDocumentTitle("About")
  return (
    <div>
      <Hero />
      <About />
      <OurMissionAndVision />
      <WhatWeDo />
      <Careers />
      <NextProject />
    </div>
  );
}
