import PageLayout from "../../../components/Layout/PageLayout.jsx";
import Pagenation from "../../../components/Pagenation.jsx";
import Button from "../../../components/Button.jsx";
import { Link } from "react-router-dom";
import noData from "../../../assets/no_data.svg";

export default function JoinOurTeam() {
  const jobOffers = [
    {
      title: "Front-end Developer",
      description:
        "We’re looking for a mid-level Front-end Developer to join our team.",
      slug: "frontend-developer",
    },
    {
      title: "Product Designer",
      description:
        "We’re looking for a mid-level Product Designer to join our team.",
      slug: "product-designer",
    },
    {
      title: "Back-end Developer",
      description:
        "We’re looking for a junior Back-end Developer to join our team.",
      slug: "backend-developer",
    },
    {
      title: "Project Manager",
      description:
        "We’re looking for a mid-level Project Manager to join our team.",
      slug: "project-manager",
    },
  ];

  return (
    <PageLayout className="relative">
      <div className="lg:pt-0 pt-10"></div>
      <h4 className="lg:block z-10 lg:text-[36px] text-[#2A3342] text-[28px] font-[700] lg:leading-[50px] leading-9 capitalized lg:max-w-4xl">
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
              className="bg-[#fff] lg:p-8 p-4 grid gap-2  lg:grid-cols-[auto_150px] grid-cols-[70%_1fr]"
            >
              <div className="grid gap-1">
                <h4 className="text-[#333F51] lg:text-xl font-bold lg:leading-8 leading-6">
                  {jobOffer.title}
                </h4>

                <p className="text-[#556987] font-medium lg:text-base text-sm lg:leading-6 leading-5 lg:max-w-[400px]">
                  {jobOffer.description}
                </p>
              </div>

              <Link
                className="justify-self-end self-center"
                to={`/careers/${jobOffer.slug}`}
              >
                <Button
                  type="customizedBlue"
                  text="View Job"
                  className="place-self-center"
                />
              </Link>
            </div>
          ))}
        </div>

        {/* <div className="py-10">
            <Pagenation />
          </div> */}
      </div>
    </PageLayout>
  );
}
