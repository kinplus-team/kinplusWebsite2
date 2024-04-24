import React from "react";
import { Link } from "react-router-dom";
import guyLookingAtLaptop from "../../assets/AboutUs/NewImages/guy-looking-at-laptop.jpeg";
import peopleLookingAtLaptop from "../../assets/AboutUs/NewImages/three-people-looking-at-laptop.jpeg";
import girlLookingAtLaptop from "../../assets/AboutUs/NewImages/girl-looking-at-laptop.jpeg";
import lookingAtLaptop from "../../assets/AboutUs/NewImages/looking-at-laptop.jpeg";
import svgIcon from "../../assets/AboutUs/Icons.svg";
import bgImage2 from "../../assets/AboutUs/bg-image2.png";
import aboutUsIcons1 from "../../assets/AboutUs/aboutUsIcons1.png";
import aboutUsIcons2 from "../../assets/AboutUs/aboutUsIcons2.png";
import aboutUsGrid from "../../assets/AboutUs/NewImages/new-about-us-grid.png";
import raptLaptop from "../../assets/AboutUs/NewImages/raptly-staring-at-laptop.jpeg";
import twoGirlsLaptop from "../../assets/AboutUs/NewImages/two-girls-staring-at-laptop.jpeg";
import busyLaptop from "../../assets/AboutUs/NewImages/busy-on-the-laptop.jpeg";
import traineeListen from "../../assets/AboutUs/NewImages/trainees-listening.jpeg";
import traineeListen2 from "../../assets/AboutUs/NewImages/three-people-looking-at-laptop.jpeg";
import idea from "../../assets/AboutUs/idea.jpeg";

import workPc from "../../assets/AboutUs/NewImages/working-on-pc-1.jpeg";
import workPc2 from "../../assets/AboutUs/NewImages/working-on-pc-2.jpeg";
import PageLayout from "../../components/layout/PageLayout";


