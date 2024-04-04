import Hero from "./Hero.jsx";
import Statistics from "../Training/Statistics.jsx";
import Dedication from "../Training/Dedication.jsx";
import OurCourses from "./OurCourses.jsx";
import NextCohort from "./NextCohort.jsx";
import WhyLearnFromUs from "./WhyLearnFromUs.jsx";
import Gallery from "./Gallery.jsx";
import Testimonial from "./Testimonial.jsx";
import FAQ from "./FAQ.jsx";

export default function Training() {
  return (
    <div>
      <Hero />
      <Statistics />
      <Dedication />
      <OurCourses />
      <NextCohort />
      <WhyLearnFromUs />
      <Gallery />
      <Testimonial />
      <FAQ />
    </div>
  );
}
