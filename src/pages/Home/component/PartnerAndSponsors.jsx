import React from "react";
import PageLayout from "../../../components/Layout/PageLayout";
import Partners from "../../../repository/home/partner";

export default function PartnersAndSponsors() {
  return (
    <PageLayout className="lg:pt-20 lg:pb-3 py-10 grid gap-3">
      <h2 className="lg:text-5xl text-2xl font-bold lg:leading-[64px] leading-[30px] text-center text-[#0F172A]">
        Partners and Sponsors
      </h2>
      <div className="flex flex-wrap gap-12 items-center max-w-5xl mx-auto justify-center">
        {Partners.map((partner, i) => (
          <img
            key={i}
            src={partner}
            className="lg:w-28 w-10 h-auto"
            alt="Nitda_Logo"
          />
        ))}
      </div>
    </PageLayout>
  );
}
