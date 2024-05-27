import React from "react";
import kinplusLogo from "../../../assets/svg/career-details/kinplusLogo.svg";
import PageLayout from "../../../components/Layout/PageLayout";
import location from "../../../assets/svg/career-details/location.svg";

export default function Hero() {
  return (
    <PageLayout className="pt-36 lg:pt-44">
      <div
        id="target-section"
        className="grid gap-2 justify-center text-center"
      >
        <img src={kinplusLogo} className="w-14 h-14 mx-auto" />
        <h3 className="text-[#0D0C22] lg:text-4xl text-[28px] font-bold lg:leading-[52px] leading-9 capitalize">
          Senior Product Designer
        </h3>
        <p className="lg:text-xl text-lg text-[#0D0C22] font-bold lg:leading-6 leading-7 capitalize">
          Design - Full time
        </p>

        <div className="flex gap-2 justify-center items-center">
          <img src={location} className="w-5 h-5" />
          <p className="leading-6 text-[#0D0C22]">Ado, Ekiti, Nigeria</p>
        </div>
      </div>
    </PageLayout>
  );
}
