import Button from "../../../components/Button";
import { Link } from "react-router-dom";
import PageLayout from "../../../components/Layout/PageLayout";

export default function Dedication() {
  return (
    <PageLayout>
      <div className="grid gap-16 lg:pt-40 pt-10">
        {/* title */}
        <div className="grid lg:grid-cols-[auto_1fr] gap-4 lg:gap-36 lg:pb-7 pb-6">
          <h3 className="lg:text-[32px] text-2xl max-w-xl text-[#082B5B] font-bold capitalize lg:leading-[43px] leading-[30px]">
            We are dedicated to empowering the next generation with essential
            skills to thrive in the ever-evolving tech landscape
          </h3>

          <div className="grid gap-6 place-self-center">
            <p className="text-[#0F172A] lg:text-[18px] leading-[25px]">
              Equipping the Next Generation with Essential Tech Skills. We
              provide hands-on training in essential tech skills to prepare the
              next generation for the future of work. Our approach is
              interactive and engaging, and our curriculum is designed to meet
              the needs of tomorrow's workforce
            </p>

            <Link to="/trainings" className="w-52">
              <Button type="customizedBlue" text="Learn More" />
            </Link>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
