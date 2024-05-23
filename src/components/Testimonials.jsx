import { FaQuoteRight } from "react-icons/fa6";
import {
  HiOutlineArrowLongRight,
  HiOutlineArrowLongLeft,
} from "react-icons/hi2";

import Text from "./Text";

export default function Testimonials({
  testimonials,
  scrollCon,
  handleTestimonialSlider,
}) {
  return (
    <div>
      <div className="grid lg:grid-cols-2 grid-cols-[1fr_auto] pb-5">
        <Text type="subheading" className="capitalize max-w-lg text-[#082B5B]">
          See what others are saying about us
        </Text>

        <FaQuoteRight className="place-self-end lg:text-[130px] text-[79px]" />
      </div>

      <div
        ref={scrollCon}
        className={`grid grid-cols-[repeat(3,_100%)] overflow-auto snap-mandatory snap-x 
          scrollbar-hide`}
      >
        {testimonials.map((testimonial, i) => (
          <div
            key={i}
            className="grid lg:grid-cols-[1fr_auto] py-4 gap-16 relative snap-end"
          >
            <Text
              type="paragraph"
              className="text-[#556987] max-w-[795px] leading-[30px]"
            >
              {testimonial.text}
            </Text>

            <div className="lg:place-self-end place-self-center">
              <div className="grid place-items-center">
                <img
                  src={testimonial.image}
                  className="w-[90px] h-[90px] rounded-full"
                />

                <Text type="paragraph">{testimonial.name}</Text>

                <Text type="subparagraph">{testimonial.program}</Text>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-5  lg:justify-start">
        <HiOutlineArrowLongLeft
          size={60}
          onClick={() => handleTestimonialSlider("left")}
          className="hover:text-[#1877F9]"
        />
        <HiOutlineArrowLongRight
          size={60}
          onClick={() => handleTestimonialSlider("right")}
          className="hover:text-[#1877F9]"
        />
      </div>
    </div>
  );
}
