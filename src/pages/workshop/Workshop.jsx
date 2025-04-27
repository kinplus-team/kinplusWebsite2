import React from "react";
import DefaultHelmet from "../../components/DefaultHelmet";
import HeroWorkshop from "./components/HeroWorkshop.jsx";
import WorkshopGallery from "./components/WorkshopGallery.jsx";
import ReachOut from "./components/ReachOut.jsx";
import PreviousWorkshop from "./components/PreviousWorkshop.jsx";

export default function Workshop() {
  return (
    <>
      {/* Default Helmet for SEO */}
      <DefaultHelmet
        title="Workshop Opportunities | Kinplus Technologies"
        description="Join our innovative workshops and enhance your skills in tech education, software development, and digital transformation at Kinplus Technologies."
        url="https://www.kinplusgroup.com/trainings/workshop"
        image="https://www.kinplusgroup.com/kinplus-opengraph-image.png"
      />

      <div className="overflow-x-hidden">
        <HeroWorkshop />
        <WorkshopGallery />
        <ReachOut />
        <PreviousWorkshop />
        {/* <Gallery /> */}
      </div>
    </>
  );
}