export default function AboutUs() {
  const whatWeDOText =
    "We're here to support you through the entire process of product development, from ideation to launch and beyond. We'll help you navigate any challenges that come up along the way, and we're always focused on improving customer retention and increasing Customer Lifetime Value. We're not just a service provider, we're a partner in your success.";

  const careersText =
    "When you join Kinplus, you'll be working with some of the most innovative brands and ventures in the industry. You'll be immersed in a culture that values creativity, personal development, and accountability. Most importantly, you'll be on a journey that's both fulfilling and impactful. Come join us and make a difference.";

  return (
    <PageLayout>

      <section className="mx-auto overflow-hidden">
        {/**About Kinplus**/}
        <div className="flex flex-col-reverse md:flex-row gap-[80px]">
          <div className=" flex flex-col gap-[16px] md:w-[43%]">
            <div className=" z-[999] flex items-center justify-start gap-2 ">
              <div
                style={{
                  backgroundImage: `url(${guyLookingAtLaptop})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  borderRadius: "15px",
                  height: "384px",
                  width: "189.33px",
                  marginTop: "80px",
                }}
                loading="lazy"
              ></div>
              <div
                style={{
                  backgroundImage: `url(${girlLookingAtLaptop})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  borderRadius: "15px",
                  height: "384px",
                  width: "189.33px",
                  alignSelf: "start",
                }}
              ></div>
              <div
                style={{
                  backgroundImage: `url(${lookingAtLaptop})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  borderRadius: "15px",
                  height: "384px",
                  width: "189.33px",
                }}
              ></div>

            </div>
            {/*SVG Icons 
          <div className="absolute h-[600px]">
            <div className="absolute  h-[176px] w-[176px]">
              <img src={svgIcon} className="h-[176px] w-[176px]" />
            </div>
            <div className="absolute h-[176px] w-[176px] top-[100px] left-[-30px]">
              <img src={svgIcon} className="h-[176px] w-[176px]" />
            </div>
            <div className="absolute h-[176px] w-[176px] top-[260px] left-[-30px]">
              <img src={svgIcon} className="h-[176px] w-[176px]" />
            </div>
            <div className="absolute left-[184px] bottom-[25.5%] h-[176px] w-[176px]">
              <img src={svgIcon} className="h-[176px] w-[176px]" />
            </div>
          </div>*/}
          </div>

          <div className="self-center">
            <div>
              <p className="text-[#1877F9] text-[0.938rem] sm:text-[1.125rem] md:text-[1.5rem] mt-8 md:mt-0 font-[400] leading-[125%] py-2 capitalize">
                Who We Are
              </p>
              <h3 className="text-[#082B5B] text-[1.876rem] md:text-[4.0625rem] font-[700] leading-[115.385%] capitalize mt-3 md:mt-0 mb-[1.3125rem]">
                About Kinplus
              </h3>
            </div>
            <p className=" text-[0.875rem] md:text-[1.438rem] leading-[138.889%] font-[400]">
              We are a team of energetic and innovative developers and
              designers, who are passionate about implementing customer needs
              with an approach focused on satisfaction and timely delivery.
            </p>
          </div>
        </div>

        {/**What is Kinplus**/}
        <div className="lg:flex mt-10 mx-[-3em] p-0 lg:h-[695px] ">
          <div className=" w-full bg-blue-700">
            <div className=" ml-[55px] md:mt-12 md:ml-[95px] h-[444px] lg:h-full py-[50px] ">
              <h3 className="text-[1.5rem] lg:text-[54px] font-[700] leading-[118.519%] capitalize text-[#ffffff] p-1 mb-[20px]">
                What is Kinplus?
              </h3>
              <p className="text-[#fff] text-xs md:text-[0.9rem] lg:text-[1.15rem] font-[400] leading-[138.889%] p-1 w-[80%] ">
                Kinplus Technologies is a software development company with a
                focus on delivering scalable applications and software to
                businesses, organizations, and individuals. We're driven by a
                passion for innovation and customer satisfaction, and we deliver
                our products on time and within budget.
                <br />
                <br />
                We offer a wide range of services including software
                development, mobile applications, and shell/console
                applications. We're also dedicated to empowering young people
                through our training and internship programs. If you're looking
                for a team of innovative tech professionals who are dedicated to
                delivering results, look no further than Kinplus Technologies.
              </p>
            </div>
          </div>
          <div
            className="w-full h-[407px] lg:h-full"
            style={{
              backgroundImage: `url(${peopleLookingAtLaptop})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div className="absolute bg-blue-700 bg-opacity-10  w-full"></div>
          </div>
        </div>

        {/**Our Vision And Mission**/}
        <div className="lg:mt-[9.1563em] lg:h-[613px] flex flex-col-reverse lg:flex-row">
          <div className="relative mt-10 lg:!mt-26 w-[60%] lg:ml-[-150px]  ">
            {/*<div className="flex ">
              <div
                style={{
                  backgroundImage: `url(${aboutUsIcons1})`,
                  width: "16.01em",
                  height: "613px",
                  marginTop: "60px",
                }}
                loading="lazy"
              ></div>

              <div
                className=""
                style={{
                  backgroundImage: `url(${aboutUsIcons2})`,
                  width: "16.01em",
                  height: "613px",
                  marginTop: "-50px",
                  marginLeft: "20px",
                  rotate: "210deg",
                }}
              ></div>
              <div
                className=""
                style={{
                  backgroundImage: `url(${aboutUsIcons2})`,
                  backgroundPosition: "revert-layer",
                  backgroundSize: "cover",
                  width: "16.01em",
                  height: "613px",
                  marginTop: "80px",
                  marginLeft: "-150px",
                  rotate: "220deg",
                }}
              ></div>
            </div>*/}
            <div className="absolute top-0  w-[20em] mx-auto md:w-[32em] right-full left-1 lg:left-[9rem]">
              <img src={aboutUsGrid} alt="" />
            </div>
          </div>

          <div className="lg:w-[50%] lg:mr-11">
            <h3 className="text-[#082B5B] text-[2rem] md:text-[4rem] font-[700] tracking-[-0.88px] md:tracking-[-2.88px] leading-[110%] mt-[71px] mb-[31px] ">
              Our Vision
            </h3>
            <p className="text-[#23242A] text-[0.963rem] md:text-[1.125rem] font-[400] leading-[138.889%]">
              To promote youth empowerment and create employment via on the job
              training with a team of experts while developing products and
              providing services that will help the society and the world at
              large.
              <br />
              <br />
              We believe that technology should connect and empower people.
              We're committed to driving innovation and creating solutions that
              will shape a better future. We're at the forefront of the digital
              revolution, and we're always looking for new ways to make a
              positive impact on the world. We believe that together, we can
              build a better tomorrow for everyone
            </p>

            <h3 className="text-[#082B5B] text-[2rem] md:text-[4rem] font-[700] tracking-[-0.88px] md:tracking-[-2.88px] leading-[110%] mt-[71px] mb-[31px] ">
              Our Mission
            </h3>
            <p className="text-[#23242A] text-[0.963rem] md:text-[1.125rem] md:pb-0 font-[400] leading-[138.889%] md:w-[42rem]">
              To enhance societal development and sustainability by empowering
              youths with skills and expertise that will make them employable,
              business minded, skilful and industrious.
              <br />
              <br />
              We believe that technology should connect and empower people.
              We're committed to driving innovation and creating solutions that
              will shape a better future. We're at the forefront of the digital
              revolution, and we're always looking for new ways to make a
              positive impact on the world. We believe that together, we can
              build a better tomorrow for everyone
            </p>
          </div>
        </div>

        {/**What we do**/}
        <div className="mt-[18.75em] flex flex-col md:flex-row gap-[76px]">
          <div className="w-[100%] md:w-[60%]">
            <p className="text-[0.938rem] md:text-[1.5rem] font-[400] leading-[125%] mt-[6.2188em] mb-3 md:mb-0 text-[#1877F9] p-1">
              What We Do
            </p>
            <h3 className="text-[1.876rem] md:text-[2.75rem] text-[#082B5B] font-[700] capitalize leading-[122.727%] mb-4 md:mb-0 p-1">
              We create beautiful products that capture hearts
            </h3>
            <p className="text-[0.963rem] md:text-[1.125rem] text-[#101010] font-[400] leading-[138.889%] p-1">
              {whatWeDOText}
            </p>
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-2 w-[73%] ">
            <div
              className="col-span-2 mr-[1.3em] h-[288px] mb-4 rounded-[20px]"
              style={{
                backgroundImage: `url(${raptLaptop})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                width: "515px",
              }}
              loading="lazy"
            ></div>
            <div className="col-span-2 grid gap-[10px] grid-cols-2 ">
              <div
                className="rounded-[20px]  w-full"
                style={{
                  backgroundImage: `url(${twoGirlsLaptop})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  width: "306.5px",
                }}
              ></div>
              <div
                className="rounded-[20px]  w-full"
                style={{
                  backgroundImage: `url(${busyLaptop})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  width: "306.5px",
                }}
              ></div>
            </div>
          </div>
        </div>

        {/**Careers**/}
        <div className="flex flex-col md:flex-row md:items-center space-y-8  md:space-x-[91px] mt-[50px] md:mt-[271px]">
          <div className="w-[100%] md:w-[60%]">
            <h4 className="text-[#1877F9] text-[0.938rem] md:text-[1.5rem] leading-[31.25%] font-[400] mb-4 md:mb-0 p-1">
              Careers
            </h4>
            <p className="text-[#082B5B] text-[1.876rem] md:text-[2.75rem] font-[700] capitalize leading-[122.727%] p-0 mt-1 md:mb-10">
              Join our Ever-Growing team at Kinplus
            </p>
            <Link
              className="hidden md:block bg-[#1877F9] hover:bg-[#1153AE] transition duration-200 ease-in-out capitalize text-white font-bold py-[1.25em] px-[1.563em] md:px-[2.625em] rounded-[0.938em]  w-[12em] text-center"
              to={"/contact-us/training"}
            >
              Join Us
            </Link>
          </div>

          <div className="w-[100%] md:w-[73%]">
            <p className="text-[0.963rem] md:text-[1.125rem] text-black font-normal leading-[156.25%]">
              {careersText}
            </p>
          </div>
          <Link
            className="md:hidden bg-[#1877F9] hover:bg-[#1153AE] transition duration-200 ease-in-out capitalize text-white font-bold py-[1.25em] px-[1.563em] md:px-[2.625em] rounded-[0.938em]  w-[7em] text-center"
            to={"/contact-us/training"}
          >
            Join Us
          </Link>
        </div>

        {/**Next Project**/}
        <div className="w-full flex flex-col mt-[148px] space-y-2 p-0">
          {/**Big image and Next text**/}
          <div className="w-full flex flex-col space-y-2 lg:flex-row lg:space-x-2 lg:space-y-0">
            {/**Big image**/}
            <div
              style={{
                backgroundImage: `url(${traineeListen})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                height: "534px",
                width: "100%",
              }}
              loading="lazy"
            ></div>
            {/**Next text**/}
            <div className="mr-[-50px] w-full flex flex-col gap-2">
              <div className="relative h-[534px]  ">
                <div className="absolute flex items-center text-center flex-col space-y-[32px]  w-full h-full text-[#ffffff] bg-[#1877F9]
                 p-8 sm:p-[50px] md:p-[80px]">
                  <p className="text-[1.8rem] sm:text-[2.8rem] md:text-[3.5rem] font-[700] leading-[110%]  p-1">
                    Ready for your next project?
                  </p>
                  <p className="text-[1.125rem] leading-[160%] font-[400]  p-1 ">
                    We design, build, and scale platforms for forward-thinking
                    <br />
                    experiences, allowing companies to focus on measurable
                    <br />
                    outcomes.
                  </p>
                  <Link
                    className="bg-[#ffffff] hover:bg-[#1153AE] transition duration-200 ease-in-out text-[#1877F9] hover:text-[#ffffff] font-bold py-2 px-4 rounded-[0.5em]  w-[7em] text-center "
                    to={"/contact-us/services"}
                  >
                    Talk to us
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/**Small images**/}
          <div className="flex gap-2 h-[210px]">
            <div
              className="flex-grow  "
              style={{
                backgroundImage: `url(${idea})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                width: "528px",
              }}
            ></div>
            <div
              className="  "
              style={{
                backgroundImage: `url(${traineeListen2})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                width: "177px",
              }}
            ></div>
            <div
                  className="flex-grow "
                  style={{
                    backgroundImage: `url(${workPc})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    width: "528px",
                  }}
                ></div>

                <div
                  className=""
                  style={{
                    backgroundImage: `url(${workPc2})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    width: "177px",
                  }}
                ></div>
          </div>
        </div>

      </section>
    </PageLayout>

  );
}
