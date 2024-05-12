import React from "react";
import PricingCard from "../../../components/cards/Pricing/Pricing.jsx";

export default function Pricing({ pricingCardDetails }) {
  return (
    <div>
      <div className="grid lg:grid-cols-[600px_1fr] lg:gap-28 gap-5 lg:pb-20">
        <div>
          <h6 className=" text-[#1877F9] text-[1rem] md:text-[1rem] lg:text-[1.5rem] py-3 md:p-1">
            Pricing
          </h6>
          <h4 className="lg:text-[40px] text-[28px] text-[#082B5B] font-bold lg:leading-[125%] leading-9">
            We have different plans depending on what you want to learn
          </h4>
        </div>
        <div className="text-[18px] md:text-[19px] place-self-center">
          <p>
            At Kinplus, we're committed to providing you with an exceptional
            payment experience. We offer personalized support and payment
            solutions tailored to your unique needs. Get in touch with us today
            to learn more.
          </p>
        </div>
      </div>

      {pricingCardDetails && (
        <div className="py-10 grid lg:gap-10 gap-6 lg:grid-cols-[417px_417px] place-content-center">
          <PricingCard
            type="Medium"
            duration={pricingCardDetails?.medium?.courseDuration}
            description={pricingCardDetails?.medium?.courseDescription}
            price={pricingCardDetails?.medium?.price}
            whatsIncluded={pricingCardDetails?.medium?.whatsIncluded}
          />
          <PricingCard
            type="Pro"
            duration={pricingCardDetails?.pro?.courseDuration}
            description={pricingCardDetails?.pro?.courseDescription}
            price={pricingCardDetails?.pro?.price}
            whatsIncluded={pricingCardDetails?.pro?.whatsIncluded}
          />
        </div>
      )}
    </div>
  );
}
