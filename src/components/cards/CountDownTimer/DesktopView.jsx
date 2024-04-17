import PageLayout from "../../Layout/PageLayout";
import rightArrow from "../../../assets/svg/right-arrow.svg";
import { Link } from "react-router-dom";

export default function NextCohort({ image, time }) {
  return (
    <PageLayout>
      <div
        style={{
          background: `linear-gradient(0deg, rgba(24, 119, 249, 0) 0%, rgba(24, 119, 249, 0) 100%), 
                    url(${image}) lightgray 50% / cover no-repeat`,
          height: "450px",
        }}
        loading="lazy"
        className="relative rounded-[30px] py-8"
      >
        <div className="absolute inset-0 opacity-98 bg-[#1877F9BF]  text-white flex flex-col justify-center items-center gap-5 rounded-[30px]">
          <h4 className="capitalize text-[32px] font-[700] leading-[109.375%]">
            next cohort starts in
          </h4>

          <div className="flex justify-center gap-3">
            {["Days", "Hrs", "Min", "Sec"].map((item, i) => (
              <div key={i}>
                <div className="flex gap-2 items-center">
                  <p className="text-[96px] font-[700] leading-[110%]">
                    {time.split(":")[i]}
                  </p>
                  {i < 3 && (
                    <p className="text-[96px] font-[700] leading-[110%]">:</p>
                  )}
                </div>
                <p className="text-xl font-bold leading-5 text-center w-[80%]">
                  {item}
                </p>
              </div>
            ))}
          </div>

          <Link
            to={"/contact-us/training"}
            className="flex justify-center items-center gap-2 text-[20px] font-[700] leading-[112%]"
          >
            Register now{" "}
            <img src={rightArrow} alt="right arrow" className="w-10 h-10" />
          </Link>
        </div>
      </div>
    </PageLayout>
  );
}
