import PageLayout from "../../../components/Layout/PageLayout.jsx";
import Button from "../../../components/Button.jsx";
import { Link } from "react-router-dom";
import explore from "../../../assets/workshop/explore.png";

export default function WorkshopGallery() {
  return (
    <PageLayout className="pt-28 lg:pt-0 pb-5">
      <div className="relative">
        <div className="grid lg:grid-cols-2 lg:gap-16 gap-4 pt-16 lg:pb-24 lg:absolute">
          {/* desktop */}
          <div className="lg:grid gap-4 bg-white ml-14 p-16 hidden">
            <h4 className="text-[#1877F9] text-xl font-medium uppercase tracking-wider">
              OUR LAST WORKSHOP
            </h4>

            <p className="text-[#082B5B] text-5xl font-bold leading-[50px] tracking-wide">
              Kinplus-NITDA: Mobile App training and the Digital Skill Up
              training
            </p>
          </div>

          {/* mobile */}
          <div className="grid gap-4 lg:hidden">
            <h4 className="text-[#1877F9] lg:text-xl text-base lg:font-medium lg:uppercase lg:tracking-wider">
              OUR LAST WORKSHOP
            </h4>

            <p className="text-[#082B5B] lg:text-5xl text-4xl font-bold lg:leading-[50px] tracking-wide">
              Kinplus-NITDA: Mobile App training and the Digital Skill Up
              training
            </p>
          </div>

          {/* content */}
          <div>
            <p className="text-[#101010] text-lg leading-6">
              Kinplus Technologies, in partnership with NITDA, trained 50+
              participants in Mobile App Development. Serving as the technology
              hub in Ekiti State, similar sessions were held in three other
              states nationwide. Check out the details of the event.
            </p>

            <Link to="/trainings/workshop/kinplus-nitda">
              <div className="w-56 my-5">
                <Button text="Explore workshop" type="customizedBlue" />
              </div>
            </Link>
          </div>
        </div>

        <div className=" h-[230px] lg:h-auto w-full lg:pt-[380px] lg:pb-20 pt-[40px]">
          <img src={explore} className="h-full w-full" />
        </div>
      </div>
    </PageLayout>
  );
}
