export default function MobileView({ image, time }) {
  return (
    <div
      style={{
        background: `linear-gradient(0deg, rgba(24, 119, 249, 0) 0%, rgba(24, 119, 249, 0) 100%), url(${image}) lightgray 50% / cover no-repeat`,
        height: "450px",
      }}
      loading="lazy"
      className="relative py-8 w-full"
    >
      <div className="px-[1px] absolute inset-0 opacity-98 bg-[#1877F9BF]  text-white flex flex-col justify-center items-center gap-5">
        <h4 className="capitalize text-[25px] md:text-[28px] font-[700] leading-[36px] tracking-[-0.12px]">
          next cohort starts in
        </h4>
        <div className="flex justify-center gap-3">
          {["Days", "Hrs", "Min", "Sec"].map((item, i) => (
            <div key={i}>
              <div className="flex gap-2 items-center">
                <p className="text-[35px] md:text-[40px] font-[700] leading-[110%] w-[40px] text-center">
                  {time.split(":")[i]}
                </p>
                {i < 3 && (
                  <p className="text-[40px] font-[700] leading-[110%]">:</p>
                )}
              </div>
              <p className="text-xl font-bold leading-5 text-center w-[80%]">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
