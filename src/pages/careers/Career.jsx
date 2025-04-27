import React from "react";
import DefaultHelmet from "../../components/DefaultHelmet";
import CareerOpportunity from "./component/CareerOpportunity.jsx";
import ApplyForRole from "./component/ApplyForRole.jsx";
import HeroCareers from "./component/HeroCareers.jsx";

export default function Career() {
  return (
    <div className="overflow-hidden">
      {/* Dynamic Helmet for SEO */}
      <DefaultHelmet
        title="Careers at Kinplus Technologies | Join Our Innovative Team"
        description="Explore exciting career opportunities at Kinplus Technologies. We are looking for passionate individuals to join our team and help drive innovation in tech education, software development, and digital transformation."
        url="https://www.kinplusgroup.com/career"
        image="https://www.kinplusgroup.com/kinplus-opengraph-image.png"
      />

      {/* Career Sections */}
      <HeroCareers />
      <CareerOpportunity />
      <ApplyForRole />
    </div>
  );
}
