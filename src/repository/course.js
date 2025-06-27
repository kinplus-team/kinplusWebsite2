// images on the catalogue card
import icon1 from "../assets/components/courses/course-list/SVG/visual-studio-code.svg";
import icon2 from "../assets/components/courses/course-list/SVG/excel.svg";
import icon3 from "../assets/components/courses/course-list/SVG/figma.svg";
import icon4 from "../assets/components/courses/course-list/SVG/adobe-photoshop.svg";
import icon5 from "../assets/components/courses/course-list/SVG/simple-icons_metasploit.svg";
import icon6 from "../assets/components/courses/course-list/SVG/google-analytics.svg";
import icon7 from "../assets/components/courses/course-list/SVG/office-word.svg";


// images
import trainingImage1 from "../assets/components/courses/course-list/images/training-1.webp";
import trainingImage2 from "../assets/components/courses/course-list/images/training-2.webp";
import trainingImage3 from "../assets/components/courses/course-list/images/training-3.webp";
import trainingImage4 from "../assets/components/courses/course-list/images/training-4.webp";
import trainingImage5 from "../assets/components/courses/course-list/images/training-5.webp";

const courses = [
  {
    title: "Software development",
    icon: icon1,
    image: trainingImage1,
    link: "software-development",
  },
  {
    title: "Data Analysis",
    icon: icon2,
    image: trainingImage2,
    link: "data-analysis",
  },
  {
    title: "Product Design",
    icon: icon3,
    image: trainingImage3,
    link: "product-design",
  },
  {
    title: "Graphics Design",
    icon: icon4,
    image: trainingImage4,
    link: "graphics-design",
  },
  {
    title: "Cyber Security",
    icon: icon5,
    image: trainingImage5,
    link: "cyber-security",
  },
  {
    title: "Digital Marketing",
    icon: icon6,
    image: trainingImage1,
    link: "digital-marketing",
  },

  {
    title: "Basic Computer Operation",
    icon: icon7,
    image: trainingImage3,
    link: "basic-computer-operation",
  }
];

export default courses;
