import Button from "../Button";
import trainingImage from "../../assets/training/training-image-2.png";

export default function DesktopViewCatalogue({ title, catalogues }) {
  return (
    <div className="grid lg:grid-cols-[auto_1fr] gap-10">
      <div>
        {/* courses */}
        <h3 className="text-[#082B5B] lg:text-[40px] text-[35px] font-[700] lg:leading-[50px] leading-10 capitalized lg:max-w-2xl py-9">
          {title}
        </h3>

        {/* left side content */}
        <div className="grid grid-cols-[5px_500px] gap-8 pl-3">
          {/* line */}

          <div>
            <div className="bg-[#DFDFDF] w-[5px] h-[231.489px] ">
              <div className="bg-[#1877F9] w-[5px] h-[58px]"></div>
            </div>
            <div className="rotate-[-90deg] translate-y-12">
              <span className="text-[#1877F9] text-lg font-medium">01</span>
              <span className="text-[#10375C] text-sm">/</span>
              <span className="text-[#9A9A9A] leading-[26px]">06</span>
            </div>
          </div>

          {/* catalogues */}
          <div>
            {catalogues.map((catalogue, i) => (
              <div key={i}>
                <Button
                  text={catalogue.title}
                  type={`${i == 2 ? "customized" : "transparent"}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="place-self-end">
        <img
          src={trainingImage}
          width={736}
          height={550}
          alt="training image at kinplus"
        />
      </div>
    </div>
  );
}
