import HaveAProjectInMind from "./components/HaveAProjectInMind";
import ApproachToProductDevelopment from "./components/ApproachToProductDevelopment";
import HeroServices from "./components/HeroServices";
import TestimonialServices from "./components/TestimonialServices";
import WhatWeDoServices from "./components/WhatWeDoServices";
import DefaultHelmet from "../../components/DefaultHelmet";

export default function Services() {
  return (
    <>
      {/* Default Helmet for SEO */}
      <DefaultHelmet
        title="Our Services | Kinplus Technologies"
        description="Explore our range of services at Kinplus Technologies. We specialize in software development, digital transformation, IT consulting, and more to drive innovation in the tech industry."
        url="https://www.kinplusgroup.com/our-services"
        image="https://www.kinplusgroup.com/kinplus-opengraph-image.png"
      />

      <div className="overflow-x-hidden">
        <HeroServices />
        <WhatWeDoServices />
        <HaveAProjectInMind />
        <ApproachToProductDevelopment />
        <TestimonialServices />
      </div>
    </>
  );
}
