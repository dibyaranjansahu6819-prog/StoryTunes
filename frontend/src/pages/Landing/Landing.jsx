import HeroSection from "./sections/HeroSection";
import FeaturesSection from "./sections/FeaturesSection";
import HowItWorksSection from "./sections/HowItWorksSection";
import StatsSection from "./sections/StatsSection";
import HighlightsSection from "./sections/HighlightsSection";
import CTASection from "./sections/CTASection";
import FooterSection from "./sections/FooterSection";

export default function Landing() {
  return (
    <main className="min-h-screen">

      <HeroSection />

      <FeaturesSection />

      <HowItWorksSection />

      <StatsSection />

      <HighlightsSection />

      <CTASection />

      <FooterSection />

    </main>
  );
}