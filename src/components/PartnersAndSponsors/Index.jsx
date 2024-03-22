import React from "react";
import Akintunde from "../../assets/partners_and_sponsors/AkintundeOyebode.png"
import DSN from "../../assets/partners_and_sponsors/DSN.png"
import GovernmentOfEkitiLogo from "../../assets/partners_and_sponsors/EkitiStateGovernment.png"
import GDG from "../../assets/partners_and_sponsors/GDG.png"
import Microsoft from "../../assets/partners_and_sponsors/Microsoft.png"
import Nitda from "../../assets/partners_and_sponsors/Nitda.png"

export default function PartnersAndSponsors() {
  return (
    <section className="overflow-hidden ">
      <h2 className="mt-16 text-4xl font-bold text-center text-[#101010]">
        Partners and Sponsors
      </h2>
      <div className="mt-16 flex space-x-5 justify-center md:justify-evenly flex-wrap items-center">
       
        
          <div>
            <img
              className=" w-[155px] h-[55px] mx-auto"
              src={Nitda}
              alt="Nitda_Logo"
            />
          </div>
          <div>
            <img
              className=" w-[119.52px] h-[60px] mx-auto"
              src={DSN}
              alt="DSN_Logo"
            />
          </div>
          <div>
            <img
              className=" w-[55.73px] h-[60px] mx-auto"
              src={GovernmentOfEkitiLogo}
              alt="Ekiti-State-Government_Logo"
            />
          </div>
          <div>
            <img
              className=" w-[176px] h-[75.11px] mx-auto"
              src={Akintunde}
              alt="Akintunde_Logo"
            />
          </div>
          <div>
            <img
              className=" w-[77px] h-[76px] mx-auto"
              src={GDG}
              alt="GDG_Logo"
            />
          </div>
          <div>
            <img
              className=" w-[170px] h-[70px] mx-auto"
              src={Microsoft}
              alt="Microsoft_Logo"
            />
          </div>
        
      </div>
    </section>
  );
}
