import React from "react";
import AboutOurRole from "./components/AboutOurRole.jsx";
import OtherOpenings from "./components/OtherOpenings.jsx";
import HeroCareerDetails from "./components/HeroCareerDetails.jsx";

export default function CareerDetails() {
  return (
    <div>
      <HeroCareerDetails />
      <AboutOurRole />
      {/* <ApplyForRole /> */}
      <OtherOpenings />
    </div>
  );
}
