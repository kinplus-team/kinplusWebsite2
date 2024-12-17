import Statistics from "./Statistics.jsx";
import Dedication from "./Dedication.jsx";
import WhyLearnFromUs from "./WhyLearnFromUs.jsx";
import useDocumentTitle from "../../hooks/useDocumentTitle.jsx";
import HeroTraining from "./HeroTraining.jsx";
import OurCoursesTraining from "./OurCoursesTraining.jsx";
import NextCohortTraining from "./NextCohortTraining.jsx";
import GalleryTraining from "./GalleryTraining.jsx";
import TestimonialTraining from "./TestimonialTraining.jsx";
import FAQTraining from "./FAQTraining.jsx";

export default function Training() {
  useDocumentTitle("Training");
  return (
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
  );
}
