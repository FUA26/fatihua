import React from "react";
import { Button } from "../ui/button";

import Link from "next/link";

import ProjectCard from "../common/projectCard";
import type { CoreContent } from "@/types/data";
import type { Project } from "@/.contentlayer/generated";
import { PostCardGridView } from "../blog/post-card-grid-view";

interface FeaturedProjectSectionProps {
  initialDisplayProjects: CoreContent<Project>[];
}

function FeaturedPost({ initialDisplayProjects }: FeaturedProjectSectionProps) {
  return (
    <>
      <h2 className="py-4 text-4xl font-bold text-foreground">
        Featured Projects.
      </h2>
      <p className="text-justify text-base/relaxed text-foreground/70">
        Discover a handpicked showcase of my top projects, illustrating my tech
        expertise and passion.
      </p>
      {initialDisplayProjects.map((post, i) => {
        return <ProjectCard key={i} post={post} />;
      })}
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

export default FeaturedPost;
