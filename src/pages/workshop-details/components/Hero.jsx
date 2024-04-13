import PageLayout from "../../../components/Layout/PageLayout.jsx";
import heroImg from "../../../assets/workshopDetails/details.png";

export default function Hero() {
  return (
    <div>
      <PageLayout>
        <div className="grid gap-4 pt-48 pb-5">
          <h2 className="lg:text-[65px] text-[35px] leading-[75px] capitalize max-w-3xl ">
            NITDA: Mobile App training and the Digital Skill Up training
          </h2>
          <p className="text-[#101010] text-lg leading-6 max-w-lg justify-self-end">
            Kinplus Technologies, in partnership with NITDA, trained 50+
            participants in Mobile App Development. Serving as the technology
            hub in Ekiti State, similar sessions were held in three other states
            nationwide. Check out the details of the event.
          </p>
        </div>
      </PageLayout>
      <img src={heroImg} className="h-[780px]" />
    </div>
  );
}
