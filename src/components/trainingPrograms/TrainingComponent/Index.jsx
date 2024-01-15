
import { Link } from "react-router-dom";
import TrainingPhotoGrid from "../TrainingPhotoGrid/Index";


export default function TrainingComponent() {

  return (
    <section className="overflow-hidden">
      <div className="flex flex-col space-y-10 md:space-y-0 md:flex-row justify-center md:space-x-10 mt-10">
        <h3 className="md:w-[60%] text-3xl md:text-[2rem] font-bold text-blue-950 leading-relaxed ">
          We are dedicated to empowering the next generation with essential
          skills to thrive in the ever-evolving tech landscape
        </h3>
        <div className="flex flex-col space-y-10 md:w-[65%]">
          <p className="w-[95%] md:w-[75%] text-[#101010] text-[18px]">
            Our training programs are meticulously crafted by industry experts,
            providing valuable opportunities for learners, students, and young
            individuals in our society.
          </p>
          <Link
            to="/contact-us/training"
            className="bg-[#1877F9] hover:bg-[#1153AE] transition duration-200 ease-in-out text-white font-bold py-2 px-4 rounded-[0.5em] mt-5 w-[8em]"
          >
            Learn more
          </Link>
        </div>
      </div>
      <div>
        <TrainingPhotoGrid />
      </div>
    </section>
  );
}
