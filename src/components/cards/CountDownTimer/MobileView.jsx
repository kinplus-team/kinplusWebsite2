export default function MobileView({ image, time }) {
  return (
    <div
      style={{
        background: `linear-gradient(0deg, rgba(24, 119, 249, 0) 0%, rgba(24, 119, 249, 0) 100%), 
                    url(${image}) lightgray 50% / cover no-repeat`,
        height: "450px",
      }}
      loading="lazy"
      className="relative py-8"
    >
      <div className="absolute inset-0 opacity-98 bg-[#1877F9BF]  text-white flex flex-col justify-center items-center gap-5">
        <h4 className="capitalize text-[28px] font-[700] leading-[36px] tracking-[-0.12px]">
          next cohort starts in
        </h4>
        <p className="text-[60px] font-[700] leading-[60px] tracking-[-0.4px]">
          {time}
        </p>
      </div>
    </div>
  );
}
