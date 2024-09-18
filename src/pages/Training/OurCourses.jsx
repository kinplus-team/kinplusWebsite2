import { useState, useEffect } from "react";

import PageLayout from "../../components/Layout/PageLayout.jsx";
import Catalogue from "../../components/catalogue/Catalogue.jsx";

// svgs
import icon1 from "../../assets/components/courses/course-list/SVG/visual-studio-code.svg";
import icon2 from "../../assets/components/courses/course-list/SVG/excel.svg";
import icon3 from "../../assets/components/courses/course-list/SVG/figma.svg";
import icon4 from "../../assets/components/courses/course-list/SVG/adobe-photoshop.svg";
import icon5 from "../../assets/components/courses/course-list/SVG/simple-icons_metasploit.svg";
import icon6 from "../../assets/components/courses/course-list/SVG/logos_adobe-premiere.svg";

// images
import trainingImage1 from "../../assets/components/courses/course-list/images/training-1.webp";
import trainingImage2 from "../../assets/components/courses/course-list/images/training-2.webp";
import trainingImage3 from "../../assets/components/courses/course-list/images/training-3.webp";
import trainingImage4 from "../../assets/components/courses/course-list/images/training-4.webp";
import trainingImage5 from "../../assets/components/courses/course-list/images/training-5.webp";

import courses from "../../services/courseServices.js";

async function getCourses() {
  const courseIconArray = [icon1, icon2, icon3, icon4, icon5, icon6];

  const trainingImageArray = [
    trainingImage1,
    trainingImage2,
    trainingImage3,
    trainingImage4,
    trainingImage5,
    trainingImage1,
  ];

  let allListedCourses = [];
  const responses = await courses();
  responses.map((response, index) => {
    allListedCourses.push({
      title: response.title,
      icon: courseIconArray[index],
      image: trainingImageArray[index],
      link: response.slug,
    });
  });

  return allListedCourses;
}

export default function OurCourses() {
  const [listedCourses, setListedCourses] = useState(null);

  useEffect(() => {
    getCourses().then((response) => {
      setListedCourses(response);
    });
  }, []);

  return (
    <PageLayout>
      <div>
        {listedCourses && (
          <Catalogue title="Our Courses" catalouges={listedCourses} />
        )}
      </div>
    </PageLayout>
  );
}
