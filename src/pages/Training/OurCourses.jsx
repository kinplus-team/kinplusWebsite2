import PageLayout from "../../components/Layout/PageLayout.jsx";
import Catalogue from "../../components/catalogue/Catalogue.jsx";
import vsCode from "../../assets/svg/visual-studio-code.svg";
import excel from "../../assets/svg/excel.svg";
import figma from "../../assets/svg/figma.svg";
import graphics from "../../assets/svg/adobe-photoshop.svg";
import cybersecurity from "../../assets/svg/simple-icons_metasploit.svg";
import videography from "../../assets/svg/logos_adobe-premiere.svg";
import trainingImage from "../../assets/training/training-image-2.png";

export default function OurCourses() {
  const courses = [
    { title: "Software development", icon: vsCode },
    { title: "Data Analysis", icon: excel },
    { title: "Product Design", icon: figma },
    { title: "Graphics Design", icon: graphics },
    { title: "Cyber Security", icon: cybersecurity },
    { title: "Videography", icon: videography },
  ];

  return (
    <PageLayout>
      <div className="lg:py-12 pt-8 pb-16">
        <Catalogue
          title="Our Courses"
          catalouges={courses}
          sidebarImage={trainingImage}
        />
      </div>
    </PageLayout>
  );
}
