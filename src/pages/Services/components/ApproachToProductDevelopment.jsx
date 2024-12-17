import PageLayout from "../../../components/Layout/PageLayout";
import icon2 from "../../../assets/our_services/Mask Group (1).png";
import { useRef, useState, useEffect } from "react";
import {
  HiOutlineArrowLongRight,
  HiOutlineArrowLongLeft,
} from "react-icons/hi2";
import servicesRepo from "../../../repository/Services";
import Text from "../../../components/Text";
import { motion } from "framer-motion";

export default function ApproachToProductDevelopment() {
  const cardScroll = useRef(null);
  const [isStart, setIsStart] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [visibleImages, setVisibleImages] = useState(new Set());
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  const handleScroll = (direction) => {
    if (!cardScroll.current) return;

    const scrollAmount = windowWidth < 640 ? 280 : 350; // Adjust scroll amount for smaller screens
    const container = cardScroll.current;

    const newScrollLeft =
      direction === "right"
        ? container.scrollLeft + scrollAmount
        : container.scrollLeft - scrollAmount;

    container.scrollTo({
      left: newScrollLeft,
      behavior: "smooth",
    });

    setIsStart(newScrollLeft <= 0);
    setIsEnd(
      newScrollLeft + container.clientWidth >= container.scrollWidth - 10
    );
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const checkScrollPosition = () => {
    if (!cardScroll.current) return;

    const container = cardScroll.current;
    setIsStart(container.scrollLeft <= 0);
    setIsEnd(
      container.scrollLeft + container.clientWidth >= container.scrollWidth - 10
    );

    const images = container.querySelectorAll(".service-card");
    const containerRect = container.getBoundingClientRect();

    const newVisibleImages = new Set();

    images.forEach((img) => {
      const rect = img.getBoundingClientRect();
      if (
        rect.left >= containerRect.left &&
        rect.right <= containerRect.right
      ) {
        newVisibleImages.add(img.dataset.title);
      }
    });

    setVisibleImages(newVisibleImages);
  };

  useEffect(() => {
    const container = cardScroll.current;
    if (container) {
      container.addEventListener("scroll", checkScrollPosition);
      checkScrollPosition();
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", checkScrollPosition);
      }
    };
  }, []);

  const slideInLeft = {
    initial: { x: -100, opacity: 0 },
    whileInView: { x: 0, opacity: 1 },
    viewport: { once: true },
    transition: { duration: 0.8 },
  };

  const slideInRight = {
    initial: { x: 100, opacity: 0 },
    whileInView: { x: 0, opacity: 1 },
    viewport: { once: true },
    transition: { duration: 0.8 },
  };

  const slideInTop = {
    initial: { y: -100, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    viewport: { once: true },
    transition: { duration: 0.6, delay: 0.2 },
  };

  return (
    <PageLayout>
      <div className="grid lg:grid-cols-[auto_auto_1fr] lg:gap-10 gap-5 items-center">
        <div>
          <motion.div {...slideInLeft}>
            <Text
              type="subheading"
              className="text-[#082B5B] max-w-lg"
            >
              Our Approach to Product <br /> Development
            </Text>
          </motion.div>
        </div>
        <div>
          <motion.div {...slideInTop}>
            <Text
              type="subparagraph"
              className="text-[#101010] max-w-lg"
            >
              We take a startup-like approach to thinking smarter, shipping
              faster, and scaling far and wide.
            </Text>
          </motion.div>
        </div>

        <motion.div
          className="lg:flex justify-self-end hidden"
          {...slideInRight}
        >
          <HiOutlineArrowLongLeft
            className={`text-[4rem] text-[#817f7f] hover:text-[#1877F9] ${
              isStart ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={() => !isStart && handleScroll("left")}
            style={{ pointerEvents: isStart ? "none" : "auto" }}
          />
          <HiOutlineArrowLongRight
            className={`text-[4rem] text-[#817f7f] hover:text-[#1877F9] ${
              isEnd ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={() => !isEnd && handleScroll("right")}
            style={{ pointerEvents: isEnd ? "none" : "auto" }}
          />
        </motion.div>
      </div>

      <div
        className="flex justify-between items-baseline overflow-hidden gap-3 h-[400px] md:h-[480px] relative scroll-ms-9 no-scroll snap-mandatory snap-x scroll-smooth px-2 sm:px-0"
        ref={cardScroll}
      >
        {servicesRepo.approachesToProductDevelopment.map((service, index) => (
          <motion.div
            key={index}
            className="service-card bg-[#082B5B] sm:min-w-[400px] min-w-[280px] my-10 grid grid-rows-[auto_1fr]  h-[75%] lg:h-full gap-3 sm:gap-5 snap-center"
            data-title={service.title}
            style={{
              opacity:
                windowWidth < 768
                  ? 1
                  : visibleImages.has(service.title)
                  ? 1
                  : 0.5,
              transition: "opacity 0.3s ease-in-out",
            }}
          >
            <img
              src={icon2}
              className="w-10 h-10 sm:w-12 lg:w-24 lg:h-24 justify-self-end sm:my-5 mx-3 sm:mx-5"
              alt={`Icon for ${service.title}`}
            />
            <div className="text-center grid grid-rows-[auto_1fr] gap-2 lg:gap-3 content-center w-full px-4 sm:px-8 lg:py-4 py-2">
              <h3 className="text-white text-2xl sm:text-[28px] lg:text-4xl">
                {service.title}
              </h3>
              <p className="text-white text-sm sm:text-base leading-5 sm:leading-6 mx-auto">
                {service.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="lg:hidden flex justify-center md:mt-4"
        {...slideInRight}
      >
        <HiOutlineArrowLongLeft
          className={`text-4xl sm:text-[4rem] text-black hover:text-[#1877F9] ${
            isStart ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={() => !isStart && handleScroll("left")}
          style={{ pointerEvents: isStart ? "none" : "auto" }}
        />
        <HiOutlineArrowLongRight
          className={`text-4xl sm:text-[4rem] text-black hover:text-[#1877F9] ${
            isEnd ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={() => !isEnd && handleScroll("right")}
          style={{ pointerEvents: isEnd ? "none" : "auto" }}
        />
      </motion.div>
    </PageLayout>
  );
}
