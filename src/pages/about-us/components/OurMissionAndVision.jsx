import React from "react";
import aboutUsGrid from "../../../assets/AboutUs/NewImages/new-about-us-grid.png";
import PageLayout from "../../../components/Layout/PageLayout";

export default function OurMissionAndVision() {
  return (
    <PageLayout className="lg:py-20 py-10">
      <div className="grid lg:grid-cols-[43%_1fr] lg:gap-[90px] gap-10">
        <img
          src={aboutUsGrid}
          className="w-full h-full order-last lg:order-first"
        />

        <div className="grid lg:gap-24 gap-9 lg:px-10">
          {/* vision */}
          <div className="self-center grid lg:gap-2 gap-3">
            <h3 className="text-[#082B5B] lg:text-6xl text-3xl lg:font-[500] font-[700] lg:leading-[70px] leading-[40px] capitalize">
              Our Vision
            </h3>

            <div className="grid gap-4">
              <p className="text-[#23242A] lg:text-lg leading-[25px]">
                {" "}
                To promote youth empowerment and create employment via on the
                job training with a team of experts while developing products
                and providing services that will help the society and the world
                at large.
              </p>

              <p className="text-[#23242A] lg:text-lg leading-[25px]">
                We believe that technology should connect and empower people.
                We're committed to driving innovation and creating solutions
                that will shape a better future. We're at the forefront of the
                digital revolution, and we're always looking for new ways to
                make a positive impact on the world. We believe that together,
                we can build a better tomorrow for everyone
              </p>
            </div>
          </div>

          {/* mission */}
          <div className="self-center grid lg:gap-2 gap-3">
            <h3 className="text-[#082B5B] lg:text-6xl text-3xl lg:font-[500] font-[700] lg:leading-[70px] leading-[40px] capitalize">
              Our Mission
            </h3>

            <div className="grid gap-4">
              <p className="text-[#23242A] lg:text-lg leading-[25px]">
                To enhance societal development and sustainability by empowering
                youths with skills and expertise that will make them employable,
                business minded, skilful and industrious.
              </p>

              <p className="text-[#23242A] lg:text-lg leading-[25px]">
                We're driven by a desire to use our technological expertise to
                deliver solutions that exceed expectations. We work
                collaboratively with our clients to develop innovative solutions
                that drive success. We believe in a future where technology is
                used to empower and transform businesses and individuals,
                leading to a more connected and successful world.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
