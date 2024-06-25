import { useRef, useState, useEffect } from "react";
// import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";
import arrow from "../../../assets/svg/arrow.svg";
import gallery1 from "../../../assets/gallery/gallery_1.png";
import gallery2 from "../../../assets/gallery/gallery_2.png";
import gallery3 from "../../../assets/gallery/gallery_3.png";
import gallery4 from "../../../assets/gallery/gallery_4.png";
import Text from "../../../components/Text";
import {
  HiOutlineArrowLongRight,
  HiOutlineArrowLongLeft,
} from "react-icons/hi2";

// import getTrainingGallery from "../../services/galleryServices.js";
import getTrainingGallery from "../../../services/galleryServices";

export default function Gallery() {
  const [gallery, setGallery] = useState([]);

  let scaleFactors = useState(Array(10).fill(1));
  const imageScroll = useRef(null);

  useEffect(() => {
    // handleScrollEffect();
    getTrainingGallery().then((response) => {
      setGallery(response);
    });
  }, []);

  const handleScroll = (direction) => {
    imageScroll.current &&
      direction === "right" &&
      (imageScroll.current.scrollLeft += 1000);
    imageScroll.current &&
      direction === "left" &&
      (imageScroll.current.scrollLeft -= 1000);
  };

  const handleScrollEffect = () => {
    if (imageScroll.current) {
      // Get the width of the scrollable container element
      const containerWidth = imageScroll.current.offsetWidth;

      // Get the total width of the scrollable content inside the container
      const scrollWidth = imageScroll.current.scrollWidth;

      // Get the amount of horizontal scrolling that has occurred within the container from the left
      const scrollLeft = imageScroll.current.scrollLeft;

      // Calculate the maximum scrollable distance horizontally within the container
      const maxScroll = scrollWidth - containerWidth;

      // Calculate the percentage of the current scroll position relative to the maximum scrollable distance
      const percentage = scrollLeft / maxScroll;

      // Define the minimum and maximum scaling factors for the images
      const minScale = 1.5;
      const maxScale = 3;

      // Create a new array with 10 elements, each initialized to 0
      const newScaleFactors = Array(10)
        .fill(0)
        // Map over each element in the array
        .map((_, i) => {
          // Calculate the scaling factor based on the current scroll position percentage
          const scaleFactor = minScale + percentage * (maxScale - minScale);

          // Check if the index 'i' corresponds to the nearest integer value of 'scaleFactor'
          // If yes, set the scaling factor to 'maxScale', otherwise set it to 'minScale'
          return i == Math.floor(scaleFactor) ? maxScale : minScale;
        });

      // Set the state variable 'scaleFactors' with the newly calculated scaling factors
      scaleFactors = newScaleFactors;
    }
  };

  return (
    <div className="lg:pt-8 lg:pb-32 pb-10 grid lg:gap-10 gap-2 bg-[#f1f3f9] relative lg:px-[0px] px-4 max-w-[100rem] mx-auto">
      {/* Navigators */}
      <div className="grid gap-2 place-self-end">
        <Text type="title" className="text-[#1877F9]">
          Kinplus gallery
        </Text>

        <Text type="subheading" className="text-[#082B5B] lg:max-w-md max-w-xs">
          Check out our recent workshop
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
        className="flex justify-between items-baseline overflow-hidden gap-3 relative overflow-x-auto scroll-ms-9 no-scroll snap-mandatory snap-x scroll-smooth"
        ref={imageScroll}
        onScroll={() => handleScrollEffect()}
      >
        {gallery.map((image, index) => (
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
  );
}
