import Hero from "./component/Hero";
import PartnersAndSponsors from "./component/PartnerAndSponsors";
import WhyChooseUs from "./component/WhyChooseUs";
import Testimonial from "./component/Testimonials";
import FAQHomepage from "../Training/FAQHomepage";
import WhatWeDo from "./component/WhatWeDo";
import NextCohort from "./component/NextCohort";
import OurCourses from "./component/OurCourses";
import FAQ from "./component/FAQ";

export default function Homepage() {
  return (
    <>
      <Hero />
      <PartnersAndSponsors />
      <WhyChooseUs />
      <WhatWeDo />
      <OurCourses />
      <NextCohort />
      <Testimonial />
      <FAQ />
    </>
  );
}
