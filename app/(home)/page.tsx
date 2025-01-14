
import HeroSection from "@/components/sections/hero-section";
import { allBlogs, allProjects } from "contentlayer/generated";
import { allCoreContent } from "@/lib/contentlayer";
import { sortPosts } from "@/lib/mdx";
import FeaturedBlogSection from "@/components/sections/featured-blog";
import FeaturedPost from "@/components/sections/featured-post";

export default async function Page() {
  const initialDisplayBlogs = allCoreContent(sortPosts(allBlogs)).slice(0, 6);
  const initialDisplayProjects = allCoreContent(sortPosts(allProjects)).slice(0, 3);

  return (
    <>
      <HeroSection />
      <FeaturedPost initialDisplayProjects={initialDisplayProjects}/>
      <FeaturedBlogSection initialDisplayBlogs={initialDisplayBlogs} />
    </>
  );
}
