import React from "react";
import PageLayout from "../../../components/Layout/PageLayout";
import BlogPostCard from "../../../components/cards/Blog/BlogPostCard";
import Blog1 from "../../../assets/Blog/white-concrete-building-1838640.png";
import { getPost } from "../../../services/blogServices";

function getBlogPost(slug) {
  getPost(slug).then((response) => {
    console.log(response);
  });
}

export default function BlogPost() {
  getBlogPost("grid-system-for-better-design-user-interface");
  return (
    <PageLayout className="lg:pt-36 lg:pb-28 pt-28 pb-16">
      <div className="grid grid-cols-[350px_1fr] gap-10 justify-between ">
        <aside className="">
          <div className="grid gap-5">
            <h1 className="text-4xl text-[#082B5B] font-bold leading-[42px] capitalize">
              Recent blog posts
            </h1>

            <div className="grid gap-6">
              <BlogPostCard />
              <BlogPostCard />
              <BlogPostCard />
              <BlogPostCard />
              <BlogPostCard />
              <BlogPostCard />
              <BlogPostCard />
            </div>
          </div>
        </aside>
        <main className="max-w-5xl place-self-end">
          <div className="grid gap-3">
            <p className="text-[#1877F9] font-bold text-base px-2">
              Sunday , 1 Jan 2023
            </p>
            <p className="text-[#101010] font-bold text-3xl px-2 max-w-2xl">
              The Impact of Technology on the Workplace: How Technology is
              Changing
            </p>
            <img className="rounded-3xl  mb-6" src={Blog1} alt="" />
            <div className="text-xl text-[#3B3C4A]">
              Traveling is an enriching experience that opens up new horizons,
              exposes us to different cultures, and creates memories that last a
              lifetime. However, traveling can also be stressful and
              overwhelming, especially if you don't plan and prepare adequately.
              In this blog article, we'll explore tips and tricks for a
              memorable journey and how to make the most of your travels. <br />{" "}
              <br />
              One of the most rewarding aspects of traveling is immersing
              yourself in the local culture and customs. This includes trying
              local cuisine, attending cultural events and festivals, and
              interacting with locals. Learning a few phrases in the local
              language can also go a long way in making connections and showing
              respect. <br /> <br />
              <h1 className="font-bold text-2xl text-[#181A2A]">
                Research Your Destination
              </h1>
              Before embarking on your journey, take the time to research your
              destination. This includes understanding the local culture,
              customs, and laws, as well as identifying top attractions,
              restaurants, and accommodations. Doing so will help you navigate
              your destination with confidence and avoid any cultural faux pas.
              <br /> <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. In
              hendrerit gravida rutrum quisque non tellus orci ac auctor. Mi
              ipsum faucibus vitae aliquet nec ullamcorper sit amet. Aenean
              euismod elementum nisi quis eleifend quam adipiscing vitae.
              Viverra adipiscing at in tellus. <br /> <br />
              <span className="font-bold text-2xl">
                Research Your Destination
              </span>{" "}
              <br /> <br />
              Before embarking on your journey, take the time to research your
              destination. This includes understanding the local culture,
              customs, and laws, as well as identifying top attractions,
              restaurants, and accommodations. Doing so will help you navigate
              your destination with confidence and avoid any cultural faux pas.
              <br /> <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. In
              hendrerit gravida rutrum quisque non tellus orci ac auctor. Mi
              ipsum faucibus vitae aliquet nec ullamcorper sit amet. Aenean
              euismod elementum nisi quis eleifend quam adipiscing vitae.
              Viverra adipiscing at in tellus. <br /> <br />
              <span className="font-bold text-2xl">
                Research Your Destination
              </span>{" "}
              <br /> <br />
              Before embarking on your journey, take the time to research your
              destination. This includes understanding the local culture,
              customs, and laws, as well as identifying top attractions,
              restaurants, and accommodations. Doing so will help you navigate
              your destination with confidence and avoid any cultural faux pas.
              <br /> <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. In
              hendrerit gravida rutrum quisque non tellus orci ac auctor. Mi
              ipsum faucibus vitae aliquet nec ullamcorper sit amet. Aenean
              euismod elementum nisi quis eleifend quam adipiscing vitae.
              Viverra adipiscing at in tellus. <br /> <br />
              <span className="font-bold text-2xl">
                Research Your Destination
              </span>{" "}
              <br /> <br />
              Before embarking on your journey, take the time to research your
              destination. This includes understanding the local culture,
              customs, and laws, as well as identifying top attractions,
              restaurants, and accommodations. Doing so will help you navigate
              your destination with confidence and avoid any cultural faux pas.
              <br /> <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. In
              hendrerit gravida rutrum quisque non tellus orci ac auctor. Mi
              ipsum faucibus vitae aliquet nec ullamcorper sit amet. Aenean
              euismod elementum nisi quis eleifend quam adipiscing vitae.
              Viverra adipiscing at in tellus. <br /> <br />
              <span className="font-bold text-2xl">
                Research Your Destination
              </span>{" "}
              <br /> <br />
              Before embarking on your journey, take the time to research your
              destination. This includes understanding the local culture,
              customs, and laws, as well as identifying top attractions,
              restaurants, and accommodations. Doing so will help you navigate
              your destination with confidence and avoid any cultural faux pas.
              <br /> <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. In
              hendrerit gravida rutrum quisque non tellus orci ac auctor. Mi
              ipsum faucibus vitae aliquet nec ullamcorper sit amet. Aenean
              euismod elementum nisi quis eleifend quam adipiscing vitae.
              Viverra adipiscing at in tellus. <br /> <br />
              <span className="font-bold text-2xl">
                Research Your Destination
              </span>{" "}
              <br /> <br />
              Before embarking on your journey, take the time to research your
              destination. This includes understanding the local culture,
              customs, and laws, as well as identifying top attractions,
              restaurants, and accommodations. Doing so will help you navigate
              your destination with confidence and avoid any cultural faux pas.
              <br /> <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. In
              hendrerit gravida rutrum quisque non tellus orci ac auctor. Mi
              ipsum faucibus vitae aliquet nec ullamcorper sit amet. Aenean
              euismod elementum nisi quis eleifend quam adipiscing vitae.
              Viverra adipiscing at in tellus. <br /> <br />
              <span className="font-bold text-2xl">
                Research Your Destination
              </span>{" "}
              <br /> <br />
              Before embarking on your journey, take the time to research your
              destination. This includes understanding the local culture,
              customs, and laws, as well as identifying top attractions,
              restaurants, and accommodations. Doing so will help you navigate
              your destination with confidence and avoid any cultural faux pas.
              <br /> <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. In
              hendrerit gravida rutrum quisque non tellus orci ac auctor. Mi
              ipsum faucibus vitae aliquet nec ullamcorper sit amet. Aenean
              euismod elementum nisi quis eleifend quam adipiscing vitae.
              Viverra adipiscing at in tellus. <br /> <br />
            </div>
          </div>
        </main>
      </div>
    </PageLayout>
  );
}
