
import { FaQuoteRight } from "react-icons/fa6";
import icon from "../../assets/our_services/Mask Group.png";
import victorImg from "../../assets/our_services/image 5.png";
import CTA from "../../assets/our_services/CTA.png";
import icon2 from "../../assets/our_services/Mask Group (1).png";
import image2 from "../../assets/our_services/Rectangle 11.png";
import icon3 from "../../assets/our_services/Group 539.png";
import iconbg1 from "../../assets/training/Icons.png";
import iconbg2 from "../../assets/training/Icons.png";
import image3 from "../../assets/our_services/Rectangle 51.png";
import { HiArrowLongLeft } from "react-icons/hi2";
import { HiArrowLongRight } from "react-icons/hi2";
import image4 from "../../assets/our_services/image 5a.png";
import image5 from "../../assets/our_services/Rectangle 11b.png";
import { BsDashLg } from "react-icons/bs";
import rectangle from "../../assets/our_services/Rectangle 1.png"
import PageLayout from "../../components/Layout/PageLayout";
import image10 from "../../assets/our_services/image 10.png"
import mobile from "../../assets/our_services/mobile.png"
import mobileF from "../../assets/our_services/mobile-fade.png"
import hardware from "../../assets/our_services/hardware.png"
import hardwareF from "../../assets/our_services/hardware fade.png"
import TrainingTestimonial from "../Training/Testimonial";

