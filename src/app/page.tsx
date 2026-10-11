import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import BenefitsSection from "@/components/BenefitsSection";
import FaqSection from "@/components/FaqSection";
import FormSection from "@/components/FormSection";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <main className="w-full">
      <Reveal>
        <HeroSection />
      </Reveal>
      <Reveal>
        <AboutSection />
      </Reveal>
      <Reveal>
        <BenefitsSection />
      </Reveal>
      <Reveal>
        <FaqSection />
      </Reveal>
      <Reveal>
        <FormSection />
      </Reveal>
    </main>
  );
}
