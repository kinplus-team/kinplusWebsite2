import PageLayout from "../../../components/Layout/PageLayout.jsx";
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";
import Button from "../../../components/Button.jsx";

export default function JoinOurTeam() {
  const jobOffers = [
    {
      title: "Front-end Developer",
      description:
        "We’re looking for a mid-level Front-end Developer to join our team.",
    },
    {
      title: "Product Designer",
      description:
        "We’re looking for a mid-level Product Designer to join our team.",
    },
    {
      title: "Back-end Developer",
      description:
        "We’re looking for a junior Back-end Developer to join our team.",
    },
    {
      title: "Project Manager",
      description:
        "We’re looking for a mid-level Project Manager to join our team.",
    },
    {
      title: "UI/UX Designer",
      description:
        "We’re looking for a senior UI/UX Designer to join our team.",
    },
    {
      title: "SCRUM Master",
      description:
        "We’re looking for a mid-level SCRUM Master to join our team.",
    },
  ];

  const pagenation = [1, 2, 3];

  return (
    <PageLayout>
      <div className="lg:pb-28 pt-8 pb-16 relative">
        <h4 className="lg:block z-10 lg:text-[36px] text-[#2A3342] text-[28px] lg:py-2 py-4 font-[700] lg:leading-[50px] leading-9 capitalized lg:max-w-4xl">
          Join our team
        </h4>
        <p className="lg:text-[18px] font-medium lg:leading-[30px] leading-6 text-[#556987] lg:max-w-2xl">
          We're looking for passionate, driven individuals who are ready to make
          an impact. Apply today and take the next step in your career.
        </p>

        {/* offers */}
        <div className="py-10">
          <div className="gap-6 grid lg:grid-cols-2">
            {jobOffers.map((jobOffer, i) => (
              <div
                key={i}
                className="bg-[#fff] lg:p-8 p-4 grid gap-2  lg:grid-cols-[auto_150px] grid-cols-[1fr_120px]"
              >
                <div className="grid gap-1">
                  <h4 className="text-[#333F51] lg:text-xl font-bold lg:leading-8 leading-6">
                    {jobOffer.title}
                  </h4>

                  <p className="text-[#556987] font-medium lg:text-base text-sm lg:leading-6 leading-5 lg:max-w-[400px]">
                    {jobOffer.description}
                  </p>
                </div>

                <Button
                  type="customizedBlue"
                  text="View Job"
                  className="place-self-center"
                />
              </div>
            ))}
          </div>
          <div className="lg:grid gap-2 grid-cols-[auto_50px_50px_50px_auto] justify-center py-5 hidden">
            <IoIosArrowRoundBack className="w-12 h-12 hover:text-[#1877F9]" />
            {pagenation.map((page, i) => (
              <div
                key={i}
                className={`py-4 rounded-md ${
                  i == 0
                    ? "bg-[#1877F9] text-white border border-[#1877F9]"
                    : "border-2 border-[#828282] text-[#828282]"
                } text-center text-sm font-bold leading-[20px]`}
              >
                {page}
              </div>
            ))}
            <IoIosArrowRoundForward className="w-12 h-12 hover:text-[#1877F9]" />
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
