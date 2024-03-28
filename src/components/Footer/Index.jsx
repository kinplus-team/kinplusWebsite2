
import { Link, NavLink, useLocation } from "react-router-dom";
import footerBg2 from "../../assets/footer/footer-bg-2.png";
import kinplusLogoBlue from "../../assets/kinplusBlue.png";
import { useState } from "react";
import { MdArrowDropDown } from "react-icons/md";
import Dropdown from "../navbar/Dropdown/Index";

export default function Footer() {
  //dynamically get the year
  const thisYear = new Date().getFullYear();

  const location = useLocation();

  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  const dropDownItems = [
    {
      title: "IT / SIWES",
      to: "/training/siwes",
    },
    // {
    //   title: "Workshop",
    //   to: "/training/workshop",
    // },
    // {
    //   title: "Academy",
    //   to: "/training/academy",
    // },
  ];

  //Check if Route is Homepage
  const isHomepage = location.pathname === "/";

  const openDropDown = () => {
    setIsDropDownOpen(!isDropDownOpen);
  };

   const closeDropDown = () => {
     setIsDropDownOpen(false);
   };

  return (
    <section className="mx-auto p-0 overflow-hidden">
      {/*First component*/}
      <div className="bg-[#1C1D20] mt-[98px]">
        <div className="z-[999] text-[#ffffff] flex flex-col gap-[20px] lg:gap-[59px] justify-center pl-[2em] lg:pl-[12.25em] pr-[1em] md:pr-[4em] lg:pr-24 py-24">
          <div className="flex flex-col md:flex-row gap-[2em] lg:gap-[100px] w-full mb-[1.1em]">
            <p className="p-1 text-[2.5rem] md:text-[2.8rem] lg:text-[3rem] xl:text-[4rem] font-[700] leading-[114.286%] md:w-[70%]">
              Ready to <span className="text-[#1877F9]">work</span> on your next
              project?
            </p>

            <Link
              className="self-center md:self-end bg-[#ffffff] hover:bg-[#1153AE] transition duration-200 ease-in-out text-[#1877F9] hover:text-[#ffffff] font-bold py-4 px-4 rounded-[0.5em]  w-[10em] text-center text-lg "
              to={"/contact-us/training"}
            >
              Talk to us
            </Link>
          </div>
          <p className="p-1 text-[1.1rem] md:text-[1.5rem] font-[400] leading-[133.333%]">
            Start learning by registering or reaching out to us
          </p>
        </div>
      </div>

      {/*Second component*/}
      <div
        className=" w-full"
        style={{
          backgroundImage: `url(${footerBg2})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/*Address, Contact, Social icons and Logo*/}
        <div className="z-[999] flex flex-col lg:flex-row text-[#f1f1f1]  ml-[1.5em] lg:ml-[3.125em] py-28 gap-20 p-2 w-full ">
          {/*Contact and logo*/}
          <div>
            <Link
              className=""
              to={"/"}
            >
              <img
                src={kinplusLogoBlue}
                alt="kinplus-logo"
                className="w-[150px] h-[42.02px]"
              
              />
            </Link>
            <div className="mt-[50px] md:mt-[40px] font-[400] text-[1.125rem] leading-[250%]">
              <p>
                Email:
                <span className="tracking-[2px]">help@kinplusgroup.com</span>
              </p>
              <p>
                Phone:
                <span className="tracking-[2px]">
                   {" "}+2347069718643, +2348071572767
                </span>
              </p>
            </div>
          </div>

          {/* Quick Links */}
      <div className="flex flex-col space-y-3 text-[1.125rem]">
        <p className="text-blue-700 font-semibold">Quick Links</p>
        <nav
        className="flex  text-white"
      >
        <div className=" flex flex-col  space-y-4 py-2 ">
          {/*about us*/}
          <div>
            <Link
              to={"/"}
            >
              Home
            </Link>
          </div>
          <div>
            <Link
              to={"/about-us"}
            >
              About Us
            </Link>
          </div>



          {/*Our Services*/}
          <div>
            <Link
              to={"/our-services"}
             >
              Services
            </Link>
          </div>

          {/*Training*/}
          <Link
            to={"/training"}
          >
          Training 
          </Link>

          {/*Blog*/}
          <NavLink
              to={"/blog"}

            >
              Blog
            </NavLink>


        </div>
      </nav>
      </div>

         {/* Resources */}
         <div className="flex flex-col space-y-3 text-[1.125rem]">
        <p className="text-blue-700 font-semibold">Quick Links</p>
        <nav
        className="flex  text-white"
      >
        <div className=" flex flex-col  space-y-4 py-2 ">
          {/*about us*/}
          <div>
            <Link
              to={"/"}
            >
              Workshop
            </Link>
          </div>
          <div>
            <Link
              to={"/"}
            >
             Event
            </Link>
          </div>

          <div>
            <Link
              to={"/careers"}
             >
              careers
            </Link>
          </div>

      </div>
      </nav>
      </div>
   
          {/*Address and Social Icons*/}
          <div className="">
            {/*Address*/}
            <div className="self-start">
              <p className="text-[1.125rem] font-[400] leading-[200%]">
                Second Floor, 68B Christore Building,
                <br />
                Opp Crunchies Restaurant, Similoluwa,
                <br />
                Ado Ekiti, Ekiti State, Nigeria.
              </p>
            </div>

            {/*Social Icons*/}
            <div className="mt-[20px] flex gap-[2em]  ">
              {/*Facebook svg icon/link*/}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="41"
                  height="40"
                  viewBox="0 0 41 40"
                  fill="none"
                  className="group cursor-pointer"
                >
                  <circle
                    cx="20.4896"
                    cy="20"
                    r="20"
                    className="fill-current text-[#151515] group-hover:text-[#F1F1F1] transition"
                  />
                  <path
                    d="M22.8896 21.8H25.8896L27.0896 17H22.8896V14.6C22.8896 13.364 22.8896 12.2 25.2896 12.2H27.0896V8.168C26.6984 8.1164 25.2212 8 23.6612 8C20.4032 8 18.0896 9.9884 18.0896 13.64V17H14.4896V21.8H18.0896V32H22.8896V21.8Z"
                    className="fill-current text-[#F1F1F1] group-hover:text-[#151515] transition"
                  />
                </svg>
              </a>

              {/*LinkedIn svg icon/link*/}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="41"
                  height="40"
                  viewBox="0 0 41 40"
                  fill="none"
                  className="group cursor-pointer"
                >
                  <circle
                    cx="20.4896"
                    cy="20"
                    r="20"
                    className="fill-current text-[#151515] group-hover:text-[#F1F1F1] transition"
                  />
                  <path
                    d="M13.5264 11.5196C13.526 12.1875 13.2604 12.828 12.7878 13.3C12.3153 13.7721 11.6746 14.0371 11.0067 14.0367C10.3388 14.0364 9.69839 13.7707 9.22635 13.2982C8.7543 12.8257 8.48929 12.185 8.48962 11.5171C8.48996 10.8492 8.75561 10.2088 9.22813 9.73672C9.70065 9.26467 10.3413 8.99967 11.0092 9C11.6772 9.00033 12.3176 9.26598 12.7896 9.7385C13.2617 10.211 13.5267 10.8517 13.5264 11.5196ZM13.6019 15.9016H8.56518V31.6665H13.6019V15.9016ZM21.5599 15.9016H16.5484V31.6665H21.5096V23.3937C21.5096 18.7851 27.5159 18.357 27.5159 23.3937V31.6665H32.4896V21.6812C32.4896 13.9121 23.5998 14.2017 21.5096 18.017L21.5599 15.9016Z"
                    className="fill-current text-[#F1F1F1] group-hover:text-[#151515] transition"
                  />
                </svg>
              </a>

              {/*Instagram svg icon/link*/}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="41"
                  height="40"
                  viewBox="0 0 41 40"
                  fill="none"
                  className="group cursor-pointer"
                >
                  <circle
                    cx="20.4896"
                    cy="20"
                    r="20"
                    className="fill-current text-[#151515] group-hover:text-[#F1F1F1] transition"
                  />
                  <path
                    d="M15.4496 8H25.5296C29.3696 8 32.4896 11.12 32.4896 14.96V25.04C32.4896 26.8859 31.7563 28.6562 30.4511 29.9615C29.1458 31.2667 27.3755 32 25.5296 32H15.4496C11.6096 32 8.48962 28.88 8.48962 25.04V14.96C8.48962 13.1141 9.22291 11.3438 10.5282 10.0385C11.8334 8.73328 13.6037 8 15.4496 8ZM15.2096 10.4C14.0639 10.4 12.9651 10.8551 12.1549 11.6653C11.3448 12.4755 10.8896 13.5743 10.8896 14.72V25.28C10.8896 27.668 12.8216 29.6 15.2096 29.6H25.7696C26.9154 29.6 28.0142 29.1449 28.8243 28.3347C29.6345 27.5245 30.0896 26.4257 30.0896 25.28V14.72C30.0896 12.332 28.1576 10.4 25.7696 10.4H15.2096ZM26.7896 12.2C27.1875 12.2 27.569 12.358 27.8503 12.6393C28.1316 12.9206 28.2896 13.3022 28.2896 13.7C28.2896 14.0978 28.1316 14.4794 27.8503 14.7607C27.569 15.042 27.1875 15.2 26.7896 15.2C26.3918 15.2 26.0103 15.042 25.729 14.7607C25.4477 14.4794 25.2896 14.0978 25.2896 13.7C25.2896 13.3022 25.4477 12.9206 25.729 12.6393C26.0103 12.358 26.3918 12.2 26.7896 12.2ZM20.4896 14C22.0809 14 23.607 14.6321 24.7323 15.7574C25.8575 16.8826 26.4896 18.4087 26.4896 20C26.4896 21.5913 25.8575 23.1174 24.7323 24.2426C23.607 25.3679 22.0809 26 20.4896 26C18.8983 26 17.3722 25.3679 16.247 24.2426C15.1218 23.1174 14.4896 21.5913 14.4896 20C14.4896 18.4087 15.1218 16.8826 16.247 15.7574C17.3722 14.6321 18.8983 14 20.4896 14ZM20.4896 16.4C19.5348 16.4 18.6192 16.7793 17.944 17.4544C17.2689 18.1295 16.8896 19.0452 16.8896 20C16.8896 20.9548 17.2689 21.8705 17.944 22.5456C18.6192 23.2207 19.5348 23.6 20.4896 23.6C21.4444 23.6 22.3601 23.2207 23.0352 22.5456C23.7103 21.8705 24.0896 20.9548 24.0896 20C24.0896 19.0452 23.7103 18.1295 23.0352 17.4544C22.3601 16.7793 21.4444 16.4 20.4896 16.4Z"
                    className="fill-current text-[#F1F1F1] group-hover:text-[#151515] transition"
                  />
                </svg>
              </a>

              {/* X svg icon/link*/}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="41"
                  height="41"
                  viewBox="0 0 375 374.9999"
                  className="group cursor-pointer"
                >
                  <path
                    id="pathAttribute"
                    d="M 187.46875 7.09375 C 87.851562 7.09375 7.09375 87.851562 7.09375 187.46875 C 7.09375 287.085938 87.851562 367.84375 187.46875 367.84375 C 287.085938 367.84375 367.84375 287.085938 367.84375 187.46875 C 367.84375 87.851562 287.085938 7.09375 187.46875 7.09375 "
                    className="fill-current text-[#151515] group-hover:text-[#F1F1F1] transition"
                  ></path>

                  <g
                    id="inner-icon"
                    transform="translate(85, 75)"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      version="1.1"
                      id="IconChangeColor"
                      height="203"
                      width="203"
                    >
                      <path
                        d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                        id="mainIconPathAttribute"
                        className="fill-current text-[#F1F1F1] group-hover:text-[#151515] transition"
                      ></path>{" "}
                    </svg>{" "}
                  </g>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/*Copyright text*/}
        <div className="z-[999] w-full pb-[50px] bottom-0">
          <hr className="mx-auto h-[2px] w-[70%] text-[#ffffff] mb-[20px]" />
          <div className="w-full text-center p-2 text-[#f1f1f1] text-[1rem] font-[400] leading-[125%] ">
            Copyright <span className="mx-2">&copy;</span>
            <span>{thisYear}</span> Kinplus Technologies. All Rights Reserved
          </div>
        </div>
      </div>
    </section>
  );
}
