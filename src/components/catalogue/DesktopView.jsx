import Button from "../Button";
import formatNumber from "../../utilities/formatNumber";
import formatLink from "../../utilities/formatLink";
import { useSliderCalculation } from "../../hooks/useSliderCalculation";
import { Link } from "react-router-dom";

export default function DesktopViewCatalogue({
  title,
  catalogues,
  isLinked = true,
}) {
  const { index, setIndex, equalHeight } = useSliderCalculation(catalogues);

  return (
    <div className="grid lg:grid-cols-[auto_1fr] gap-10">
      {/* left side content */}
      <div className="place-self-center">
        {title && (
          <h3
            className={`text-[#082B5B] lg:text-[40px] text-[35px] font-[700] lg:leading-[50px] leading-10 capitalized lg:max-w-2xl pb-[17px]`}
          >
            {title}
          </h3>
        )}

        <div className="grid grid-cols-[5px_500px] gap-8 pl-3">
          {/* line */}
          <div>
            <div className="bg-[#DFDFDF] w-[5px] h-[231.489px]">
              <div
                style={{
                  transform: `translateY(${equalHeight}px)`,
                }}
                className={`bg-[#1877F9] w-[5px] h-[58px]`}
              ></div>
            </div>

            <div className="rotate-[-90deg] translate-y-16">
              <span className="text-[#1877F9] text-lg font-medium">
                {formatNumber(index + 1)}
              </span>
              <span className="text-[#10375C] text-sm">/</span>
              <span className="text-[#9A9A9A] leading-[26px]">
                {formatNumber(catalogues.length)}
              </span>
            </div>
          </div>

          {/* catalogues button */}
          <div>
            {catalogues.map((catalogue, i) => (
              <Link
                to={
                  isLinked &&
                  catalogue.link &&
                  `/trainings/courses/${catalogue.link}`
                }
                key={i}
                onMouseEnter={() => setIndex(i)}
              >
                <Button
                  text={catalogue.title}
                  type={`${i == index ? "customizedBlue" : "transparent"}`}
                  isLong={true}
                  isLinked={isLinked}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* right side content */}
      <div
        className="place-self-end w-full h-[550px]"
        style={{
          backgroundImage: `url(${catalogues[index].image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
    </div>
  );
}
