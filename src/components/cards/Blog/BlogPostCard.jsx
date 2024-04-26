import React from 'react'
import RecentBlog1 from "../../../assets/Blog/Image.png"

import Arrow from "../../../assets/Blog/arrow-up-right (1).png"
import { Link } from 'react-router-dom'
export default function BlogPostCard() {
  return (
    <div className="shadow hover:shadow-md">
        <Link to={"#"} className="space-y-3">
        <img src={RecentBlog1} alt="" />
        <p className="text-[#1877F9] font-bold text-base px-2">1 Jan 2023</p>
        <div className="flex justify-between">
            <p className="text-[#101010] font-bold text-2xl px-2">
            UX review presentations
            </p>
            <img className="w-[1.5rem] " src={Arrow} alt="" />
        </div>
        <p className="text-lg leading-6 px-2 pb-2">Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?</p>
        </Link>
    </div>
  )
}
