import PartnersAndSponsors from "./component/PartnerAndSponsors";
import FAQ from "./component/FAQ";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import HeroHome from "./component/HeroHome";
import WhatWeDoHome from "./component/WhatWeDoHome";
import WhyChooseUsHome from "./component/WhyChooseUsHome";
import NextCohortHome from "./component/NextCohortHome";
import TestimonialHome from "./component/TestimonialsHome";
import OurCoursesHome from "./component/OurCoursesHome";

export default function Homepage() {
  useDocumentTitle("Homepage");
  return (
    <div className="overflow-hidden">
      <HeroHome />
      <PartnersAndSponsors />
      <WhyChooseUsHome />
      <WhatWeDoHome />
      <OurCoursesHome />
      <NextCohortHome />
      <TestimonialHome />
      <FAQ />
    </div>
  );
}
