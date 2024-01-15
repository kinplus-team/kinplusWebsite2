
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import softwareDevImage from "../../../assets/trainingComponentAssests/Software_dev.jpeg";
import ui_uxImage from "../../../assets/trainingComponentAssests/UI_UX_design.jpeg";
import graphicsDesignImage from "../../../assets/trainingComponentAssests/Graphics_design.jpg";
import dataAnalysisImage from "../../../assets/trainingComponentAssests/Data_analysis.jpg";
import projectManagementImage from "../../../assets/trainingComponentAssests/Project_Management.jpg";
import dataScienceImage from "../../../assets/trainingComponentAssests/Project_Management.jpg";

export default function TrainingComponentCard() {

  return (
    <div className="mt-14 grid md:grid-cols-3 gap-4">
      {/*Big Images */}
      <div className=" grid grid-cols-2 gap-4 md:col-span-2 text-[16] md:text-[32px]">
        {/*Software development */}
        <Link
          to="/training/software-development"
          className="hover:scale-105 shadow-lg shadow-zinc-600 transition duration-1500 ease-in-out"
        >
          <div className="relative">
            <div className="w-full border-2 h-full border-red-900">
              <img
                src={softwareDevImage}
                loading="lazy"
              />
            </div>
            <div className="absolute inset-0 opacity-75 bg-[#101010] text-[#F1F1F1]   font-bold flex justify-center">
              <h4 className="absolute bottom-0 p-1">Software Development</h4>
            </div>{" "}
          </div>
        </Link>

        {/*UI/UX design */}
        <Link
          to="/training/uiux-design"
          className="hover:scale-105 shadow-lg shadow-zinc-600 transition duration-1500 ease-in-out"
        >
          <div className="relative">
            <div className="w-full border-2 h-full border-red-900">
              <img
                src={ui_uxImage}
                loading="lazy"
              />
            </div>
            <div className="absolute  inset-0 opacity-75 bg-[#101010] text-[#F1F1F1] font-bold flex justify-center">
              <h4 className="absolute bottom-0 p-1">UI/UX Design</h4>
            </div>{" "}
          </div>
        </Link>
      </div>

      {/*Small Images */}
      <div className="grid grid-cols-4 md:grid-cols-3 gap-4 text-[12px] md:text-[1rem]">
        {/*Graphics Design*/}
        <Link
          to="/training/graphics-design"
          className="hover:scale-105 shadow-lg shadow-zinc-600 transition duration-1500 ease-in-out"
        >
          <div className="relative">
            <div className="w-full border-2 h-full border-red-900">
              <img
                src={graphicsDesignImage}
                loading="lazy"
              />
            </div>
            <div className="absolute  inset-0 opacity-75 bg-[#101010] text-[#F1F1F1]   font-bold flex justify-center">
              <h4 className="absolute bottom-0 p-1">Graphics Design</h4>
            </div>
          </div>
        </Link>

        {/*Data Analysis */}
        <Link
          to="/training/data-analysis"
          className="hover:scale-105 shadow-lg shadow-zinc-600 transition duration-1500 ease-in-out"
        >
          <div className="relative">
            <div className="w-full border-2 h-full border-red-900">
              <img
                src={dataAnalysisImage}
                loading="lazy"
              />
            </div>
            <div className="absolute  inset-0 opacity-75 bg-[#101010] text-[#F1F1F1]   font-bold flex justify-center">
              <h4 className="absolute bottom-0 p-1">Data Analysis</h4>
            </div>
          </div>
        </Link>

        {/**Project Management */}
        <Link
          to="/training/project-management"
          className="hover:scale-105 shadow-lg shadow-zinc-600 transition duration-1500 ease-in-out"
        >
          <div className="relative">
            <div className="w-full border-2 h-full border-red-900">
              <img
                src={projectManagementImage}
                loading="lazy"
              />
            </div>
            <div className="absolute  inset-0 opacity-75 bg-[#101010] text-[#F1F1F1]   font-bold flex justify-center">
              <h4 className="absolute bottom-0 p-1">Project Management</h4>
            </div>
          </div>
        </Link>

        {/*Data Science*/}
        <Link
          to="/training/data-science"
          className="hover:scale-105 shadow-lg shadow-zinc-600 transition duration-1500 ease-in-out"
        >
          <div className="relative">
            <div className="h-[10em] w-full border-2 border-red-900">
              <img
                src={dataScienceImage}
                loading="lazy"
                className="h-[10em]"
              />
            </div>
            <div className="absolute  inset-0 opacity-75 bg-[#101010] text-[#F1F1F1]   font-bold flex justify-center">
              <h4 className="absolute bottom-0 p-1">Data Science</h4>
            </div>
          </div>
        </Link>

        {/*Hardware Repair*/}
        <Link
          to="/training/hardware-repair"
          className="hover:scale-105 shadow-lg shadow-zinc-600 transition duration-1500 ease-in-out"
        >
          <div
            className="relative"
            style={{
              backgroundImage: `url(${dataScienceImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              minHeight: "150px",
            }}
            loading="lazy"
          >
            <div className="absolute  inset-0 opacity-75 bg-[#101010] text-[#F1F1F1]   font-bold flex justify-center">
              <h4 className="absolute bottom-0 p-1">Hardware Repair</h4>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

TrainingComponentCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  to: PropTypes.string,
};