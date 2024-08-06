import React from "react";
import PageLayout from "../../../components/Layout/PageLayout";
import Partners from "../../../repository/home/partner";
import Text from "../../../components/Text";

export default function PartnersAndSponsors() {
  return (
    <PageLayout className="grid gap-3">
      <Text
        type="subheading"
        className="capitalize  text-center text-[#082B5B]"
      >
        Our Partners
      </Text>
      <div className="flex flex-wrap lg:gap-16 gap-8 items-center max-w-5xl mx-auto justify-center">
        {Partners.map((partner, i) => (
          <img
            key={i}
            src={partner}
            className="lg:w-28 w-16 h-auto"
            alt="Nitda_Logo"
          />
        ))}
      </div>
    </PageLayout>
  );
}
