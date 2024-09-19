import PageLayout from "../../../components/Layout/PageLayout.jsx";
import careerOpportunitiesImage from "../../../assets/career/career-oppotunities.png";
import developmentOpportunities from "../../../assets/svg/career/development-opportunities.svg";
import compensationAndBenefits from "../../../assets/svg/career/compensation-and-benefits.svg";
import timer from "../../../assets/svg/career/timer.svg";
import backgroundIcon1 from "../../../assets/svg/career/background-icon-1.svg";
import backgroundPattern from "../../../assets/svg/career/background-pattern.svg";
import pattern from "../../../assets/Pattern.svg";
import Text from "../../../components/Text.jsx";

export default function WorkshopReport() {
  const careerOpportunities = [
    {
      icon: developmentOpportunities,
      title: "Participant Attendance:",
      description: [
        "85 participants attended the training sessions.",
        "Training centers were set up in three communities: Ado-Ekiti, Ido-Ekiti, and Ikole-Ekiti.",
      ],
    },
    {
      icon: compensationAndBenefits,
      title: "Positive Feedback:",
      description: [
        "Participants provided positive feedback on the training.",
        "Encouraging words were extended to both Kinplus Technologies and NITDA.",
        "Participants expressed gratitude for the knowledge gained during the training.",
      ],
    },
    {
      icon: timer,
      title: "Supportive Measures:",
      description: [
        "Participants were provided with daily meals throughout the training period.",
        "NITDA offered a stipend to participants as part of their support initiative.",
      ],
    },
  ];

  return (
    <PageLayout>
      <div className=" relative mb-24 lg:mb-0">
        <Text type="title" className="text-[#1877F9]">
          Workshop report
        </Text>

        <Text type="subheading" className="capitalize lg:max-w-3xl">
          Kinplus-NITDA: Concise Deductions from Workshop Program
        </Text>

        <div className="grid lg:grid-cols-[750px_1fr] py-2">
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

                  <ul>
                    {careerOpportunity.description.map((listItem, index) => (
                      <li
                        key={index}
                        className="text-[#556987] lg:text-base text-sm font-medium leading-[24px] max-w-md list-disc"
                      >
                        {" "}
                        {listItem}
                      </li>
                    ))}
                  </ul>
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
              src={pattern}
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
