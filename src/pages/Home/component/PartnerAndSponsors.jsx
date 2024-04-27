import React from "react";
import PageLayout from "../../../components/Layout/PageLayout";
import Partners from "../../../repository/home/partner";

export default function PartnersAndSponsors() {
  return (
    <PageLayout className="lg:pt-20 lg:pb-3 py-10 grid gap-3">
      <h2 className="lg:text-5xl text-2xl font-bold lg:leading-[64px] leading-[30px] text-center text-[#0F172A]">
        Partners and Sponsors
      </h2>
      <div className="flex flex-wrap lg:gap-28 gap-3 items-center place-content-center">
        {Partners.map((partner, i) => (
          <div>
            <img
              className="lg:w-[100px] w-[80px] h-auto mx-auto"
              src={partner}
              alt="Nitda_Logo"
            />
          </div>
        ))}
      </div>
    </PageLayout>
  );
}
