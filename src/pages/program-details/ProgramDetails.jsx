import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PageLayout from "../../components/Layout/PageLayout.jsx";
import Hero from "./components/Hero.jsx";
import Pricing from "./components/Pricing.jsx";
import programsDetails from "../../repository/program-details.js";

export default function ProgramDetails() {
  const { title } = useParams();
  const [programDetails, setProgramDetails] = useState({});

  // Turn the slug link to a title
  useEffect(() => {
    const splitTitleURL = title
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
    <PageLayout>
      <Hero
        title={programDetails?.title}
        description={programDetails?.description}
      />
      <Pricing pricingCardDetails={programDetails?.pricingCardInfo} />
    </PageLayout>
  );
}
