import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Pricing from "./components/Pricing.jsx";
import programsDetails from "../../repository/program-details.js";
import HeroProgramDetails from "./components/HeroProgramDetails.jsx";

export default function ProgramDetails() {
  const { training } = useParams();
  const [programDetails, setProgramDetails] = useState({});

  // Turn the slug link to a title
  useEffect(() => {
    const splitTitleURL = training
      .split("-")
      .map(
        (programTitle) =>
          programTitle.charAt(0).toUpperCase() + programTitle.slice(1)
      )
      .join(" ");

    const filterThroughPrograms = programsDetails.filter((course) => {
      if (course.title == splitTitleURL) {
        return course;
      }
    });

    setProgramDetails(filterThroughPrograms[0]);
  }, []);

  return (
    <div id="target-section">
      <HeroProgramDetails
        title={programDetails?.title}
        description={programDetails?.description}
      />
      <Pricing pricingCardDetails={programDetails?.pricingCardInfo} />
    </div>
  );
}
