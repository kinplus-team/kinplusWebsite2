import React from "react";
import { FaQuoteRight } from "react-icons/fa6";
import bigHairWoman from "../../assets/trainingPics/trainingTestimonial/woman-with-big-hair.jpeg";
import PageLayout from "../../components/Layout/PageLayout";
import arrow from "../../assets/svg/arrow.svg";

export default function Testimonial() {
  const testimonialTexts = [
    {
      text: `“Partnering with Kinplus has been a game-changer for our business.
      Their commitment to excellence goes beyond expectations, seamlessly
      blending innovation and problem-solving. Kinplus not only creates
      cutting-edge applications but also dives deep into understanding our
      unique business challenges.”`,
    },
  ];

  const testifierDetails = [
    {
      image: `${bigHairWoman}`,
      name: "Oladare Jonathan",
      program: "Software Developer",
    },
  ];

  return (
    <PageLayout>
      <div className="grid lg:grid-cols-2 grid-cols-[1fr_auto] pb-5">
        <h4 className="lg:text-[40px] text-[28px] sm:text-[40px] text-[#082B5B] font-[700] leading-[125%] capitalized">
          See what others are <br /> saying about us
        </h4>

        <FaQuoteRight className="place-self-end lg:text-[130px] text-[79px]" />
      </div>

      <div className="grid lg:grid-cols-[1fr_450px] pb-16 pt-4 gap-12">
        <div>
          {testimonialTexts.map((testimonialText, i) => (
            <p
              key={i}
              className="lg:text-[20px] text-lg font-[400] lg:leading-[35px] text-[#101010] "
            >
              {testimonialText.text}
            </p>
          ))}
        </div>

        <div className="lg:place-self-end place-self-center">
          {testifierDetails.map((testifierDetail, i) => (
            <div key={i} className="grid place-items-center">
              <img
                src={bigHairWoman}
                className="w-[90px] h-[90px] rounded-full"
              />

              <p>{testifierDetail.name}</p>
              <p>{testifierDetail.program}</p>
            </div>
          ))}
        </div>
      </div>

      <img src={arrow} className="w-[197px] pb-14 mx-auto lg:mx-0" />
    </PageLayout>
  );
}
