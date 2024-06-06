import React from "react";
import Button from "../Button";
import { Link } from "react-router-dom";

export default function Workshop({ cardInfo }) {
  return (
    <div className="bg-white shadow-md">
      <div className=" h-[400px]">
        <img src={cardInfo.coverImage} className="h-full w-full" />
      </div>

      <div className="p-8 grid gap-2">
        <h5 className="text-[#1E0E62] text-2xl font-bold leading-8">
          {cardInfo.cardTitle}
        </h5>

        <p className="text-lg text-[#151439] opacity-50">
          {cardInfo.cardDescription}
        </p>

        <Link to="/trainings/workshop/kinplus-nitda">
          <div className="w-40">
            <Button
              type="transparent"
              text="Explore"
              className="border border-[#B8C5D9] text-[#1877F9] font-medium text-center rounded-2xl"
            />
          </div>
        </Link>
      </div>
    </div>
  );
}
