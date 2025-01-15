import SectionWorkList from "@/components/sections/worklist-section";
import SkillSection from "@/components/sections/skill-section";
import MacSticker from "@/components/sections/mac-sticker";
import AboutHero from "@/components/sections/about-hero";
import { Container } from "@/components/ui/container";

export default function About() {
  return (
    <Container>
      <div className="flex flex-col justify-center pt-16">
        <AboutHero />
        <div className="p-6">
          <h2 className="py-4 text-4xl font-bold text-foreground">
            Tech Stack.
          </h2>

          <SkillSection />
        </div>
        <div className="p-6">
          <h2 className="py-4 text-4xl font-bold text-foreground">
            Where I&apos;ve Worked.
          </h2>

          <SectionWorkList />
        </div>
        <MacSticker />
      </div>
    </Container>
  );
}
