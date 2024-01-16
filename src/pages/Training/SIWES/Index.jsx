import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";

import trainingPic from "../../../assets/trainingComponentAssests/photo-of-woman-wearing-eyeglasses-3184405.png";

//infinite loop images
import focusedLaptop from "../../../assets/trainingPics/focused-on-laptop.jpeg";

import image1 from "../../../assets/trainingPics/devOps.jpeg";
import image2 from "../../../assets/trainingPics/mobile-dev.jpeg";
import image3 from "../../../assets/trainingPics/devOps.jpeg";
import image4 from "../../../assets/trainingPics/devOps.jpeg";
import image5 from "../../../assets/trainingPics/devOps.jpeg";

export default function SIWES() {
  //UseStates
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [hoveredElement, setHoveredElement] = useState("");
  const [hasHealthChallenge, setHasHealthChallenge] = useState(false);
  const [durationOthers, setDurationOthers] = useState(false);

  //Form
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    mode: "all",
  });

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const onSubmit = async (data) => {
    await sleep(1000);
    try {
      // Log the form data
      console.log(data);

      // Send a POST request to your API endpoint
      // const response = await fetch("https://kinplusgroup.com/api/v2/services", {
      //   method: "POST",

      //   body: JSON.stringify(data),
      // });

      // Check if the request was successful (status code 200)
      // if (response.ok) {
      //   toast.success("Form submitted successfully", {
      //     position: toast.POSITION.TOP_CENTER,
      //     style: {
      //       background: "#082B5B",
      //       color: "#fff",
      //       fontSize: "16px",
      //       padding: "15px 10px",
      //     },
      //   });
      toast.success("Form submitted successfully", {
        position: toast.POSITION.TOP_CENTER,
        style: {
          background: "#082B5B",
          color: "#fff",
          fontSize: "16px",
          padding: "15px 10px",
        },
      }),
        // Reset form values
        setValue("fullName", "");
      setValue("email", "");
      setValue("DOB", "");
      setValue("phoneNumber", "");
      setValue("religion", "");
      setValue("gender", "");
      setValue("address", "");
      setValue("institutionName", "");
      setValue("courseOfStudy", "");
      //setValue("duration", "")

      // Navigate to contact-us page
      // navigate("/contact-us");
      // }
      // else {
      //   // Handle errors if the request was not successful
      //   toast.error("Something went wrong!", {
      //     position: toast.POSITION.TOP_CENTER,
      //     style: {
      //       width: "230px",
      //       background: "#ffffff",
      //       color: "#ff0000",
      //       fontSize: "20px",
      //       padding: "15px 10px",
      //     },
      //   });
      // }
    } catch (error) {
      // Handle unexpected errors
      console.error("An error occurred:", error);
      toast.error("Something went wrong!", {
        position: toast.POSITION.TOP_CENTER,
        style: {
          background: "#ffffff",
          color: "#ff0000",
          fontSize: "20px",
          padding: "15px 10px",
        },
      });
    }
  };

  //Infinite loop
  const handleHover = (index) => {
    setHoveredIndex(index);
    setHoveredElement(index);
  };

  const handleLeave = () => {
    setHoveredIndex(null);
  };
  const images = [image1, image2, image3, image4, image5];

  const hoverContents = [
    { title: "Available Resources to help you later on" },
    { title: "Different Plan Options for you" },
    { title: "Large pool of vetted and proven instructors" },
    { title: "Online courses for you to watch anytime." },
    { title: "Comfortable Price" },
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
    <section className="mx-auto lg:p-0">
      {/**IT/SIWES**/}
      <div className="flex justify-between flex-col lg:flex-row ">
        <div className=" relative w-full lg:w-[45%]">
          <h4 className="flex items-center text-[#1877F9] text-[1.125rem] font-[500] tracking-[3px] uppercase leading-[111.111%] mb-[33px] ">
            IT/SIWES
            <div className="ml-6 h-[0.125em] w-[4.672em] bg-[#222831]"></div>
          </h4>
          <p className="absolute lg:relative text-[#082B5B] top-[15%] lg:top-0 mt-[20px] text-[2.5rem] lg:text-[3.375rem] font-[700] leading-[123.077%]tracking-[-2px]">
            Join our IT/SIWES program at Kinplus
          </p>

          {/*SVG*/}
          <div className="flex ml-[300px] lg:ml-[480px] mt-[-20px] lg:mt-[-75px]">
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

        {/*Text*/}
        <div className="w-full lg:w-[45%] flex flex-col  gap-8 lg:gap-14 mt-[40px] lg:mt-0">
          <p className="text-[#101010] text-[18px] leading-[138.889%] font-[400]">
            Our team works hard, manages their own schedules, and takes time off
            when they need it. We support hybrid work and flexible time off
            based on each person’s schedule, needs, and preferences.
          </p>
          <Link
            to="/contact-us/training"
            className="bg-[#1877F9] hover:bg-[#1153AE] transition duration-200 ease-in-out text-white text-center font-bold py-2 px-4 rounded-[0.5em] mb-8 w-[8em]"
          >
            Join Us
          </Link>
        </div>
      </div>

      {/*trainingPic*/}
      <div className="mb-[78px]">
        <img
          src={trainingPic}
          alt="photo-of-people-focused-on-their-laptops"
        />
      </div>

      {/*Infinite Loop*/}
      <div className="w-full flex justify-between items-center  top-72">
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
                  hoveredIndex === index ? "bg-[#1877F9] hover-text-white" : ""
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
            src={hoveredIndex !== null ? images[hoveredIndex] : focusedLaptop}
            alt="focused-on-laptop"
            style={{ width: "450px", height: "350px" }}
          />
        </div>
      </div>

      <hr className="mx-auto h-[2px] w-[90%] bg-[#20202034]" />

      {/*SIWES Form*/}
      <div className="w-full 0 rounded-[0.9375rem]  text-[#101010] text-opacity-60 mx-auto md:ml-0  pl-1">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col justify-center items-center mx-auto mt-36 w-[90%]"
        >
          <div className="flex flex-col gap-14 w-[90%] mt-10">
            {/*Full Name field*/}
            <div className="relative flex flex-col gap-2">
              <div className="flex border-b border-slate-700">
                <label
                  htmlFor="fullName"
                  className="flex z-50 font-[700] leading-[125%] text-[1.2rem]"
                >
                  Full Name <span className="text-[#FF5252] ">*</span>
                </label>
                <input
                  className="absolute bg-inherit outline-none w-full pl-[7em] capitalized text-[#101010] tracking-wider"
                  type="text"
                  id="fullName"
                  {...register("fullName", {
                    required: "Full name is required",
                    minLength: {
                      value: 3,
                      message: "Full name should have at least 3 characters",
                    },
                    maxLength: {
                      value: 100,
                      message: "Full name should not exceed 50 characters",
                    },
                  })}
                />
              </div>
              <small>Surname First</small>
              {errors.fullName && (
                <p className="text-red-500 pt-[2px] text-sm font-300 italic">
                  {errors.fullName.message}
                </p>
              )}
            </div>

            {/*Email field*/}
            <div className="flex flex-col ">
              <div className="relative flex border-b border-slate-700">
                <label
                  htmlFor="email"
                  className="flex z-50 font-[700] leading-[125%] text-[1.2rem]"
                >
                  Email <span className="text-[#FF5252] ">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                  className="absolute w-full bg-inherit outline-none pl-[5em] text-[#101010] tracking-wider"
                />
              </div>
              {errors.email && (
                <p className="text-red-500 py-[2px] text-sm font-300 italic">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/*Date of birth and phone number*/}
            <div className="w-full flex flex-col lg:gap-14 gap-0 lg:flex-row lg:justify-between">
              {/*Date of birth field*/}
              <div className=" flex flex-col gap-2 w-full md:w-[70%] lg:w-[40%]">
                <div className="relative flex flex-col gap-[8px] border-b border-slate-700">
                  <label
                    htmlFor="DOB"
                    className="  flex z-50 font-[700] leading-[125%] text-[1.2rem]"
                  >
                    Date of Birth <span className="text-[#FF5252] ">*</span>
                  </label>
                  <input
                    type="date"
                    id="dob"
                    placeholder="mm/dd/yyyy"
                    className="pl-[7em] z-[999] absolute  w-full bg-inherit outline-none text-center  text-[#101010] tracking-wider "
                    {...register("DOB", {
                      required: "Please choose a date",
                    })}
                  />
                </div>
                {errors.DOB && (
                  <p className="text-red-500 pt-[2px] text-sm font-300 italic">
                    {errors.DOB.message}
                  </p>
                )}
              </div>

              {/*Phone Number field*/}
              <div className="flex flex-col gap-2 w-full md:w-[70%] lg:w-[40%]">
                <div className="relative flex flex-col gap-[8px] border-b border-slate-700">
                  <label
                    htmlFor="phoneNumber"
                    className="flex z-50 font-[700] leading-[125%] text-[1.2rem]"
                  >
                    Phone Number<span className="text-[#FF5252] ">*</span>
                  </label>
                  <input
                    type="text"
                    id="phoneNumber"
                    {...register("phoneNumber", {
                      required: "Phone number is required",
                      minLength: {
                        value: 5,
                        message: "Phone number should have at least 5 digits",
                      },
                    })}
                    className="absolute pl-[10em] w-full bg-inherit outline-none text-[#101010] tracking-wider"
                  />
                </div>
                {errors.phoneNumber && (
                  <p className="text-red-500 pt-[2px] text-sm font-300 italic">
                    {errors.phoneNumber.message}
                  </p>
                )}
              </div>
            </div>

            {/*Religion and Gender*/}
            <div className="w-full flex flex-col gap-14 md:gap-0 md:flex-row md:justify-between ">
              {/*Religion field*/}
              <div className="flex flex-col gap-2 w-full md:w-[40%]">
                <div className="relative flex flex-col border-b border-slate-700 gap-[8px]">
                  <label
                    htmlFor="religion"
                    className=" flex z-50 font-[700] leading-[125%] text-[1.2rem]"
                  >
                    Religion <span className="text-[#FF5252] ">*</span>
                  </label>
                  <select
                    className="absolute z-[999] w-full bg-inherit outline-none pl-[6em] text-[#101010] tracking-wider text-center"
                    {...register("religion", {
                      required: "Religion is required",
                    })}
                  >
                    <option
                      value="female"
                      className="bg-inherit"
                    >
                      Christian
                    </option>
                    <option
                      value="male"
                      className="bg-inherit"
                    >
                      Muslim
                    </option>
                    <option
                      value="other"
                      className="bg-inherit"
                    >
                      Other
                    </option>
                  </select>
                </div>
                {errors.religion && (
                  <p className="text-red-500 pt-[2px] text-sm font-300 italic">
                    {errors.religion.message}
                  </p>
                )}
              </div>

              {/*Gender*/}
              <div className="flex flex-col gap-2 w-full md:w-[40%]">
                <div className="relative flex flex-col gap-[8px] border-b border-slate-700">
                  <label
                    htmlFor="gender"
                    className="flex z-50 font-[700] leading-[125%] text-[1.2rem]"
                  >
                    Gender <span className="text-[#FF5252] ">*</span>
                  </label>
                  <select
                    defaultValue={"Select your gender"}
                    className="absolute z-[999] w-full bg-inherit outline-none pl-[6em] text-center text-[#101010] tracking-wider"
                    {...register("gender", {
                      required: "Gender is required",
                    })}
                  >
                    <option></option>
                    <option
                      value="female"
                      className="bg-inherit"
                    >
                      Female
                    </option>
                    <option
                      value="male"
                      className="bg-inherit"
                    >
                      Male
                    </option>
                    <option
                      value="other"
                      className="bg-inherit"
                    >
                      Other
                    </option>
                  </select>
                </div>
                {errors.gender && (
                  <p className="text-red-500 pt-[2px] text-sm font-300 italic">
                    {errors.gender.message}
                  </p>
                )}
              </div>
            </div>

            {/*Address field*/}
            <div className="flex flex-col gap-2">
              <div className="relative flex border-b border-slate-700">
                <label
                  htmlFor="address"
                  className="flex z-50 font-[700] leading-[125%] text-[1.2rem]"
                >
                  Address <span className="text-[#FF5252] ">*</span>
                </label>
                <input
                  className="absolute bg-inherit outline-none w-full pl-[6em] text-[#101010] tracking-wider"
                  type="text"
                  id="address"
                  {...register("address", {
                    required: "Address is required",
                    minLength: {
                      value: 3,
                      message: "Address should have at least 3 characters",
                    },
                  })}
                />
              </div>
              {errors.address && (
                <p className="text-red-500 pt-[2px] text-sm font-300 italic">
                  {errors.address.message}
                </p>
              )}
            </div>

            {/*Institution Name field*/}
            <div className="flex flex-col gap-2">
              <div className="relative flex  border-b border-slate-700">
                <label
                  htmlFor="institutionName"
                  className="flex z-50 font-[700] leading-[125%] text-[1.2rem]"
                >
                  Name of Institution <span className="text-[#FF5252] ">*</span>
                </label>
                <input
                  className="absolute bg-inherit outline-none w-full pl-[13em]   text-[#101010] tracking-wider"
                  type="text"
                  id="institutionName"
                  {...register("institutionName", {
                    required: "Full name is required",
                    minLength: {
                      value: 3,
                      message: "This should have at least 3 characters",
                    },
                  })}
                />
              </div>
              {errors.institutionName && (
                <p className="text-red-500 pt-[2px] text-sm font-300 italic">
                  {errors.institutionName.message}
                </p>
              )}
            </div>

            {/*Course of Study field*/}
            <div className="flex flex-col gap-2">
              <div className="relative flex border-b border-slate-700">
                <label
                  htmlFor="courseOfStudy"
                  className="flex z-50 font-[700] leading-[125%] text-[1.2rem]"
                >
                  Course Of Study<span className="text-[#FF5252] ">*</span>
                </label>
                <input
                  className="absolute bg-inherit outline-none w-full pl-[11em] text-[#101010] tracking-wider"
                  type="text"
                  id="courseOfStudy"
                  {...register("courseOfStudy", {
                    required: "Course Of Study is required",
                    minLength: {
                      value: 3,
                      message: "This should have at least 3 characters",
                    },
                  })}
                />
              </div>
              {errors.courseOfStudy && (
                <p className="text-red-500 pt-[2px] text-sm font-300 italic">
                  {errors.courseOfStudy.message}
                </p>
              )}
            </div>

            {/*Duration, start Date and End Date*/}
            <div className="w-full flex flex-col gap-14 lg:gap-0 lg:flex-row lg:justify-between lg:space-x-8">
              {/*Duration*/}
              <div className="md:w-[40%] w-full flex flex-col gap-2">
                <div className="relative flex border-b border-slate-700">
                  <label
                    htmlFor="duration"
                    className="flex z-50 font-[700] leading-[125%] text-[1.2rem]"
                  >
                    Duration<span className="text-[#FF5252] ">*</span>
                  </label>
                  <select
                    className="absolute bg-inherit outline-none w-full pl-[7em]  text-[#101010] tracking-wider"
                    type="text"
                    id="duration"
                    {...register("duration", {
                      required: "Please specify duration",
                    })}
                    onChange={(e) => {
                      setDurationOthers(e.target.value === "others");
                    }}
                  >
                    <option
                      value={"1 month"}
                      className=" mx-auto"
                    >
                      1 month
                    </option>
                    <option
                      value={"3 months"}
                      className="mx-auto"
                    >
                      3 months
                    </option>
                    <option value={"6 months"}>6 months</option>
                    <option value={"12 months"}>12 months</option>
                    <option value={"others"}>Others</option>
                  </select>
                </div>
                {durationOthers && (
                  <input
                    type="text"
                    placeholder="Specify duration"
                    {...register("duration", {
                      required: "Please specify duration",
                    })}
                    className="border border-slate-400 p-1 text-center pl-[3em] w-full bg-inherit outline-none text-[#000000] tracking-wider"
                  />
                )}
                {errors.duration && (
                  <p className="text-red-500 pt-[2px] text-sm font-300 italic">
                    {errors.duration?.message}
                  </p>
                )}
              </div>

              {/*Start Date*/}
              <div className="md:w-[70%] w-full flex flex-col gap-2">
                <div className="relative flex border-b border-slate-700">
                  <label
                    htmlFor="startDate"
                    className="flex z-50 font-[700] leading-[125%] text-[1.2rem]"
                  >
                    Start date <span className="text-[#FF5252] ">*</span>
                  </label>
                  <input
                    className="absolute bg-inherit outline-none w-full pl-[7em] text-[#101010] tracking-wider]"
                    type="date"
                    id="startDate"
                    {...register("startDate", {
                      required: "Please choose a date",
                    })}
                  />
                </div>
                {errors.startDate && (
                  <p className="text-red-500 pt-[2px] text-sm font-300 italic">
                    {errors.startDate.message}
                  </p>
                )}
              </div>

              {/*End Date*/}
              <div className="md:w-[70%] w-full flex flex-col gap-2">
                <div className="relative flex border-b border-slate-700">
                  <label
                    htmlFor="endDate"
                    className="flex z-50 font-[700] leading-[125%] text-[1.2rem]"
                  >
                    End Date<span className="text-[#FF5252] ">*</span>
                  </label>
                  <input
                    className="absolute bg-inherit outline-none w-full pl-[7em] text-[#101010] tracking-wider"
                    type="date"
                    id="endDate"
                    {...register("endDate", {
                      required: "Please choose a date",
                    })}
                  />
                </div>
                {errors.endDate && (
                  <p className="text-red-500 pt-[2px] text-sm font-300 italic">
                    {errors.endDate.message}
                  </p>
                )}
              </div>
            </div>

            {/*Health Challenge(s) and it's textArea*/}
            <div className="w-full flex flex-col gap-14 md:gap-0 md:flex-row md:justify-between space-x-8">
              {/*Health Challenge*/}
              <div className="flex flex-row  md:w-full">
                <div className="flex flex-col gap-2">
                  <div className="relative flex border-b border-slate-700 ">
                    <label
                      htmlFor="healthChallenge"
                      className="flex z-50 font-[700] leading-[125%] text-[1.2rem]"
                    >
                      Health Challenge<span className="text-[#FF5252] ">*</span>
                    </label>
                  </div>
                  {errors.healthChallenge && (
                    <p className="text-red-500 pt-[2px] text-sm font-300 italic">
                      {errors.healthChallenge.message}
                    </p>
                  )}
                </div>

                {/*Yes / No */}
                <div className="ml-10 w-[50%] md:w-[40%] flex space-x-14 text-[1.2rem]  text-[#101010] tracking-wider -mt-0.5">
                  {/*Yes*/}
                  <div className="ml-4 cursor-pointer">
                    <label
                      htmlFor="healthChallengeYes"
                      className="mr-4"
                    >
                      Yes
                    </label>
                    <input
                      className="cursor-pointer"
                      type="radio"
                      id="healthChallengeYes"
                      {...register("healthChallenge", {
                        required: "Please indicate",
                      })}
                      value="Yes"
                      onChange={() => setHasHealthChallenge(true)}
                    />
                  </div>

                  {/*No*/}
                  <div className="ml-4 cursor-pointer">
                    <label
                      htmlFor="healthChallengeNo"
                      className="mr-4"
                    >
                      No
                    </label>

                    <input
                      className="cursor-pointer"
                      type="radio"
                      id="healthChallengeNo"
                      {...register("healthChallenge", {
                        required: "Please indicate",
                      })}
                      value="No"
                      onChange={() => setHasHealthChallenge(false)}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/*If health challenge*/}
            {hasHealthChallenge && (
              <div className=" flex flex-col gap-2">
                <div className="relative flex  ">
                  <label
                    htmlFor="typeOfHeathChallenge"
                    className="flex z-50 font-[700] leading-[125%] text-[1.2rem] w-[80%] lg:w-[35%] border-b border-slate-700"
                  >
                    Health Challenge Description
                    <span className="text-[#FF5252] ">*</span>
                  </label>
                </div>
                {errors.typeOfHeathChallenge && (
                  <p className="text-red-500 pt-[2px] text-sm font-300 italic">
                    {errors.typeOfHeathChallenge.message}
                  </p>
                )}
                <textarea
                  name="typeOfHeathChallenge"
                  id="typeOfHeathChallenge"
                  placeholder="Please type in your Health Challenge(s) here"
                  {...register("typeOfHeathChallenge", {
                    required: "Please type in your Health Challenge(s)",
                    message: "",
                  })}
                  className="placeholder:text-xs md:placeholder:text-base w-full bg-inherit outline-none  border-none  text-[#101010] resize-none"
                />
              </div>
            )}

            {/*Submit Button*/}
            <div className="text-center mt-[10px] py-9 ">
              <button
                type="submit"
                className="text-white text-[1.3rem] bg-blue-600 font-bold py-2 px-4 rounded-md transition duration-200 ease-in-out focus:outline-none hover:bg-white hover:text-blue-500"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
