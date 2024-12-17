
import HaveAProjectInMind from "./components/HaveAProjectInMind";
import ApproachToProductDevelopment from "./components/ApproachToProductDevelopment";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import HeroServices from "./components/HeroServices";
import TestimonialServices from "./components/TestimonialServices";
import WhatWeDoServices from "./components/WhatWeDoServices";

export default function Services() {
  useDocumentTitle("Our Services")
  return (
    <div className="overflow-x-hidden">
      <HeroServices />
      <WhatWeDoServices />
      <HaveAProjectInMind />
      <ApproachToProductDevelopment />
      <TestimonialServices />
    </div>
  );
}
