import HeroPage from "../../components/HeroPage/Index";
import PartnersAndSponsors from "../../components/PartnersAndSponsors/Index";
import WhyChooseUs from "../../components/WhyChooseUs/Index";
import TrainingComponent from "../../components/trainingPrograms/TrainingComponent/Index";
import TrainingTestimonial from "../Training/TrainingTestimonial/Index";
import FAQ from "../Training/FAQ/Index";
import WhatWeDo from "../../components/whatWeDoComponent/WhatWeDo";

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

      {/*Training Component */}
      <TrainingComponent />

      {/*Testimonial */}
      <TrainingTestimonial />

      {/*FAQ */}
      <FAQ />
    </div>
  );
}
