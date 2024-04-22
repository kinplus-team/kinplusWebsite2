import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import ContactUsCard from "../../components/contactUs/ContactUsCard/Index";
import ContactUsServices from "./ContactUsServices/Index";
import ContactUsTraining from "./ContactUsTraining/Index";
import PageLayout from "../../components/layout/PageLayout";

export default function MyForm() {
  const location = useLocation();

  const isContactUsPath = location.pathname === "/contact";

  const contactUsHeadingPara =
    "At Kinplus, we are committed to providing exceptional solutions and services. Whether you have a question, need assistance, or want to explore collaboration opportunities, we're here to help. Reach out to us using the contact information below, and our dedicated team will be delighted to assist you.";

  const contactUsCardDetails = [
    {
      label: "Our Service",
      title: "Your Ideal Software Solution Starts Here",
      text: "At Kinplus, we're here for you. Whether you need help, advice, or just want to chat, we're only a click or call away. We're always happy to hear from you, so don't hesitate to get in touch. You can reach us at any of the contact points below",
      link: "Get in touch",
      to: "/contact/services",
    },
    {
      label: "Our Training",
      title: "Contact Us for training Opportunities",
      text: "If you're interested in exploring our training offerings, please don't hesitate to get in touch. You can reach us at any of the contact points below, and we'll be happy to discuss your learning goals and how we can tailor our training programs to meet your needs. We look forward to hearing from you",
      link: "Learn Here",
      to: "/contact/training",
    },
  ];

  return (
    <PageLayout>
    <section className="mx-auto"> 
      {isContactUsPath && (
        <>
          <div className="flex flex-col md:flex-row items-center justify-center md:space-x-6 space-y-4 md:space-y-10 mb-5 md:mb-20">
            <h3 className="text-[1.4rem] sm:text-[2.3rem] md:text-[2.8rem] mt-11 lg:text-[3.25rem] capitalize font-bold text-[#082B5B] md:leading-[4.147rem] p-2">
              Interested about our Services and Training Opportunities?
            </h3>
            <p className="text-[14px] sm:text-[18px] md:text-[20px] lg:text-[22px] font-[400] leading-[156.25%] text-[#101010] md:self-start w-full md:w-[120%] lg:w-[90%] md:p-0  lg:p-6 p-2">
              {contactUsHeadingPara}
            </p>
          </div>
          <div className=" flex flex-col space-y-4 sm:space-y-6 md:space-y-0 md:flex-row md:space-x-6 ">
            {contactUsCardDetails.map((contactUsCardDetail, index) => (
              <ContactUsCard
                key={contactUsCardDetail.title + index}
                label={contactUsCardDetail.label}
                title={contactUsCardDetail.title}
                text={contactUsCardDetail.text}
                link={contactUsCardDetail.link}
                to={contactUsCardDetail.to}
              />
            ))}
          </div>
        </>
      )}

      {/* Routes for Contact Us, Services, and Training */}
      <Routes>
        <Route
          path="/services"
          element={<ContactUsServices />}
        />
        <Route
          path="/training"
          element={<ContactUsTraining />}
        />
      </Routes>
    </section>
    </PageLayout>
  );
}

