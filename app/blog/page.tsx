import { allBlogs } from "contentlayer/generated";
import { ListLayout } from "@/layouts/list-layout";
import { allCoreContent } from "@/lib/contentlayer";
import { sortPosts } from "@/lib/mdx";
import { POSTS_PER_PAGE } from "@/config/post";

export default function BlogPage() {
  const posts = allCoreContent(sortPosts(allBlogs));
  const pageNumber = 1;
  const initialDisplayPosts = posts.slice(
    POSTS_PER_PAGE * (pageNumber - 1),
    POSTS_PER_PAGE * pageNumber
  );
  const pagination = {
    currentPage: pageNumber,
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
  };

  return (
    <ListLayout
      posts={posts}
      initialDisplayPosts={initialDisplayPosts}
      pagination={pagination}
      title="All posts"
    />
  );
}
