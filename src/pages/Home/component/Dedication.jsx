import Button from "../../../components/Button";
import { Link } from "react-router-dom";
import PageLayout from "../../../components/Layout/PageLayout";
import Text from "../../../components/Text";

export default function Dedication() {
  return (
    <PageLayout>
      <div className="grid lg:grid-cols-[auto_1fr] gap-4 lg:gap-36 lg:pb-7 pb-6">
        <Text type="subheading" className=" max-w-[700px] text-[#082B5B]">
          We are dedicated to empowering the next generation with essential
          skills to thrive in the ever-evolving tech landscape
        </Text>

        <div className="grid gap-6 place-self-center">
          <Text type="subparagraph" className="text-[#556987] ">
            Equipping the Next Generation with Essential Tech Skills. We provide
            hands-on training in essential tech skills to prepare the next
            generation for the future of work. Our approach is interactive and
            engaging, and our curriculum is designed to meet the needs of
            tomorrow's workforce
          </Text>

          <Link to="/trainings" className="w-40">
            <Button type="customizedBlue" text="Learn More" />
          </Link>
        </div>
      </div>
    </PageLayout>
  );
}
