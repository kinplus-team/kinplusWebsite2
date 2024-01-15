import React from "react";
import PartnersAndSponsorsImages from "../../assets/partners and Sponsors.png";
import GovernmentOfEkitiLogo from "../../assets/partners_and_sponsors/Government_of_ekiti.webp";

export default function PartnersAndSponsors() {
  return (
    <section className="overflow-hidden ">
      <h2 className="mt-16 text-4xl font-bold text-center text-[#101010]">
        Partners and Sponsors
      </h2>
      <div>
        <div>
          <img
            className="mt-16 mx-auto"
            src={PartnersAndSponsorsImages}
            alt=""
          />
        </div>
        {/*
          <div>
            <img
              className="mt-16 mx-auto"
              src={GovernmentOfEkitiLogo}
              alt="Ekiti-State-Government_Logo"
            />
          </div>
        */}
      </div>
    </section>
  );
}
