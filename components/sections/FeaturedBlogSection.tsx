import React from "react";
import { Button } from "../ui/button";

import Link from "next/link";
import { allBlogs } from "contentlayer/generated";
import BlogCard from "../common/blogCard";
import { sortPosts } from "@/lib/mdx";
import { allCoreContent } from "@/lib/contentlayer";

function FeaturedBlogSection() {
  const initialDisplayPosts = allCoreContent(sortPosts(allBlogs)).slice(0, 6);
  return (
    <>
      <h2 className="py-4 text-4xl font-bold text-foreground">
        Featured Posts.
      </h2>
      <p className="text-justify text-base/relaxed text-foreground/70">
        Browse through my blog posts. Discover insights, stories, and knowledge
        that I share.
      </p>
      <div className="mt-4 grid grid-cols-1 gap-4 p-0 md:grid-cols-2 lg:grid-cols-3 lg:p-6">
        {initialDisplayPosts.map((post, i) => {
          return <BlogCard post={post} key={i} />;
        })}
      </div>
      <div className=" text-center">
        <Link href="/blog">
          <Button variant="outline" className="my-6">
            Explore More Projects
          </Button>
        </Link>
      </div>
    </>
  );
}

export default FeaturedBlogSection;
