import React from "react";
import ContactUsCard from "../../components/contactUs/ContactUsCard/Index";
import PageLayout from "../../components/Layout/PageLayout";
import Text from "../../components/Text";

export default function MyForm() {
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
      <div
        id="target-section"
        className="grid lg:grid-cols-[50%_1fr] gap-10 items-center pt-10 pb-28"
      >
        <Text type="heading" className="text-[#082B5B] capitalize">
          Interested about our Services and Training Opportunities?
        </Text>

        <Text type="subparagraph" className="text-[#556987]">
          At Kinplus, we are committed to providing exceptional solutions and
          services. Whether you have a question, need assistance, or want to
          explore collaboration opportunities, we're here to help. Reach out to
          us using the contact information below, and our dedicated team will be
          delighted to assist you.
        </Text>
      </div>
      <div className="grid lg:grid-cols-2 gap-10">
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
    </PageLayout>
  );
}
