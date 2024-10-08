import Hero from "./components/Hero";
import WhatYouStandToGain from "./components/WhatYouStandToGain";
import ApplyForInternship from "./components/ApplyForInternship";
import useDocumentTitle from "../../hooks/useDocumentTitle";

export default function Training() {
  useDocumentTitle("SIWES/IT")
  return (
    <div>
      <Hero />
      <WhatYouStandToGain />
      <ApplyForInternship />
    </div>
  );
}
