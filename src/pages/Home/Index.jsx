import Hero from "./component/Hero";
import PartnersAndSponsors from "./component/PartnerAndSponsors";
import WhyChooseUs from "./component/WhyChooseUs";
import TrainingComponent from "../../components/trainingPrograms/TrainingComponent/Index";
// import TrainingTestimonial from "../Training/TrainingTestimonial/Index";
import FAQHomepage from "../Training/FAQHomepage";
import WhatWeDo from "../../components/whatWeDoComponent/WhatWeDo/Index";
import NextCohort from "../../components/NextCohort/index";
import InfiniteLoop from "../../components/InfinteLoop/Index";

export default function Homepage() {
  return (
    <>
      <Hero />
      <PartnersAndSponsors />
      <WhyChooseUs />

      {/* <WhatWeDo /> */}

      {/* Next Cohort */}
      {/* <NextCohort /> */}

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
