import React from "react";
import Hero from "./components/Hero.jsx";
import AboutOurRole from "./components/AboutOurRole.jsx";
import ApplyForRole from "./components/ApplyForRole.jsx";
import OtherOpenings from "./components/OtherOpenings.jsx";
import PageLayout from "../../components/Layout/PageLayout.jsx";

export default function CareerDetails() {
  return (
    <div>
      <Hero />
      <AboutOurRole />
      <ApplyForRole />
      <OtherOpenings />
    </div>
  );
}
