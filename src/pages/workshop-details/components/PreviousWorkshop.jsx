import PageLayout from "../../../components/Layout/PageLayout";
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";
import previousWorkshop1 from "../../../assets/workshop/previous-workshop-1.png";
import Workshop from "../../../components/cards/Workshop.jsx";
import { useRef, useState } from "react";

export default function PreviousWorkshop() {
  const imageScroll = useRef(null);

  const handleScroll = (direction) => {
    imageScroll.current &&
      direction === "right" &&
      (imageScroll.current.scrollLeft += 1000);
    imageScroll.current &&
      direction === "left" &&
      (imageScroll.current.scrollLeft -= 1000);
  };

  const previousWorkshopCard = [
    {
      coverImage: previousWorkshop1,
      cardTitle:
        "Kinplus-NITDA: Mobile App training and the Digital Skill Up trainingity you can trust",
      cardDescription:
        "Kinplus Technologies, in partnership with NITDA, trained 50+ participants in Mobile App Development. Serving as the technology hub in Ekiti State, similar sessions were held in three other states nationwide. Check out the details of the event.",
    },
    {
      coverImage: previousWorkshop1,
      cardTitle:
        "Kinplus-NITDA: Mobile App training and the Digital Skill Up trainingity you can trust",
      cardDescription:
        "Kinplus Technologies, in partnership with NITDA, trained 50+ participants in Mobile App Development. Serving as the technology hub in Ekiti State, similar sessions were held in three other states nationwide. Check out the details of the event.",
    },
    {
      coverImage: previousWorkshop1,
      cardTitle:
        "Kinplus-NITDA: Mobile App training and the Digital Skill Up trainingity you can trust",
      cardDescription:
        "Kinplus Technologies, in partnership with NITDA, trained 50+ participants in Mobile App Development. Serving as the technology hub in Ekiti State, similar sessions were held in three other states nationwide. Check out the details of the event.",
    },
    {
      coverImage: previousWorkshop1,
      cardTitle:
        "Kinplus-NITDA: Mobile App training and the Digital Skill Up trainingity you can trust",
      cardDescription:
        "Kinplus Technologies, in partnership with NITDA, trained 50+ participants in Mobile App Development. Serving as the technology hub in Ekiti State, similar sessions were held in three other states nationwide. Check out the details of the event.",
    },
    {
      coverImage: previousWorkshop1,
      cardTitle:
        "Kinplus-NITDA: Mobile App training and the Digital Skill Up trainingity you can trust",
      cardDescription:
        "Kinplus Technologies, in partnership with NITDA, trained 50+ participants in Mobile App Development. Serving as the technology hub in Ekiti State, similar sessions were held in three other states nationwide. Check out the details of the event.",
    },
    {
      coverImage: previousWorkshop1,
      cardTitle:
        "Kinplus-NITDA: Mobile App training and the Digital Skill Up trainingity you can trust",
      cardDescription:
        "Kinplus Technologies, in partnership with NITDA, trained 50+ participants in Mobile App Development. Serving as the technology hub in Ekiti State, similar sessions were held in three other states nationwide. Check out the details of the event.",
    },
    {
      coverImage: previousWorkshop1,
      cardTitle:
        "Kinplus-NITDA: Mobile App training and the Digital Skill Up trainingity you can trust",
      cardDescription:
        "Kinplus Technologies, in partnership with NITDA, trained 50+ participants in Mobile App Development. Serving as the technology hub in Ekiti State, similar sessions were held in three other states nationwide. Check out the details of the event.",
    },
    {
      coverImage: previousWorkshop1,
      cardTitle:
        "Kinplus-NITDA: Mobile App training and the Digital Skill Up trainingity you can trust",
      cardDescription:
        "Kinplus Technologies, in partnership with NITDA, trained 50+ participants in Mobile App Development. Serving as the technology hub in Ekiti State, similar sessions were held in three other states nationwide. Check out the details of the event.",
    },
  ];
  return (
    <div className="pb-16 bg-[#f1f3f9]">
      <PageLayout>
        <div className="grid lg:grid-cols-2 pt-16 pb-5">
          <div>
            <div className="flex items-center lg:text-[20px] text-[#1877F9] font-[500] leading-[150%]">
              <p className="w-52">Our Previous Workshops</p>
              <div className="lg:w-[73px] w-[100px] h-[2px] bg-[#222831] leading-normal "></div>
            </div>

            <p className="lg:text-4xl text-3xl font-bold text-[#082B5B]">
              It's not just a stepping stone to your future, it's a launchpad to
              success
            </p>
          </div>
          <div className="lg:flex gap-3 place-self-end hidden">
            <IoIosArrowRoundBack className="w-20 h-20" />
            <IoIosArrowRoundForward className="w-20 h-20" />
          </div>
        </div>
      </PageLayout>

      {/* images */}
      <div
        className="flex justify-between items-baseline overflow-hidden gap-3 relative overflow-x-auto scroll-ms-9 no-scroll snap-mandatory snap-x scroll-smooth"
        ref={imageScroll}
      >
        {previousWorkshopCard.map((cardDetails, i) => (
          <Workshop cardInfo={cardDetails} />
        ))}
      </div>

      <div className="flex gap-3 justify-center lg:hidden">
        <IoIosArrowRoundBack className="w-20 h-20" />
        <IoIosArrowRoundForward className="w-20 h-20" />
      </div>
      {/* </div> */}
    </div>
  );
}
