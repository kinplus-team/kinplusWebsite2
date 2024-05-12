import PageLayout from "../../../components/Layout/PageLayout";
import image4 from "../../../assets/Blog/white-concrete-building-1838640.png";
import Button from "../../../components/Button";
import { getFeaturedPost, getPosts } from "../../../services/blogServices";
import { useEffect, useState } from "react";

async function allArticles(setAllArticle) {
  getPosts().then((response) => {
    setAllArticle(response);
  });
}

async function featuredArticles(setFeaturedArticle) {
  getFeaturedPost().then((response) => {
    setFeaturedArticle(response);
  });
}

export default function FeaturedPost() {
  const [featuredArticle, setFeaturedArticle] = useState([]);
  const [allArticle, setAllArticle] = useState([]);

  // useEffect(() => {
  //   allArticles(setAllArticle);
  //   featuredArticles(setFeaturedArticle);
  // }, []);

  return (
    <PageLayout className="grid grid-cols-[1fr_40%] gap-10">
      {featuredArticle.length > 0 && (
        <div className="grid gap-10">
          <h1 className="text-4xl text-[#082B5B] font-bold">Featured Post</h1>
          <div className="space-y-5 border border-[#d2d2d6] p-5">
            <img src={image4} alt="" />
            <p className="text-[#4C4C4C] font-medium text-sm">1 Jan 2023</p>
            <p className="text-[#1877F9] font-bold text-2xl max-w-xl">
              The Impact of Technology on the Workplace: How Technology is
              Changing.
            </p>

            <p className="text-base text-[#101010]">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident.
            </p>

            <div className="w-[180px]">
              <Button type="customizedBlue" text="Read More" />
            </div>
          </div>
        </div>
      )}

      {allArticle.length > 0 && (
        <div className="grid gap-5">
          <h1 className="text-4xl text-[#082B5B] font-bold">All Posts</h1>

          {/* post */}
          {[1, 2, 3, 4].map((item, index) => (
            <div key={index} className="grid grid-rows-[auto_auto_1fr] gap-3">
              <p className="text-[#101010] font-medium text-base">
                Aug 23, 2021{" "}
              </p>

              <p className="text-[#101010] font-bold text-2xl">
                8 Figma design systems that you <br /> can download for free
                today.
              </p>
              <hr className="bg-white h-1  " />
            </div>
          ))}
        </div>
      )}
    </PageLayout>
  );
}
