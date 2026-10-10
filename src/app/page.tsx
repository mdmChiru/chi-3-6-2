import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import BenefitsSection from "@/components/BenefitsSection";
import FaqSection from "@/components/FaqSection";
import FormSection from "@/components/FormSection";

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl">
      <HeroSection />
      <AboutSection />
      <BenefitsSection />
      <FaqSection />
      <FormSection />
    </main>
  );
}
