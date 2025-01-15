
import HeroSection from "@/components/sections/hero-section";
import { allBlogs, allProjects } from "contentlayer/generated";
import { allCoreContent } from "@/lib/contentlayer";
import { sortPosts } from "@/lib/mdx";
import FeaturedBlogSection from "@/components/sections/featured-blog";
import FeaturedPost from "@/components/sections/featured-post";
import AboutHero from "@/components/sections/about-hero";
import MacSticker from "@/components/sections/macSticker";
import SkillSection from "@/components/sections/skillSection";

export default async function Page() {
  const initialDisplayBlogs = allCoreContent(sortPosts(allBlogs)).slice(0, 6);
  const initialDisplayProjects = allCoreContent(sortPosts(allProjects)).slice(0, 3);

  return (
    <>
      <HeroSection />
      <AboutHero/>
      
      <SkillSection/>
      <FeaturedPost initialDisplayProjects={initialDisplayProjects}/>
      <FeaturedBlogSection initialDisplayBlogs={initialDisplayBlogs} />
      
      <MacSticker/>
    </>
  );
}
