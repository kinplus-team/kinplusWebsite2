
import mobileDev from "../../../assets/trainingPics/Mobile-dev.jpeg";
import webDev from "../../../assets/trainingPics/web-dev.jpeg";
import softwareDev from "../../../assets/trainingPics/software-dev.jpeg";
import productManagement from "../../../assets/trainingPics/product-management.jpeg";
import productDesign from "../../../assets/trainingPics/product-design.jpeg";
import graphicsDesign from "../../../assets/trainingPics/graphics-design.jpeg";
import artificialIntelligent from "../../../assets/trainingPics/Artificial-intelli.jpeg";
import dataAnalysis from "../../../assets/trainingPics/data-analysis.jpeg";
import devOps from "../../../assets/trainingPics/devOps.jpeg";
import videoEditing from "../../../assets/trainingPics/video-editing.jpeg";

export default function TrainingPhotoGrid() {
  const trainingPhotoGrids = [
    {
      image: `${mobileDev}`,
      text: "Mobile Development",
      alt: "Mobile_dev"
    },
    {
      image: `${webDev}`,
      text: "Web Development",
      alt: "web_dev"
    },
    {
      image: `${softwareDev}`,
      text: "Software Development",
      alt: "software_dev"
    },
    {
      image: `${productManagement}`,
      text: "Product Management",
      alt: "Product_manager"
    },
    {
      image: `${productDesign}`,
      text: "Product Design",
      alt: "Product_design",
    },
    {
      image: `${graphicsDesign}`,
      text: "Graphics Design",
      alt: "Graphics_design",
    },
    {
      image: `${artificialIntelligent}`,
      text: "Artificial Intelligent",
      alt: "Artificial_Intelligent",
    },
    {
      image: `${dataAnalysis}`,
      text: "Data Analysis",
      alt: "Data_Analysis"
    },
    {
      image: `${devOps}`,
      text: "Dev Ops",
      alt: "DevOps"
    },
    {
      image: `${videoEditing}`,
      text: "Video Editing",
      alt: "Video_Editing"
    },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 mt-[56px] mb-[148px]">
      {trainingPhotoGrids.map((trainingPhotoGrid, index) => (
        <div
          key={trainingPhotoGrid.text + index}
          className="relative hover:scale-105 shadow-lg shadow-zinc-600 cursor-pointer transition duration-150 ease-in-out"
          loading="lazy"
        >
          <div className="h-[210px]">
            <img src={trainingPhotoGrid.image} alt={trainingPhotoGrid.alt} className="h-[210px] w-full" loading="lazy"/>
          </div>
          <div className="absolute inset-0 opacity-75 bg-[#101010] text-[#F1F1F1] text-[32px]  font-bold flex justify-center">
            <h4 className="absolute bottom-0 p-1 capitalize font-[700] text-[12px] md:text-[1rem]">
              {trainingPhotoGrid.text}
            </h4>
          </div>
        </div>
      ))}
    </div>
  );
}
