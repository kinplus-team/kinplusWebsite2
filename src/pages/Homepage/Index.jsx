import HeroPage from "../../components/HeroPage/Index";
import PartnersAndSponsors from "../../components/PartnersAndSponsors/Index";
import WhyChooseUs from "../../components/WhyChooseUs/Index";
import TrainingComponent from "../../components/trainingPrograms/TrainingComponent/Index";
import TrainingTestimonial from "../Training/TrainingTestimonial/Index";
import FAQ from "../Training/FAQ/Index";
import WhatWeDo from "../../components/whatWeDoComponent/WhatWeDo/Index";
import NextCohort from "../../components/NextCohort/index";
import InfiniteLoop from "../../components/infinteLoop/Index";

export default function Homepage() {
  return (
    <div className=" max-w-[100rem] mx-auto">
      {/*Hero Component */}
      <HeroPage />

      {/*PartnersAndSponsors Component */}
      <PartnersAndSponsors />

      {/*WhyChooseUs Component */}
      <WhyChooseUs />

      {/*whatWeDo Component */}
      <WhatWeDo />


      {/* Next Cohort */}
      <NextCohort/>
    
      {/*Training Component */}
      <TrainingComponent />

      {/*Testimonial */}
      <TrainingTestimonial />

      {/*Infinte loop */}
      <InfiniteLoop />


      {/*FAQ */}
      <FAQ />
    </div>
  );
}
