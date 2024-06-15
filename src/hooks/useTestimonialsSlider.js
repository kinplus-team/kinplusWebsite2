import { useState, useRef } from "react";

export const useTestimonialsSlider = () => {
  const [activeSlide, setActiveSlide] = useState(1);
  const scrollCon = useRef();

  const handleTestimonialSlider = (direction) => {
    let slide = activeSlide;

    if (direction === "left") {
      slide === 1 ? (slide = 5) : (slide -= 1);
      setActiveSlide(slide);
    }

    if (direction === "right") {
      slide === 5 ? (slide = 1) : (slide += 1);
      setActiveSlide(slide);
    }

    scrollCon.current.scrollLeft =
      scrollCon?.current?.offsetWidth * (slide - 1);
  };

  return { handleTestimonialSlider, scrollCon };
};
