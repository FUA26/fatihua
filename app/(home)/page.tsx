import FeaturedBlogSection from "@/components/sections/FeaturedBlogSection";
import HeroSection from "@/components/sections/hero-section";

export default async function Page() {
  return (
    <>
      <HeroSection />
      {/* <FeaturedPostSection /> */}
      <FeaturedBlogSection />
    </>
  );
}
