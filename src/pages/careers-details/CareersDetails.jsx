import React from "react";
import DefaultHelmet from "../../components/DefaultHelmet"; // adjust the path
import AboutOurRole from "./components/AboutOurRole.jsx";
import OtherOpenings from "./components/OtherOpenings.jsx";
import HeroCareerDetails from "./components/HeroCareerDetails.jsx";

export default function CareerDetails() {
  const { role } = useParams(); // Capture the dynamic part of the URL (e.g., "frontend-developer")

  return (
    <div>
      {/* Dynamic Helmet for SEO */}
      <DefaultHelmet
        title={`Job Opportunity at Kinplus Technologies | ${role}`}
        description="Explore the role of [Job Title] at Kinplus Technologies. Learn more about the responsibilities, benefits, and qualifications for this exciting opportunity."
        url={`https://www.kinplusgroup.com/career/${role}`}
        image="https://www.kinplusgroup.com/kinplus-opengraph-image.png"
      />

      {/* Career Details Sections */}
      <HeroCareerDetails />
      <AboutOurRole />
      <OtherOpenings />
    </div>
  );
}
