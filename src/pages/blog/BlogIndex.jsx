import React from "react";
import Hero from "./component/HeroBlog";
import RecentBlogPost from "./component/RecentBlogPost";
import FeaturedPost from "./component/FeaturedPost";
import AllBlogPost from "./component/AllBlogPost";
import EmptySpace from "./component/EmptySpace";
import PageLayout from "../../components/Layout/PageLayout";

export default function Blog() {
  return (
    <PageLayout>
      {/* <Hero />
      <RecentBlogPost />
      <FeaturedPost />
      <AllBlogPost />
      <EmptySpace /> */}

      <div className="h-[80vh] grid items-center ">
        <h2 className="text-4xl text-center capitalize">coming soon !!!</h2>
      </div>
    </PageLayout>
  );
}