export default function Services() {
  return (
    <PageLayout>
      {/* Our Services */}
      <section className="flex flex-col">
        <div className="flex items-center ">
          <h3 className="text-[#1877F9] font-medium text-lg mr-5 ">Our Services</h3>
          <img src={rectangle} className="w-16 h-0.5 " alt="" />
        </div>
        <div className="flex">
          <div className="w-1/2"> <h1 className="text-5xl text-[#082B5B] font-medium leading-[63px]">Empowering Creativity, Building Excellent products.</h1></div>
          <div className="w-1/2"> <p className="text-lg">We believe that creativity is the key to building excellence. Our products are designed with love and attention to detail, to create an emotional connection with users. We strive to create products that are not only functional, npbut also beautiful and meaningful.</p></div>
        </div>
        <div className="relative flex h-[598.05px] items-center justify-end">
          <div className="absolute bg-[#1877F9] h-[420px] w-[420px] left-0">
          <FaQuoteRight className="rotate-180 text-7xl text-white mt-4 ml-4"/>
          <div className="w-[14rem] ml-20"><p className="text-white text-base leading-10 ">Whether we’re building new products from ground up, or transforming existing infrastructure, we know what it takes to make a digital product succeed at scale.</p></div>
          </div>
          <div className=" h-[550px] w-[870px] "> <img src={image10} alt="" /></div>
        </div>
        
      </section>
      {/* What We Do */}
      <section>*
        <div className="flex justify-between items-center">
          <h1 className="  text-[#082B5B] text-[2.5rem] font-bold">
            What we do
          </h1>
          <div className=" w-[43%] text-[1.125rem] ">
            <p>
              {" "}
              We'll expertly manage the technical aspects, allowing you to focus on bringing your solutions to the market and engaging potential investors. Collaborate with our team for seamless execution.
            </p>
          </div>
          <div className="">
            <img src={icon} alt="" className=" h-[5.6rem] " />
          </div>
        </div>

        <div className="flex mt-10 justify-between space-x-3">
          <div className="  flex flex-col items-center relative justify-between">
            <img
              src={victorImg}
              alt=""
              className="w-[25.73763rem] h-[26.1875rem] "
            />
            <img
              src={CTA}
              alt=""
              className="w-[5.29463rem] h-[4.5] absolute bottom-0 left-0  mb-[3.15rem] ml-0"
            />
            <p className=" mt-5 text-[#101010] text-[1.25rem] font-bold">
              Web Development
            </p>
          </div>

          <div className="bg-[#082B5B] w-[25.73763rem] h-[29.1875rem] rounded-[0.3125rem] text-[#F1F1F1] relative">
            <img
              src={icon2}
              alt=""
              className=" w-[6.6rem] h-[5.6rem]  ml-auto  mt-7 mr-7"
              loading="lazy"
            />
            <p className="text-[2rem] text-center mt-9">Mobile Development</p>
            <p className=" text-center text-[1.125rem] mt-5 ">
            At Kinplus, we excel in mobile development, leveraging innovation to create impactful and user-centric solutions.
            </p>
            <p className="text-[#F1F1F1] bg-[#1877F9] w-[12em] h-[4em] px-[2em] py-[0.5em] rounded-[0.3125rem] flex items-center justify-center  absolute bottom-0 left-0 ">
              Talk to us
              <span>
                {" "}
                <img src={icon3} alt="" className=" h-6 w-6 ml-5" />
              </span>
            </p>
          </div>
          <div className="  flex flex-col items-center  relative justify-between">
            <img
              src={image2}
              alt=""
              className="w-[25.73763rem] h-[26.1875rem] "
            />
            <img
              src={CTA}
              alt=""
              className="w-[5.29463rem] h-[4.5] absolute bottom-0 left-0  mb-[3.15rem] ml-0"
            />
            <p className=" mt-5 text-[#101010] text-[1.25rem] font-bold">
              Hardware Repairs
            </p>
          </div>
        </div>
      </section> 

      {/* Have a project in mind? */}
       <section>
        <div className="flex ">
          <h1 className=" w-[50%] text-[2.5rem] text-[#082B5B]  font-bold leading-[3.125rem]">
            Have a project in mind? Let's get started here
          </h1>
          <p className=" w-[40%] font-normal leading-[1.5625rem] ml-40 text-[#000000DE] ">
          At Kinplus, we tackle intricate business challenges through exceptional strategy, marketing, and product development services, 
          
          </p>
        </div>

        <div className="flex items-start justify-end space-x-20 ml-[5em] mt-32 ">
          <div className="flex">
            <p className="self-start text-[#082B5B] text-[12.5rem] font-bold mt-[-70px]">
              1
            </p>
            <div className="h-[32.12525rem] bg-[#082B5B]  w-[0.2rem] ml-10"></div>
          </div>

          <div className="w-[45%]">
            <h1 className="text-[#082B5B] font-bold text-[2.75rem] leading-[3.375rem] mb-10">
              Web Development
            </h1>
            <p className="text-[1.125rem] font-normal leading-6 mb-10">
            At Kinplus, we take a user-centric approach to web development, creating solutions that elevate your digital presence and drive tangible results. Our solutions are designed to improve user engagement, increase conversions, and enhance brand awareness. We use the latest technologies and best practices to deliver a seamless, intuitive user experience. With our expertise, you can rest assured that your web development project will be in safe hands, from start to finish.
            </p>

            <button className="bg-[#1877F9] hover:bg-[#1153AE] transition duration-200 ease-in-out text-white font-bold py-2 px-4 rounded-[0.5em] mt-5 w-[7em]">
              Talk to us
            </button>
          </div>

          <div className="w-[45%] relative">
            <div className="absolute flex mt-[-150px] mb-90px]  ml-[-50px] overflow-hidden ">
              <img src={iconbg1} alt="" className="mt-[-20px] ml-[-40px]" />
              <img src={iconbg2} alt="" className="mt-[-40px] ml-[-80px] " />
            </div>
            <div className="absolute top-[5%] mt-[30px] z-[100]">
              <img src={image3} alt="" />
            </div>
            <div className="absolute z-[999] mt-[10px] top-0 left-[5%]">
              <img src={image2} alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Development */}
      <section>
        <div className="flex space-y-20 mr-[5em] mt-32 ">
          <div className="w-[45%] relative ">
            <div className="absolute flex mt-[-150px] mb-90px]  ml-[-50px] overflow-hidden ">
              <img src={iconbg1} alt="" className="mt-[-20px] ml-[-40px]" />
              <img src={iconbg2} alt="" className="mt-[-40px] ml-[-80px] " />
            </div>
            <div className="absolute top-[5%] mt-[120px] z-[100]">
              <img src={mobileF} alt="" />
            </div>
            <div className="absolute z-[999] mt-[90px] top-0 left-[5%]">
              <img src={mobile} alt="" />
            </div>
          </div>

          <div className="w-[45%] ">
            <h1 className="text-[#082B5B] font-bold text-[2.75rem] leading-[3.375rem] mb-10">
              Mobile Development
            </h1>
            <p className="text-[1.125rem] font-normal leading-6 mb-10">
            Kinplus is a mobile development specialist, using the latest technologies and best practices to create innovative and user-friendly mobile solutions. Our team is dedicated to delivering mobile applications that are robust, functional, and seamless. We take a user-focused approach to ensure that your mobile application reflects your brand and drives the results you desire. With Kinplus, you can be confident that your mobile development project is in safe hands.
            </p>

            <button className="bg-[#1877F9] hover:bg-[#1153AE] transition duration-200 ease-in-out text-white font-bold py-2 px-4 rounded-[0.5em] mt-5 w-[7em]">
              Talk to us
            </button>
          </div>

          <div className="h-[32.12525rem] bg-[#082B5B]  w-[0.2rem] mr-10"></div>
          <div>
            <p className="self-start text-[#082B5B] text-[12.5rem] font-bold mt-[-70px]">
              2
            </p>
          </div>
        </div>
      </section>
      {/*Hardware and Sale */}
      <section>
        <div className="flex items-start justify-end space-x-20 ml-[5em] mt-32 ">
          <div className="flex">
            <p className="self-start text-[#082B5B] text-[12.5rem] font-bold mt-[-70px]">
              3
            </p>
            <div className="h-[32.12525rem] bg-[#082B5B]  w-[0.2rem] ml-10"></div>
          </div>

          <div className="w-[55%]">
            <h1 className="text-[#082B5B] font-bold text-[2.75rem] leading-[3.375rem] mb-10 ">
              Hardware Sale & Repairs
            </h1>
            <p className="text-[1.125rem] font-normal leading-6 mb-10">
            At Kinplus, we offer top-quality hardware for sale, as well as expert repair services. We stock a wide range of the latest hardware from leading brands, ensuring that you have access to the best technology on the market. And if your hardware is in need of repair, our team of skilled technicians is here to help. We can diagnose and fix any issues, big or small, so you can get back to using your hardware as soon as possible. Rest assured that your hardware needs are in good hands with Kinplus
            </p>


            <button className="bg-[#1877F9] hover:bg-[#1153AE] transition duration-200 ease-in-out text-white font-bold py-2 px-4 rounded-[0.5em] mt-5 w-[7em]">
              Talk to us
            </button>
          </div>

          <div className="w-[45%] relative">
            <div className="absolute flex mt-[-150px] mb-90px]  ml-[-50px] overflow-hidden ">
              <img src={iconbg1} alt="" className="mt-[-20px] ml-[-40px]" />
              <img src={iconbg2} alt="" className="mt-[-40px] ml-[-80px] " />
            </div>
            <div className="absolute top-[5%] mt-[30px] z-[100]">
              <img src={hardwareF} alt="" />
            </div>
            <div className="absolute z-[999] mt-[10px] top-0 left-[5%]">
              <img src={hardware} alt="" />
            </div>
          </div>
        </div>
      </section>
 {/* our approach to product development */}
      <section>
        <div className="flex items-start justify-between">
          <div className="mr-10">
            <h1 className="text-[#082B5B] font-bold text-[2.5rem] leading-normal">
              {" "}
              Our Approach to Product <br /> Development
            </h1>
          </div>
          <div>
            <p className="text-[1.125rem] text-[#101010] leading-[1.75rem]">
              We take a startup-like approach to thinking smarter, <br />{" "}
              shipping faster, and scaling far and wide.
            </p>
          </div>

          <div className="flex">
            <HiArrowLongLeft className="text-[4rem] text-[#817f7f]" />
            <HiArrowLongRight className="text-[4rem] text-[#1877F9]" />
          </div>
        </div>

        <div className="flex mt-10  justify-between space-x-5">


          <div className="bg-[#082B5B] w-[25.73763rem] h-[29.1875rem] rounded-[0.3125rem] text-[#F1F1F1] relative">
            <img
              src={icon2}
              alt=""
              className=" w-[6.6rem] h-[5.6rem]  ml-auto  mt-7 mr-7"
              loading="lazy"
            />
            <p className="text-[2rem] text-center mt-9"> Design</p>
            <p className=" text-center text-[1rem] mt-5 lead ">
            Design is the creative process of <br /> conceptualizing and crafting user <br />interfaces and experiences that <br /> are both visually appealing and <br /> easy to use. It involves <br /> understanding user needs, <br /> wireframing, prototyping, and <br /> crafting the overall look and feel <br /> of a product.
            </p>
          </div>
          <div className="bg-[#082B5B] w-[25.73763rem] h-[29.1875rem] rounded-[0.3125rem] text-[#F1F1F1] relative">
            <img
              src={icon2}
              alt=""
              className=" w-[6.6rem] h-[5.6rem]  ml-auto  mt-7 mr-7"
              loading="lazy"
            />
            <p className="text-[2rem] text-center mt-9"> Development</p>
            <p className=" text-center text-[1rem] mt-4 lead ">
            Development is the technical execution <br /> of design concepts. It involves writing <br /> code to implement features, <br /> functionalities, and interactions <br /> outlined in the design phase. Frontend <br /> development focuses on the visible <br /> parts of a website or application, while <br /> backend development deals with the <br /> server-side logic and database <br /> management.
            </p>
          </div>
          <div className="bg-[#082B5B] w-[25.73763rem] h-[29.1875rem] rounded-[0.3125rem] text-[#F1F1F1] relative">
            <img
              src={icon2}
              alt=""
              className=" w-[6.6rem] h-[5.6rem]  ml-auto  mt-7 mr-7"
              loading="lazy"
            />
            <p className="text-[2rem] text-center mt-9"> Engineering</p>
            <p className=" text-center text-[1rem] mt-5 lead ">
            Engineering ensures the structural <br /> integrity, scalability, and performance of <br /> a product. It involves architectural <br /> decisions, infrastructure setup, and <br /> system integration to build a robust and <br /> reliable platform. Engineering also <br /> includes optimizing processes for <br /> efficiency and maintaining the technical <br /> health of the product over time.
            </p>
          </div>
          
        </div>

        <div className="flex justify-center items-center mt-14 text-[3rem]">
          <BsDashLg className="mr-0" />
          <BsDashLg />
          <BsDashLg />
          <BsDashLg />
        </div>
      </section>
      <section>
      {/*Testimonial */}
      <TrainingTestimonial />
      </section> 
      </PageLayout>
  );
}
