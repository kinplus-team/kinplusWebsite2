import PageLayout from "../../../components/Layout/PageLayout.jsx";
import careerOpportunitiesImage from "../../../assets/career/career-oppotunities.png";
import developmentOpportunities from "../../../assets/svg/career/development-opportunities.svg";
import compensationAndBenefits from "../../../assets/svg/career/compensation-and-benefits.svg";
import timer from "../../../assets/svg/career/timer.svg";
import backgroundIcon1 from "../../../assets/svg/career/background-icon-1.svg";
import backgroundPattern from "../../../assets/svg/career/background-pattern.svg";
import pattern from "../../../assets/Pattern.svg";
import Text from "../../../components/Text.jsx";

export default function CareerOpportunity() {
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
      <div className="lg:pt-56 pt-16 relative">
        <Text type="title" className="text-[#1877F9]">
          Our leading edge
        </Text>

        <Text
          type="subheading"
          className="capitalize lg:max-w-3xl lg:pt-0 pt-3"
        >
          We bring solutions to make life easier for our customers.
        </Text>

        <Text
          type="subparagraph"
          className="text-[#556987] lg:pt-0 pt-3 max-w-2xl"
        >
          If you're passionate about technology and want to make an impact, we
          invite you to explore our career opportunities.
        </Text>

        <div className="grid lg:grid-cols-[750px_1fr] pt-6">
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
              className="w-[554px] lg:h-[556px] h-[389px] pt-10 rounded-lg absolute lg:top-0 top-5 lg:right-11 z-10"
            />

            {/* background images */}
            <img
              src={pattern}
              className="w-[200px] h-[200px] absolute top-0 left-[-10px] 2xl:left-[30px] z-0 rotate-180 hidden lg:block"
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
