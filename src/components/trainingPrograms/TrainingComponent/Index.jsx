
import { Link } from "react-router-dom";



export default function TrainingComponent() {

  return (
    <section className="overflow-hidden">
      <div className="flex flex-col space-y-10 md:space-y-0 md:flex-row justify-center items-start mt-10 gap-[170px]">
        <h3 className="md:w-[70%] text-3xl md:text-[2rem] font-bold text-blue-950 leading-relaxed ">
        We Are Dedicated To Empowering The Next Generation With Essential Skills To Thrive In The Ever-evolving Tech Landscape
        </h3>
        <div className="flex flex-col space-y-10 md:w-[65%]">
          <p className="w-[100%] md:w-[90%] text-[#101010] text-[16px]">
          Equipping the Next Generation with Essential Tech Skills. We provide hands-on training in essential tech skills to prepare the next generation for the future of work. Our approach is interactive and engaging, and our curriculum is designed to meet the needs of tomorrow's workforce
          </p>
          <Link
            to="/contact-us/training"
            className="bg-[#1877F9] hover:bg-[#1153AE] transition duration-200 ease-in-out text-white font-bold py-4 px-4 rounded-[0.5em] mt-5 w-[10em] text-center text-lg"
          >
            Learn more
          </Link>
        </div>
      </div>
      <div>
      
      </div>
    </section>
  );
}
