import HeroPage from "../../components/HeroPage/Index";
import PartnersAndSponsors from "../../components/PartnersAndSponsors/Index";
import WhyChooseUs from "../../components/WhyChooseUs/Index";
import TrainingComponent from "../../components/trainingPrograms/TrainingComponent/Index";
import TrainingTestimonial from "../Training/TrainingTestimonial/Index";
import FAQ from "../Training/FAQ/Index";
import WhatWeDo from "../../components/whatWeDoComponent/WhatWeDo/Index";

export default function Homepage() {
  return (
    <>
      {/*Hero Component */}
      <HeroPage />

      {/*PartnersAndSponsors Component */}
      <PartnersAndSponsors />

      {/*WhyChooseUs Component */}
      <WhyChooseUs />

      {/*whatWeDo Component */}
      <WhatWeDo />

      {/*Training Component */}
      <TrainingComponent />

      {/*Testimonial */}
      <TrainingTestimonial />

      {/*FAQ */}
      <FAQ />
    </>
  );
}
