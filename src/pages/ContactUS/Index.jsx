import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import ContactUsCard from "../../components/contactUs/ContactUsCard/Index";
import ContactUsServices from "./ContactUsServices/Index";
import ContactUsTraining from "./ContactUsTraining/Index";
import PageLayout from "../../components/Layout/PageLayout";

export default function MyForm() {
  const location = useLocation();

  const contactUsCardDetails = [
    {
      label: "Our Service",
      title: "Your Ideal Software Solution Starts Here",
      text: "At Kinplus, we're here for you. Whether you need help, advice, or just want to chat, we're only a click or call away. We're always happy to hear from you, so don't hesitate to get in touch. You can reach us at any of the contact points below",
      link: "Get in touch",
      to: "/contact-us/services",
    },
    {
      label: "Our Training",
      title: "Contact Us for training Opportunities",
      text: "If you're interested in exploring our training offerings, please don't hesitate to get in touch. You can reach us at any of the contact points below, and we'll be happy to discuss your learning goals and how we can tailor our training programs to meet your needs. We look forward to hearing from you",
      link: "Learn Here",
      to: "/contact-us/training",
    },
  ];

  return (
    <PageLayout className="py-32">
      <div className="flex flex-col space-y-8 md:flex-row md:space-x-8 md:space-y-0 items-center pt-10 pb-28">
        <h3 className="text-5xl capitalize font-bold leading-[66.35px] w-1/2 text-[#082B5B] ">
          Interested about our Services and Training Opportunities?
        </h3>

        <p className="text-lg font-[400] leading-[25px] w-1/2 text-[#101010]">
          At Kinplus, we are committed to providing exceptional solutions and
          services. Whether you have a question, need assistance, or want to
          explore collaboration opportunities, we're here to help. Reach out to
          us using the contact information below, and our dedicated team will be
          delighted to assist you.
        </p>
      </div>
      <div className="flex flex-col space-y-8 md:flex-row md:space-x-8 md:space-y-0">
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
    </PageLayout>
  );
}
