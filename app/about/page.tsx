
import AboutHero from "@/components/sections/about-hero";
import MacSticker from "@/components/sections/macSticker";
import SkillSection from "@/components/sections/skillSection";
import { Container } from "@/components/ui/container";

export default async function Page() {
  return (
    <>
      <Container>
        <AboutHero />
        <SkillSection />
        <MacSticker />
      </Container>
    </>
  );
}
