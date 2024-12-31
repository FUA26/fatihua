import React from "react";
import { Button } from "../ui/button";
import { blog } from "@/lib/source";
import BlogCard from "../common/blogCard";
import Link from "next/link";


function FeaturedBlogSection() {
  const blogs = blog.getPages();

  return (
    <>
      <h2 className="py-4 text-4xl font-bold text-foreground">
        Featured Posts.
      </h2>
      <p className="text-justify text-base/relaxed text-foreground/70">
        Browse through my blog posts. Discover insights, stories, and
        knowledge that I share.
      </p>
      <div className="grid mt-4 p-0 lg:p-6 gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((post, i) => {
          return <BlogCard post={post.data} link={post.url} key={i} />;
        })}
      </div>
      <div className=" text-center">
        <Link href='/blog'>
          <Button variant="outline" className="my-6">
            Explore More Projects
          </Button>
        </Link>
      </div>
    </>
  );
}

export default FeaturedBlogSection;
