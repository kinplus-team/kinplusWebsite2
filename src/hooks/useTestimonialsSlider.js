import { useState, useRef, useEffect } from "react";
import { debounce } from "lodash";

const useTestimonialsSlider = (totalSlides) => {
  const [activeSlide, setActiveSlide] = useState(1);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const scrollCon = useRef(null);

  const updateScrollState = () => {
    if (!scrollCon.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = scrollCon.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);

    const newActiveSlide = Math.round(scrollLeft / clientWidth) + 1;
    setActiveSlide(newActiveSlide);
  };

  useEffect(() => {
    const scrollElement = scrollCon.current;
    const debouncedUpdate = debounce(updateScrollState, 50);

    if (scrollElement) {
      scrollElement.addEventListener("scroll", debouncedUpdate);
      updateScrollState();
    }

    return () => {
      if (scrollElement) {
        scrollElement.removeEventListener("scroll", debouncedUpdate);
      }
      debouncedUpdate.cancel();
    };
  }, []);

  const handleTestimonialSlider = (direction) => {
    if (!scrollCon.current) return;

    let newSlide = activeSlide;
    if (direction === "left" && canScrollLeft) {
      newSlide = Math.max(1, activeSlide - 1);
    } else if (direction === "right" && canScrollRight) {
      newSlide = Math.min(totalSlides, activeSlide + 1);
    }

    setActiveSlide(newSlide);
    scrollCon.current.scrollTo({
      left: scrollCon.current.offsetWidth * (newSlide - 1),
      behavior: "smooth",
    });
  };

  return {
    handleTestimonialSlider,
    scrollCon,
    activeSlide,
    canScrollLeft,
    canScrollRight,
  };
};

export { useTestimonialsSlider };
