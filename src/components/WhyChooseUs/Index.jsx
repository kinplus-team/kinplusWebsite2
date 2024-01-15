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
        <div className="w-[80%] md:w-[45%] md:mr-32 p-2">
          <img
            src={ChooseUsImages}
            alt="pictures_of_lekan_nobel_vicente"
          />
        </div>
        <div className="flex flex-col space-y-4 w-full md:w-[65%] p-2">
          <h3 className="text-3xl md:text-[2.3rem] font-bold text-blue-950 p-2 leading-relaxed">
            We Solve Complex Business Challenges With Outstanding Strategy,
            Marketing and Product Development Services.
          </h3>
          <p className="w-[95%] md:w-[75%] p-2 ">
            We have a well-structured operational model which enables our core
            values of <strong>Brilliancy</strong> and <strong>Accuracy</strong>,
            and as well Strengthens our development process.
          </p>
          <p className="p-2 text-[#101010] text-[18px]">
            Take your pick from our three key services areas, which are all{" "}
            <br /> designed to get you started with your next strategic win.
          </p>
          <Link
            to={"/contact-us/services"}
            className="bg-[#1877F9] hover:bg-[#1153AE] transition duration-200 ease-in-out text-white font-bold py-2 px-4 rounded-[0.5em] mt-10 w-[7em]"
          >
            Talk to us
          </Link>
        </div>
      </div>
    </section>
  );
}