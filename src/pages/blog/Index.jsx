import React from "react";
import PageLayout from "../../components/Layout/PageLayout";
import image1 from "../../assets/Blog/Group 3.png";
import image2 from "../../assets/Blog/photo-of-woman-wearing-eyeglasses-3184405.png";
import RecentBlog1 from "../../assets/Blog/Image.png";
import Arrow from "../../assets/Blog/arrow-up-right.png";
import image3 from "../../assets/Blog/Image (1).png";
import image4 from "../../assets/Blog/white-concrete-building-1838640.png";
import BlogPostCard from "../../components/cards/Blog/BlogPostCard";
import { Link } from "react-router-dom";
export default function Blog() {
  return (
    <PageLayout>
      {/* Our Blog */}
      <section>
        <div className="flex space-x-8 h-[356px] z-1  ml-12">
          <div className=" bg-white w-full h-full px-10  pt-10">
            <p className="text-lg font-medium text-[#1877F9]  mb-5">OUR BLOG</p>
            <h1 className="text-[2.6rem] text-[#082B5B] font-bold  leading-[64px] ">
              Grid system for better Design User Interface
            </h1>
          </div>
          <div className="w-full">
            <p className="text-base">
              A grid system is a design tool used to arrange content on a
              webpage. It is a series of vertical and horizontal lines that
              create a matrix of intersecting points, which can be used to align
              and organize page elements.{" "}
            </p>

            <div className="flex justify-between mt-14">
              <button className="bg-[#1877F9] hover:bg-[#1153AE] transition duration-200 ease-in-out text-white text-xl font-bold  px-4 rounded-2xl w-[180px] h-[3.854rem] ">
                Read More
              </button>
              <img className="w-[7.133rem]" src={image1} alt="" />
            </div>
          </div>
        </div>
        <div
          className="-mt-[70px]"
          style={{
            backgroundImage: `url(${image2})`,
            width: "100%",
            height: "27rem",
          }}
        ></div>
      </section>

      {/* 
Recent Blog Post */}
      <section>
        <h1 className="text-[2.6rem] text-[#082B5B] font-bold  leading-[64px] mb-4 ">
          Recent blog posts
        </h1>
        <div className="flex justify-between">
          <div className="w-[47%]">
            <Link to={"#"} className="space-y-3">
              <img src={RecentBlog1} alt="" />
              <p className="text-[#101010] font-bold text-base">1 Jan 2023</p>
              <div className="flex justify-between">
                <p className="text-[#1877F9] font-bold text-2xl">
                  UX review presentations
                </p>
                <img className="w-[1.5rem] " src={Arrow} alt="" />
              </div>
              <p className="text-lg leading-6">
                How do you create compelling presentations that wow your
                colleagues and impress your managers?
              </p>
            </Link>
          </div>
          <div className="w-[45%] space-y-10">
            <div>
              <Link to={"#"} className="flex space-x-5 ">
                <img className="w-[45%]" src={image3} alt="" />

                <div>
                  <p className="text-[#101010] font-bold text-base">
                    1 Jan 2023
                  </p>
                  <p className="text-[#1877F9] font-bold text-lg">
                    Migrating to Linear 101
                  </p>
                  <p className="text-lg leading-6 font-normal">
                    How do you create compelling presentations that wow your
                    colleagues and impress your managers?
                  </p>
                </div>
              </Link>
            </div>

            <div>
              <Link to={"#"} className="flex space-x-5 ">
                <img className="w-[45%]" src={image3} alt="" />

                <div>
                  <p className="text-[#101010] font-bold text-base">
                    1 Jan 2023
                  </p>
                  <p className="text-[#1877F9] font-bold text-lg">
                    Building your API stack
                  </p>
                  <p className="text-lg leading-6 font-normal">
                    The rise of RESTful APIs has been met by a rise in tools for
                    creating, testing, and manag...
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}

      <section className="flex justify-between">
        <div className="w-[55%] ">
          <h1 className="text-[2.6rem] text-[#082B5B] font-bold  leading-[64px] mb-4 ">
            Featured Post
          </h1>
          <div className="space-y-5 border border-[#d2d2d6] p-8">
            <img src={image4} alt="" />
            <p className="text-[#4C4C4C] font-medium text-sm">1 Jan 2023</p>
            <p className="text-[#1877F9] font-bold text-2xl">
              The Impact of Technology on the Workplace: How Technology is
              Changing.
            </p>
            <p className="text-base leading-6 text-[#101010]">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident.
            </p>
            <button className="bg-[#1877F9] hover:bg-[#1153AE] transition duration-200 ease-in-out text-white text-xl font-bold  px-4 rounded-2xl w-[180px] h-[3.854rem] ">
              Read More
            </button>
          </div>
        </div>
        <div className="w-35%">
          <h1 className="text-[2.6rem] text-[#082B5B] font-bold  leading-[64px] mb-4 ">
            All Posts
          </h1>
          <div className="space-y-4 mb-9">
            <p className="text-[#101010] font-medium text-base">
              Aug 23, 2021{" "}
            </p>
            <p className="text-[#101010] font-bold text-2xl">
              8 Figma design systems that you <br /> can download for free
              today.
            </p>
            <hr className="border-4 border-white  " />
          </div>

          <div className="space-y-4 mb-9">
            <p className="text-[#101010] font-medium text-base">
              Aug 23, 2021{" "}
            </p>
            <p className="text-[#101010] font-bold text-2xl">
              8 Figma design systems that you <br /> can download for free
              today.
            </p>
            <hr className="border-4 border-white  " />
          </div>

          <div className="space-y-4 mb-9">
            <p className="text-[#101010] font-medium text-base">
              Aug 23, 2021{" "}
            </p>
            <p className="text-[#101010] font-bold text-2xl">
              8 Figma design systems that you <br /> can download for free
              today.
            </p>
            <hr className="border-4 border-white  " />
          </div>

          <div className="space-y-4 mb-9">
            <p className="text-[#101010] font-medium text-base">
              Aug 23, 2021{" "}
            </p>
            <p className="text-[#101010] font-bold text-2xl">
              8 Figma design systems that you <br /> can download for free
              today.
            </p>
            <hr className="border-4 border-white  " />
          </div>
        </div>
      </section>

      {/* All Blogs Post */}
      <section>
        <h1 className="text-[2.6rem] text-[#082B5B] font-bold  leading-[64px] mb-4 ">
          All blog posts
        </h1>
        <div className="grid grid-cols-3 gap-8">
          <BlogPostCard />
          <BlogPostCard />
          <BlogPostCard />
          <BlogPostCard />
          <BlogPostCard />
          <BlogPostCard />
        </div>
      </section>
    </PageLayout>
  );
}
