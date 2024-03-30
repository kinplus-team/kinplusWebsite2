import PageLayout from "../../components/layout/PageLayout";

export default function Index() {
  const ourStats = [
    { title: "Resources", value: 28 },
    { title: "Trained", value: 667 },
    { title: "Trainees", value: 53 },
    { title: "cohorts", value: 12 },
  ];

  return (
    <PageLayout>
      <div className="lg:py-20 py-12">
        <div
          style={{
            background:
              "linear-gradient(90deg, #909c92 20.73%, rgba(144, 156, 146, 0) 100%)",
          }}
          className="h-[1.4px] lg:mx-auto lg:max-w-7xl"
        ></div>

        <div className="grid grid-flow-col">
          {ourStats.map((stat, i) => (
            <div
              key={i}
              className={`text-center py-[55px] uppercase border border-t-0 border-b-0 ${
                i == 3 ? "border-r-0 " : "border-r-[1.1px] border-r-[#909C92]"
              } ${i == 0 && "border-l-0"}`}
            >
              <p className="lg:text-[18px] text-xs lg:font-[500] font-normal leading-[15px] lg:tracking-[7.2px] tracking-[0.04px] text-[#718176]">
                {stat.title}
              </p>
              <p className="lg:text-[24px] lg:font-[500] font-bold lg:leading-[166.667%] leading-6 tracking-[0.24px]">
                {stat.value}
              </p>
            </div>
          ))}
        </div>

        <div
          style={{
            background:
              "linear-gradient(90deg, #909C92 20.73%, rgba(144, 156, 146, 0.00) 100%)",
          }}
          className="h-[1.4px] lg:mx-auto lg:max-w-7xl"
        ></div>
      </div>
    </PageLayout>
  );
}
