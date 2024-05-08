import React from "react";
import Hero from "./component/Hero";
import RecentBlogPost from "./component/RecentBlogPost";
import FeaturedPost from "./component/FeaturedPost";
import AllBlogPost from "./component/AllBlogPost";

export default function Blog() {
  return (
    <div>
      <Hero />
      <RecentBlogPost />
      <FeaturedPost />
      <AllBlogPost />
    </div>
  );
}
