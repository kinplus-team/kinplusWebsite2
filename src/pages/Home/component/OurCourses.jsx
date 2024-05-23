import { useEffect, useState } from "react";
import PageLayout from "../../../components/Layout/PageLayout.jsx";
import Catalogue from "../../../components/catalogue/Catalogue.jsx";
import courses from "../../../repository/course.js";

export default function OurCourses() {
  return (
    <PageLayout>
      <Catalogue title="Our Courses" catalouges={courses} />
    </PageLayout>
  );
}
