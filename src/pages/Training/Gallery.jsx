import { useEffect, useRef, useState } from "react";
// import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";
import arrow from "../../assets/svg/arrow.svg";
// import gallery1 from "../../assets/gallery/gallery_1.png";
// import gallery2 from "../../assets/gallery/gallery_2.png";
// import gallery3 from "../../assets/gallery/gallery_3.png";
// import gallery4 from "../../assets/gallery/gallery_4.png";

import getTrainingGallery from "../../services/galleryServices.js";
import Text from "../../components/Text.jsx";
import PageLayout from "../../components/Layout/PageLayout.jsx";

import {
  HiOutlineArrowLongRight,
  HiOutlineArrowLongLeft,
} from "react-icons/hi2";

export default function Gallery() {
  const [gallery, setGallery] = useState([]);

  const scrollContainerRef = useRef(null);
  const handleScroll = (direction) => {
    scrollContainerRef.current &&
      direction === "right" &&
      (scrollContainerRef.current.scrollLeft += 1000);
    scrollContainerRef.current &&
      direction === "left" &&
      (scrollContainerRef.current.scrollLeft -= 1000);
  };

  useEffect(() => {
    // handleScrollEffect();
    getTrainingGallery().then((response) => {
      setGallery(response);
    });
  }, []);

  return (
    <div className="bg-[#f1f3f9]">
      <div className="lg:pt-32 pt-10 grid lg:gap-10 gap-2 relative lg:px-[0px] px-4 max-w-[100rem] mx-auto">
        {/* Navigators */}
        <div className="grid gap-2 lg:place-self-end right-52">
          <Text type="title" className="text-[#1877F9]">
            Kinplus gallery
          </Text>

          <Text
            type="subheading"
            className="text-[#082B5B] lg:max-w-md max-w-xs"
          >
            Check out our past trainees
          </Text>

          <div className="lg:flex justify-self-start hidden">
            <HiOutlineArrowLongLeft
              className="text-[4rem] text-[#817f7f] hover:text-[#1877F9]"
              onClick={() => handleScroll("left")}
            />
            <HiOutlineArrowLongRight
              className="text-[4rem] text-[#817f7f] hover:text-[#1877F9]"
              onClick={() => handleScroll("right")}
            />
          </div>
        </div>

        {/* images */}
        <div
          className="flex justify-between items-baseline overflow-hidden gap-5 relative overflow-x-auto scroll-ms-9 no-scroll snap-mandatory snap-x scroll-smooth"
          ref={scrollContainerRef}
        >
          {gallery?.map((image, index) => (
            <img
              key={index}
              src={image.traineePhoto.url}
              className={`w-[500px] h-[500px]`}
            />
          ))}
        </div>

        {/* mobile view navigators */}
        <div className="relative lg:hidden block py-8">
          <img src={arrow} className=" w-[197px] mx-auto lg:mx-0" />

          <div className="lg:flex justify-self-end hidden">
            <HiOutlineArrowLongLeft
              className="text-[4rem] text-[#817f7f] hover:text-[#1877F9]"
              onClick={() => handleScroll("left")}
            />
            <HiOutlineArrowLongRight
              className="text-[4rem] text-[#817f7f] hover:text-[#1877F9]"
              onClick={() => handleScroll("right")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
