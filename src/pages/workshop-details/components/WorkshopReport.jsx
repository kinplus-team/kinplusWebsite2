import PageLayout from "../../../components/Layout/PageLayout.jsx";
import careerOpportunitiesImage from "../../../assets/career/career-oppotunities.png";
import developmentOpportunities from "../../../assets/svg/career/development-opportunities.svg";
import compensationAndBenefits from "../../../assets/svg/career/compensation-and-benefits.svg";
import timer from "../../../assets/svg/career/timer.svg";
import backgroundIcon1 from "../../../assets/svg/career/background-icon-1.svg";
import backgroundPattern from "../../../assets/svg/career/background-pattern.svg";

export default function WorkshopReport() {
  const careerOpportunities = [
    {
      icon: developmentOpportunities,
      title: "Learning and development opportunities",
      description:
        "Join our team and grow your career in an innovative and supportive environment.",
    },
    {
      icon: compensationAndBenefits,
      title: "Competitive compensation and benefits",
      description:
        "Your salary reflects your worth. Grow your career with competitive pay.",
    },
    {
      icon: timer,
      title: "Making a difference in the tech industry",
      description:
        "Join our team as we work to make a difference in the tech ecosystem",
    },
  ];

  return (
    <PageLayout>
      <div className="lg:pt-20 lg:pb-20 py-5 relative">
        <h4 className="flex items-center text-[#1877F9] lg:text-[20px] font-[500] lg:leading-[30px] leading-[24px] mt-11 mb-5 lg:mt-0 ">
          Our leading Edge
          <div className="ml-3 h-[1.5px] w-[74.75px] bg-[#222831]"></div>
        </h4>
        <p className="lg:block z-10 lg:text-[36px] text-[24px] font-[700] lg:leading-[50px] leading-9 capitalized lg:max-w-4xl">
          We bring solutions to make life easier for our customers.
        </p>

        <p className="lg:text-[18px] font-medium lg:leading-[30px] leading-6 text-[#556987] lg:max-w-4xl">
          If you're passionate about technology and want to make an impact, we
          invite you to explore our career opportunities.
        </p>

        <div className="grid lg:grid-cols-[750px_1fr] py-8">
          <div className="grid lg:gap-16 gap-10 content-center">
            {careerOpportunities.map((careerOpportunity, i) => (
              <div className="grid grid-cols-[auto_1fr] lg:gap-6 gap-3">
                <img
                  src={careerOpportunity.icon}
                  className="w-[46px] h-[46px]"
                />
                <div className="grid lg:gap-2 gap-1">
                  <h4 className="lg:text-2xl font-bold text-[#2A3342] leading-6">
                    {careerOpportunity.title}
                  </h4>
                  <p className="text-[#556987] lg:text-base text-sm font-medium leading-[24px] max-w-md">
                    {careerOpportunity.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* right side */}
          <div className="relative lg:h-[600px] h-[350px]">
            <img
              src={careerOpportunitiesImage}
              className="w-[554px] lg:h-[556px] h-[389px] rounded-lg absolute lg:top-0 top-5 lg:right-11 z-10"
            />

            {/* background images */}
            <img
              src={backgroundPattern}
              className="w-[200px] h-[200px] absolute top-4 left-[-40px] 2xl:left-[30px] z-0 rotate-180 hidden lg:block"
            />

            <img
              src={backgroundPattern}
              className="w-[200px] h-[200px] absolute bottom-4 right-[-40px] 2xl:left-[30px] z-0 rotate-180 hidden lg:block"
            />
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
