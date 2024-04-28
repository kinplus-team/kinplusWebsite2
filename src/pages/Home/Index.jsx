import Hero from "./component/Hero";
import PartnersAndSponsors from "./component/PartnerAndSponsors";
import WhyChooseUs from "./component/WhyChooseUs";
import TrainingComponent from "../../components/trainingPrograms/TrainingComponent/Index";
// import TrainingTestimonial from "../Training/TrainingTestimonial/Index";
import FAQHomepage from "../Training/FAQHomepage";
import WhatWeDo from "./component/WhatWeDo";
import NextCohort from "./component/NextCohort";
import InfiniteLoop from "../../components/InfinteLoop/Index";

export default function Homepage() {
  return (
    <>
      <Hero />
      <PartnersAndSponsors />
      <WhyChooseUs />
      <WhatWeDo />
      <NextCohort />

      {/*Training Component */}
      {/* <TrainingComponent /> */}

      {/*Testimonial */}
      {/* <TrainingTestimonial /> */}

      {/*Infinte loop */}
      {/* <InfiniteLoop /> */}

      {/*FAQ */}
      {/* <FAQHomepage /> */}
    </>
  );
}
