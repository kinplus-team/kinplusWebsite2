import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import ContactUsCard from "../../components/contactUs/ContactUsCard/Index";
import ContactUsServices from "./ContactUsServices/Index";
import ContactUsTraining from "./ContactUsTraining/Index";

export default function MyForm() {
  const location = useLocation();

  const isContactUsPath = location.pathname === "/contact-us";

  const contactUsHeadingPara =
    "From idea to traction-generating product, we're by your side every step of the way, smoothing out bumps as they come with the intention of gaining retention and increasing Customer Lifetime Value.";

  const contactUsCardDetails = [
    {
      label: "Our Service",
      title: "Your Ideal Software Solution Starts Here",
      text: "A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements.",
      link: "Get in touch",
      to: "/contact-us/services",
    },
    {
      label: "Our Training",
      title: "Contact Us for training Opportunities",
      text: "A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. ",
      link: "Apply Now",
      to: "/contact-us/training",
    },
  ];

  return (
    <section className="mx-auto">
      {isContactUsPath && (
        <>
          <div className="flex flex-col md:flex-row items-center justify-center md:space-x-6 space-y-10 mb-5 md:mb-20">
            <h3 className="text-[2.5rem] lg:text-[3.25rem] font-bold text-[#082B5B] p-2">
              Interested about our Services and Training Opportunities?
            </h3>
            <p className="text-[18px] font-[400] leading-[138.889%] text-[#101010] md:self-start w-full md:w-[90%]  md:p-6 p-2">
              {contactUsHeadingPara}
            </p>
          </div>
          <div className="flex flex-col md:flex-row space-y-16 w-full md:space-y-0 justify-center md:items-start items-center md:space-x-20 lg:w-[70%] mx-auto md:w-full p-2 ">
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
  );
}
