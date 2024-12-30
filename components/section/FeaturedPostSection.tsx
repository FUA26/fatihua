import React from "react";
import { Button } from "../ui/button";
import { blog } from "@/lib/source";
import Link from "fumadocs-core/link";

function FeaturedPostSection() {
  const blogs = blog.getPages();
  return (
    <>
      <h2 className="py-4 text-4xl font-bold text-foreground">
        Featured Posts.
      </h2>
      <p className="text-justify text-base/relaxed text-foreground/70">
        Browse through my blog posts. Discover insights, stories, and knowledge
        that I share.
      </p>
      <div className="grid p-6 gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        {blogs.map((post) => (
          <Link
            key={post.url}
            href={post.url}
            className="flex flex-col bg-fd-card p-4 transition-colors hover:bg-fd-accent hover:text-fd-accent-foreground"
          >
            <p className="font-medium">{post.data.title}</p>
            <p className="text-sm text-fd-muted-foreground">
              {post.data.description}
            </p>

            <p className="mt-auto pt-4 text-xs text-fd-muted-foreground">
              {new Date(post.data.date ?? post.file.name).toDateString()}
            </p>
          </Link>
        ))}
      </div>
      <div className=" text-center">
        <Button variant="outline" className="my-6">
          Explore More Projects
        </Button>
      </div>
    </>
  );
}

export default FeaturedPostSection;
