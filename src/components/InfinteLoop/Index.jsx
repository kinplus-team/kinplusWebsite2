import  { useEffect, useState } from "react";

//infinite loop images
import focusedLaptop from "../../assets/trainingPics/training-carousel/a_focused_lady.jpeg"
import image1 from "../../assets/trainingPics/training-carousel/cute_faces.jpeg"
import image2 from "../../assets/trainingPics/training-carousel/cute_faces.jpeg"
import image3 from "../../assets/trainingPics/training-carousel/cute_faces.jpeg"
import image4 from "../../assets/trainingPics/training-carousel/cute_faces.jpeg"
import image5 from "../../assets/trainingPics/training-carousel/cute_faces.jpeg"
import { useLocation } from "react-router-dom";


export default function InfiniteLoop() {

  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [hoveredElement, setHoveredElement] = useState("");

  const handleHover = (index) => {
    setHoveredIndex(index);
    setHoveredElement(index);
  };

  const handleLeave = () => {
    setHoveredIndex(null);
  };

  const images = [image1, image2, image3, image4, image5, ];

  const hoverContents = [
    { title: "SoftWare Development" },
    { title: "Data Analysis" },
    { title: "Product Design" },
    { title: "Graphics Design" },
    { title: "Cybersecurity" },
    { title: "Videography" }
  ];

  // Update hoveredElement with newIndex and changes newIndex every 3 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      const newIndex = (hoveredIndex + 1) % hoverContents.length;
      setHoveredIndex(newIndex);
      setHoveredElement(newIndex);
    }, 3000);

    return () => clearInterval(intervalId); // Clear the interval on component unmount
  }, [hoveredIndex, hoverContents.length]);

  return (
    <section className="w-full flex justify-between items-center ">
                <div className="flex">
                  <div className="flex flex-col items-center gap-8">
                    <div className="h-[250px] w-[4.672px] ">
                      <div
                        className="w-[4.672px] h-[57.872px] bg-[#1877F9]"
                        style={{
                          height: `${(hoveredIndex + 1) * 50}px`,
                          backgroundColor:
                            hoveredElement === hoveredIndex
                              ? "#1877F9"
                              : "#DFDFDF",
                        }}
                      ></div>
                    </div>

                    <p
                      style={{ writingMode: "vertical-lr" }}
                      className="rotate-180 text-[#9A9A9A] leading-[26px]"
                    >
                      <span className="text-[#1877F9] text-[18px] leading-[155.556%] font-[500]">
                        {hoveredIndex !== null
                          ? (hoveredIndex + 1).toString().padStart(2, "0")
                          : "01"}
                      </span>
                      /05
                    </p>
                  </div>
                  <div className="flex flex-col gap-[17px] -mt-3">
                    {hoverContents.map((content, index) => (
                      <div
                        key={index}
                        onMouseEnter={() => handleHover(index)}
                        onMouseLeave={handleLeave}
                        className={`cursor-pointer text-[20px] font-[700] ${
                          hoveredIndex === index
                            ? "bg-[#1877F9] hover-text-white"
                            : ""
                        }`}
                      >
                        <p
                          key={content.title + index}
                          className="p-[5px]"
                        >
                          {content.title}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="w-[736px] h-[450px] flex justify-end -mt-7">
                  <img
                    src={
                      hoveredIndex !== null
                        ? images[hoveredIndex]
                        : focusedLaptop
                    }
                    alt="focused-on-laptop"
                    style={{ width: "700px",height:"500px"   }}
                  />
                </div>
              </section>
  )
}
