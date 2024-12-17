import PageLayout from "../../../components/Layout/PageLayout";
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";
import previousWorkshop1 from "../../../assets/workshop/previous-workshop-1.png";
import Workshop from "../../../components/cards/Workshop.jsx";
import Text from "../../../components/Text.jsx";
import { useRef, useState, useEffect } from "react";

export default function PreviousWorkshop() {
  const imageScroll = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);

  useEffect(() => {
    if (imageScroll.current) {
      // Calculate max scroll width
      const maxScrollValue =
        imageScroll.current.scrollWidth - imageScroll.current.clientWidth;
      setMaxScroll(maxScrollValue);
    }
  }, []);

  // Track scroll position
  const handleScroll = (e) => {
    setScrollPosition(e.target.scrollLeft);
  };

  const scrollTo = (direction) => {
    if (!imageScroll.current) return;

    const containerWidth = imageScroll.current.clientWidth;
    const newPosition =
      direction === "right"
        ? scrollPosition + containerWidth
        : scrollPosition - containerWidth;

    imageScroll.current.scrollTo({
      left: newPosition,
      behavior: "smooth",
    });
  };

  const isStartDisabled = scrollPosition <= 0;
  const isEndDisabled = scrollPosition >= maxScroll;

  const previousWorkshopCard = [
    {
      coverImage: previousWorkshop1,
      cardTitle:
        "Kinplus-NITDA: Mobile App training and the Digital Skill Up training you can trust",
      cardDescription:
        "Kinplus Technologies, in partnership with NITDA, trained 50+ participants in Mobile App Development. Serving as the technology hub in Ekiti State, similar sessions were held in three other states nationwide. Check out the details of the event.",
    },
  ];

  const ArrowButton = ({ direction, onClick, disabled }) => (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`transition-all duration-200 ${
        disabled
          ? "opacity-30 cursor-not-allowed"
          : "hover:text-blue-600 cursor-pointer"
      }`}
      aria-label={`Scroll ${direction}`}
    >
      {direction === "left" ? (
        <IoIosArrowRoundBack className="w-20 h-20" />
      ) : (
        <IoIosArrowRoundForward className="w-20 h-20" />
      )}
    </button>
  );

  return (
    <div className="pb-16 bg-[#f1f3f9] overflow-hidden">
      <PageLayout>
        <div className="grid lg:grid-cols-2">
          <div>
            <Text type="title" className="text-[#1877F9]">
              Our Recent Workshops
            </Text>
            <Text type="subheading" className="text-[#082B5B]">
              It's not just a stepping stone to your future, it's a launchpad to
              success
            </Text>
          </div>
          {previousWorkshopCard.length > 1 && (
            <div className="lg:flex gap-3 place-self-end hidden">
              <ArrowButton
                direction="left"
                onClick={() => scrollTo("left")}
                disabled={isStartDisabled}
              />
              <ArrowButton
                direction="right"
                onClick={() => scrollTo("right")}
                disabled={isEndDisabled}
              />
            </div>
          )}
        </div>
      </PageLayout>

      <div
        className="flex justify-center items-center overflow-x-hidden space-x-4 p-5 relative scroll-smooth snap-x snap-mandatory"
        ref={imageScroll}
        onScroll={handleScroll}
      >
        {previousWorkshopCard.map((cardDetails, i) => (
          <div
            key={i}
            className="min-w-[320px] max-w-md snap-center"
          >
            <Workshop cardInfo={cardDetails} />
          </div>
        ))}
      </div>

      {previousWorkshopCard.length > 1 && (
        <div className="flex gap-3 justify-center mt-4">
          <ArrowButton
            direction="left"
            onClick={() => scrollTo("left")}
            disabled={isStartDisabled}
          />
          <ArrowButton
            direction="right"
            onClick={() => scrollTo("right")}
            disabled={isEndDisabled}
          />
        </div>
      )}
    </div>
  );
}
