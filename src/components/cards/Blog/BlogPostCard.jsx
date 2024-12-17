import React from "react";
import RecentBlog1 from "../../../assets/Blog/Image.webp";

import Arrow from "../../../assets/Blog/arrow-up-right (1).png";
import { Link } from "react-router-dom";
export default function BlogPostCard() {
  return (
    <div>
      <Link to={"#"} className="grid gap-3">
        <img src={RecentBlog1} alt="" className="h-[228px]" />

        <div className="grid gap-2">
          <p className="text-[#1877F9] font-bold text-base">1 Jan 2023</p>
          <div className="flex justify-between">
            <p className="text-[#101010] font-bold text-2xl">
              UX review presentations
            </p>
            <img className="w-6 h-6" src={Arrow} alt="" />
          </div>

          <p className="text-lg text-[#7e7b7b] leading-6">
            Like to know the secrets of transforming a 2-14 team into a 3x Super
            Bowl winning Dynasty?
          </p>
        </div>
      </Link>
    </div>
  );
}
