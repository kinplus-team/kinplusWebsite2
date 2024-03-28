import React from "react";
import nextCohort from "../../assets/next_cohort/Group 1000000702.png"
import smilingFaces from "../../assets/trainingPics/smiling-faces.jpeg";

export default function NextCohort() {
    return(
        <section>
        <div
            style={{
              backgroundImage: `url(${smilingFaces})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              minHeight: "400px",
            }}
            loading="lazy"
            className="relative rounded-[30px]"
          >
            <div className="absolute inset-0 opacity-85 bg-[#1877F9BF]  text-white flex flex-col justify-center items-center gap-5 rounded-[30px]">
              <h4 className="capitalize text-[32px] font-[700] leading-[109.375%]">
                next cohort starts in
              </h4>
              <p className="text-[96px] font-[700] leading-[110%]">
                00:00:00:00
              </p>
              {/* <link to={"/contact-us/training"}
                className="flex justify-center items-center gap-2 text-[20px] font-[700] leading-[112%]"
>Register now</link> */}
            </div>
          </div>
        </section>
    );
}