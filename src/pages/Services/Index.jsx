import Hero from "./components/Hero";
import WhatWeDo from "./components/WhatWeDo";
import HaveAProjectInMind from "./components/HaveAProjectInMind";
import ApproachToProductDevelopment from "./components/ApproachToProductDevelopment";
import Testimonials from "./components/Testimonials";
import useDocumentTitle from "../../hooks/useDocumentTitle";

export default function Services() {
  useDocumentTitle("Our Services")
  return (
    <div>
      <Hero />
      <WhatWeDo />
      <HaveAProjectInMind />
      <ApproachToProductDevelopment />
      <Testimonials />
    </div>
  );
}
