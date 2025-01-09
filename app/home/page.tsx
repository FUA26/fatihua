import FeaturedBlogSection from '@/components/sections/FeaturedBlogSection'
import FeaturedPostSection from '@/components/sections/FeaturedPostSection'
import HeroSection from '@/components/sections/HeroSection'

export default async function Page() {
  return (
    <>
      <HeroSection />
      {/* <FeaturedPostSection /> */}
      <FeaturedBlogSection />
    </>
  )
}
