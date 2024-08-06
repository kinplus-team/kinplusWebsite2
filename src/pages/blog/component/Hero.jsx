import image1 from "../../../assets/Blog/Group 3.png";
import image2 from "../../../assets/Blog/photo-of-woman-wearing-eyeglasses-3184405.png";
import PageLayout from "../../../components/Layout/PageLayout";
import Button from "../../../components/Button";
import { getMostEngagedPost } from "../../../services/blogServices";
import EmptySpace from "./EmptySpace";
import { useEffect, useState } from "react";

export async function getEngagedPost(setMostEngagedPost) {
  getMostEngagedPost().then((response) => {
    setMostEngagedPost(response);
  });
}

export default function Hero() {
  const [mostEngagedPost, setMostEngagedPost] = useState([]);

  // useEffect(() => {
  //   getEngagedPost(setMostEngagedPost);
  // }, []);

  return mostEngagedPost.length > 0 ? (
    <div className="bg-[#f1f3f9]">
      <PageLayout className="absolute lg:pt-36 lg:pb-28 pt-28 pb-16 z-10 w-full">
        <div className="grid grid-cols-2 gap-8 mx-auto max-w-7xl">
          <div className=" bg-white w-full h-full py-28 px-10">
            <p className="text-xl font-medium leading-5 uppercase text-[#1877F9]">
              OUR BLOG
            </p>

            <h1 className="text-[48px] text-[#082B5B] font-bold  leading-[64px] ">
              Grid system for better Design User Interface
            </h1>
          </div>

          <div className="w-full">
            <p className="text-[#101010] text-lg leading-6 ">
              A grid system is a design tool used to arrange content on a
              webpage. It is a series of vertical and horizontal lines that
              create a matrix of intersecting points, which can be used to align
              and organize page elements.
            </p>

            <div className="grid grid-cols-[160px_1fr] items-center gap-10">
              <Button type="customizedBlue" text="Read More" />

              <img className="w-[105px] place-self-end" src={image1} alt="" />
            </div>
          </div>
        </div>
      </PageLayout>

      {/* Image  */}
      <div className="pt-96 pb-10">
        <div
          style={{
            backgroundImage: `url(${image2})`,
            width: "100%",
            height: "27rem",
          }}
        ></div>
      </div>
    </div>
  ) : (
    <div></div>
  );
}
