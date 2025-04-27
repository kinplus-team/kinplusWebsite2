import WhatYouStandToGain from "./components/WhatYouStandToGain";
import ApplyForInternship from "./components/ApplyForInternship";
import HeroInternship from "./components/HeroInternship";
import DefaultHelmet from "../../components/DefaultHelmet";

export default function Training() {
  return (
    <>
      {/* Default Helmet for SEO */}
      <DefaultHelmet
        title="SIWES/IT Internship | Empowering the Future of Tech"
        description="Apply for the SIWES/IT Internship program at Kinplus Technologies and gain valuable experience in software development, tech education, and innovation. Jumpstart your career in the tech industry."
        url="https://www.kinplusgroup.com/trainings/siwes"
        image="https://www.kinplusgroup.com/siwes-og-image.jpg"
      />

      <div className="overflow-x-hidden">
        <HeroInternship />
        <WhatYouStandToGain />
        <ApplyForInternship />
      </div>
    </>
  );
}
