import { useEffect, useRef, useState } from "react";
// import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";
import arrow from "../../assets/svg/arrow.svg";
// import gallery1 from "../../assets/gallery/gallery_1.png";
// import gallery2 from "../../assets/gallery/gallery_2.png";
// import gallery3 from "../../assets/gallery/gallery_3.png";
// import gallery4 from "../../assets/gallery/gallery_4.png";

import getTrainingGallery from "../../services/galleryServices.js";
import PageLayout from "../../components/Layout/PageLayout.jsx";

export default function Gallery() {
  const [scaleFactors, setScaleFactor] = useState(Array(10).fill(1));
  const [gallery, setGallery] = useState([]);

  const scrollContainerRef = useRef(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    // handleScrollEffect();
    getTrainingGallery().then((response) => {
      setGallery(response);
    });
  }, []);

  return (
    <div className="bg-[#f1f3f9]">
      <div className="lg:pt-20 pt-10 lg:pb-32 pb-10 grid lg:gap-10 gap-2 relative lg:px-[0px] px-4 max-w-[100rem] mx-auto">
        {/* Navigators */}
        <div className="grid gap-2 place-self-end right-52">
          <div className="flex items-center gap-3 lg:text-[20px] text-[#1877F9] font-[500] leading-[150%]">
            <p>Kinplus gallery</p>
            <div className="mt-1 w-[73px] h-[2px] bg-[#222831] leading-normal "></div>
          </div>
          <p className="text-[#082B5B] lg:text-[40px] text-[35px] font-[700] lg:max-w-md">
            Check out our past trainees
          </p>
          <img
            src={arrow}
            className=" w-[197px] mx-auto lg:mx-0 hidden lg:block"
          />

          <div className="relative lg:block hidden">
            <div className="grid grid-cols-[50px_100px] gap-10">
              <div
                onClick={() => handleScroll("left")}
                className="w-full h-8 "
              ></div>
              <div
                onClick={() => handleScroll("right")}
                className="w-full h-8"
              ></div>
            </div>
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
              className="w-[500px] h-[500px]"
            />
          ))}
        </div>

        {/* mobile view navigators */}
        <div className="relative lg:hidden block py-8">
          <img src={arrow} className=" w-[197px] mx-auto lg:mx-0" />

          <div className="grid grid-cols-[50px_100px] gap-10 absolute top-0">
            <div
              onClick={() => handleScroll("left")}
              className="w-full h-8 "
            ></div>
            <div
              onClick={() => handleScroll("right")}
              className="w-full h-8"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
