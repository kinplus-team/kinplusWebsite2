import PageLayout from "../../../components/Layout/PageLayout";
import Pagenation from "../../../components/Pagenation";
import BlogPostCard from "../../../components/cards/Blog/BlogPostCard";

export default function AllBlogPost() {
  return (
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
  );
}
