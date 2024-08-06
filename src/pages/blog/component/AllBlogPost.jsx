import PageLayout from "../../../components/Layout/PageLayout";
import Pagenation from "../../../components/Pagenation";
import BlogPostCard from "../../../components/cards/Blog/BlogPostCard";
import { getPosts } from "../../../services/blogServices";
import { useState } from "react";
import { useEffect } from "react";

async function allArticles(setAllArticle) {
  getPosts().then((response) => {
    setAllArticle(response);
  });
}

export default function AllBlogPost() {
  const [allArticle, setAllArticle] = useState([]);

  // useEffect(() => {
  //   allArticles(setAllArticle);
  // }, []);

  return (
    allArticle.length > 0 && (
      <PageLayout className="pt-24 pb-5">
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
        <div className="py-10">
          <Pagenation />
        </div>
      </PageLayout>
    )
  );
}
