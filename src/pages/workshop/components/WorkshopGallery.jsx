import PageLayout from "../../../components/Layout/PageLayout.jsx";
import Button from "../../../components/Button.jsx";
import explore from "../../../assets/workshop/explore.png";

export default function WorkshopGallery() {
  return (
    <PageLayout>
      <div className="relative">
        <div className="grid grid-cols-2 gap-16 pt-16 pb-24 absolute">
          <div className="grid gap-4 bg-white ml-14 p-16">
            <h4 className="text-[#1877F9] text-xl font-medium uppercase tracking-wider">
              OUR LAST WORKSHOP
            </h4>

            <p className="text-[#082B5B] text-5xl font-bold leading-[50px] tracking-wide">
              Kinplus-NITDA: Mobile App training and the Digital Skill Up
              training
            </p>
          </div>
          <div>
            <p className="text-[#101010] text-lg leading-6">
              Kinplus Technologies, in partnership with NITDA, trained 50+
              participants in Mobile App Development. Serving as the technology
              hub in Ekiti State, similar sessions were held in three other
              states nationwide. Check out the details of the event.
            </p>

            <div className="w-56 my-5">
              <Button text="Explore workshop" type="customizedBlue" />
            </div>
          </div>
        </div>
        <div className=" pt-[380px] pb-20">
          <img src={explore} />
        </div>
      </div>
    </PageLayout>
  );
}
