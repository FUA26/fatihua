import FeaturedPostSection from "@/components/section/FeaturedPostSection";
import HeroSection from "@/components/section/HeroSection";

export default function Page(): React.ReactElement {
  return (
    <>
      <main className="container relative max-w-[1100px] px-2 py-4 lg:py-12">
        <div
          style={{
            background:
              "repeating-linear-gradient(to bottom, transparent, hsl(var(--secondary)/.2) 500px, transparent 1000px)",
          }}
        >
          <div className="relative">
            <HeroSection />
          </div>
          <FeaturedPostSection />
        </div>
      </main>
    </>
  );
}
