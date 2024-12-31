import React from "react";
import { Button } from "../ui/button";
import { project } from "@/lib/source";
import Link from "fumadocs-core/link";
import ProjectCard from "../common/projectCard";

function FeaturedPostSection() {
  const projects = project.getPages();
  return (
    <>
      <h2 className="py-4 text-4xl font-bold text-foreground">
        Featured Projects.
      </h2>
      <p className="text-justify text-base/relaxed text-foreground/70">
        Discover a handpicked showcase of my top projects, illustrating my
        tech expertise and passion.
      </p>
      <div className="">
        {projects.map((post, i) => {
          return <ProjectCard key={i} post={post.data} link={post.url} />;
        })}
      </div>
      <div className=" text-center">
        <Link href="/project">
          <Button variant="outline" className="my-6">
            Explore More Projects
          </Button>
        </Link>
      </div>
    </>
  );
}

export default FeaturedPostSection;
