import React from "react";
import PageLayout from "../../../components/Layout/PageLayout";
import ShareRole from "./ShareRole";

export default function AboutOurRole() {
  const responsibilities = [
    "Build solid, secure, performant and scalable APIs to serve our front-end platforms",
    "Optimize existing codes to improve performance and efficiency",
    "Collaborate with Product, QA and UI team to deliver features and improvements",
    "Implement best practices in code quality, security and data protection",
  ];

  const needs = [
    "Plan design efforts with PMs",
    "Deliver design concepts and solutions to meet business needs and its intended audience, in varying degrees of fidelity and detail",
    "Translate research, business requirements and business flow diagrams into user flows, wireframes, visual design mockups and/or functional prototypes",
    "Plan and participate in foundational user research and analysis, including translation of user insights into product implications and new ideas",
    "Participate in projects with very broadly defined concepts, and sometimes on narrowly defined, tactical deliverables",
    "Run design presentations and workshops to facilitate discussion on design feedback and alignment",
    "Manage stakeholders on design progress",
    "Work across remote cross-functional teams to bring concepts from ideation to execution",
    "Create design processes for respective work streams where necessary and actively shape the interdisciplinary collaboration along the process",
    "Proactively identify tasks, workflows and anticipate implications to improve the overall product experience",
    "Work closely with other designers to expand product pattern library, asset libraries and design system",
    "Prepare clear and detailed design specifications for developers",
    "Partner with developers to ensure designs are properly implemented",
  ];

  const ourValues = [
    {
      title: "Make It Happen",
      description:
        "We strive to deliver results with the highest impact and are committed to following through. We continuously optimise through collaboration to achieve the best collective outcomes.",
    },

    {
      title: "Be Proactive",
      description:
        " We seize the initiative and are always looking for continual improvement, for ourselves, our team and the cities we serve. We relish the chance for action even if it leads us outside of our normal scope. ",
    },

    {
      title: "Trust Facts Over Opinions",
      description:
        "Our decisions are evidence-based.  We assess situations fairly, wherever possible using reason and logic rather than unverified opinions.",
    },

    {
      title: "Stay Curious",
      description:
        "We ask questions, challenge assumptions, learn from mistakes and are ready to leave behind what we thought we knew.",
    },

    {
      title: "Do More With Less",
      description:
        "We understand that both time and resources are finite. We balance our priorities and think strategically about how we can maximise our impact and the return on investment.If you are passionate about making a real-time impact and want the opportunity to play an instrumental part in our growth story, we want you riding for our team!",
    },
  ];

  return (
    <PageLayout>
      <div className="grid lg:grid-cols-[60%_40%] pt-8 pb-16">
        {/* left side */}
        <div>
          {/* About the role */}
          <div className="grid gap-8">
            <div className="grid gap-4">
              <h4 className="lg:text-2xl text-lg font-bold leading-9 text-[#0D0C22]">
                About the role
              </h4>
              <ul className="list-disc pl-4">
                {responsibilities.map((responsibility) => (
                  <li className="text-[#0D0C22] leading-6 ">
                    {responsibility}
                  </li>
                ))}
              </ul>
            </div>

            {/* What you will need */}
            <div className="grid gap-4">
              <h4 className="lg:text-2xl text-lg font-bold leading-9 text-[#0D0C22]">
                What you will need
              </h4>
              <ul className="list-disc pl-4">
                {needs.map((need) => (
                  <li className="text-[#0D0C22] leading-6 ">{need}</li>
                ))}
              </ul>
            </div>

            {/* our values */}
            <div className="grid gap-4">
              <h4 className="lg:text-2xl text-lg font-bold leading-9 text-[#0D0C22]">
                Our Values
              </h4>

              {ourValues.map((ourValue, i) => (
                <div key={i}>
                  <h5 className="font-bold leading-9 text-[#0D0C22]">
                    {ourValue.title}
                  </h5>
                  <ul className="list-disc pl-4">
                    <li className="text-[#0D0C22] leading-6 ">
                      {ourValue.description}
                    </li>
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="hidden lg:block justify-self-center py-10 px-20 h-[300px] border border-[#ECECEC] rounded-lg">
          <ShareRole />
        </div>
      </div>
    </PageLayout>
  );
}
