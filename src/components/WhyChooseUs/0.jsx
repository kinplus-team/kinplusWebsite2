import React from 'react'
import ChooseUsImages from "../../assets/choose_us.png";
import { Link } from 'react-router-dom';

export default function WhyChooseUs() {

  return (
    <section className="flex flex-col gap-5">
      <div className="mt-10">
        <h6 className=" text-[#1877F9] text-[1.5rem] p-2">Why Choose Us</h6>
      </div>
      <div className="flex md:flex-row flex-col items-center">
        <div className="w-[120%] md:w-[65%] md:mr-24 p-2">
          <img
            src={ChooseUsImages}
            alt="pictures_of_lekan_nobel_vicente"
          />
        </div>
        <div className="flex flex-col space-y-6 w-full md:w-[56%] p-2">
          <h3 className="text-3xl md:text-[2rem] font-bold text-blue-950 p-2 leading-tight">
          We excel at solving complex business challenges through strategic marketing and product development, driving success for our clients.
          </h3>
          <p className="w-[95%]   p-2 text-[1rem] font-medium  ">
          Here at Kinplus, we value excellence, innovation, and faith-based values. We're on a mission to empower people and businesses with the best possible solutions. Our guiding principles are what make us who we are. Let us share our story with you.
          </p>
     
          <Link
            to={"/contact-us/services"}
            className="bg-[#1877F9] hover:bg-[#1153AE] transition duration-200 ease-in-out text-white font-bold py-4 px-4 rounded-[0.5em] w-[12em] text-center text-lg"
          >
            Meet Kinplus
          </Link>
        </div>
      </div>
    </section>
  );
}