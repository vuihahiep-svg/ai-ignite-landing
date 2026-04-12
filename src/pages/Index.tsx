import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import OverviewSection from "@/components/OverviewSection";
import LegalSection from "@/components/LegalSection";
import InternationalSection from "@/components/InternationalSection";
import BenefitsSection from "@/components/BenefitsSection";
import CurriculumSection from "@/components/CurriculumSection";
import ImplementationSection from "@/components/ImplementationSection";
import AuthorSection from "@/components/AuthorSection";
import ConclusionSection from "@/components/ConclusionSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <OverviewSection />
      <LegalSection />
      <InternationalSection />
      <BenefitsSection />
      <CurriculumSection />
      <ImplementationSection />
      <AuthorSection />
      <ConclusionSection />
      <FooterSection />
    </div>
  );
};

export default Index;
