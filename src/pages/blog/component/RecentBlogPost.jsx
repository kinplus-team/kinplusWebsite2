import PageLayout from "../../../components/Layout/PageLayout";
import RecentBlog1 from "../../../assets/Blog/Image.png";
import Arrow from "../../../assets/Blog/arrow-up-right.png";
import image3 from "../../../assets/Blog/Image (1).png";
import { Link } from "react-router-dom";
import { getRecentPosts } from "../../../services/blogServices";
import { useEffect, useState } from "react";

export async function recentPost(setRecentArticles) {
  getRecentPosts().then((response) => {
    setRecentArticles(response);
  });
}

export default function RecentBlogPost() {
  const [recentArticles, setRecentArticles] = useState([]);

  // useEffect(() => {
  //   recentPost(setRecentArticles);
  // }, []);

  return recentArticles.length > 0 ? (
    <PageLayout className="py-14">
      <h1 className="text-4xl text-[#082B5B] font-bold leading-[42px] capitalize">
        Recent blog posts
      </h1>
      <div className="grid grid-cols-[60%_1fr] gap-10 py-10">
        <div>
          <Link to={"#"} className="space-y-3">
            <img src={RecentBlog1} alt="" />

            <p className="text-[#101010] leading-5 font-bold text-base">
              1 Jan 2023
            </p>
            <div className="flex justify-between">
              <p className="text-[#1877F9] font-bold text-2xl">
                UX review presentations
              </p>
              <img className="w-[24px] h-[24px] " src={Arrow} alt="" />
            </div>

            <p className="text-lg text-[#101010]">
              How do you create compelling presentations that wow your
              colleagues and impress your managers?
            </p>
          </Link>
        </div>

        {/* sidebar */}
        <div className="flex flex-col gap-4">
          {[1, 2].map((item, index) => (
            <div key={index}>
              <Link to={"#"} className="grid grid-cols-[45%_1fr] gap-5">
                <img src={image3} alt="" />

                <div>
                  <p className="text-[#101010] font-bold text-base">
                    1 Jan 2023
                  </p>
                  <p className="text-[#1877F9] font-bold text-lg">
                    Migrating to Linear 101
                  </p>

                  <p className="text-base text-[#101010]">
                    Can you create compelling presentation now.
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  ) : (
    <div></div>
  );
}
