import { allProjects } from "contentlayer/generated";

import { allCoreContent } from "@/lib/contentlayer";
import { sortPosts } from "@/lib/mdx";
import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/ui/page-header";
import ProjectCard from "@/components/common/projectCard";

export default function BlogPage() {
  const posts = allCoreContent(sortPosts(allProjects));

  return (
    <Container className="pt-4 lg:pt-12">
      <PageHeader
        title="All Project"
        description="Explore my project portfolio. Get an overview of the works I have undertaken and my capabilities in various fields. "
        className="border-b border-gray-200 dark:border-gray-700"
      >
        {/* <SearchArticles
          label="Search articles"
          onChange={(e) => setSearchValue(e.target.value)}
        /> */}
      </PageHeader>
      {!posts.length ? (
        <div className="py-10">No posts found.</div>
      ) : (
        <div className="my-8 p-4 grid gap-4 grid-cols-1 md:grid-cols-2">
          {posts.map((post) => (
            <ProjectCard key={post.path} post={post} />
          ))}
        </div>
      )}
    </Container>
  );
}
