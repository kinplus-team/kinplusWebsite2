import React from "react";
import testimonials from "../../../repository/testimonials";
import PageLayout from "../../../components/Layout/PageLayout";
import Testimonials from "../../../components/Testimonials";
import { useTestimonialsSlider } from "../../../hooks/useTestimonialsSlider";

export default function TestimonialHome() {
  const { handleTestimonialSlider, scrollCon } = useTestimonialsSlider();

  return (
    <PageLayout className="pt-1">
      <Testimonials
        testimonials={testimonials}
        scrollCon={scrollCon}
        handleTestimonialSlider={handleTestimonialSlider}
      />
    </PageLayout>
  );
}
