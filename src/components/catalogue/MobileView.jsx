import Button from "../Button";
import { Link } from "react-router-dom";
// import trainingImage from "../../assets/training/training-image-2.png";

export default function MobileViewCatalogue({ title, catalogues }) {
  return (
    <div className="grid gap-6">
      {/* courses */}
      <h3 className="text-[#082B5B] lg:text-[40px] text-[35px] font-[700] lg:leading-[50px] leading-10 capitalized lg:max-w-2xl">
        {title}
      </h3>

      <div className={`grid grid-rows-${catalogues.length} gap-3`}>
        {catalogues.map((catalogue, i) => (
          <Link key={i} to={`/trainings/courses/${catalogue.link}`}>
            <Button text={catalogue.title} icon={catalogue.icon} type="icon" />
          </Link>
        ))}
      </div>
    </div>
  );
}
