import { FaQuoteRight } from "react-icons/fa6";
import {
  HiOutlineArrowLongRight,
  HiOutlineArrowLongLeft,
} from "react-icons/hi2";

export default function Testimonials({
  testimonials,
  scrollCon,
  handleTestimonialSlider,
}) {
  return (
    <div>
      <div className="grid lg:grid-cols-2 grid-cols-[1fr_auto] pb-5">
        <h4 className="lg:text-[40px] text-[28px] sm:text-[40px] text-[#082B5B] font-[700] leading-[125%] capitalized">
          See what others are <br /> saying about us
        </h4>

        <FaQuoteRight className="place-self-end lg:text-[130px] text-[79px]" />
      </div>

      <div
        ref={scrollCon}
        className="grid grid-cols-[repeat(3,_100%)] overflow-auto snap-mandatory snap-x scroll-smooth scrollbar-hide"
      >
        {testimonials.map((testimonial, i) => (
          <div
            key={i}
            className="grid lg:grid-cols-[1fr_auto] py-4 gap-16 relative snap-end"
          >
            <p className="lg:text-[20px] text-lg font-[400] lg:leading-[35px] text-[#101010] max-w-3xl">
              {testimonial.text}
            </p>

            <div className="lg:place-self-end place-self-center">
              <div className="grid place-items-center">
                <img
                  src={testimonial.image}
                  className="w-[90px] h-[90px] rounded-full"
                />

                <p>{testimonial.name}</p>
                <p>{testimonial.program}</p>
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
