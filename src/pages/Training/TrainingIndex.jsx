import React from "react";
import DefaultHelmet from "../../components/DefaultHelmet";
import HeroTraining from "./HeroTraining.jsx";
import Statistics from "./Statistics.jsx";
import Dedication from "./Dedication.jsx";
import OurCoursesTraining from "./OurCoursesTraining.jsx";
import NextCohortTraining from "./NextCohortTraining.jsx";
import WhyLearnFromUs from "./WhyLearnFromUs.jsx";
import GalleryTraining from "./GalleryTraining.jsx";
import TestimonialTraining from "./TestimonialTraining.jsx";
import FAQTraining from "./FAQTraining.jsx";

export default function Training() {
  return (
    <>
      {/* Default Helmet for SEO */}
      <DefaultHelmet
        title="Training Opportunities | Kinplus Technologies"
        description="Explore our diverse training programs and discover how Kinplus Technologies is empowering the next generation of tech experts."
        url="https://www.kinplusgroup.com/training"
        image="https://www.kinplusgroup.com/kinplus-opengraph-image.png" // OG Image
      />

      <div className="overflow-hidden">
        <HeroTraining />
        <Statistics />
        <Dedication />
        <OurCoursesTraining />
        <NextCohortTraining />
        <WhyLearnFromUs />
        <GalleryTraining />
        <TestimonialTraining />
        <FAQTraining />
      </div>
    </>
  );
}
