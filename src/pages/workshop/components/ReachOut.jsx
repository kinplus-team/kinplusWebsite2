import Button from "../../../components/Button";
import Text from "../../../components/Text";

export default function ReachOut() {
  return (
    <div className="relative">
      <div className="bg-[#082B5B] h-[300px] w-full"></div>
      <div className="bg-[#1877F9] h-[300px] w-full"></div>

      <div className="bg-white grid lg:grid-cols-[1fr_200px] gap-3 lg:max-w-7xl max-w-[350px] absolute items-center lg:top-[25%] top-[12%] right-0 left-0 mx-auto lg:p-14 p-7">
        <div className="grid gap-2">
          <Text type="subheading">
            Make an impact on the future of tech. Sponsor a training workshop.
          </Text>

          <Text type="paragraph" className="text-[#556987]">
            Are you looking to make a difference in the tech industry? Sponsor a
            training workshop and help shape the future of the tech industry.
          </Text>
        </div>
        <div>
          <Button type="customizedBlue" text="Reach Out" />
        </div>
      </div>
    </div>
  );
}
