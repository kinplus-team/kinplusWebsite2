
import WhatYouStandToGain from "./components/WhatYouStandToGain";
import ApplyForInternship from "./components/ApplyForInternship";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import HeroInternship from "./components/HeroInternship";

export default function Training() {
  useDocumentTitle("SIWES/IT")
  return (
    <div className="overflow-x-hidden">
      <HeroInternship />
      <WhatYouStandToGain />
      <ApplyForInternship />
    </div>
  );
}
