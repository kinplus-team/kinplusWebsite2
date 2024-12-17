import React from "react";
import testimonials from "../../../repository/testimonials";
import PageLayout from "../../../components/Layout/PageLayout";
import Testimonials from "../../../components/Testimonials";
import { useTestimonialsSlider } from "../../../hooks/useTestimonialsSlider";

export default function TestimonialServices() {
  const { handleTestimonialSlider, scrollCon } = useTestimonialsSlider();

  return (
    <PageLayout className="lg:py-10">
      <Testimonials
        testimonials={testimonials}
        scrollCon={scrollCon}
        handleTestimonialSlider={handleTestimonialSlider}
      />
    </PageLayout>
  );
}
