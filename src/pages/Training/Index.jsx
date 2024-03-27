import { useEffect, useState } from "react";
import SoftwareDevelopment from "./SoftwareDevelopment/Index";
import UIUXDesign from "./UIUXDesign";
import DataAnalysis from "./DataAnalysis/Index";
import GraphicsDesign from "./GraphicsDesign/Index";
import DataScience from "./DataScience/Index";
import ProjectManagement from "./ProjectManagement/Index.jsx";
import HardwareRepair from "./HardwareRepair/Index";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import smileyFaces from "../../assets/training/smiling-faces.jpeg";
// import trainingPic from "../../assets/trainingComponentAssests/photo-of-woman-wearing-eyeglasses-3184405.png";

//infinite loop images
// import image1 from "../../assets/trainingPics/devOps.jpeg";
// import image2 from "../../assets/trainingPics/Mobile-dev.jpeg";
// import image3 from "../../assets/trainingPics/devOps.jpeg";
// import image4 from "../../assets/trainingPics/devOps.jpeg";
// import image5 from "../../assets/trainingPics/devOps.jpeg";

//past trainees image
import happyFace from "../../assets/trainingPics/training-carousel/smiling_faces.jpeg";
import focusedLady from "../../assets/trainingPics/training-carousel/a_focused_lady.jpeg";
import twoPeopleFocused from "../../assets/trainingPics/training-carousel/A_girl_and_a_boy_focused.jpeg";
import cutePeople from "../../assets/trainingPics/training-carousel/cute_faces.jpeg";
import TrainingTestimonial from "./TrainingTestimonial/Index";
import FAQ from "./FAQ/Index";
import SIWES from "./SIWES/Index";
import PageLayout from "../../components/layout/PageLayout.jsx";
import Hero from "./Hero.jsx";
import Statistics from "../Training/Statistics.jsx";
import Dedication from "../Training/Dedication.jsx";
import OurCourses from "./OurCourses.jsx";
export default function Training() {
  const location = useLocation();

  const isTrainingPath = location.pathname === "/training";

  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [hoveredElement, setHoveredElement] = useState("");

  const handleHover = (index) => {
    setHoveredIndex(index);
    setHoveredElement(index);
  };

  const handleLeave = () => {
    setHoveredIndex(null);
  };

  // const images = [image1, image2, image3, image4, image5];

  // const hoverContents = [
  //   { title: "Available Resources to help you later on" },
  //   { title: "Different Plan Options for you" },
  //   { title: "Large pool of vetted and proven instructors" },
  //   { title: "Online courses for you to watch anytime." },
  //   { title: "Comfortable Price" },
  // ];

  // Update hoveredElement with newIndex and changes newIndex every 3 seconds
  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     const newIndex = (hoveredIndex + 1) % hoverContents.length;
  //     setHoveredIndex(newIndex);
  //     setHoveredElement(newIndex);
  //   }, 3000);

  //   return () => clearInterval(intervalId); // Clear the interval on component unmount
  // }, [hoveredIndex, hoverContents.length]);

  return (
    <PageLayout>
      <Hero />
      <Statistics />
      <Dedication />
      <OurCourses />

      {/**Next Cohort**/}
      {/* <div
        style={{
          backgroundImage: `url(${smileyFaces})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "400px",
        }}
        loading="lazy"
        className="relative rounded-[30px]"
      >
        <div className="absolute inset-0 opacity-85 bg-[#1877F9BF]  text-white flex flex-col justify-center items-center gap-5 rounded-[30px]">
          <h4 className="capitalize text-[32px] font-[700] leading-[109.375%]">
            next cohort starts in
          </h4>
          <p className="text-[96px] font-[700] leading-[110%]">00:00:00:00</p>
          <Link
            to={"/contact-us/training"}
            className="flex justify-center items-center gap-2 text-[20px] font-[700] leading-[112%]"
          >
            Register now{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="41"
              viewBox="0 0 40 41"
              fill="none"
            >
              <path
                d="M39 20.4651C39 31.2372 30.4719 39.9302 20 39.9302C9.52814 39.9302 1 31.2372 1 20.4651C1 9.69303 9.52814 1 20 1C30.4719 1 39 9.69303 39 20.4651Z"
                stroke="white"
                strokeWidth="2"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M21.356 13.3249C21.4904 13.2071 21.6455 13.1183 21.8125 13.0635C21.9796 13.0087 22.1552 12.9891 22.3295 13.0057C22.5037 13.0224 22.6731 13.075 22.8281 13.1605C22.983 13.246 23.1203 13.3628 23.2323 13.5041L27.6706 19.104C27.7875 19.2445 27.8765 19.4082 27.9324 19.5854C27.9882 19.7626 28.0098 19.9497 27.9959 20.1358C27.9819 20.3219 27.9327 20.5032 27.8511 20.669C27.7696 20.8348 27.6573 20.9818 27.5209 21.1013C27.3845 21.2208 27.2267 21.3104 27.0569 21.3649C26.887 21.4193 26.7085 21.4375 26.5319 21.4184C26.3553 21.3993 26.1841 21.3432 26.0284 21.2535C25.8727 21.1638 25.7356 21.0422 25.6252 20.896L21.1856 15.2961C20.9596 15.0109 20.8507 14.643 20.8826 14.2734C20.9146 13.9038 21.0849 13.5626 21.356 13.3249Z"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M21.356 26.6751C21.0849 26.4374 20.9146 26.0962 20.8826 25.7266C20.8507 25.357 20.9596 24.9891 21.1856 24.7039L25.6252 19.104C25.7356 18.9578 25.8727 18.8362 26.0284 18.7465C26.1841 18.6568 26.3553 18.6007 26.5319 18.5816C26.7085 18.5625 26.887 18.5807 27.0569 18.6351C27.2267 18.6896 27.3845 18.7792 27.5209 18.8987C27.6573 19.0182 27.7696 19.1652 27.8511 19.331C27.9327 19.4968 27.9819 19.6781 27.9959 19.8642C28.0098 20.0503 27.9882 20.2374 27.9324 20.4146C27.8765 20.5918 27.7875 20.7555 27.6706 20.896L23.2323 26.4959C23.1203 26.6372 22.983 26.754 22.8281 26.8395C22.6731 26.925 22.5037 26.9776 22.3295 26.9943C22.1552 27.0109 21.9796 26.9913 21.8125 26.9365C21.6455 26.8817 21.4904 26.7929 21.356 26.6751Z"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M25.3163 20C25.3163 20.3713 25.176 20.7274 24.9263 20.9899C24.6765 21.2525 24.3378 21.4 23.9847 21.4H13.3316C12.9785 21.4 12.6398 21.2525 12.39 20.9899C12.1403 20.7274 12 20.3713 12 20C12 19.6287 12.1403 19.2726 12.39 19.0101C12.6398 18.7475 12.9785 18.6 13.3316 18.6H23.9847C24.3378 18.6 24.6765 18.7475 24.9263 19.0101C25.176 19.2726 25.3163 19.6287 25.3163 20Z"
                fill="white"
              />
            </svg>
          </Link>
        </div>
      </div> */}

      {/**Why learn from us**/}
      {/* <div className="mt-[119.07px] relative flex justify-between items-start">
        <div className="">
          <div>
            <h4 className="flex items-center  text-[#1877F9] text-[18px] font-[500] tracking-[3px]  leading-[111.111%] mb-[33px] ">
              why learn from us
              <div className="ml-6 h-[2px] w-[74.75px] bg-[#222831]"></div>
            </h4>
            <p className="text-[#082B5B] text-[40px] font-[700] leading-[123.077%]tracking-[-2px]">
              All programs are designed to meet <br /> all your needs
            </p>
            <div className="flex ml-[300px] -mt-[25px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="80"
                height="80"
                viewBox="0 0 80 80"
                fill="none"
              >
                <path
                  d="M41.8297 7.53327C40.9596 6.95681 39.9364 6.65496 38.8928 6.66684C37.8491 6.67873 36.8331 7.0038 35.9764 7.59994L9.7597 25.8666C8.3597 26.8399 7.52637 28.4333 7.52637 30.1399V49.8166C7.52637 51.5666 8.40637 53.1966 9.86637 54.1599L36.513 71.7766C37.3649 72.3398 38.3635 72.6401 39.3847 72.6401C40.4059 72.6401 41.4045 72.3398 42.2564 71.7766L69.433 53.8233C70.893 52.8566 71.7697 51.2233 71.7697 49.4766V30.1433C71.7697 28.3966 70.893 26.7666 69.4364 25.7999L41.8297 7.53327ZM62.1297 28.8433L52.083 35.5866L42.663 28.7366L42.603 15.2633L62.1264 28.8433H62.1297ZM35.7897 15.2766V28.4666L26.133 35.2133L16.5097 28.7566L35.7897 15.2766ZM13.8664 35.2533L20.0997 39.4299L13.8664 43.7899V35.2566V35.2533ZM35.9497 63.3633L16.513 50.3333L26.223 43.5433L35.9564 50.0699V63.3699L35.9497 63.3633ZM32.2664 39.3199L38.5597 34.9199L45.893 39.7366L39.393 44.1033L32.2664 39.3199ZM42.823 63.3633V50.0633L52.123 43.8299L62.133 50.4133L42.823 63.3633ZM64.9064 44.0133L58.3064 39.6799L64.9064 35.2499V44.0166V44.0133Z"
                  fill="#CBD5E1"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                className="mt-14"
              >
                <path
                  d="M16.5057 23.3142L6.60569 13.4142C6.41467 13.2297 6.26231 13.009 6.15749 12.765C6.05267 12.521 5.9975 12.2585 5.99519 11.993C5.99289 11.7274 6.04349 11.464 6.14405 11.2183C6.24461 10.9725 6.39312 10.7492 6.5809 10.5614C6.76869 10.3736 6.99199 10.2251 7.23779 10.1245C7.48358 10.024 7.74694 9.97335 8.0125 9.97566C8.27805 9.97797 8.54049 10.0331 8.7845 10.138C9.02851 10.2428 9.2492 10.3951 9.43369 10.5862L20.7477 21.9002C21.1226 22.2752 21.3333 22.7838 21.3333 23.3142C21.3333 23.8445 21.1226 24.3531 20.7477 24.7282L9.43369 36.0422C9.2492 36.2332 9.02851 36.3855 8.7845 36.4904C8.54049 36.5952 8.27805 36.6504 8.0125 36.6527C7.74694 36.655 7.48358 36.6044 7.23779 36.5038C6.99199 36.4032 6.76869 36.2547 6.5809 36.067C6.39312 35.8792 6.24461 35.6559 6.14405 35.4101C6.04349 35.1643 5.99289 34.9009 5.99519 34.6354C5.9975 34.3698 6.05267 34.1074 6.15749 33.8634C6.26231 33.6193 6.41467 33.3987 6.60569 33.2142L16.5057 23.3142ZM24.0197 32.0002H40.0197C40.5501 32.0002 41.0588 32.2109 41.4339 32.586C41.809 32.961 42.0197 33.4697 42.0197 34.0002C42.0197 34.5306 41.809 35.0393 41.4339 35.4144C41.0588 35.7895 40.5501 36.0002 40.0197 36.0002H24.0197C23.4893 36.0002 22.9806 35.7895 22.6055 35.4144C22.2304 35.0393 22.0197 34.5306 22.0197 34.0002C22.0197 33.4697 22.2304 32.961 22.6055 32.586C22.9806 32.2109 23.4893 32.0002 24.0197 32.0002Z"
                  fill="#CBD5E1"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
                viewBox="0 0 64 64"
                fill="none"
                className="-ml-14 -mt-6 "
              >
                <path
                  d="M40 41.3334C39.2928 41.3334 38.6145 41.0525 38.1144 40.5524C37.6143 40.0523 37.3334 39.374 37.3334 38.6667C37.3334 37.9595 37.6143 37.2812 38.1144 36.7811C38.6145 36.281 39.2928 36.0001 40 36.0001C42.4079 35.999 44.7706 35.3458 46.8372 34.1099C48.9038 32.8741 50.5971 31.1017 51.7374 28.9809C52.8777 26.86 53.4223 24.47 53.3136 22.0646C53.2048 19.6591 52.4467 17.328 51.1197 15.3187C49.7927 13.3095 47.9464 11.6971 45.7767 10.6527C43.607 9.60839 41.1951 9.17109 38.7969 9.38726C36.3987 9.60343 34.1038 10.465 32.1559 11.8805C30.2079 13.296 28.6797 15.2126 27.7334 17.4267L25.8134 21.9228L21.168 20.3974C20.0688 20.0374 18.9045 19.9201 17.7555 20.0535C16.6065 20.1869 15.5001 20.5679 14.5126 21.1702C13.525 21.7725 12.6799 22.5818 12.0353 23.5423C11.3907 24.5028 10.9621 25.5916 10.779 26.7337C10.5959 27.8759 10.6627 29.0441 10.9747 30.158C11.2867 31.2718 11.8366 32.3048 12.5863 33.1856C13.3361 34.0664 14.2679 34.7741 15.3177 35.26C16.3674 35.7459 17.51 35.9984 18.6667 36.0001H24C24.7073 36.0001 25.3855 36.281 25.8856 36.7811C26.3857 37.2812 26.6667 37.9595 26.6667 38.6667C26.6667 39.374 26.3857 40.0523 25.8856 40.5524C25.3855 41.0525 24.7073 41.3334 24 41.3334H18.6667C16.7381 41.3323 14.8327 40.9129 13.0819 40.104C11.3312 39.2951 9.7767 38.116 8.52581 36.6481C7.27491 35.1802 6.35735 33.4584 5.83642 31.6015C5.31549 29.7446 5.2036 27.7968 5.50846 25.8924C5.81332 23.9881 6.52767 22.1725 7.60224 20.571C8.67682 18.9696 10.086 17.6202 11.7326 16.6162C13.3793 15.6121 15.2241 14.9772 17.1399 14.7553C19.0557 14.5334 20.9968 14.7297 22.8294 15.3307C24.5215 11.3778 27.5262 8.12997 31.3359 6.13594C35.1455 4.14191 39.5267 3.52386 43.7393 4.38619C47.9519 5.24852 51.7377 7.53838 54.4574 10.869C57.1771 14.1996 58.6639 18.3668 58.6667 22.6667C58.6667 27.6175 56.7 32.3654 53.1994 35.8661C49.6987 39.3668 44.9507 41.3334 40 41.3334ZM33.8934 33.5041C35.2774 34.0321 35.992 35.6401 35.488 37.0934L31.84 47.6268C31.3334 49.0801 29.8054 49.8294 28.4214 49.2987C27.0374 48.7707 26.3254 47.1628 26.8294 45.7094L30.4774 35.1761C30.9787 33.7227 32.5094 32.9734 33.8934 33.5041ZM38.2454 44.0347C39.6294 44.5627 40.3414 46.1707 39.8374 47.6241L36.1894 58.1574C35.688 59.6107 34.1574 60.3601 32.7734 59.8294C31.3894 59.3014 30.6747 57.6934 31.1787 56.2401L34.8267 45.7067C35.3334 44.2534 36.8614 43.5041 38.2454 44.0347ZM29.3334 43.8641H37.3334C38.8054 43.8641 40 45.1174 40 46.6667C40 48.2134 38.8054 49.4667 37.3334 49.4667H29.3334C27.8614 49.4667 26.6667 48.2134 26.6667 46.6667C26.6667 45.1201 27.8614 43.8667 29.3334 43.8667V43.8641Z"
                  fill="#CBD5E1"
                />
              </svg>
            </div>
          </div>

       
          <div className="w-full absolute flex justify-between items-center -mt-[130px] top-72">
            <div className="flex">
              <div className="flex flex-col items-center gap-8">
                <div className="h-[250px] w-[4.672px] bg-[#DFDFDF]">
                  <div
                    className="w-[4.672px] h-[57.872px] bg-[#1877F9]"
                    style={{
                      height: `${(hoveredIndex + 1) * 50}px`,
                      backgroundColor:
                        hoveredElement === hoveredIndex ? "#1877F9" : "#DFDFDF",
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
                    <p key={content.title + index} className="p-[5px]">
                      {content.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-[736px] h-[450px] flex justify-end -mt-7">
              <img
                src={
                  hoveredIndex !== null ? images[hoveredIndex] : focusedLaptop
                }
                alt="focused-on-laptop"
                style={{ width: "450px", height: "350px" }}
              />
            </div>
          </div>
        </div>

        <div>
          <img src={trainingIcons} />
        </div>
      </div> */}

      {/*carousel past trainees gallery */}
      {/* <div className="mt-8 relative">
        <div className="flex justify-between items-baseline overflow-hidden gap-5">
          <div
            className=""
            style={{
              backgroundImage: `url(${twoPeopleFocused})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              height: "350px",
              width: "350px",
            }}
            loading="lazy"
          ></div>
          <div
            style={{
              backgroundImage: `url(${focusedLady})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              height: "606px",
              width: "445px",
            }}
            loading="lazy"
          ></div>
          <div
            style={{
              backgroundImage: `url(${cutePeople})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              height: "350px",
              width: "350px",
            }}
            loading="lazy"
          ></div>
          <div
            className=" "
            style={{
              backgroundImage: `url(${happyFace})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              height: "350px",
              width: "350px",
            }}
            loading="lazy"
          ></div>
        </div>
        <div className="absolute top-0 right-0">
          <p className="flex items-center gap-3 text-[20px] text-[#1877F9] font-[500] leading-[150%]">
            Kinplus gallery
            <div className="mt-1 w-[73px] h-[2px] bg-[#222831] "></div>
          </p>
          <p className="text-[#082B5B] text-[40px] font-[700] w-[496px]">
            Check out our past trainees
          </p>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="168"
              height="27"
              viewBox="0 0 168 27"
              fill="none"
            >
              <path
                d="M167.552 14.6792L158.348 25.8696C158.052 26.2277 157.682 26.4067 157.313 26.4067C156.943 26.4067 156.573 26.2277 156.278 25.8696C155.686 25.1534 155.686 24.0344 156.278 23.3182L162.968 15.1716H141.381C140.568 15.1716 139.902 14.3659 139.902 13.3811C139.902 12.3963 140.568 11.5906 141.381 11.5906H162.968L156.278 3.44403C155.686 2.72784 155.686 1.60879 156.278 0.892608C156.869 0.176422 157.793 0.176422 158.384 0.892608L167.589 12.083C168.143 12.844 168.143 14.0078 167.552 14.6792Z"
                fill="#1877F9"
              />
              <rect
                x="76.3145"
                y="11.1875"
                width="88.7142"
                height="4.47534"
                rx="2.23767"
                fill="#1877F9"
              />
              <path
                d="M0.762821 14.6792L9.96692 25.8696C10.2626 26.2277 10.6323 26.4067 11.0019 26.4067C11.3716 26.4067 11.7412 26.2277 12.0369 25.8696C12.6284 25.1534 12.6284 24.0344 12.0369 23.3182L5.34638 15.1716H26.9335C27.7468 15.1716 28.4121 14.3659 28.4121 13.3811C28.4121 12.3963 27.7468 11.5906 26.9335 11.5906H5.34638L12.0369 3.44403C12.6284 2.72784 12.6284 1.60879 12.0369 0.892608C11.4455 0.176422 10.5214 0.176422 9.92996 0.892608L0.725843 12.083C0.171379 12.844 0.171392 14.0078 0.762821 14.6792Z"
                fill="#9A9A9A"
              />
              <rect
                width="50"
                height="4.00171"
                rx="2.00085"
                transform="matrix(-1 0 0 1 53 11.4004)"
                fill="#9A9A9A"
              />
            </svg>
          </div>
        </div>
      </div> */}

      {/*Testimonial */}
      {/* <TrainingTestimonial /> */}

      {/*FAQ */}
      {/* <FAQ /> */}
      {/* </> */}
      {/* )} */}

      {/* Routes for SIWEs, training, software development, UI/UX design, data analysis, graphics design, data science, project management, hardware repair */}
      {/* <Routes>
        <Route path="/siwes" element={<SIWES />}></Route>
        <Route
          path="/software-development"
          element={<SoftwareDevelopment />}
        ></Route>
        <Route path="/uiux-design" element={<UIUXDesign />}></Route>
        <Route path="/data-analysis" element={<DataAnalysis />} />
        <Route path="/graphics-design" element={<GraphicsDesign />} />
        <Route path="/data-science" element={<DataScience />} />
        <Route path="/project-management" element={<ProjectManagement />} />
        <Route path="/hardware-repair" element={<HardwareRepair />} />
      </Routes> */}
    </PageLayout>
  );
}
