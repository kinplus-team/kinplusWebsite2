import Catalogue from "../../components/catalogue/Catalogue.jsx";
import vsCode from "../../assets/svg/visual-studio-code.svg";
import excel from "../../assets/svg/excel.svg";
import figma from "../../assets/svg/figma.svg";
import graphics from "../../assets/svg/adobe-photoshop.svg";
import cybersecurity from "../../assets/svg/simple-icons_metasploit.svg";
import videography from "../../assets/svg/logos_adobe-premiere.svg";

export default function OurCourses() {
  const title = "Courses";

  const courses = [
    { title: "Software development", icon: vsCode },
    { title: "Data Analysis", icon: excel },
    { title: "Product Design", icon: figma },
    { title: "Graphics Design", icon: graphics },
    { title: "Cyber Security", icon: cybersecurity },
    { title: "Videography", icon: videography },
  ];

  return (
    <div className="lg:py-12 py-8">
      <Catalogue title={title} catalouges={courses} />
    </div>
  );
}
