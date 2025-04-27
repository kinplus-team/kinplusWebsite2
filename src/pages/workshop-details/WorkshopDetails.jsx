import React from "react";
import HeroWorkshopDetails from "./components/HeroWorkshopDetails.jsx";
import AboutWorkshopDetails from "./components/AboutWorkshopDetails.jsx";
import WorkshopReportDetails from "./components/WorkshopReportDetails.jsx";
import DefaultHelmet from "../../components/DefaultHelmet.jsx";

export default function WorkshopDetails() {
  return (
    <>
      {/* Default Helmet for SEO */}
      <DefaultHelmet
        title="Workshop Details | Kinplus Technologies"
        description="Explore detailed reports and insights from past workshops at Kinplus Technologies. Learn about the content, outcomes, and impact of our workshops in tech education."
        url="https://www.kinplusgroup.com/workshop-details"
        image="https://www.kinplusgroup.com/kinplus-opengraph-image.png" 
      />

      <div className="overflow-x-hidden">
        <HeroWorkshopDetails />
        <AboutWorkshopDetails />
        <WorkshopReportDetails />
        {/* <PreviousWorkshop /> */}
      </div>
    </>
  );
}
