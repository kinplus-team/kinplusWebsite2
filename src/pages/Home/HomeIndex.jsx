import PartnersAndSponsors from "./component/PartnerAndSponsors";
import FAQ from "./component/FAQ";
import HeroHome from "./component/HeroHome";
import WhatWeDoHome from "./component/WhatWeDoHome";
import WhyChooseUsHome from "./component/WhyChooseUsHome";
import NextCohortHome from "./component/NextCohortHome";
import TestimonialHome from "./component/TestimonialsHome";
import OurCoursesHome from "./component/OurCoursesHome";
import DefaultHelmet from "../../components/DefaultHelmet";

export default function Homepage() {
  return (
    <div className="overflow-hidden">
      {/* Helmet for SEO */}
      <DefaultHelmet
        title="Kinplus Technologies | Best Tech Company in Ekiti for Training and Software Development"
        description="Kinplus Technologies is the leading tech company in Ekiti, offering top-tier training programs, software development, and IT consulting to drive your success."
        url="https://www.kinplusgroup.com"
        image="https://www.kinplusgroup.com/kinplus-opengraph-image.png"
      />

      {/* Page sections */}
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
