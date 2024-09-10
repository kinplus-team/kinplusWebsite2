import React from "react";
import aboutUsGrid from "../../../assets/AboutUs/NewImages/new-about-us-grid.webp";
import PageLayout from "../../../components/Layout/PageLayout";
import Text from "../../../components/Text";

export default function OurMissionAndVision() {
  return (
    <PageLayout>
      <div className="grid lg:grid-cols-[43%_1fr] lg:gap-[90px] gap-5">
        <div
          style={{
            backgroundImage: `url(${aboutUsGrid})`,
            backgroundPosition: "center",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
          className="h-[550px] w-full lg:h-full"
        ></div>

        <div className="grid lg:gap-24 gap-9 lg:px-10 lg:order-last order-first">
          {/* vision */}
          <div className="self-center grid lg:gap-2 gap-3">
            <Text type="heading" className="text-[#082B5B]">
              Our Vision
            </Text>

            <div className="grid gap-4">
              <Text type="subparagraph" className="text-[#556987]">
                To promote youth empowerment and create employment via on the
                job training with a team of experts while developing products
                and providing services that will help the society and the world
                at large.
              </Text>

              <Text type="subparagraph" className="text-[#556987]">
                We believe that technology should connect and empower people.
                We're committed to driving innovation and creating solutions
                that will shape a better future. We're at the forefront of the
                digital revolution, and we're always looking for new ways to
                make a positive impact on the world. We believe that together,
                we can build a better tomorrow for everyone.
              </Text>
            </div>
          </div>

          {/* mission */}
          <div className="self-center grid lg:gap-2 gap-3">
            <Text type="heading" className="text-[#082B5B] capitalize">
              Our Mission
            </Text>

            <div className="grid gap-4">
              <Text type="subparagraph" className="text-[#556987]">
                To enhance societal development and sustainability by empowering
                youths with skills and expertise that will make them employable,
                business minded, skilful and industrious.
              </Text>

              <Text type="subparagraph" className="text-[#556987]">
                We're driven by a desire to use our technological expertise to
                deliver solutions that exceed expectations. We work
                collaboratively with our clients to develop innovative solutions
                that drive success. We believe in a future where technology is
                used to empower and transform businesses and individuals,
                leading to a more connected and successful world.
              </Text>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
