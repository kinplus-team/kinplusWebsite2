import { useEffect, useRef, useState } from "react";
import {
  HiOutlineArrowLongRight,
  HiOutlineArrowLongLeft,
} from "react-icons/hi2";
import getTrainingGallery from "../../services/galleryServices.js";
import Text from "../../components/Text.jsx";
import { motion } from "framer-motion";

export default function GalleryTraining() {
  const [gallery, setGallery] = useState([]);
  const [isStart, setIsStart] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [isInView, setIsInView] = useState(false);

  const scrollContainerRef = useRef(null);
  const sectionRef = useRef(null);

  const handleScroll = (direction) => {
    if (!scrollContainerRef.current) return;

    const scrollAmount = 400;
    const container = scrollContainerRef.current;

    // Adjusting scroll position based on direction
    const newScrollLeft =
      direction === "right"
        ? container.scrollLeft + scrollAmount
        : container.scrollLeft - scrollAmount;

    container.scrollTo({
      left: newScrollLeft,
      behavior: "smooth",
    });

    // Update scroll position right after scroll action
    setTimeout(checkScrollPosition, 300); // Allow smooth scrolling to complete
  };

  const checkScrollPosition = () => {
    if (!scrollContainerRef.current) return;

    const container = scrollContainerRef.current;
    setIsStart(container.scrollLeft <= 0);
    setIsEnd(
      container.scrollLeft + container.clientWidth >= container.scrollWidth - 10
    );
  };

  useEffect(() => {
    getTrainingGallery().then((response) => {
      setGallery(response);
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", checkScrollPosition);
      checkScrollPosition();
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", checkScrollPosition);
      }
      observer.disconnect();
    };
  }, []);

  // Animation variants
  const imageVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: index * 0.1 },
    }),
  };

  return (
    <div
      className="bg-[#f1f3f9] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']"
      ref={sectionRef}
    >
      <div
        className={`lg:pt-32 pt-10 grid lg:gap-10 gap-2 relative lg:px-[0px] px-4 max-w-[100rem] mx-auto 
        transition-opacity duration-1000 ${
          isInView ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Gallery Title and Subheading */}
        <div className="grid gap-2 lg:place-self-end right-52">
          <Text
            type="title"
            className="text-[#1877F9]"
          >
            Kinplus Gallery
          </Text>
          <Text
            type="subheading"
            className="text-[#082B5B] lg:max-w-md max-w-xs"
          >
            Check out our past trainees
          </Text>

          {/* Navigation Buttons */}
          <div className="lg:flex justify-self-start hidden">
            <motion.button
              className={`transition-all duration-300 ${
                isStart
                  ? "opacity-30 cursor-not-allowed"
                  : "hover:text-[#1877F9] cursor-pointer"
              }`}
              onClick={() => !isStart && handleScroll("left")}
              disabled={isStart}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <HiOutlineArrowLongLeft className="text-[4rem] text-black" />
            </motion.button>
            <motion.button
              className={`transition-all duration-300 ${
                isEnd
                  ? "opacity-30 cursor-not-allowed"
                  : "hover:text-[#1877F9] cursor-pointer"
              }`}
              onClick={() => !isEnd && handleScroll("right")}
              disabled={isEnd}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <HiOutlineArrowLongRight className="text-[4rem] text-black" />
            </motion.button>
          </div>
        </div>

        {/* Images */}
        <div
          className="flex mt-4 items-baseline gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory 
  [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']"
          ref={scrollContainerRef}
        >
          {gallery?.map((image, index) => (
            <motion.div
              key={index}
              variants={imageVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={index}
              className="flex-shrink-0 w-full sm:w-[300px] h-[300px] md:w-[400px] md:h-[400px]" // Full width on small screens
            >
              <img
                src={image.traineePhoto.url}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </motion.div>
          ))}
        </div>

        {/* Mobile View Navigators */}
        <div className="lg:hidden items-center justify-center flex">
          <motion.button
            className={`transition-all duration-300 ${
              isStart
                ? "opacity-30 cursor-not-allowed"
                : "hover:text-[#1877F9] cursor-pointer"
            }`}
            onClick={() => !isStart && handleScroll("left")}
            disabled={isStart}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <HiOutlineArrowLongLeft className="text-[4rem] text-black" />
          </motion.button>
          <motion.button
            className={`transition-all duration-300 ${
              isEnd
                ? "opacity-30 cursor-not-allowed"
                : "hover:text-[#1877F9] cursor-pointer"
            }`}
            onClick={() => !isEnd && handleScroll("right")}
            disabled={isEnd}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <HiOutlineArrowLongRight className="text-[4rem] text-black" />
          </motion.button>
        </div>
      </div>
    </div>
  );
}
