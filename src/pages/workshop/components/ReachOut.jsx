import Button from "../../../components/Button";

export default function ReachOut() {
  return (
    <div className="relative">
      <div className="bg-[#082B5B] h-[250px] w-full"></div>
      <div className="bg-[#1877F9] h-[250px] w-full"></div>

      <div className="bg-white grid grid-cols-[1fr_200px] max-w-7xl absolute items-center top-[25%] right-0 left-0 mx-auto p-14">
        <div className="grid gap-2">
          <h4 className="text-[#2A3342] text-4xl font-bold leading-10 max-w-2xl">
            Make an impact on the future of tech. Sponsor a training workshop.
          </h4>
          <p className="text-[#556987] text-xl font-medium leading-7 max-w-3xl">
            Are you looking to make a difference in the tech industry? Sponsor a
            training workshop and help shape the future of the tech industry.
          </p>
        </div>
        <div>
          <Button type="customizedBlue" text="Reach Out" />
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}
